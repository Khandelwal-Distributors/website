-- Add secure access token for guest orders
ALTER TABLE public.orders 
ADD COLUMN access_token UUID DEFAULT gen_random_uuid(),
ADD COLUMN customer_email_verified BOOLEAN DEFAULT false;

-- Create index for faster lookups
CREATE INDEX idx_orders_access_token ON public.orders(access_token);
CREATE INDEX idx_orders_customer_email ON public.orders(customer_email);

-- Drop the overly permissive policies
DROP POLICY IF EXISTS "Anyone can create orders" ON public.orders;
DROP POLICY IF EXISTS "Users can only view their own orders" ON public.orders;
DROP POLICY IF EXISTS "Users can update their own orders" ON public.orders;

-- Create secure policies

-- Policy 1: Allow authenticated users to create orders linked to their user_id
CREATE POLICY "Authenticated users can create their own orders" 
ON public.orders 
FOR INSERT 
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- Policy 2: Allow anonymous users to create guest orders (user_id must be NULL)
CREATE POLICY "Anonymous users can create guest orders" 
ON public.orders 
FOR INSERT 
TO anon
WITH CHECK (user_id IS NULL);

-- Policy 3: Authenticated users can view their own orders
CREATE POLICY "Users can view their own orders" 
ON public.orders 
FOR SELECT 
TO authenticated
USING (auth.uid() = user_id);

-- Policy 4: Secure guest order access via access token and email verification
-- This allows access only with correct token + email combination
CREATE POLICY "Guest order access via token and email" 
ON public.orders 
FOR SELECT 
TO anon
USING (
  user_id IS NULL 
  AND access_token IS NOT NULL 
  AND current_setting('app.order_access_token', true) = access_token::text
  AND current_setting('app.customer_email', true) = customer_email
);

-- Policy 5: Authenticated users can update their own orders (limited updates)
CREATE POLICY "Users can update their own orders" 
ON public.orders 
FOR UPDATE 
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- Policy 6: No direct updates allowed for guest orders (must go through secure functions)
-- Guest orders should only be updated via admin functions or secure edge functions

-- Create a secure function for guest order access
CREATE OR REPLACE FUNCTION public.get_guest_order(
  p_access_token UUID,
  p_customer_email TEXT
)
RETURNS SETOF public.orders
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Verify the token and email combination
  RETURN QUERY
  SELECT o.*
  FROM public.orders o
  WHERE o.access_token = p_access_token
    AND o.customer_email = p_customer_email
    AND o.user_id IS NULL;
END;
$$;

-- Grant execute permission to anonymous users for the secure function
GRANT EXECUTE ON FUNCTION public.get_guest_order(UUID, TEXT) TO anon;

-- Create function to generate secure order access URLs
CREATE OR REPLACE FUNCTION public.generate_order_access_url(order_id UUID)
RETURNS TEXT
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  order_record public.orders;
BEGIN
  -- Get the order details
  SELECT * INTO order_record
  FROM public.orders
  WHERE id = order_id;
  
  -- Return access URL with token (for email notifications)
  IF order_record.access_token IS NOT NULL THEN
    RETURN format('/orders/guest?token=%s&email=%s', 
                  order_record.access_token, 
                  encode(order_record.customer_email::bytea, 'base64'));
  END IF;
  
  RETURN NULL;
END;
$$;
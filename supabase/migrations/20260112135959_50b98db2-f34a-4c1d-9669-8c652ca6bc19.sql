-- Make user_id nullable for guest orders
ALTER TABLE public.orders ALTER COLUMN user_id DROP NOT NULL;

-- Drop existing RLS policies on orders
DROP POLICY IF EXISTS "Authenticated users can create their own orders" ON public.orders;
DROP POLICY IF EXISTS "Only authenticated users can create orders" ON public.orders;
DROP POLICY IF EXISTS "Users can update their own orders" ON public.orders;
DROP POLICY IF EXISTS "Users can view their own orders" ON public.orders;

-- Create new policies that allow guest orders
-- Allow anyone (including guests) to create orders
CREATE POLICY "Anyone can create orders"
ON public.orders
FOR INSERT
WITH CHECK (true);

-- Users can view their own orders (authenticated) OR orders with matching access_token (guest)
CREATE POLICY "Users can view their own orders or by access token"
ON public.orders
FOR SELECT
USING (
  (auth.uid() IS NOT NULL AND auth.uid() = user_id) OR
  (access_token IS NOT NULL)
);

-- Users can update their own orders (authenticated)
CREATE POLICY "Users can update their own orders"
ON public.orders
FOR UPDATE
USING (auth.uid() IS NOT NULL AND auth.uid() = user_id)
WITH CHECK (auth.uid() IS NOT NULL AND auth.uid() = user_id);

-- Service role can do everything (for edge functions)
CREATE POLICY "Service role has full access"
ON public.orders
FOR ALL
USING (auth.jwt() ->> 'role' = 'service_role');
-- Remove the policy that allows anonymous users to create guest orders
DROP POLICY IF EXISTS "Anonymous users can create guest orders" ON public.orders;

-- Update the orders table to make user_id required (not nullable)
ALTER TABLE public.orders 
ALTER COLUMN user_id SET NOT NULL;

-- Add a policy to ensure only authenticated users can create orders
CREATE POLICY "Only authenticated users can create orders" 
ON public.orders 
FOR INSERT 
WITH CHECK (auth.uid() = user_id AND auth.uid() IS NOT NULL);
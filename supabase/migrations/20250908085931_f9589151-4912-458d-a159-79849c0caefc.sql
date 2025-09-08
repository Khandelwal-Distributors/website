-- Fix critical security vulnerability in orders table
-- Remove the dangerous RLS policy that allows unauthenticated access

-- Drop the existing insecure policy
DROP POLICY IF EXISTS "Users can view their own orders" ON public.orders;

-- Create a secure policy that only allows users to view their own orders
-- This ensures only authenticated users can see orders that belong to them
CREATE POLICY "Users can only view their own orders" 
ON public.orders 
FOR SELECT 
USING (auth.uid() = user_id AND auth.uid() IS NOT NULL);

-- Update the existing update policy to be more restrictive
DROP POLICY IF EXISTS "Users can update their own orders" ON public.orders;

CREATE POLICY "Users can update their own orders" 
ON public.orders 
FOR UPDATE 
USING (auth.uid() = user_id AND auth.uid() IS NOT NULL);
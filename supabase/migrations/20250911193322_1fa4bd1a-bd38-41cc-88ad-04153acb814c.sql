-- Fix critical security vulnerability: Remove public access to customer personal data in orders
-- This policy currently allows anyone to view orders with NULL user_id, exposing sensitive customer information
DROP POLICY IF EXISTS "Users can view their own orders or anonymous orders" ON public.orders;

-- Create secure policy that only allows authenticated users to view their own orders
CREATE POLICY "Users can only view their own orders" 
ON public.orders 
FOR SELECT 
USING (auth.uid() = user_id AND auth.uid() IS NOT NULL);

-- Note: Anonymous orders (user_id IS NULL) will no longer be publicly viewable
-- This prevents exposure of customer PII (names, emails, phone numbers, addresses)
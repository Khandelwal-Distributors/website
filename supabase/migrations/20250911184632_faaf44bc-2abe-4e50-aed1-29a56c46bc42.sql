-- Update RLS policy to allow viewing anonymous orders (user_id is null)
DROP POLICY IF EXISTS "Users can only view their own orders" ON public.orders;

CREATE POLICY "Users can view their own orders or anonymous orders" 
ON public.orders 
FOR SELECT 
USING (
  user_id IS NULL OR 
  (auth.uid() = user_id AND auth.uid() IS NOT NULL)
);
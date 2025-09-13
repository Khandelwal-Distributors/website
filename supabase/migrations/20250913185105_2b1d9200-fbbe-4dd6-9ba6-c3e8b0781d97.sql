-- Ensure RLS is enabled (safe if already enabled)
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

-- Drop anonymous SELECT policy to eliminate any direct anon access
DROP POLICY IF EXISTS "Guest order access via token and email" ON public.orders;
DROP POLICY IF EXISTS "Guest order access requires token verification" ON public.orders;

-- Keep INSERT policies (anon can still create guest orders), and authenticated SELECT/UPDATE policies remain

-- Note: Guest access should use the SECURITY DEFINER function only
-- Function already exists: public.get_guest_order(UUID, TEXT)
-- Exec granted to anon in previous step
-- Add in_stock column to products table
-- This controls whether the Buy Now button is shown (true = buy button visible, false = "Out of Stock" shown)
-- is_available continues to control whether the product appears in the shop at all

ALTER TABLE public.products
  ADD COLUMN IF NOT EXISTS in_stock BOOLEAN NOT NULL DEFAULT true;

-- All existing products are in stock by default
UPDATE public.products SET in_stock = true WHERE in_stock IS NULL;

CREATE INDEX IF NOT EXISTS idx_products_in_stock ON public.products(in_stock);

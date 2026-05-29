-- Ensure all existing products are marked as 'in stock' (is_available = true) by default
-- This sets any NULL values to true and adds a NOT NULL constraint with default

UPDATE public.products
SET is_available = true
WHERE is_available IS NULL;

ALTER TABLE public.products
  ALTER COLUMN is_available SET NOT NULL,
  ALTER COLUMN is_available SET DEFAULT true;

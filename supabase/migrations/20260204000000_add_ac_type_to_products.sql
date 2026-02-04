-- Add ac_type column to products table
ALTER TABLE public.products 
ADD COLUMN ac_type TEXT DEFAULT 'split' 
CHECK (ac_type IN ('split', 'window', 'cassette', 'ductable', 'tower'));

-- Update existing products to have 'split' type
UPDATE public.products SET ac_type = 'split' WHERE ac_type IS NULL;

-- Make the column NOT NULL after setting defaults
ALTER TABLE public.products 
ALTER COLUMN ac_type SET NOT NULL;

-- Add index for better query performance
CREATE INDEX idx_products_ac_type ON public.products(ac_type);

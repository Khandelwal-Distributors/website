-- Update brands table to match homepage brands exactly

-- First, deactivate brands that are not on homepage
UPDATE public.brands 
SET is_active = false 
WHERE name IN ('LG', 'Samsung', 'Blue Star', 'Hitachi', 'Panasonic', 'Whirlpool');

-- Update existing brands with new descriptions to match homepage
UPDATE public.brands 
SET description = 'Premium VRV Systems', sort_order = 1
WHERE name = 'Daikin';

UPDATE public.brands 
SET description = 'Reliable Cooling', sort_order = 3
WHERE name = 'Carrier';

UPDATE public.brands 
SET description = 'India''s No.1 AC', sort_order = 4
WHERE name = 'Voltas';

UPDATE public.brands 
SET description = 'India''s Most Economical', sort_order = 7
WHERE name = 'Godrej';

-- Add new brands from homepage
INSERT INTO public.brands (name, description, sort_order, is_active) VALUES
('Mitsubishi Heavy', 'Heavy Duty Commercial', 2, true),
('Amstrad', 'Quality + Competitive Price', 5, true),
('Midea', 'Economical & Smart', 6, true),
('Cruise', 'Portable & Heavy Duty', 8, true)
ON CONFLICT (name) DO UPDATE SET
  description = EXCLUDED.description,
  sort_order = EXCLUDED.sort_order,
  is_active = EXCLUDED.is_active;
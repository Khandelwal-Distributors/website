-- Create products table for AC inventory
CREATE TABLE public.products (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  model TEXT NOT NULL,
  series TEXT,
  brand TEXT NOT NULL,
  tonnage DECIMAL(3,1) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  original_price DECIMAL(10,2),
  discount_percent INTEGER DEFAULT 0,
  star_rating DECIMAL(2,1) DEFAULT 0,
  review_count INTEGER DEFAULT 0,
  features TEXT[] DEFAULT '{}',
  description TEXT,
  specifications JSONB DEFAULT '{}',
  image_urls TEXT[] DEFAULT '{}',
  is_available BOOLEAN DEFAULT true,
  is_featured BOOLEAN DEFAULT false,
  energy_rating TEXT,
  warranty_years INTEGER DEFAULT 1,
  slug TEXT NOT NULL UNIQUE,
  seo_title TEXT,
  seo_description TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- Create orders table for tracking purchases
CREATE TABLE public.orders (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  product_id UUID NOT NULL REFERENCES public.products(id) ON DELETE RESTRICT,
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  customer_address TEXT NOT NULL,
  customer_city TEXT NOT NULL,
  customer_state TEXT,
  customer_pincode TEXT NOT NULL,
  quantity INTEGER DEFAULT 1,
  total_amount DECIMAL(10,2) NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled')),
  order_date TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  delivery_date TIMESTAMP WITH TIME ZONE,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- Create brands table for brand management
CREATE TABLE public.brands (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  logo_url TEXT,
  description TEXT,
  is_active BOOLEAN DEFAULT true,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.brands ENABLE ROW LEVEL SECURITY;

-- Create policies for products (publicly readable)
CREATE POLICY "Products are viewable by everyone" 
ON public.products 
FOR SELECT 
USING (true);

CREATE POLICY "Only authenticated users can insert products" 
ON public.products 
FOR INSERT 
WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Only authenticated users can update products" 
ON public.products 
FOR UPDATE 
USING (auth.uid() IS NOT NULL);

-- Create policies for brands (publicly readable)
CREATE POLICY "Brands are viewable by everyone" 
ON public.brands 
FOR SELECT 
USING (true);

CREATE POLICY "Only authenticated users can manage brands" 
ON public.brands 
FOR ALL 
USING (auth.uid() IS NOT NULL);

-- Create policies for orders
CREATE POLICY "Users can view their own orders" 
ON public.orders 
FOR SELECT 
USING (auth.uid() = user_id OR auth.uid() IS NULL);

CREATE POLICY "Anyone can create orders" 
ON public.orders 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Users can update their own orders" 
ON public.orders 
FOR UPDATE 
USING (auth.uid() = user_id OR auth.uid() IS NOT NULL);

-- Create indexes for better performance
CREATE INDEX idx_products_brand ON public.products(brand);
CREATE INDEX idx_products_tonnage ON public.products(tonnage);
CREATE INDEX idx_products_price ON public.products(price);
CREATE INDEX idx_products_slug ON public.products(slug);
CREATE INDEX idx_products_available ON public.products(is_available);
CREATE INDEX idx_products_featured ON public.products(is_featured);
CREATE INDEX idx_orders_user_id ON public.orders(user_id);
CREATE INDEX idx_orders_status ON public.orders(status);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_products_updated_at
  BEFORE UPDATE ON public.products
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_orders_updated_at
  BEFORE UPDATE ON public.orders
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample brands
INSERT INTO public.brands (name, description, is_active, sort_order) VALUES
('Daikin', 'Japanese multinational air conditioning manufacturing company', true, 1),
('Carrier', 'American heating, ventilation, and air conditioning company', true, 2),
('LG', 'South Korean multinational electronics company', true, 3),
('Samsung', 'South Korean multinational conglomerate', true, 4),
('Voltas', 'Indian home appliance brand', true, 5),
('Blue Star', 'Indian air conditioning and refrigeration company', true, 6),
('Hitachi', 'Japanese multinational conglomerate', true, 7),
('Panasonic', 'Japanese multinational electronics corporation', true, 8),
('Godrej', 'Indian conglomerate company', true, 9),
('Whirlpool', 'American multinational manufacturer', true, 10);

-- Insert sample products
INSERT INTO public.products (
  name, model, series, brand, tonnage, price, original_price, discount_percent,
  star_rating, review_count, features, description, specifications,
  image_urls, energy_rating, warranty_years, slug, seo_title, seo_description
) VALUES
(
  'Daikin 1.5 Ton 3 Star Inverter Split AC',
  'FTKP50TV',
  'Inverter Series',
  'Daikin',
  1.5,
  45990.00,
  52990.00,
  13,
  4.4,
  127,
  ARRAY['Inverter Technology', 'Copper Condenser', 'Anti-Viral Filter', 'Wi-Fi Ready', 'Stabilizer Free Operation'],
  'Experience superior cooling with Daikin''s advanced inverter technology and energy-efficient performance.',
  '{"cooling_capacity": "5200W", "power_consumption": "1580W", "refrigerant": "R32", "noise_level": "43dB"}',
  ARRAY['/api/placeholder/400/300', '/api/placeholder/400/300'],
  '3 Star',
  5,
  'daikin-1-5-ton-3-star-inverter-split-ac-ftkp50tv',
  'Daikin 1.5 Ton 3 Star Inverter Split AC FTKP50TV - Best Price',
  'Buy Daikin 1.5 Ton 3 Star Inverter Split AC with copper condenser, anti-viral filter, and Wi-Fi connectivity. Free installation and warranty.'
),
(
  'Carrier 1 Ton 5 Star Inverter Split AC',
  'CAI12EK5R39F0',
  'Esko Neo Series',
  'Carrier',
  1.0,
  38990.00,
  44990.00,
  13,
  4.3,
  89,
  ARRAY['5 Star Energy Rating', 'Dual Filtration', 'Auto Cleanser', 'Copper Condenser', 'HD Filter'],
  'Carrier''s premium 5-star AC with dual filtration technology for pure and efficient cooling.',
  '{"cooling_capacity": "3500W", "power_consumption": "980W", "refrigerant": "R32", "noise_level": "42dB"}',
  ARRAY['/api/placeholder/400/300', '/api/placeholder/400/300'],
  '5 Star',
  3,
  'carrier-1-ton-5-star-inverter-split-ac-cai12ek5r39f0',
  'Carrier 1 Ton 5 Star Inverter Split AC - Energy Efficient Cooling',
  'Purchase Carrier 1 Ton 5 Star Inverter Split AC with dual filtration, auto cleanser, and copper condenser for maximum energy savings.'
),
(
  'LG 2 Ton 4 Star Inverter Split AC',
  'PS-Q24YNZE',
  'Dual Cool Series',
  'LG',
  2.0,
  58990.00,
  65990.00,
  11,
  4.2,
  156,
  ARRAY['Dual Inverter Technology', '4-in-1 Convertible Cooling', 'Ocean Black Protection', 'Wi-Fi Connect', 'Voice Control'],
  'LG''s innovative dual inverter technology provides faster cooling with significant energy savings.',
  '{"cooling_capacity": "6800W", "power_consumption": "1950W", "refrigerant": "R32", "noise_level": "44dB"}',
  ARRAY['/api/placeholder/400/300', '/api/placeholder/400/300'],
  '4 Star',
  3,
  'lg-2-ton-4-star-inverter-split-ac-ps-q24ynze',
  'LG 2 Ton 4 Star Dual Inverter Split AC - Smart Cooling Solution',
  'Buy LG 2 Ton 4 Star Dual Inverter Split AC with convertible cooling, voice control, and Wi-Fi connectivity for smart home integration.'
);
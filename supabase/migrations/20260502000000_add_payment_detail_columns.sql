-- Add detailed payment tracking columns to orders table
ALTER TABLE public.orders
ADD COLUMN IF NOT EXISTS cf_payment_id TEXT,
ADD COLUMN IF NOT EXISTS bank_reference TEXT,
ADD COLUMN IF NOT EXISTS payment_time TIMESTAMP WITH TIME ZONE,
ADD COLUMN IF NOT EXISTS payment_details JSONB;

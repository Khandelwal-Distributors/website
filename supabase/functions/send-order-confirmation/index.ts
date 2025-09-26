import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { orderId, customerEmail } = await req.json();
    
    if (!orderId || !customerEmail) {
      throw new Error('Missing required parameters: orderId or customerEmail');
    }

    // Create Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Fetch order details with access token
    const { data: order, error: orderError } = await supabase
      .from('orders')
      .select(`
        *,
        products (name, model, brand)
      `)
      .eq('id', orderId)
      .eq('customer_email', customerEmail)
      .single();

    if (orderError || !order) {
      throw new Error('Order not found or access denied');
    }

    // Generate secure order access URL
    const { data: accessUrl, error: urlError } = await supabase
      .rpc('generate_order_access_url', { order_id: orderId });

    if (urlError) {
      console.error('Error generating access URL:', urlError);
    }

    // In a real implementation, you would send an email here
    // For now, we'll just log the confirmation details
    console.log('Order confirmation details:', {
      orderNumber: order.id.slice(-8).toUpperCase(),
      customerName: order.customer_name,
      customerEmail: order.customer_email,
      productName: order.products?.name,
      totalAmount: order.total_amount,
      accessUrl: accessUrl ? `${req.headers.get('origin')}${accessUrl}` : null,
      accessToken: order.access_token
    });

    return new Response(JSON.stringify({
      success: true,
      message: 'Order confirmation processed',
      orderNumber: order.id.slice(-8).toUpperCase(),
      accessUrl: accessUrl ? `${req.headers.get('origin')}${accessUrl}` : null
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error: any) {
    console.error('Error in send-order-confirmation function:', error);
    return new Response(JSON.stringify({ 
      error: error.message || 'Internal server error'
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
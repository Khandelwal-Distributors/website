import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const CASHFREE_CLIENT_ID = Deno.env.get('CASHFREE_CLIENT_ID');
const CASHFREE_CLIENT_SECRET = Deno.env.get('CASHFREE_CLIENT_SECRET');
const CASHFREE_BASE_URL = 'https://sandbox.cashfree.com/pg'; // Change to 'https://api.cashfree.com/pg' for production

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('Creating payment order...');
    
    const { orderData, customerData } = await req.json();
    
    console.log('Order data:', orderData);
    console.log('Customer data:', customerData);

    if (!CASHFREE_CLIENT_ID || !CASHFREE_CLIENT_SECRET) {
      throw new Error('Cashfree credentials not configured');
    }

    // Create Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Create order in database first
    const { data: order, error: orderError } = await supabase
      .from('orders')
      .insert({
        ...orderData,
        status: 'pending',
        payment_status: 'pending',
        access_token: crypto.randomUUID() // Generate secure access token for all orders
      })
      .select()
      .single();

    if (orderError) {
      console.error('Database error:', orderError);
      throw new Error('Failed to create order in database');
    }

    console.log('Order created in database:', order.id);

    // Generate unique order ID for Cashfree
    const cashfreeOrderId = `order_${order.id}_${Date.now()}`;

    // Create payment order with Cashfree
    const paymentPayload = {
      order_id: cashfreeOrderId,
      order_amount: orderData.total_amount,
      order_currency: 'INR',
      customer_details: {
        customer_id: `customer_${order.id}`,
        customer_name: customerData.customer_name,
        customer_email: customerData.customer_email,
        customer_phone: customerData.customer_phone,
      },
      order_meta: {
        return_url: `${req.headers.get('origin')}/payment-success?order_id=${order.id}`,
        notify_url: `${req.headers.get('origin')}/api/payment-webhook`,
      },
    };

    console.log('Creating Cashfree order with payload:', paymentPayload);

    const cashfreeResponse = await fetch(`${CASHFREE_BASE_URL}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Client-Id': CASHFREE_CLIENT_ID,
        'X-Client-Secret': CASHFREE_CLIENT_SECRET,
        'x-api-version': '2023-08-01',
      },
      body: JSON.stringify(paymentPayload),
    });

    const cashfreeData = await cashfreeResponse.json();
    console.log('Cashfree response:', cashfreeData);

    if (!cashfreeResponse.ok) {
      console.error('Cashfree API error:', cashfreeData);
      throw new Error(`Cashfree API error: ${cashfreeData.message || 'Unknown error'}`);
    }

    // Update order with Cashfree order ID
    await supabase
      .from('orders')
      .update({ cashfree_order_id: cashfreeOrderId })
      .eq('id', order.id);

    return new Response(JSON.stringify({
      payment_session_id: cashfreeData.payment_session_id,
      order_id: cashfreeOrderId,
      db_order_id: order.id,
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in create-payment function:', error);
    return new Response(JSON.stringify({ 
      error: error.message || 'Internal server error'
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
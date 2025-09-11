import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const CASHFREE_CLIENT_ID = Deno.env.get('CASHFREE_CLIENT_ID');
const CASHFREE_CLIENT_SECRET = Deno.env.get('CASHFREE_CLIENT_SECRET');
const CASHFREE_BASE_URL = 'https://sandbox.cashfree.com/pg'; // Change to production when going live

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { dbOrderId } = await req.json();
    if (!dbOrderId) {
      return new Response(JSON.stringify({ error: 'dbOrderId is required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    if (!CASHFREE_CLIENT_ID || !CASHFREE_CLIENT_SECRET) {
      throw new Error('Cashfree credentials not configured');
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Fetch the order to get Cashfree Order ID
    const { data: order, error: orderError } = await supabase
      .from('orders')
      .select('id, cashfree_order_id')
      .eq('id', dbOrderId)
      .maybeSingle();

    if (orderError || !order) {
      throw new Error('Order not found');
    }

    if (!order.cashfree_order_id) {
      throw new Error('Cashfree order id missing for this order');
    }

    // Verify order status with Cashfree
    const response = await fetch(`${CASHFREE_BASE_URL}/orders/${order.cashfree_order_id}`, {
      method: 'GET',
      headers: {
        'X-Client-Id': CASHFREE_CLIENT_ID,
        'X-Client-Secret': CASHFREE_CLIENT_SECRET,
        'x-api-version': '2023-08-01',
      },
    });

    const data = await response.json();
    if (!response.ok) {
      console.error('Cashfree verify API error:', data);
      throw new Error(data.message || 'Failed to verify order with Cashfree');
    }

    const order_status = data.order_status || data.status || 'UNKNOWN';

    // Map statuses
    let payment_status = 'pending';
    let app_status = 'pending';
    if (order_status === 'PAID') {
      payment_status = 'completed';
      app_status = 'confirmed';
    } else if (['CANCELLED', 'FAILED', 'EXPIRED', 'TIMED_OUT'].includes(order_status)) {
      payment_status = 'cancelled';
      app_status = 'cancelled';
    }

    // Update order statuses
    await supabase
      .from('orders')
      .update({ payment_status, status: app_status })
      .eq('id', dbOrderId);

    return new Response(JSON.stringify({ order_status, payment_status, app_status }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in verify-payment function:', error);
    return new Response(JSON.stringify({ error: error.message || 'Internal server error' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface WelcomeEmailRequest {
  email: string;
  name: string;
  tempPassword: string;
  orderId: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, name, tempPassword, orderId }: WelcomeEmailRequest = await req.json();

    console.log(`Sending welcome email to ${email} for order ${orderId}`);

    // For now, just log the details - you can integrate with email service later
    const emailContent = {
      to: email,
      subject: "Welcome to Khandelwal Distributors - Your Order Confirmation",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #2563eb;">Welcome to Khandelwal Distributors!</h1>
          
          <p>Dear ${name},</p>
          
          <p>Thank you for your recent purchase! We've created an account for you to track your orders and manage your preferences.</p>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Your Account Details:</h3>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Temporary Password:</strong> <code style="background-color: #e5e7eb; padding: 4px 8px; border-radius: 4px;">${tempPassword}</code></p>
            <p><strong>Order ID:</strong> #${orderId}</p>
          </div>
          
          <div style="background-color: #fef3c7; padding: 15px; border-radius: 8px; border-left: 4px solid #f59e0b;">
            <p style="margin: 0;"><strong>Important:</strong> Please change your password after your first login for security.</p>
          </div>
          
          <h3>What's Next?</h3>
          <ul>
            <li>Our team will contact you within 2-4 hours to confirm your order</li>
            <li>We'll schedule a convenient installation time</li>
            <li>You can log in to track your order status</li>
          </ul>
          
          <div style="margin: 30px 0; text-align: center;">
            <a href="${Deno.env.get('SITE_URL') || 'https://www.khandelwaldistributors.com'}/auth" 
               style="background-color: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
              Login to Your Account
            </a>
          </div>
          
          <p>If you have any questions, feel free to contact us at +91 9429693410 or via WhatsApp.</p>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; font-size: 14px;">
            Best regards,<br>
            Khandelwal Distributors Team<br>
            Your trusted AC partner
          </p>
        </div>
      `
    };

    console.log('Welcome email content prepared:', emailContent);

    // Return success response
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Welcome email prepared',
        emailContent 
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error('Error in send-welcome-email function:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      }
    );
  }
};

serve(handler);
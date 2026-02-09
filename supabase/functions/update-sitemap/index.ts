import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
    if (req.method === 'OPTIONS') {
        return new Response('ok', { headers: corsHeaders })
    }

    try {
        const supabaseClient = createClient(
            Deno.env.get('SUPABASE_URL') ?? '',
            Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
        )

        // Fetch all available shop products
        const { data: products, error: productsError } = await supabaseClient
            .from('products')
            .select('slug, updated_at')
            .eq('is_available', true)
            .order('updated_at', { ascending: false })

        if (productsError) throw productsError

        // Format date as YYYY-MM-DD
        const formatDate = (dateString: string) => {
            const date = new Date(dateString)
            return date.toISOString().split('T')[0]
        }

        // Generate sitemap XML with exact structure from current sitemap
        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Home Page -->
  <url>
    <loc>https://www.khandelwaldistributors.com/</loc>
    <lastmod>${formatDate(new Date().toISOString())}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  
  <!-- Main Pages -->
  <url>
    <loc>https://www.khandelwaldistributors.com/products</loc>
    <lastmod>${formatDate(new Date().toISOString())}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <url>
    <loc>https://www.khandelwaldistributors.com/shop</loc>
    <lastmod>${formatDate(new Date().toISOString())}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  
  <url>
    <loc>https://www.khandelwaldistributors.com/projects</loc>
    <lastmod>${formatDate(new Date().toISOString())}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- Product Category Pages -->
  <url>
    <loc>https://www.khandelwaldistributors.com/products/inverter-split-ac</loc>
    <lastmod>${formatDate(new Date().toISOString())}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://www.khandelwaldistributors.com/products/non-inverter-split-ac</loc>
    <lastmod>${formatDate(new Date().toISOString())}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://www.khandelwaldistributors.com/products/cassette-ac</loc>
    <lastmod>${formatDate(new Date().toISOString())}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://www.khandelwaldistributors.com/products/floor-standing-ac</loc>
    <lastmod>${formatDate(new Date().toISOString())}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <url>
    <loc>https://www.khandelwaldistributors.com/products/window-ac</loc>
    <lastmod>${formatDate(new Date().toISOString())}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://www.khandelwaldistributors.com/products/portable-ac</loc>
    <lastmod>${formatDate(new Date().toISOString())}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <url>
    <loc>https://www.khandelwaldistributors.com/products/water-cooler</loc>
    <lastmod>${formatDate(new Date().toISOString())}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <url>
    <loc>https://www.khandelwaldistributors.com/products/alkaline-ro</loc>
    <lastmod>${formatDate(new Date().toISOString())}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <url>
    <loc>https://www.khandelwaldistributors.com/products/solar-water-heater</loc>
    <lastmod>${formatDate(new Date().toISOString())}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <url>
    <loc>https://www.khandelwaldistributors.com/products/ventilation-hrv</loc>
    <lastmod>${formatDate(new Date().toISOString())}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <url>
    <loc>https://www.khandelwaldistributors.com/products/air-purifier</loc>
    <lastmod>${formatDate(new Date().toISOString())}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <url>
    <loc>https://www.khandelwaldistributors.com/products/vrv-system</loc>
    <lastmod>${formatDate(new Date().toISOString())}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://www.khandelwaldistributors.com/products/chiller-system</loc>
    <lastmod>${formatDate(new Date().toISOString())}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <url>
    <loc>https://www.khandelwaldistributors.com/products/heat-pump</loc>
    <lastmod>${formatDate(new Date().toISOString())}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <url>
    <loc>https://www.khandelwaldistributors.com/products/ductable-ac</loc>
    <lastmod>${formatDate(new Date().toISOString())}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://www.khandelwaldistributors.com/products/cold-room</loc>
    <lastmod>${formatDate(new Date().toISOString())}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <url>
    <loc>https://www.khandelwaldistributors.com/products/ahu-system</loc>
    <lastmod>${formatDate(new Date().toISOString())}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <url>
    <loc>https://www.khandelwaldistributors.com/products/deep-freezers</loc>
    <lastmod>${formatDate(new Date().toISOString())}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>

  <url>
    <loc>https://www.khandelwaldistributors.com/products/modular-ot</loc>
    <lastmod>${formatDate(new Date().toISOString())}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <!-- Brand Pages -->
  <url>
    <loc>https://www.khandelwaldistributors.com/brands/daikin</loc>
    <lastmod>${formatDate(new Date().toISOString())}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <url>
    <loc>https://www.khandelwaldistributors.com/brands/carrier</loc>
    <lastmod>${formatDate(new Date().toISOString())}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://www.khandelwaldistributors.com/brands/mitsubishi-heavy</loc>
    <lastmod>${formatDate(new Date().toISOString())}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://www.khandelwaldistributors.com/brands/voltas</loc>
    <lastmod>${formatDate(new Date().toISOString())}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://www.khandelwaldistributors.com/brands/godrej</loc>
    <lastmod>${formatDate(new Date().toISOString())}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <url>
    <loc>https://www.khandelwaldistributors.com/brands/midea</loc>
    <lastmod>${formatDate(new Date().toISOString())}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <url>
    <loc>https://www.khandelwaldistributors.com/brands/amstrad</loc>
    <lastmod>${formatDate(new Date().toISOString())}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <url>
    <loc>https://www.khandelwaldistributors.com/brands/cruise</loc>
    <lastmod>${formatDate(new Date().toISOString())}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <!-- Shop Products -->${products?.map((product: any) => {
            const lastmod = product.updated_at ? formatDate(product.updated_at) : formatDate(new Date().toISOString())
            return `
  <url>
    <loc>https://www.khandelwaldistributors.com/product/${product.slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`
        }).join('')}

  <!-- Blogs Section -->
  <url>
    <loc>https://www.khandelwaldistributors.com/blogs</loc>
    <lastmod>${formatDate(new Date().toISOString())}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <url>
    <loc>https://www.khandelwaldistributors.com/blogs/vrv-systems-india-energy-efficiency</loc>
    <lastmod>2025-11-08</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://www.khandelwaldistributors.com/blogs/heat-pumps-india-comprehensive-guide</loc>
    <lastmod>2025-11-09</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://www.khandelwaldistributors.com/blogs/cold-rooms-india-complete-guide</loc>
    <lastmod>2025-11-10</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://www.khandelwaldistributors.com/blogs/modular-operating-theatre-ot-guide</loc>
    <lastmod>2025-11-11</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://www.khandelwaldistributors.com/blogs/alkaline-water-purifier-india-guide</loc>
    <lastmod>2025-11-12</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <url>
    <loc>https://www.khandelwaldistributors.com/blogs/ahu-tfa-hrv-differences-ventilation-guide</loc>
    <lastmod>2025-11-13</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <!-- Privacy Policy -->
  <url>
    <loc>https://www.khandelwaldistributors.com/privacy-policy</loc>
    <lastmod>${formatDate(new Date().toISOString())}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>`

        return new Response(sitemap, {
            headers: {
                ...corsHeaders,
                'Content-Type': 'application/xml',
            },
        })
    } catch (error: any) {
        console.error('Error generating sitemap:', error)
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        })
    }
})

/**
 * Post-build script: generates per-route index.html files with baked-in meta tags.
 *
 * WHY: This is a Vite SPA. Social media crawlers (WhatsApp, LinkedIn, Google) don't
 * execute JavaScript, so react-helmet tags are invisible to them. They always read
 * the raw HTML — which for an SPA is always the same index.html.
 *
 * HOW: After `vite build`, this script reads dist/index.html (which already has the
 * correct hashed JS/CSS asset refs) and for each known route writes a copy at
 * dist/{route}/index.html with the correct title, description, and OG tags baked in.
 *
 * Dynamic routes:
 *   /blogs/:slug  — built from hardcoded blog data (no network needed)
 *   /product/:slug — fetched from Supabase REST API at build time
 *
 * Vercel serves existing static files BEFORE applying vercel.json rewrites, so each
 * URL gets its own HTML. Real users still get the full React SPA experience.
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

// ── Supabase config (anon/public key — same one already in the client bundle) ─
const SUPABASE_URL = 'https://jjfwpspbwbytxbfljmcz.supabase.co';
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqZndwc3Bid2J5dHhiZmxqbWN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY5OTUwMDMsImV4cCI6MjA3MjU3MTAwM30.caeCFkeweNvklgOJMvpoi_3hNf-lL8sTfEP5dJ8RHhU';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir   = join(__dirname, '..', 'dist');
const BASE_URL  = 'https://www.khandelwaldistributors.com';
const GENERIC_IMAGE = `${BASE_URL}/og/vrv-system.jpg`;

// ── Static routes ──────────────────────────────────────────────────────────────
const staticRoutes = [
  // Main pages
  {
    path: '/products',
    title: 'Complete HVAC Product Catalog | Air Conditioners & Systems in Bareilly',
    description: 'Explore our complete range of HVAC products in Bareilly. From residential split ACs to commercial VRV systems, find the perfect cooling solution.',
    image: `${BASE_URL}/og/products-hero-bg.jpg`,
  },
  {
    path: '/shop',
    title: 'AC Shopping - Best Air Conditioners Online | Khandelwal Distributors',
    description: 'Shop for the best air conditioners online. Wide range of Split, Window, Cassette, Ductable & Tower ACs from top brands with free installation & warranty.',
    image: `${BASE_URL}/og/inverter-split-ac.jpg`,
  },
  {
    path: '/projects',
    title: 'Our Projects - HVAC Installation Portfolio | Khandelwal Distributors',
    description: 'Explore our portfolio of HVAC projects across Bareilly and Uttar Pradesh. Commercial VRV systems, cold rooms, modular OTs and more.',
    image: `${BASE_URL}/og/vrv-system.jpg`,
  },
  {
    path: '/blogs',
    title: 'HVAC Blog & Insights | Khandelwal Distributors',
    description: 'Expert insights on VRV systems, heat pumps, cold rooms, and modular OTs for the Indian market. Stay updated with the latest HVAC trends.',
    image: GENERIC_IMAGE,
  },

  // Product category pages
  { path: '/products/inverter-split-ac',    title: 'Best Inverter Split AC Dealers in Bareilly | Energy Efficient Air Conditioners',    description: 'Shop premium inverter split ACs in Bareilly. Top brands, expert installation, best prices. Save up to 60% on electricity bills.',                                                        image: `${BASE_URL}/og/inverter-split-ac.jpg` },
  { path: '/products/non-inverter-split-ac', title: 'Best Non-Inverter AC Dealers in Bareilly | Budget Air Conditioners',                description: 'Affordable non-inverter split ACs in Bareilly. Lower upfront cost, reliable cooling, perfect for budget-conscious buyers.',                                                             image: `${BASE_URL}/og/split-ac.jpg` },
  { path: '/products/cassette-ac',           title: 'Best Cassette AC Dealers in Bareilly | Commercial Air Conditioning',               description: 'Premium cassette ACs for commercial spaces in Bareilly. 360° airflow, invisible design, expert installation for offices and restaurants.',                                     image: `${BASE_URL}/og/cassette-ac.jpg` },
  { path: '/products/floor-standing-ac',     title: 'Best Floor Standing AC Dealers in Bareilly | Large Space Cooling',                 description: 'Premium floor standing ACs for large spaces in Bareilly. High capacity, powerful airflow, perfect for halls and commercial applications.',                                      image: `${BASE_URL}/og/floor-standing-ac.jpg` },
  { path: '/products/window-ac',             title: 'Best Window AC Dealers in Bareilly | Affordable Air Conditioners',                 description: 'Shop quality window ACs in Bareilly. Best prices, expert installation, reliable service. Perfect for small rooms and budget-conscious buyers.',                             image: `${BASE_URL}/og/window-ac.jpg` },
  { path: '/products/portable-ac',           title: 'Best Portable AC Dealers in Bareilly | Mobile Air Conditioning Solutions',         description: 'Premium portable ACs for rental homes and temporary spaces in Bareilly. Easy setup, no installation required, move-anywhere cooling solutions.',                          image: `${BASE_URL}/og/portable-ac.jpg` },
  { path: '/products/ductable-ac',           title: 'Best Ductable AC Dealers in Bareilly | Central Air Conditioning Systems',          description: 'Premium ductable ACs for large spaces in Bareilly. Concealed installation, uniform cooling, centralized control for offices and homes.',                                 image: `${BASE_URL}/og/ductable-ac.jpg` },
  { path: '/products/vrv-system',            title: 'VRV System Projects in Bareilly, Pilibhit, Shahjahanpur | Authorized Daikin Dealers', description: 'Complete VRV installation for commercial buildings across Bareilly, Pilibhit, Shahjahanpur, Badaun, Rampur & Moradabad. Energy efficient, expert installation.',  image: `${BASE_URL}/og/vrv-system.jpg` },
  { path: '/products/chiller-system',        title: 'Best Industrial Chiller Dealers in Bareilly | Commercial Cooling Solutions',       description: 'Premium industrial chiller systems in Bareilly. Air-cooled, water-cooled, and absorption chillers for manufacturing and commercial applications.',                           image: `${BASE_URL}/og/chiller-system.jpg` },
  { path: '/products/heat-pump',             title: 'Heat Pump Water Heaters in Bareilly | Sun Stellar, Inter Solar Dealer',           description: 'Special offer on Sun Stellar 300L Heat Pump at ₹1,30,000 + GST. Residential & Commercial heat pump solutions. Swimming pool heaters available.',                    image: `${BASE_URL}/og/heat-pump.jpg` },
  { path: '/products/cold-room',             title: 'Best Cold Room Dealers in Bareilly | Commercial Refrigeration Systems',            description: 'Premium cold rooms and walk-in freezers in Bareilly. Temperature-controlled storage for food, pharma, and commercial applications.',                                    image: `${BASE_URL}/og/cold-room.jpg` },
  { path: '/products/ahu-system',            title: 'Best AHU System Dealers in Bareilly | Air Handling Unit Solutions',               description: 'Premium air handling units for commercial and industrial applications in Bareilly. Custom AHU systems with advanced filtration and energy recovery.',                  image: `${BASE_URL}/og/ahu-system.jpg` },
  { path: '/products/deep-freezers',         title: 'Kitchen & Restaurant Equipment Dealers in Bareilly | Commercial Refrigeration Solutions', description: 'Premium kitchen & restaurant equipment — visi coolers, freezers, coffee machines, dishwashers from Elanpro, Trufrost, Rockwell in Bareilly.',           image: `${BASE_URL}/og/deep-freezer.jpg` },
  { path: '/products/modular-ot',            title: 'Modular Operating Theatre (OT) - Complete Turnkey Solution | Bareilly, UP',       description: 'ISO compliant modular OT with laminar air flow, HEPA filtration, and all critical components. Expert installation in Bareilly, Uttar Pradesh.',                     image: `${BASE_URL}/og/ot-wall-panels.jpg` },
  { path: '/products/water-cooler',          title: 'Best Water Cooler Dealers in Bareilly | Premium Cooling Solutions',               description: 'Premium water cooling and dispensing solutions for offices, schools, and commercial spaces in Bareilly. Pure, cool water 24/7.',                                     image: `${BASE_URL}/og/water-cooler.jpg` },
  { path: '/products/alkaline-ro',           title: 'Best Alkaline RO Dealers in Bareilly | Healthy Water Solutions',                  description: 'Premium alkaline RO water purifiers in Bareilly. 8-stage purification, health benefits, mineral-rich water with professional installation.',                          image: `${BASE_URL}/og/alkaline-ro.jpg` },
  { path: '/products/solar-water-heater',    title: 'Best Solar Water Heater Dealers in Bareilly | Eco-Friendly Solutions',            description: 'Premium solar water heating systems in Bareilly. Save 80% on electricity bills with eco-friendly solar geysers. Professional installation and service.',          image: `${BASE_URL}/og/solar-water-heater.jpg` },
  { path: '/products/ventilation-hrv',       title: 'Best Ventilation & HRV System Dealers in Bareilly | Fresh Air Solutions',        description: 'Premium ventilation and heat recovery systems in Bareilly. Fresh air solutions with energy recovery for homes and commercial buildings.',                            image: `${BASE_URL}/og/ventilation-hrv.jpg` },
  { path: '/products/air-purifier',          title: 'Best Air Purifier & Water Softener Dealers in Bareilly | Health Solutions',      description: 'Premium air purification and water softening systems in Bareilly. HEPA air purifiers, water softeners for complete health protection and wellness.',              image: `${BASE_URL}/og/air-purifier.jpg` },
  { path: '/products/stabilizers',           title: 'AC Stabilizer & Mainline Stabilizer Dealers in Bareilly | V-Guard, Microtek, Bluebird, Lifebird', description: 'Best AC stabilizers in Bareilly. V-Guard, Seiko, Microtek (aluminium), Bluebird (copper) — 4–5 KVA for ACs. Lifebird mainline up to 10 KVA for whole-home protection.', image: `${BASE_URL}/og/inverter-split-ac.jpg` },

  // Brand pages
  { path: '/brands/daikin',            title: 'Daikin AC Dealer Bareilly | VRV Systems & Split AC | Khandelwal Distributors',             description: 'Authorized Daikin AC dealer in Bareilly. VRV systems, split ACs, inverter technology. Expert installation and service for all Daikin products.',                   image: `${BASE_URL}/og/vrv-system.jpg` },
  { path: '/brands/carrier',           title: 'Carrier AC Dealer Bareilly | Split & Window AC Units | Khandelwal Distributors',           description: 'Authorized Carrier AC dealer in Bareilly. Premium split and window AC units with professional installation and after-sales service.',                              image: `${BASE_URL}/og/inverter-split-ac.jpg` },
  { path: '/brands/voltas',            title: "Voltas AC Dealer Bareilly | India's No.1 AC Brand | Khandelwal Distributors",             description: "Authorized Voltas AC dealer in Bareilly. India's No.1 AC brand with split, window, and cassette ACs. Professional installation and service.",                 image: `${BASE_URL}/og/inverter-split-ac.jpg` },
  { path: '/brands/midea',             title: 'Midea AC Dealer Bareilly | Energy Efficient Inverter ACs | Khandelwal Distributors',       description: 'Authorized Midea AC dealer in Bareilly. Energy-efficient inverter ACs at competitive prices with expert installation and warranty support.',                    image: `${BASE_URL}/og/inverter-split-ac.jpg` },
  { path: '/brands/amstrad',           title: 'Amstrad AC Dealer Bareilly | Smart Inverter AC | Khandelwal Distributors',                description: 'Authorized Amstrad AC dealer in Bareilly. Smart inverter ACs with WiFi connectivity at the best prices in Uttar Pradesh.',                                       image: `${BASE_URL}/og/inverter-split-ac.jpg` },
  { path: '/brands/godrej',            title: 'Godrej AC Dealer Bareilly | Split & Cassette AC | Khandelwal Distributors',               description: 'Authorized Godrej AC dealer in Bareilly. Reliable split and cassette ACs from a trusted Indian brand with professional installation and service.',             image: `${BASE_URL}/og/cassette-ac.jpg` },
  { path: '/brands/cruise',            title: 'Cruise AC Dealer Bareilly | Affordable Inverter AC | Khandelwal Distributors',             description: 'Authorized Cruise AC dealer in Bareilly. Affordable inverter air conditioners with great performance and warranty support.',                                    image: `${BASE_URL}/og/inverter-split-ac.jpg` },
  { path: '/brands/mitsubishi-heavy',  title: 'Mitsubishi Heavy AC Dealer Bareilly | Premium Inverter AC | Khandelwal Distributors',     description: 'Authorized Mitsubishi Heavy Industries AC dealer in Bareilly. Premium Japanese technology — cassette ACs, VRF systems, expert installation.',              image: `${BASE_URL}/og/cassette-ac.jpg` },
];

// ── Hardcoded blog data (matches src/hooks/useBlogs.ts) ────────────────────────
const blogs = [
  {
    slug: 'vrv-systems-india-energy-efficiency',
    title: 'VRV Systems in India: The Future of Energy-Efficient Commercial Cooling',
    excerpt: 'Discover how VRV (Variable Refrigerant Volume) systems are revolutionizing commercial HVAC in India with up to 40% energy savings and smart zoning capabilities.',
    image: `${BASE_URL}/og/vrv-system.jpg`,
  },
  {
    slug: 'heat-pumps-water-heating-india',
    title: 'Heat Pumps for Water Heating: A Game-Changer for Indian Hotels and Industries',
    excerpt: 'Learn how heat pump water heaters can reduce your water heating costs by 70% compared to electric geysers, making them ideal for hotels, hospitals, and industries.',
    image: `${BASE_URL}/og/heat-pump.jpg`,
  },
  {
    slug: 'cold-rooms-india-food-safety-business',
    title: 'Cold Rooms in India: Essential Guide for Food Safety and Business Growth',
    excerpt: 'Explore how cold room installations are transforming food preservation for restaurants, hotels, and food businesses across India.',
    image: `${BASE_URL}/og/cold-room.jpg`,
  },
  {
    slug: 'modular-operation-theatre-india-hospitals',
    title: 'Modular Operation Theatres: The Future of Surgical Excellence in Indian Hospitals',
    excerpt: 'Discover how modular OTs are revolutionizing surgical care in India with superior infection control, faster installation, and lower long-term costs.',
    image: `${BASE_URL}/og/ot-hero-bg.jpg`,
  },
  {
    slug: 'alkaline-water-purifier-health-benefits-india',
    title: 'Alkaline Water Purifiers in India: Health Benefits, Technology, and Buying Guide',
    excerpt: 'Explore the science behind alkaline water, its health benefits for Indian families, and how to choose the right alkaline RO purifier.',
    image: `${BASE_URL}/og/alkaline-ro.jpg`,
  },
  {
    slug: 'ahu-tfa-hrv-differences-ventilation-guide',
    title: 'AHU vs TFA vs HRV: Complete Guide to Ventilation Systems for Indian Buildings',
    excerpt: 'Understand the key differences between Air Handling Units (AHU), Treated Fresh Air (TFA) units, and Heat Recovery Ventilation (HRV) systems.',
    image: `${BASE_URL}/og/ahu-system.jpg`,
  },
];

// ── HTML helpers ───────────────────────────────────────────────────────────────

function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function replaceMeta(html, attrName, attrValue, newContent) {
  const escaped = attrValue.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp(`<meta\\s[^>]*${attrName}="${escaped}"[\\s\\S]*?/>`, 'u');
  return html.replace(re, `<meta ${attrName}="${attrValue}" content="${esc(newContent)}" />`);
}

function replaceTitle(html, title) {
  return html.replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`);
}

function replaceCanonical(html, url) {
  return html.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/>/,
    `<link rel="canonical" href="${url}" />`
  );
}

function generateHtml(baseHtml, { path, title, description, image }) {
  const url = path.startsWith('http') ? path : `${BASE_URL}${path}`;
  let html = baseHtml;

  html = replaceTitle(html, title);
  html = replaceCanonical(html, url);
  html = replaceMeta(html, 'name', 'description', description);
  html = replaceMeta(html, 'property', 'og:title', title);
  html = replaceMeta(html, 'property', 'og:description', description);
  html = replaceMeta(html, 'property', 'og:url', url);
  html = html.replace(
    /<meta\s[^>]*property="og:image"[\s\S]*?\/>/u,
    `<meta property="og:image" content="${image}" />`
  );
  html = replaceMeta(html, 'name', 'twitter:title', title);
  html = replaceMeta(html, 'name', 'twitter:image', image);
  // fix typo ' twitter: description' that exists in index.html
  html = html.replace(
    /<meta\s[^>]*name="\s*twitter:\s*description"[\s\S]*?\/>/u,
    `<meta name="twitter:description" content="${esc(description)}" />`
  );

  return html;
}

function writeRoute(baseHtml, routePath, meta) {
  const html = generateHtml(baseHtml, { path: routePath, ...meta });
  const dir  = join(distDir, routePath);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), html, 'utf-8');
  console.log(`  ✓ ${routePath}`);
}

// ── Fetch all products from Supabase REST API ──────────────────────────────────
async function fetchProducts() {
  const url = `${SUPABASE_URL}/rest/v1/products?select=slug,name,model,brand,tonnage,energy_rating,description,seo_title,seo_description,image_urls&is_available=eq.true`;
  const res = await fetch(url, {
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    },
  });
  if (!res.ok) {
    console.warn(`  ⚠ Supabase fetch failed (${res.status}). Skipping product pages.`);
    return [];
  }
  return res.json();
}

// ── Main ───────────────────────────────────────────────────────────────────────
let baseHtml;
try {
  baseHtml = readFileSync(join(distDir, 'index.html'), 'utf-8');
} catch {
  console.error('ERROR: dist/index.html not found. Run `vite build` first.');
  process.exit(1);
}

let count = 0;

// 1. Static routes
console.log('\nGenerating static routes…');
for (const route of staticRoutes) {
  writeRoute(baseHtml, route.path, route);
  count++;
}

// 2. Blog detail pages (hardcoded data — no network needed)
console.log('\nGenerating blog detail pages…');
for (const blog of blogs) {
  writeRoute(baseHtml, `/blogs/${blog.slug}`, {
    title: `${blog.title} | Khandelwal Distributors`,
    description: blog.excerpt,
    image: blog.image,
  });
  count++;
}

// 3. Shop product detail pages (fetched from Supabase at build time)
console.log('\nFetching products from Supabase…');
const products = await fetchProducts();
if (products.length > 0) {
  console.log(`  Found ${products.length} products. Generating pages…`);
  for (const p of products) {
    const title       = p.seo_title || `${p.name} - ${p.model} | Khandelwal Distributors`;
    const description = p.seo_description
      || p.description
      || `Buy ${p.name} ${p.model} at best price. ${p.tonnage} ton AC with ${p.energy_rating} energy rating. Free installation & warranty.`;
    const image       = Array.isArray(p.image_urls) && p.image_urls[0]
      ? p.image_urls[0]
      : GENERIC_IMAGE;

    writeRoute(baseHtml, `/product/${p.slug}`, { title, description, image });
    count++;
  }
}

console.log(`\nDone. Generated ${count} route HTML files with unique meta tags.`);

# Tru Bond Cleaning North Brisbane

## Current State
The site has 4 pages: Home, Services, About, Contact. The Home page lists 15 North Brisbane suburbs as plain text badges. There are no individual suburb pages.

## Requested Changes (Diff)

### Add
- 15 suburb landing pages, one for each suburb: Chermside, Aspley, Bridgeman Downs, Everton Park, Kedron, Stafford, Nundah, Geebung, Zillmere, Boondall, Bracken Ridge, Carseldine, Fitzgibbon, Mango Hill, North Lakes
- Each suburb page has:
  - Unique SEO meta title, description, and Open Graph tags in the <head>
  - ~400 words of semantically optimised content written in simple English (10-year-old reading level)
  - A hero image with descriptive alt text for SEO
  - A secondary image (e.g. a clean kitchen or carpet) with SEO alt text
  - H1 with suburb + bond cleaning keyword
  - H2s covering: what bond cleaning is, why it matters for that suburb, what's included, why choose Tru Bond Cleaning
  - CTA buttons linking to /contact and WhatsApp
- Routes for each suburb at /suburbs/:suburb-slug (e.g. /suburbs/chermside)
- New suburb images: a clean Brisbane house exterior and a clean Brisbane apartment interior

### Modify
- Home page suburbs section: change plain suburb badges into clickable links pointing to their respective suburb pages, improving internal linking for SEO signals
- routeTree.tsx: add all 15 suburb routes

### Remove
- Nothing removed

## Implementation Plan
1. Generate 2 new images: Brisbane suburb house exterior and clean apartment interior
2. Create a reusable SuburbPage component that accepts suburb-specific data (name, slug, meta title, meta desc, content, images)
3. Create a suburbData.ts data file with all 15 suburb entries (name, slug, unique 400-word content, SEO meta)
4. Create a single dynamic SuburbPage route at /suburbs/$slug
5. Update routeTree.tsx to include the suburb route
6. Update Home.tsx suburb badges to be <Link> elements pointing to /suburbs/:slug

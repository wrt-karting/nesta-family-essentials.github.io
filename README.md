# NESTA — Family Essentials

A polished, responsive storefront for **NESTA**, a family-accessories concept focused on practical products for parents, babies and organized family life.

## Store concept

**NESTA — Accessories for modern family routines**

The storefront is organized around real family moments rather than a generic product catalog:

- Baby Essentials
- Parent Bags
- Nursery & Decor
- Feeding
- Toys & Activity
- Bath & Care
- Home Organization
- Family Travel
- Gifts & Sets

The visual direction uses warm cream backgrounds, deep forest green typography, muted terracotta accents and editorial serif headlines. The goal is a calm, premium family-store feel without looking like a generic template.

## What was fixed

The previous screenshots showed several image problems:

- Product images were extremely small inside oversized empty cards.
- Different product categories reused images that did not match the product.
- Category imagery repeated and sometimes carried text baked into the image.
- Product photography was not consistently framed.
- The visual hierarchy made the cards feel empty and disconnected from the actual products.

This version fixes that approach:

1. Product images occupy a dedicated, consistent visual area.
2. Images use `object-fit: cover` inside controlled frames so they never spill outside the card.
3. Each product has its own assigned image source.
4. Category cards use separate imagery from the product grid.
5. The hero uses a full-width lifestyle image with a controlled editorial overlay.
6. Responsive breakpoints keep the image proportions clean on desktop, tablet and mobile.
7. The site contains no screenshot captures, price badges or marketplace UI inside the photography.

## Included functionality

- Responsive desktop/tablet/mobile layout
- Sticky navigation
- Hero section
- Collection/category cards
- Product filtering
- Product cards with Add to Bag
- Working demo shopping bag drawer
- Search overlay
- Save buttons
- Newsletter interaction
- Support section
- Responsive footer
- Local SVG logo and favicon
- Accessible alt text and semantic sections

## File structure

```text
NESTA-family-store/
├── index.html
├── styles.css
├── app.js
├── README.md
└── assets/
    ├── logo.svg
    └── favicon.svg
```

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript
- Responsive CSS Grid/Flexbox
- SVG branding
- Remote photography from free-stock sources

## Image strategy

The image layout was rebuilt specifically to address the visual problem shown in the supplied screenshots.

The site uses clean photography URLs rather than placing screenshots of shopping pages inside product cards. Images are placed in predictable frames with responsive sizing so the composition remains stable.

Several lifestyle/product photographs come from **Pexels**, whose photographs are offered under its free-use license. Some product-style storage/tote imagery comes from the source pages listed below.

### Photography sources

- Pexels: https://www.pexels.com/
- Pexels photo pages used for the family/lifestyle imagery include photo IDs 8429916, 8430061, 7491211, 7491123, 6849414, 4886921, 374668, 4678303 and related free-use photographs.
- Two Streets Over — nursery storage reference image: https://www.twostreetsover.com.au/products/living-textiles-blush-white-storage
- The Warehouse — nursery storage reference image: https://www.thewarehouse.co.nz/p/3pc-living-textiles-cotton-rope-3520cm-nursery-storage-basket-set-whitegrey/M33141413.html
- Biivoya — multi-functional tote reference image: https://biivoya.com/products/multi-functional-tote-classic

**Important:** the store uses remote image URLs so the ZIP remains lightweight. If you want a fully offline version, download the selected images under their respective licenses and place them in `assets/images/`, then replace the URLs in `app.js` and `index.html`.

## Support

**Email:** support@nesta-family.com  
**Phone:** +1 (800) 555-0148  
**Example store location:** Austin, TX 78701

The location above is a fictional/example business location for the storefront and is not intended to represent a real customer address.

## GitHub Pages

1. Upload the contents of this ZIP to a GitHub repository.
2. Open **Settings → Pages**.
3. Select the branch containing `index.html`.
4. Save and wait for GitHub Pages to publish.
5. The store is a static site and does not require a server.

## Validation checklist

Before publishing:

- [x] `index.html` is the entry point.
- [x] CSS and JavaScript are referenced with relative paths.
- [x] Logo and favicon are local assets.
- [x] Product data is centralized in `app.js`.
- [x] Product images have explicit `alt` text.
- [x] Product image frames are consistent.
- [x] Category cards have independent images.
- [x] Mobile layout is included.
- [x] Search and bag interactions are wired.
- [x] Support contact is visible in the footer.
- [x] No dependency on a local build system.

## Status

**Proyecto en desarrollo — storefront demo listo para personalización.**

## Brand direction

NESTA should feel:

- Warm
- Calm
- Practical
- Family-focused
- Premium but approachable
- Editorial rather than marketplace-heavy

The design intentionally avoids overly bright children's-store colors and instead uses a refined family-home palette.

© 2026 NESTA Family Essentials

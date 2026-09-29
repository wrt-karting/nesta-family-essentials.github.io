# NESTA — Family Essentials

NESTA is a warm, premium-style demo storefront focused on practical accessories for parents, babies and organized family life.

## Store concept

NESTA brings together useful everyday products across:

- Baby essentials
- Parent bags
- Nursery & decor
- Feeding
- Toys & activity
- Bath & care
- Home organization
- Family travel
- Gifts & sets

The visual direction uses warm cream, beige, sage and terracotta tones with rounded cards, editorial typography and generous spacing.

## V2/V3 image overhaul

This package was rebuilt specifically to solve the previous image problems:

- 12 individual product cards use 12 different product photographs.
- Product images are local files inside the ZIP rather than dependent on external image URLs.
- Product photography is centered inside a fixed square presentation area.
- `object-fit: contain` is used so products are not cropped by the card.
- Images are padded so products do not touch the card edges.
- Product image backgrounds are coordinated with the NESTA palette.
- Category cards use separate local image files and no longer repeat the same category artwork.
- The hero uses a local photographic image.
- The master NESTA logo supplied for the store is used directly as `assets/logo.jpg`.

## Product catalog

| Product | Category | Price |
|---|---|---:|
| Diaper Bag Backpack | Parent Bags | $89.00 |
| Wooden Baby Play Gym | Toys & Activity | $59.00 |
| Convertible High Chair | Feeding | $129.00 |
| Silicone Feeding Set | Feeding | $39.00 |
| Foldable Baby Bath Tub | Bath & Care | $49.00 |
| Plush Stuffed Bunny | Toys & Activity | $29.00 |
| Nursery Storage Organizer | Home Organization | $42.00 |
| Wooden Activity Walker | Toys & Activity | $69.00 |
| Everyday Diaper Tote | Parent Bags | $74.00 |
| Soft Nursery Basket Set | Home Organization | $54.00 |
| Calm Bath-Time Set | Bath & Care | $35.00 |
| Little Moments Gift Set | Gifts & Sets | $64.00 |

## Included files

The ZIP contains a complete local storefront rather than a minimal 5–6 file demo.

### Core files

- `index.html` — complete storefront markup and product catalog data
- `styles.css` — responsive visual system and product image layout
- `app.js` — filters, search, save buttons, bag drawer and newsletter interaction
- `README.md` — project documentation

### Branding

- `assets/logo.jpg` — exact NESTA logo asset supplied for this project
- `assets/favicon.png` — favicon derived from the supplied NESTA logo

### Photography

- `assets/images/hero-family-real.jpg`
- 12 files under `assets/images/products/`
- 9 files under `assets/images/categories/`

All storefront photography is stored locally so the site remains portable when uploaded to GitHub Pages or another static host.

## Image quality standard

Every product photograph is prepared as a square, centered catalog image. The website never forces a product to fill the card by cropping it. The CSS reserves a consistent image area and uses `contain` so complete products remain visible.

Product files are optimized JPEGs to keep the storefront lightweight while retaining enough detail for a polished ecommerce presentation. Individual product images are intentionally kept well below 1 MB.

## Main interactions

### Product filters

Visitors can filter products by:

- All
- Bags
- Feeding
- Play
- Bath
- Organization
- Gifts

### Search

The search panel searches product names, categories and descriptions locally in the browser.

### Shopping bag

The demo bag supports:

- Add to bag
- Remove from bag
- Item count
- Running subtotal
- Product thumbnails
- Support handoff message

### Save buttons

The Save buttons provide a lightweight visual saved state for the demo storefront.

### Newsletter

The newsletter form validates an email address and displays a demo confirmation without sending data to a third-party service.

## Support

**Email:** support@nesta-family.com  
**Phone:** +1 (800) 555-0148  
**Example location:** Austin, TX 78701

The location above is a fictional/example storefront location for the project and is not intended to represent a real customer address.

## Technologies

- HTML5
- CSS3
- JavaScript
- Responsive CSS Grid and Flexbox
- Local JPG/PNG assets
- Google Fonts loaded through CSS for typography

## Hosting

This is a static website and can be uploaded to:

- GitHub Pages
- Netlify
- Vercel static hosting
- Any standard web server

No build step is required.

## Folder structure

```text
NESTA-family-store/
├── index.html
├── styles.css
├── app.js
├── README.md
└── assets/
    ├── logo.jpg
    ├── favicon.png
    └── images/
        ├── hero-family-real.jpg
        ├── products/
        │   ├── diaper-bag-backpack.jpg
        │   ├── wooden-baby-play-gym.jpg
        │   ├── convertible-high-chair.jpg
        │   ├── silicone-feeding-set.jpg
        │   ├── foldable-baby-bath-tub.jpg
        │   ├── plush-stuffed-bunny.jpg
        │   ├── nursery-storage-organizer.jpg
        │   ├── wooden-activity-walker.jpg
        │   ├── everyday-diaper-tote.jpg
        │   ├── calm-bath-time-set.jpg
        │   ├── portable-changing-mat.jpg
        │   └── little-moments-gift-set.jpg
        └── categories/
            ├── baby-essentials.jpg
            ├── parent-bags.jpg
            ├── nursery-decor.jpg
            ├── feeding.jpg
            ├── toys-activity.jpg
            ├── bath-care.jpg
            ├── home-organization.jpg
            ├── family-travel.jpg
            └── gifts-sets.jpg
```

## Status

**Status:** Proyecto en desarrollo / demo storefront.

## Copyright

© 2026 NESTA Family Essentials. All rights reserved.

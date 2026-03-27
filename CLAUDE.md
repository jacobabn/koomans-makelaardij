# Koomans Makelaardij — Project Identity

## Company
- **Name**: Koomans Makelaardij
- **City**: 1e Exloërmond
- **Original Website**: https://www.koomansmakelaardij.nl
- **Phone**: 0599512111
- **Email**: 
- **Address**: 1e Exloërmond
- **Tagline**: 

## Design System
- **Color Scheme**: Ultra minimal (monochrome)
  - Primary: #111111 — nav, headings, buttons, dark sections
  - Secondary: #555555 — accents, highlights, CTAs
  - Accent: #333333 — links, icons, hover states
  - Background: undefined
  - Text: #111111 (body text on background)
  - On-Primary: #ffffff (text on primary bg)
  - On-Secondary: #ffffff (text on secondary bg)
- **Layout**: magazine — Editorial layout, mixed column widths, featured sections, storytelling flow
- **Typography**: Tech-forward warm
  - Headings: Outfit (font-heading)
  - Body: Source Serif 4 (font-body)

## Color Accessibility (WCAG 2.1 AA)
- Body text (text-text) on background: contrast ≥ 4.5:1 ✓
- Buttons: text-on-primary on bg-primary (white on dark) ✓
- Hero text: text-white on bg-primary/80 overlay ✓
- Links: text-primary underlined on bg-background ✓
- Footer: text-on-primary on bg-primary ✓

## Pages
| Route | Page |
|-------|------|
| / | Home |
| /over-ons | Over Ons |
| /diensten | Diensten |
| /werkgebied | Werkgebied |
| /contact | Contact |

## SEO
- **Title Format**: [Pagina Keyword] | Koomans Makelaardij — NVM Makelaar Drenthe
- **Primary Keywords**: makelaar Drenthe, agrarisch makelaar Drenthe, makelaar Borger-Odoorn, makelaar Emmen, NVM-makelaar Drenthe, taxateur Drenthe, agrarisch makelaar Groningen
- **Local Keywords**: woning verkopen Drouwenerveen, huis kopen Exloo, boerderij kopen Drenthe, landbouwgrond verkopen Drenthe, makelaar 1e Exloërmond, taxatie Borger-Odoorn, agrarisch onroerend goed Noord Nederland
- **Schema.org**: LocalBusiness + WebSite + BreadcrumbList in layout.tsx

## Build Concept
A monochrome editorial magazine-style website that positions Koomans Makelaardij as the authoritative rural and agricultural real estate specialist of Drenthe and Noord-Groningen, using stark black-and-white photography with dramatic typographic hierarchy to evoke the timeless character of the Dutch countryside landscape.

## Images
- 12 photos + 6 icons downloaded from original site
- All stored in /public/images/
- Use src="/images/filename" paths — never external URLs

## Development
npm install
npm run dev    # http://localhost:3000
npm run build  # Production build

## Deployment
- **GitHub**: https://github.com/jacobabn/koomans-makelaardij
- **Live**: https://koomans-makelaardij.abn.company
- **Built by**: A Brand New Company (ABN)
- **Built at**: 2026-03-27T02:20:53.575Z

## Rules
1. NEVER change the color scheme — use only the colors defined above
2. NEVER change the typography — use only font-heading and font-body
3. ALL text must meet WCAG 2.1 AA contrast (4.5:1 for normal, 3:1 for large)
4. ALL internal links must go to one of the 5 defined routes
5. ALL images use local /images/ paths — never external URLs
6. Layout.tsx provides header + footer — page files must NOT duplicate them
7. Every inner page starts with a breadcrumb navigation

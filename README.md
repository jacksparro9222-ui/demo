# The House of Dempo — concept redesign

A static, multi-page redesign of [dempos.com](https://www.dempos.com/) for a pitch by [Galactis AI](https://galactis.ai). It is a concept, not the Group’s website. Every page sends `noindex`, and the footer says so.

Facts come from the public Dempo site, inventoried in [docs/content-inventory.md](docs/content-inventory.md). Where two Dempo pages disagree, both wordings are kept. Where the live site is silent, the page shows a visible placeholder instead of a guess.

## Run it

```bash
npm install
npm run dev
```

The dev server listens on [http://127.0.0.1:4731](http://127.0.0.1:4731).

## Build it

```bash
npm run build
npm run preview
```

`npm run build` writes a static site to `dist/`, including `sitemap-index.xml` and WebP images. `SITE_URL` sets the canonical host used in that sitemap and in Open Graph tags. It defaults to `https://dempo-concept.onrender.com`.

```bash
SITE_URL=https://example.com npm run build
```

## What changed, and why

The live site is a long WordPress layout: a crowded menu, repeated company blocks, and photography that is often a few hundred pixels wide. This concept keeps the substance and changes the presentation.

- One reading order. Home, legacy, businesses, leadership, sustainability, news, careers and contact, instead of a menu that mixes scholarships, podcasts and company pages at the same level.
- A timeline that uses only dates printed on dempos.com, including the places those dates conflict.
- Each company on the public menu has its own section and page, including the emerging ventures. Pig iron, wind power and the 2009 mining divestment stay visible, because the About page and The Good Earth still talk about them, and because the editorial note on the mining sale is easy to miss.
- News is a short, sourced selection with links back to the originals, not a copy of the whole archive.
- Careers does not invent vacancies. The live careers page does not list any.
- The enquiry form is a layout only. It does not send.
- Type, space and a single blue taken from the Dempo wordmark replace the old theme chrome. Motion is a short fade, and it switches off when the visitor asks for less motion.

## Placeholders — what the client needs to supply

| Placeholder | What to supply |
| --- | --- |
| Careers: no open roles | A current vacancy list, or a decision to keep the page as an open invitation only |
| Leadership: no board | Names, roles and photographs of the current board and company heads |
| Photographs of Pallavi S. Dempo and other leaders | Approved portraits, with captions |
| Founder’s birth year | The site disagrees with itself. The year is omitted. Confirm which published account should stand |
| Goa Carbon’s start | Confirm 1967 (company page) or 1976 (The Good Earth) |
| Dempo Travels’ start | Confirm 1961 (company page) or 1960 (The Good Earth) |
| Pig iron, wind power, resort, Ella school, Corlim laboratory | Which of these are still live, and a current sentence on each |
| Hindustan Foods | The companies menu still has a page. Confirm whether it should still be presented as a Group company after the 2013 change of control |
| HR title | General Manager, Senior General Manager, or the “HR Head” title used in 2025 |
| Dempo Sports Club phone | The page prints `0832-24441444`; confirm the number |
| Chairman’s age | The About page says 46. That is not used. Supply nothing, or a wording the Group wants |
| Staff strength | The About page and footer print 1,000. The figure is undated and is not shown |
| “Seven-and-a-half decade” history | Printed in the chairman’s address. Not used |
| Goa’s population | The About page says 1.5 million. Not used |
| Dempo Sports Club “fifth decade” | Printed on the club page. Not used as a current count |
| DCT aid in rupees | The trust page prints a five-lakh figure. Not used. The 2026 scholarship income threshold is a different, dated notice and is kept |
| Goa Carbon capacity | The company page says 240,000 MT a year. The June 2024 gcarb+ note says 308,000 MT. Confirm which stands |
| Goa Carbon turnover | The printed figure is tied to “the fiscal year preceding the recent global economic downturn.” Supply a current figure or leave it out |
| Scholarship recipient lists | The 2023–2025 lists are images on dempos.com. Supply text if they should be set in type |
| Emerging-project status | Dates for IPB and other approvals, if those projects are still proposed |
| Higher-resolution photography | Most company photographs on the live site are small. New pictures of yards, plants, campuses and Dempo House would replace the older files and some of the Commons scenes |
| A vector logo | The wordmark on the live site is 325×72 pixels |
| Enquiry handling | Where a real form should deliver, if the concept form is ever switched on |

## Stack

Astro, with self-hosted Cormorant Garamond and Outfit. No database and no accounts. Company facts live in `src/data/`.

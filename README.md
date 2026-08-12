# Hiba Ayub — Portfolio

Personal portfolio rebuilt in Next.js from a Framer visual source and a Lovable content/structure reference.

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion

## Pages

| Route | Source |
| --- | --- |
| `/` | Framer home layout (hero + selected work) |
| `/work` | Lovable work structure, Framer visual language |
| `/work/datahub` | Combined case study (`/datahub` redirects here) |
| `/about` | Framer layout + Lovable copy |

## Design tokens

- Canvas `#F9F9F9`
- Ink `#111111`
- Pink `#FF2D78`
- Navy `#1B365D`
- Teal `#00BFA5`
- Typeface: Inter

## Local development

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Replacing the portrait

Drop a square photo at `public/images/portrait.jpg` and point `src/components/about/AboutContent.tsx` at that file. The current SVG is a landscape placeholder so the layout can be reviewed without a generated likeness.

Case study screenshots in `public/images/` are UI mockups for layout. Swap them for the real DataHub captures when you have them.

## Assumptions

These were locked so the rebuild could ship without blocking on missing source files:

- Framer is the visual source of truth (layout, color, type, two pink pill buttons, navy work card, pink about heading, teal “Interests” label).
- Lovable supplies copy and structure the Framer file did not fully contain (about paragraphs, work index, coming-soon projects, richer case study title and hook).
- Interest tags use Lovable content (`Gaming`, `Reading`, `Bedazzling`) with Framer’s pink pills.
- Case study body copy is reconstructed from the visible Framer/Lovable sections plus public DSRS context. Replace any line that does not match your voice.
- No contact form was in either source, so the footer only links to LinkedIn.

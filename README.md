# ankursinghal.me

Personal site, built with [Astro](https://astro.build). Static output, no server. Hosted on Netlify and rebuilt on every push to `main`.

## Run it locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # writes the site to dist/
```

Needs Node 22.12 or newer.

## Where things live

| To change | Edit |
| --- | --- |
| A chemical on the Litigation page | `src/content/litigation/*.md` (one file per chemical; keep to chemical, medium, and gist) |
| A project on the Software and AI page | `src/content/software/*.md` (`detail: true` gives it its own page from the body text) |
| A blog post | add `src/content/blog/your-post.md` (copy `post-template.md`, set `draft: false`) |
| The CV, publications, presentations | `src/data/cv.ts` (feeds the CV and Research pages) |
| Home page text and chart | `src/pages/index.astro`, `src/components/DecayChart.astro` |
| Colors and type | top of `src/styles/global.css` |
| Contact form | `src/pages/contact.astro` (Formspree form id at the top) |

## Confidentiality

Litigation and expert-work content stays at the level of chemical, medium, and the kind of work. No client, party, or case names, and nothing that is not already public.

## CV as PDF

The CV page has a print stylesheet. Use the "Print or save as PDF" button on the page.

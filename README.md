# Kay Livaudais Art

Personal portfolio website for abstract painter Kay Livaudais.

## Tech Stack
- **Astro** - Static site generator
- **Tailwind CSS** - Styling
- **GitHub Pages** - Hosting (free)

## Development

```bash
npm install
npm run dev      # Local dev server
npm run build    # Production build
npm run preview  # Preview production build
```

## Adding Artwork

1. Add painting images to `public/art/` (jpg/png, ideally ~1500px wide)
2. Update `src/data/paintings.ts` with painting details
3. Set the `image` field to `/kblivaudaisArt/art/your-image.jpg`

## Pages
- **Home** - Hero + featured works
- **Gallery** - Full grid with lightbox viewer
- **About** - Artist bio and statement
- **Contact** - Contact form (uses Formspree)

## Deployment
Configured for GitHub Pages. Set up GitHub Actions or deploy manually with `npm run build` and push the `dist/` folder.

## Contact Form
Replace `YOUR_FORM_ID` in `src/pages/contact.astro` with your Formspree form ID (free at formspree.io).

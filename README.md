# Nehal Elsayad — Independent Academic Advisor

A React (Vite) rebuild of the Nehal Elsayad academic advising website, ready to push to GitHub and deploy on Vercel.

## Pages

- `/` — Home
- `/about` — About, education background, scholarships
- `/services` — Services overview
- `/services/ask-nehal`, `/services/graduate-advising`, `/services/undergraduate-advising` — individual booking forms
- `/testimonials` — Testimonial carousel
- `/blogs` — Blog listing
- `/blogs/:slug` — Full blog articles
- `/contact` — Contact form

## Getting started locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

The static site is output to `dist/`.

## Deploying to Vercel

1. Push this folder to a new GitHub repository.
2. In Vercel, click **New Project** and import the repo.
3. Framework preset: **Vite** (auto-detected). Build command `npm run build`, output directory `dist` (auto-detected).
4. Deploy. The included `vercel.json` makes sure client-side routes (like `/about` or `/blogs/chevening-series-1`) work correctly on refresh/direct link.

## Forms

The booking forms and the contact form submit through **Formspree**. Add one of these to a `.env` file (or set it in your Vercel project env vars):

```bash
# Option A: your Formspree form endpoint
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/yourFormId

# Option B: just the form ID
VITE_FORMSPREE_ID=yourFormId
```

When neither is set, the forms still show the success state locally but log a warning instead of sending data, so the site keeps working before you configure the endpoint.

## Things to customize before going live

- **Images**: all photos currently use free Unsplash stock placeholders so the project builds and deploys immediately. Swap the `image` / `logo` URLs in `src/data/*.js` and the hero/about images for your real photos.
- **Social links**: update the WhatsApp/Instagram/Facebook/LinkedIn URLs in `src/components/Header.jsx`, `src/components/Footer.jsx`, and `src/pages/Contact.jsx`.
- **Content**: all page copy lives in `src/data/` (`services.js`, `testimonials.js`, `blogs.js`, `about.js`) and directly in the page components — edit freely.
# nehal-advising

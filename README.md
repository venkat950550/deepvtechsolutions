# deepVTech

This is a Vite + React + React Router + Tailwind CSS project created from your single-file canvas app.

## Folder structure

- `src/components/common` - shared UI building blocks
- `src/components/layout` - header, footer, layout shell
- `src/components/sections` - reusable website sections
- `src/pages` - route-level page components
- `src/data` - website content/config data
- `src/hooks` - reusable hooks
- `src/utils` - helpers
- `src/assets` - embedded logo source

## Run locally

```bash
corepack pnpm install
corepack pnpm dev
```

To enable email delivery from the contact form, create a `.env` file and set:

```bash
VITE_CONTACT_EMAIL=hr@deepvtechsolutions.com
```

## Build for production

```bash
corepack pnpm build
corepack pnpm preview
```

## Publish to GitHub Pages

This project is already prepared for GitHub Pages:

- Vite automatically uses the correct `base` path during GitHub Actions builds.
- The app uses `HashRouter` in production on GitHub Pages, so routes like `services` and `contact` work reliably there.
- A GitHub Pages deployment workflow is included at `.github/workflows/deploy-pages.yml`.

### Recommended steps

1. Create a new GitHub repository.
   Example: `deepVTech`
2. Open a terminal in this project folder.
3. Initialize git and push the code:

```bash
git init
git branch -M main
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/<your-username>/deepVTech.git
git push -u origin main
```

4. On GitHub, open:
   `Repository -> Settings -> Pages`
5. Under `Build and deployment`, choose `GitHub Actions` as the source.
6. Push to `main` again whenever you want to publish updates.

Your site will be published at:

```text
https://<your-username>.github.io/deepVTech/
```

If your repository name is not `deepVTech`, the workflow will still build with the correct asset base automatically.

## Notes

- Each page is now a separate route.
- The current logo is still using the embedded placeholder from the canvas state. Replace `src/assets/logo.js` with your final logo when ready.

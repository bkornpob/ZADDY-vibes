# vibe-collectives

GitHub Pages site for transmitting our corpus to communities — projects, artifacts, and signals.

## Stack

- **Framework:** Astro 5 (static export)
- **Styling:** Tailwind CSS + shadcn/ui patterns
- **Content:** MDX collections
- **Lint/Format:** Biome
- **Package Manager:** pnpm
- **Deploy:** GitHub Actions → GitHub Pages

## Development

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Lint & format
pnpm lint
pnpm format
```

## Project Structure

```
src/
├── components/
│   ├── ui/           # shadcn/ui compatible components (Astro)
│   ├── Header.astro
│   ├── Footer.astro
│   ├── ProjectCard.astro
│   ├── NotificationSignup.astro  # Interactive island
│   └── IntakeForm.astro
├── content/
│   ├── config.ts     # Content collections schema
│   └── projects/     # Project MDX files
├── layouts/
│   └── Layout.astro
├── lib/
│   └── utils.ts      # cn() utility
├── pages/
│   ├── index.astro
│   ├── projects/
│   │   ├── index.astro
│   │   └── [slug].astro
│   └── intake.astro  # Intake sheet for new projects
└── styles/
    └── global.css
```

## Adding New Projects

1. Visit `/intake` on the dev server (`pnpm dev`)
2. Fill out the intake form
3. Click "Generate .mdx" → "Download .mdx File"
3. Place the downloaded file in `src/content/projects/`
4. Rebuild — project appears automatically

## Notification Signups

Each project can enable notification channels via frontmatter:

```yaml
notifications:
  email: true      # Email signup form (placeholder)
  discord: false   # Discord button (placeholder)
  dm: false        # Direct message button (placeholder)
```

Connect your backend services to the form handlers in `NotificationSignup.astro`.

## Deploy

Push to `main` branch → GitHub Actions builds and deploys to GitHub Pages automatically.

Configure in repo Settings → Pages → Source: GitHub Actions.

## GitHub Pages Configuration

1. Go to repository Settings → Pages
2. Source: "GitHub Actions"
3. The workflow will deploy to `https://kbhir.github.io/webpage-vibe-collectives/`

## Customization

### Colors & Theme

Edit CSS variables in `src/styles/global.css`:

```css
:root {
  --primary: 221.2 83.2% 53.3%;  /* Change primary color */
  --radius: 0.5rem;              /* Change border radius */
}
```

### Content Schema

Modify `src/content/config.ts` to add/remove project fields.
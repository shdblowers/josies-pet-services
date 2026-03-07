# Josie's Pet Services

A React + Vite single-page website for Josie's Pet Services — a professional pet sitting service based in Chester, UK. Deployed via AWS Amplify Hosting.

## Tech Stack

- **React 18** with TypeScript
- **Vite** for bundling
- **AWS Amplify Hosting** for deployment

## Project Structure

```
josies-pet-services/
├── public/                          # Static assets served as-is
│   ├── josie-pet-photo-500h.jpeg
│   ├── josie-photo2-200h.jpg
│   └── petplansanctuarylogo-white-170x100px-200h.jpg
├── src/
│   ├── components/
│   │   ├── Navbar.tsx / .css        # Sticky responsive navbar
│   │   ├── Hero.tsx / .css          # Hero banner
│   │   ├── About.tsx / .css         # About Josie section
│   │   ├── Pricing.tsx / .css       # Visit options & pricing cards
│   │   ├── HowItWorks.tsx / .css    # Step-by-step process
│   │   ├── CTA.tsx / .css           # Call-to-action banner
│   │   ├── Testimonials.tsx / .css  # Client reviews grid
│   │   ├── ContactForm.tsx / .css   # Contact form with success state
│   │   ├── TermsOfService.tsx / .css
│   │   └── Footer.tsx / .css
│   ├── App.tsx
│   ├── index.css                    # Global styles + CSS variables
│   └── main.tsx
├── amplify.yml                      # AWS Amplify build config
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
```

Output is in `dist/`.

## Deploying to AWS Amplify

1. Push this repo to GitHub/GitLab/CodeCommit.
2. In the [AWS Amplify Console](https://console.aws.amazon.com/amplify/), choose **Host web app**.
3. Connect your repository and branch.
4. Amplify will auto-detect the `amplify.yml` and run `npm ci && npm run build`.
5. Your site will be live at an Amplify-generated URL (or a custom domain if configured).

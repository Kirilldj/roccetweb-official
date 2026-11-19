# RoccetWeb (React + TypeScript + Vite)

Premium digital studio site: liquid-chrome 3D core, RU/EN, portfolio with case pages, project configurator, quote estimator, contact form.

## Run
```
npm install
npm run dev      # local dev server
npm run build    # tsc --noEmit && vite build -> dist/
npm run preview
```

## Structure
- `src/components/*` — page markup split by section (Hero, Services, About, Portfolio, Process, Configurator, Contact, Footer, CaseDialog, Header, Overlays).
- `src/styles/main.css` + `phase3..6.css` — styles (same cascade order as the original page).
- `src/legacy/roccet.ts` — behaviour of the original site (Three.js core, GSAP, i18n, cases, form, sound). Kept as one imperative module to guarantee identical behaviour; migrate to React/hooks module by module.
- `src/config.ts` — contact form settings (`VITE_CONTACT_EMAIL`, `VITE_FORM_ENDPOINT`, see `.env.example`).
- `reference/roccetweb.single-file.html` — the original single-file site.

## Notes
- Three.js (r128) and GSAP/ScrollTrigger come from CDN in `index.html` (globals). Moving them to npm imports is a later step.
- Contact form posts to FormSubmit (`https://formsubmit.co/ajax/mvepst@gmail.com`). On first use FormSubmit emails an activation link to the recipient: confirm it, otherwise requests are not delivered. If the request fails, the form opens a mailto draft to the same address.
- Demo projects in the portfolio are fictional and labelled as demo.
- Status: generated offline; `npm install` / `npm run build` have NOT been run yet.

# G.E.M.S De La Rosa

A rebuilt website for G.E.M.S De La Rosa — a garden event venue and Airbnb stay in Trinidad and Tobago.

Original site: https://3105balance.wixsite.com/gems-de-la-rosa

## What this is

One static page, no build step and no framework. Navigation runs on hash routes (`#/stay`, `#/events`, `#/explore`, `#/terms`, `#/contact`), so every section works from a plain file or any static host.

```
index.html   the whole site
img/         venue photography and location shots, from the original site
vercel.json  caching and security headers for Vercel
.nojekyll    tells GitHub Pages to serve the files as-is
```

Fonts load from Google Fonts. Everything else is local.

## Run it locally

Open `index.html` in a browser. That's the whole setup.

## Deploy on Vercel

There is no build step, so Vercel serves the repository as-is.

1. Go to vercel.com and sign in with GitHub.
2. Choose **Add New → Project**, then import `Caden284/GEMSdelarosa`.
3. Leave every build setting on its default. Framework preset is **Other**, and the build command and output directory stay empty.
4. Click **Deploy**.

Every later push to `main` redeploys automatically. Pull requests get their own preview URL.

To use a custom domain, open the project's **Settings → Domains**, add the domain, and follow the DNS records Vercel shows you.

## Deploy on GitHub Pages instead

1. Open **Settings → Pages** in this repository.
2. Under **Build and deployment**, pick **Deploy from a branch**, branch `main`, folder `/ (root)`.
3. After a minute the site is live at `https://caden284.github.io/GEMSdelarosa/`.

## Before going live

- **Caution fee.** Confirmed as $1,500 TTD, and used everywhere on the page.
- **Contact form.** The form opens the visitor's own email or WhatsApp app with the message filled in. If you want submissions saved somewhere instead, connect a form service such as Formspree or Netlify Forms.

## Event pricing shown on the page

| Event | Duration | Price |
|---|---|---|
| Baby shower | 2–8 hrs | from $800 |
| Birthdays | 2–8 hrs | from $800 |
| Sip and paint | 2–8 hrs | from $800 |
| Wedding venue | 8 hrs | $3,500 |
| Other smaller events | 2–8 hrs | from $800 |
| Other larger events | 2–8 hrs | from $800 |

All bookings carry a refundable caution fee, returned within 48 hours of a clear post-event inspection.

## Contact details used on the page

Phone and WhatsApp: 1-868-702-4236
Email: gemsdelarosa1118@gmail.com
Instagram: @gems.delarosa

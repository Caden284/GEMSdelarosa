# G.E.M.S De La Rosa

A rebuilt website for G.E.M.S De La Rosa — a garden event venue and Airbnb stay in Trinidad and Tobago.

Original site: https://3105balance.wixsite.com/gems-de-la-rosa

## What this is

A static site with one HTML file per page and no build step. Vercel serves it as-is.

```
*.html            one file per page (index, stay, events, explore, testimonials, policy, contact)
css/site.css      all styles, shared by every page
js/site.js        menu, animations and page features
img/              photography in WebP, plus the logo
og.jpg            the preview image shown when a link is shared
favicon.*, icon-*.png, apple-touch-icon.png, site.webmanifest   browser and phone icons
sitemap.xml, robots.txt   for search engines
vercel.json       clean URLs, redirects, caching and security headers
```

The header and footer are repeated in every page file. When you change a phone number, email or menu item, use search-and-replace across all the `.html` files.

Pages load Vercel Web Analytics from `/_vercel/insights/script.js`. It only works once the site is deployed on Vercel with Analytics turned on.

## Where to change things

- **Event packages and prices:** the `PACKS` list at the top of `js/site.js`. The home page and the events page both read from it.
- **Things to do:** the `SPOTS` list in `js/site.js`.
- **Airbnb link:** `AIRBNB_URL` in `js/site.js`.
- **Get directions:** the Google Maps links marked `data-directions` in `index.html` and `contact.html`. They search for the business by name; swap in the exact place link from Google Maps if you prefer.
- **Page titles and search descriptions:** the `<title>` and `<meta name="description">` near the top of each page file.
- **After editing `css/site.css` or `js/site.js`:** bump the `?v=` number on their links in every page file (search-and-replace `site.js?v=` / `site.css?v=`), so returning visitors get the new version straight away.
- **Photos:** add new images to `img/` as `.webp` with a new file name. Images are cached for a week, so reusing an old name can show the old photo for a while.

## Run it locally

Links use clean paths like `/about`, so preview through a small server rather than opening the file directly:

```
npx serve .
```

Then open http://localhost:3000.

## Deploy on Vercel

There is no build step, so Vercel serves the repository as-is.

1. Go to vercel.com and sign in with GitHub.
2. Choose **Add New → Project**, then import `Caden284/GEMSdelarosa`.
3. Leave every build setting on its default. Framework preset is **Other**, and the build command and output directory stay empty.
4. Click **Deploy**.

Every later push to `main` redeploys automatically. Pull requests get their own preview URL.

The live domain is `gemsdelarosa.com`. To change it, open the project's **Settings → Domains**, add the domain, and follow the DNS records Vercel shows you.

## Before going live

- **Caution fee.** Confirmed as $1,500 TTD, and used everywhere on the page.
- **Contact form.** The form opens the visitor's own email or WhatsApp app with the message filled in. If you want submissions saved somewhere instead, connect a form service such as Formspree or Netlify Forms.

## Event pricing shown on the page

| Event | Duration | Price |
|---|---|---|
| Baby shower | 2–8 hrs | $800 TTD (about $120 USD) per 2 hrs |
| Birthdays | 2–8 hrs | $800 TTD (about $120 USD) per 2 hrs |
| Sip and paint | 2–8 hrs | $800 TTD (about $120 USD) per 2 hrs |
| Wedding venue | 8 hrs | $3,500 TTD (about $525 USD) |
| Other smaller events | 2–8 hrs | $800 TTD (about $120 USD) per 2 hrs |
| Other larger events | 2–8 hrs | $800 TTD (about $120 USD) per 2 hrs |

All bookings carry a refundable caution fee, returned within 48 hours of a clear post-event inspection.

## Contact details used on the page

Phone and WhatsApp: 1-868-702-4236
Email: gemsdelarosa1118@gmail.com
Instagram: @gems.delarosa

# Badischer Hof — Baden-Baden

Professional responsive investment website based on the supplied November 2026 presentation. Static HTML, CSS and JavaScript; no dependencies or build command required.

## Netlify
Connect the `baden-baden` GitHub repository. Leave build command empty and set publish directory to `dist`. `netlify.toml` configures this automatically.

## Content and functionality
Property photos and downloadable presentation are in `dist/assets`. Enquiry buttons open an email to info@smartresi.homes. Phone links open the dialler. The yield slider uses €2.5m annual rent / illustrative price and calculates price per room using 153 rooms. No enquiries are stored or transmitted by the website itself. Fonts load from Google Fonts with local serif/sans-serif fallbacks.

All property and lease claims originate in the supplied presentation and require due diligence. Update the content and contact details in `dist/index.html` before launch if terms change. There are no analytics or tracking scripts.

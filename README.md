# Alexo Metals website

This package contains the redesigned home page and the seven image assets used by it, downloaded from the current Alexo Metals website. The home page uses local `/assets/legacy/` paths for its logo and photographs so it does not rely on the old WordPress site after the domain changes. Fonts load from Google Fonts, with local fallbacks.

## Add to GitHub

1. Download the ZIP and extract it on your computer.
2. Open your GitHub website repository.
3. Upload `index.html` and `README.md` to the repository's main level. Replace the earlier versions if they already exist.
4. Upload the `assets` folder and preserve its subfolders and filenames exactly. You can drag the folder into GitHub's upload area. Confirm that paths, for example `assets/legacy/2017/01/Logo5.png`, appear correctly before committing.
5. Commit your changes. Vercel can serve the static files directly without a build command.

The wider image collection and its manifest are provided separately for future pages.

## Testing

Open your Vercel deployment and inspect the homepage images, menu, and contact links on desktop and mobile. The homepage links to planned pages that have not yet been added; those links will return a 404 until we create the corresponding pages. The quote buttons link to the planned Contact page, and no form submission is implemented yet.

## Local preview

From the extracted folder, run `python -m http.server 8000` and visit `http://localhost:8000/`. Internet access is needed for Google Fonts; system fonts are used if unavailable.

## Before launch

Complete all pages and copy their required image assets into the repository. Check the asset manifest for any missing downloads. Preserve existing page URLs where appropriate, or prepare redirects. Confirm business details and test the contact form when it is added. Connect the domain only once the new site is ready, preserving email-related DNS records.

# Alexo Metals Website

Custom website for Alexo Metals, built with HTML, CSS and JavaScript and intended for hosting on Vercel through GitHub.

## Current project status

The redesigned homepage is the first page of the project. Its styles and JavaScript are included in `index.html`, so no installation or build step is required. The other pages will be added as the redesign progresses.

Current repository files:

```text
index.html    Homepage, including its CSS and JavaScript
README.md     Project information and setup instructions
```

## Add the files to GitHub

1. Open your GitHub repository.
2. Select **Add file** → **Upload files**.
3. Upload `index.html` and `README.md` directly into the main level of the repository, not inside a folder.
4. Choose **Commit changes**.

If a file with the same name already exists, open that file in GitHub and use the pencil icon to edit it, or upload the replacement and commit it.

## Preview on your computer

Download `index.html` and open it in a browser. An internet connection is needed for the current external fonts and images. Links beginning with `/` are intended for the deployed website and may not work when opening the file directly. For local testing, serve the folder with a local web server.

For example, if Python is installed, open a terminal in the folder and run:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000/`.

## Deploy to Vercel

1. Sign in to Vercel and select **Add New** → **Project**.
2. Connect GitHub if needed, then import the repository containing `index.html`.
3. Use the repository root as the root directory. Select **Other** as the framework if Vercel asks. This static homepage does not need a build command or an install command.
4. Deploy and open the Vercel-provided URL to review the homepage.
5. Changes committed to the connected GitHub branch can trigger a new deployment. Review the result in Vercel.

The existing website can remain live while the new site is developed on the Vercel URL. Connect the main domain only after the new website is ready and checked.

## Images and fonts

The current homepage references the original logo and project photographs on `alexometals.com`, and loads fonts from Google Fonts. These external resources require an internet connection.

**Before connecting the main domain to Vercel**, copy the required images into the repository, for example under an `assets/images/` folder, and update every image URL in `index.html` to the new local file paths. Otherwise, images requested from the old WordPress paths may stop working after the domain switches to the new site. Verify the photographs and logo after moving them. The assets folder and image copies have not yet been created.

## Other pages and links

Homepage navigation and buttons point to paths such as `/about-us/`, `/our-products/`, `/projects/`, and `/contact-us/`. Those pages have not yet been supplied as part of this project, so links to them may return a 404 on the Vercel preview until the corresponding pages are added. Product and project links also need their own pages.

As each page is created, preserve the existing URL path where practical. For example, a static page for `/about-us/` can be placed at `about-us/index.html`. Review existing URLs and create appropriate redirects before launch if any paths change.

The quote buttons currently link to the planned Contact page. A working enquiry form will require a separate form service or server-side integration; the homepage itself does not process submissions.

## Before launch

- Complete and check all pages and links on desktop and mobile.
- Move the logo and photographs into the repository and verify they load.
- Confirm the business address, telephone numbers, email and other claims.
- Set up and test the contact form, if included.
- Check important existing URLs and prepare redirects where needed.
- Connect `alexometals.com` in the Vercel project and follow the domain and DNS instructions shown there. Check both the root domain and `www`, and preserve any existing email-related DNS records.
- Test the site and contact methods after the domain connection.

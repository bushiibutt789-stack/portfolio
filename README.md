# Your Name — AI Fluency Portfolio

A four-page static site: Home, About, Projects (image gallery), Contact (working form).
No build tools, no framework, no backend server — just HTML, CSS, and vanilla JavaScript.

## File map (what each thing does)

```
index.html          Home page
about.html           About Me page
projects.html        Projects/Work gallery page
contact.html         Contact page
css/style.css        ALL styling for every page (colors, fonts, layout, gallery, form)
js/gallery.js         Opens/closes the image lightbox on projects.html
js/contact.js         Sends the contact form without reloading the page
images/*.svg          Placeholder project thumbnails — replace with your own screenshots
```

Every page loads the same `css/style.css`, so changing a color or font in one place
(the `:root { }` block at the top of that file) updates the whole site.

## Before you deploy: 3 things to do

1. **Replace placeholder text.** Search each `.html` file for "Your Name," "[Your Name],"
   and "Project title" — swap in your real name and project details.

2. **Replace placeholder images.** Drop your real screenshots into `images/` and update
   the `src="images/..."` and `data-full="images/..."` attributes in `projects.html`
   to point at your files. Keep image file sizes reasonably small (under ~500KB each)
   so the gallery loads fast.

3. **Wire up the contact form (this is the "dynamic" part):**
   - Go to https://formspree.io and sign up free (50 submissions/month on the free tier).
   - Create a new form; Formspree gives you a URL like `https://formspree.io/f/abcd1234`.
   - Open `contact.html`, find `action="https://formspree.io/f/YOUR_FORMSPREE_ID"`,
     and replace `YOUR_FORMSPREE_ID` with your real ID.
   - That's the entire backend: Formspree receives the POST request from your form
     and emails it to you. You are not running or maintaining a server.
   - (Alternative: https://web3forms.com works the same way if you prefer it.)

## Deploying to GitHub Pages (free hosting)

1. Create a free GitHub account at https://github.com if you don't have one.
2. Create a new repository — name it something like `portfolio`.
3. Upload all the files in this folder to that repository (keep the folder structure:
   `css/`, `js/`, `images/` as subfolders — don't flatten them).
4. In the repository, go to **Settings → Pages**.
5. Under "Source," choose the `main` branch and `/ (root)` folder, then Save.
6. GitHub gives you a live URL, usually `https://yourusername.github.io/portfolio/`,
   live within a minute or two.
7. Any time you edit a file and re-upload it (or `git push` if you're using Git from
   the command line), the live site updates automatically within a minute.

## How to explain this project (for interviews or conversations)

- **It's static** — every page is a plain HTML file with no server-side code. That's
  why it's free to host and simple to maintain.
- **One shared stylesheet** (`css/style.css`) uses CSS custom properties (the `--bg`,
  `--accent` variables) so the whole site's look is controlled from one place.
- **The gallery lightbox** (`js/gallery.js`) is vanilla JavaScript: it listens for
  clicks on thumbnails, and swaps the `src` of one hidden `<img>` element instead of
  creating a new pop-up each time.
- **The contact form is "dynamic" without a backend I wrote** — the form POSTs to
  Formspree, a third-party service that handles receiving and emailing the submission.
  `js/contact.js` just uses `fetch()` so the page doesn't reload when you hit send.
- **Hosting is free and static** via GitHub Pages, which serves the files directly
  from the repository — no server to configure or pay for.

## Maintaining it going forward

- New project? Copy one `<article class="entry">...</article>` block in
  `projects.html`, paste it, and edit the text/image/tags.
- Want a different accent color? Change `--accent-warm` (or `--accent`) at the top of
  `css/style.css` — it updates links, tags, and hover states everywhere.
- Broke something? Since there's no build step, you can always open the `.html` file
  directly in a browser to preview changes before uploading.

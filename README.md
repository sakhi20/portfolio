# Sakhi Patel — Personal Portfolio

Static portfolio site with three distinct worlds: a landing page, The Lab (data/ML), and The Studio (art).

## Deploy to GitHub Pages

1. Push this entire folder to a GitHub repository (e.g. `portfolio`)
2. Go to **Settings → Pages**
3. Under **Source**, select **Deploy from a branch**
4. Choose `main` branch, root folder `/`, and click **Save**
5. Your site will be live at: `https://[your-username].github.io/[repo-name]/`

No build step. No npm. Just upload and go.

## Local preview

Open `index.html` directly in a browser, or run any static file server:

```bash
# Python 3
python3 -m http.server 8080

# Node (if you have npx)
npx serve .
```

Then visit `http://localhost:8080`.

## Adding artwork

Replace the placeholder `<div class="art-piece">` elements in `studio.html` with:

```html
<div class="art-piece" style="height: 360px;">
  <img src="./assets/art/your-painting.jpg" alt="Description" style="width:100%;height:100%;object-fit:cover;" />
</div>
```

Drop image files into `assets/art/`.

## File structure

```
index.html        Landing page
lab.html          The Lab — data & ML portfolio
studio.html       The Studio — art gallery
css/
  base.css        CSS variables, resets, shared utilities
  landing.css
  lab.css
  studio.css
js/
  landing.js      Entrance animation + page transitions
  lab.js          Particle canvas + scroll reveal
  studio.js       Custom cursor + gallery reveal
assets/
  art/            Drop painting images here
```

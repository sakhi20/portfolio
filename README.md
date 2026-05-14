# Sakhi Patel — Personal Portfolio

Two-page static portfolio for GitHub Pages. No build step. No dependencies. Open `index.html` in a browser to preview locally.

## Pages

| File | URL | Description |
|------|-----|-------------|
| `index.html` | `sakhi20.github.io` | Tech portfolio — data science, ML, experience |
| `art.html` | `sakhi20.github.io/art.html` | Art portfolio — paintings gallery |

## Images

Place your art images in the `images/` folder with these exact filenames:

| Filename | Painting |
|----------|----------|
| `portrait.jpg` | Bride (chalk & pencil portrait) |
| `girl-rose.jpg` | Walking (gouache) |
| `still-life.jpg` | Green Study (pastels still life) |
| `lion.jpg` | Sovereign (acrylic lion) — also used as hero background |
| `landscape.jpg` | Somewhere Quieter (acrylic landscape) |

## Deploy to GitHub Pages

**Step 1** — Create a GitHub repo named exactly **`sakhi20.github.io`**

**Step 2** — Clone and add your files:
```bash
git clone https://github.com/sakhi20/sakhi20.github.io.git
cd sakhi20.github.io
```

**Step 3** — Copy all portfolio files into the repo root. Your folder should look like:
```
sakhi20.github.io/
├── index.html
├── index.css
├── index.js
├── art.html
├── art.css
├── art.js
└── images/
    ├── portrait.jpg
    ├── girl-rose.jpg
    ├── still-life.jpg
    ├── lion.jpg
    └── landscape.jpg
```

**Step 4** — Commit and push:
```bash
git add .
git commit -m "Initial portfolio"
git push origin main
```

**Step 5** — Enable GitHub Pages:  
Go to **Settings → Pages → Source** → set branch to `main`, folder to `/ (root)` → click **Save**.

**Step 6** — Your site is live at:
- `https://sakhi20.github.io` — tech portfolio
- `https://sakhi20.github.io/art.html` — art portfolio

> GitHub Pages may take 1–3 minutes to go live on first deploy. Subsequent pushes update within seconds.

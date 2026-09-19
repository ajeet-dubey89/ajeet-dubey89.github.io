# Ajeet Dubey — DevOps Portfolio

Animated static portfolio for GitHub Pages.

## Files

- `index.html` — page structure and content
- `styles.css` — responsive UI, animations and visual effects
- `script.js` — particles, scroll reveal, navigation, terminal clock and project modals
- `assets/profile.jpeg` — supplied profile image

## Run locally

From this directory:

```bash
python -m http.server 8080
```

Open `http://localhost:8080`.

## Deploy to GitHub Pages

Repository:

`ajeet-dubey89.github.io`

Push the files to the `main` branch and configure:

- Settings → Pages
- Source → Deploy from a branch
- Branch → `main`
- Folder → `/ (root)`

## Replace the profile image

Keep the filename:

`assets/profile.jpeg`

or update the `<img>` path in `index.html`.

## Notes

The project cards are intentionally marked `PLANNED` until the corresponding public repositories exist. Update those labels and add repository links as real projects are completed.

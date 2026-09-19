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


## v3 layout update

The hero was tightened to keep the supplied profile photograph in a controlled circular frame and preserve the dashboard/terminal composition on desktop. The page remains responsive and the portrait scales down further at tablet/mobile widths.


## V4 dashboard update

The hero dashboard now uses logo-backed AWS, Azure, Kubernetes, Terraform, Docker and Linux tiles plus GitHub and LinkedIn icons. Icons use Simple Icons through a CDN with a JavaScript text fallback, while the supplied profile image remains local at `assets/profile.jpeg`.


## v5 — bundled icons

Technology and social icons are bundled under `assets/icons/`, so the portfolio no longer depends on the Simple Icons CDN for the dashboard, GitHub, LinkedIn, Docker, or Linux marks. This makes the local preview and GitHub Pages deployment more deterministic.

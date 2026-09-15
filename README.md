# tehseenarbab.com

Static site, no build step. `index.html`, `style.css`, `script.js`.

## Deploy — GitHub + Cloudflare Pages

1. Push this folder to a new GitHub repo.
2. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git → pick the repo.
3. Build settings: **Framework preset: None**, **Build command: (leave blank)**, **Build output directory: /**
4. Deploy. Add your custom domain under the project's Custom domains tab once it's live.

## Edit later

- Copy in `index.html`, colors/fonts in `style.css` under `:root`.
- Case studies are plain `<article class="case">` blocks — copy/paste one to add another.

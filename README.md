# tehseenarbab.com

One self-contained file: `index.html`. CSS and JS are inline, so there's
nothing else to keep in sync — no more risk of an old stylesheet or script
getting left behind on a re-upload.

## Deploy — GitHub + Cloudflare Pages

1. In your GitHub repo, delete every existing file except this README
   (index.html, style.css, script.js, index2.html, etc. — anything left
   over from earlier versions).
2. Add file → Upload files → drag in this index.html. Commit.
3. Cloudflare dashboard → Workers & Pages → your project → it redeploys
   automatically on the push. Give it a minute, then hard-refresh
   (Ctrl+Shift+R / Cmd+Shift+R) the live site.

## Updating later

Always **edit index.html in place** on GitHub (pencil icon → edit → commit)
rather than uploading a new copy — that's what caused the duplicate-file
mess before. If you're editing locally instead, just overwrite the same
file and push; don't rename it.

## Editing content

Everything is in one file, top to bottom in this order: hero, "why me",
services, case studies, tools, contact. Case studies are `<article
class="case">` blocks in the `#cases` section — copy one to add another.

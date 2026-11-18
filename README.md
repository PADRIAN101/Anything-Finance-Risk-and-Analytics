# My Notes — Minimal personal website

A beginner-friendly static website inspired by the clean, text-first structure of etlq.github.io. This is an original starter design with placeholder writing, not a copy of the original site's text or branding.

## Files

- `index.html` — homepage, article list, project list
- `style.css` — layout, font, colors, and mobile styling
- `script.js` — light/dark mode toggle with remembered preference
- `about/index.html` — About page
- `articles/first-post/index.html` — sample article
- `articles/learning-notes/index.html` — sample article

## Preview on your computer

Unzip this archive, then double-click the top-level `index.html` file to open it in a browser. For an optional local web server, open a terminal in this folder and run `python3 -m http.server 8000`, then open http://localhost:8000.

## Customize

1. Replace `My Notes` in every HTML file with your website title.
2. Edit the introduction and links in the top-level `index.html`.
3. Edit `about/index.html` with your name and biography.
4. Replace the example text inside both sample articles.
5. Change colors and layout in `style.css` (`:root` and `:root[data-theme="dark"]`).
6. If you change the title, edit the browser tab `<title>` in each HTML file too.

### Add a new article

1. Create a new folder `articles/my-new-post/`.
2. Copy `articles/first-post/index.html` into it.
3. Change the heading, title, and article content.
4. Add `<li><a href="articles/my-new-post/">My new post</a></li>` to the article list in the homepage's `index.html`.
5. Keep the article's stylesheet path `../../style.css`, script path `../../script.js`, and home links `../../` because it is two folders below the root.

## Publish with GitHub Pages (web browser only)

1. Sign in to https://github.com.
2. Click **+** > **New repository**.
3. Name the repository **YOUR_GITHUB_USERNAME.github.io** (replace with your *exact* username). Select **Public**, then create it.
4. Open the repository, select **Add file** > **Upload files**. Unzip the downloaded ZIP and upload the **contents of** `minimal-personal-website/`, not the ZIP and not the enclosing folder. Make sure `index.html` appears at the repository's top level. GitHub's browser upload of folders may vary; you can drag the unzipped contents from your file manager into the upload area. Alternatively create files with **Add file** > **Create new file** and use paths such as `about/index.html`.
5. Commit the files to the `main` branch.
6. In **Settings** > **Pages**, choose **Deploy from a branch**; select `main` and `/ (root)`, then save. If the site is already auto-enabled, use the existing setting.
7. Your site will appear at `https://YOUR_GITHUB_USERNAME.github.io/` after GitHub Pages deploys it. You can check deployment status under **Actions** or **Settings** > **Pages**.

For project repositories with other names, relative links also work with a GitHub Pages subpath.

## Updating later

Open an HTML file on GitHub, click the edit pencil, change the text, and choose **Commit changes**. GitHub Pages will republish the updated site.

## Privacy

This starter site has no analytics, ads, tracking scripts, or external JavaScript dependencies. The theme preference is saved in your browser's local storage.

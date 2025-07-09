# Guidance for Collaborators: How to Edit

If you are a collaborator and you'd like to make changes to the website, please follow this guide.

---

## Editing existing pages
All webpages are written in markdown and automatically rendered. To edit an existing page, find it in the `docs/` directory, edit, and commit your changes to Git.

Every time you commit to the `main` Git branch, the live website will automatically update. You might need to give it a couple of minutes to see the changes.

> [!NOTE]
> If you need to make larger edits, consider setting up a Git branch first. This means you can commit your changes without them automatically going live. Run `git switch -c <your-branch-name>`, make your changes, and then merge with main when you're ready.

---

## Adding new pages
To add new pages, you need to do two things:

 1. Create a new file inside the `docs/` directory, and call it something like `new-page.md`.
 2. Head to `mkdocs.yml`, and add your page to the navigation bar.

---

## Preview changes before going live

If you'd like to see your changes before pushing them to the live website, follow these instructions:

 1. First, install [uv](https://docs.astral.sh/uv/getting-started/installation/). This is a dependency management tool.
 2. Run `uv sync` in your terminal.
 3. Again in your terminal, run `uv run mkdocs serve`. This creates a local URL (e.g. http://127.0.0.1:8000). Paste this link into your browser, and you'll see the Connected Health website with your draft changes.

---

## Adding in new features

The mkdocs-material framework this website uses has really good [documentation](https://squidfunk.github.io/mkdocs-material/setup/), which you can follow if you want to do something a bit fancier. 

Occassionally, the documentation might instruct you to install some plugins (e.g. like mkdocs-glightbox). Although it _says_ to install them via `pip install`, please ignore this. Follow the above instructions to install `uv` (points 1 & 2) and instead run:

```bash
uv add <plugin-name>
```

For example:

```bash
uv add mkdocs-glightbox
```

---

## Things not to touch

Please never manually edit the `uv.lock` file, as this is auto-generated. 

Don't modify the CNAME file, as this is what links the repo to our custom domain.

---

## If you need help

Reach out to Sam on samoand@liverpool.ac.uk :)
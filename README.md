# vios.science Website

This repository contains the source code for the `vios.science` website.

This README is mainly for people in the group who want to contribute content to the website, whether that means fixing a typo, suggesting new content, updating a bio, or improving publication entries.

## Table of Contents

- [How to Contribute](#how-to-contribute)
- [Fix Text, Grammar, or Typos](#fix-text-grammar-or-typos)
- [Suggest or Add Content](#suggest-or-add-content)
- [Update a Team Bio](#update-a-team-bio)
- [Update Publication Links or Assets](#update-publication-links-or-assets)
- [Other Content You Can Update](#other-content-you-can-update)
- [Adding Assets](#adding-assets)
- [Run the Website Locally](#run-the-website-locally)
- [Build and Preview](#build-and-preview)

## How to Contribute

Small contributions are welcome. If you notice a typo, unclear wording, outdated information, or a missing link, please feel free to open a pull request.

If you are not comfortable editing the site directly, you can still suggest changes by opening an issue or by contacting the maintainers with the text, links, or files you would like added.

## Fix Text, Grammar, or Typos

For small wording fixes, update the relevant content file and open a pull request.

Most website text lives in one of these places:

- `src/content/team/` for team biographies
- `src/content/news/` for news posts
- `src/content/tutorials/` for tutorials
- `src/content/pages/` for standalone pages such as `research.mdx` or `alumni.mdx`
- `src/data/projects.json` for project listings

If you are unsure where some text comes from, searching the repository for a short phrase from the page is usually the fastest way to find it.

## Suggest or Add Content

Suggestions for new content are welcome, including:

- new pages or updates to existing pages
- news items
- project updates
- corrections to team information
- missing links, PDFs, or publication images

If you want to add the content yourself, edit the relevant file and open a pull request. If you would rather just propose the change, send the text and any supporting links or files to the maintainers.

## Update a Team Bio

Team bios are stored as Markdown files in `src/content/team/`.

To update a bio:

1. Edit the existing `.md` file for that person, or create a new one in `src/content/team/`.
2. Update the frontmatter fields at the top of the file.
3. Update the body text below the frontmatter with the biography.
4. If needed, add or replace the profile image in `public/assets/images/team/`.

Useful frontmatter fields include:

- `title`
- `role`
- `subtitle`
- `profile`
- `linkedin`
- `scholar`
- `twitter`
- `github`
- `CV`
- `order`
- `permalink`

Example:

```yaml
---
title: "First Last"
role: "student"
subtitle: "PhD Student"
profile: "first-last.jpg"
github: "https://github.com/username"
linkedin: "https://linkedin.com/in/username"
scholar: "https://scholar.google.com/citations?user=example"
twitter: "https://twitter.com/username"
CV: "/assets/pdfs/first-last-cv.pdf"
order: 999
collection: team
permalink: /team/first-last
---
Short biographical text goes here.
```

Notes:

- `profile` should be the filename only. The website reads team images from `public/assets/images/team/`.
- The biography text is written below the frontmatter in normal Markdown.
- `order` controls display order on the team page. Lower numbers appear first.

## Update Publication Links or Assets

Publication entries are stored in `src/data/publications.yaml`.

Core publication metadata is generated from the separate [Publication Lists](https://github.com/vios-s/publication-lists) repository and synced into this website repository automatically.

What you should usually edit here:

- `image`
- `code`
- `pdf`

What you should usually not edit here:

- `title`
- `authors`
- `venue`
- `date`

Those core fields are normally managed by the publication-sync workflow and may be overwritten by future updates unless a manual correction is intentionally needed.

Assets should be added here:

- publication images: `public/assets/images/publications/`
- publication PDFs: `public/assets/pdfs/`

Example publication entry:

```yaml
- title: Paper Title
  authors: Author A, Author B
  venue: Conference or Journal Name
  date: 'YYYY-MM-DD'
  website: https://doi.org/...
  image: /assets/images/publications/example.png
  pdf: /assets/pdfs/example.pdf
  code: https://github.com/org/repo
```

Notes:

- `website`, `image`, `pdf`, and `code` are optional.
- Paths inside `public/` should be written as website paths, such as `/assets/pdfs/example.pdf`.
- If a publication needs a true metadata correction, make that change deliberately and mention it clearly in the pull request so maintainers know it is meant to override the synced value.

## Other Content You Can Update

### News

News posts live in `src/content/news/`. Add or edit Markdown or MDX files with frontmatter such as `title` and `date`.

### Tutorials

Tutorials live in `src/content/tutorials/`. Useful frontmatter fields include `title`, `description`, `summary`, `date`, `teaser`, and `author`.

### Pages

Standalone pages live in `src/content/pages/`. Examples include `research.mdx`, `join_us.mdx`, and `alumni.mdx`.

### Projects

Projects are listed in `src/data/projects.json`.

Example project entry:

```json
{
  "title": "Project Title",
  "funder": "Funder Name",
  "short_funder": "Short Funder Name",
  "team": "Team structure",
  "timeline": "MM/YY - MM/YY",
  "url": "Project link"
}
```

## Adding Assets

Static assets such as images and PDFs should be placed inside `public/`.

Examples:

- `public/assets/images/team/`
- `public/assets/images/publications/`
- `public/assets/pdfs/`

Anything in `public/` is served from the site root. For example, `public/assets/image.jpg` becomes `/assets/image.jpg`.

## Run the Website Locally

From the root of the project:

```sh
npm install
npm run dev
```

The local site runs at `http://localhost:4321`.

## Build and Preview

To test a production build locally:

```sh
npm run build
npm run preview
```

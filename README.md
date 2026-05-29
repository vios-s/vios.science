# vios.science Website

This repository contains the source code for the `vios.science` website.

This README is mainly for people in the group who want to contribute content to the website, whether that means fixing a typo, suggesting new content, updating a bio, or improving publication entries.

## Table of Contents

- [How to Contribute](#how-to-contribute)
- [Fix Text, Grammar, or Typos](#fix-text-grammar-or-typos)
- [Suggest or Add Content](#suggest-or-add-content)
- [Update a Team Bio](#update-a-team-bio)
- [Update Publication Links or Assets](#update-publication-links-or-assets)
- [Host Static Project Pages](#host-static-project-pages)
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
- `page`
- `pdf`
- `display: false` to hide generated entries from the website

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
  page: /proj/example-project/
  image: /assets/images/publications/example.png
  pdf: /assets/pdfs/example.pdf
  code: https://github.com/org/repo
```

Notes:

- `website`, `page`, `image`, `pdf`, and `code` are optional.
- `display: false` hides a publication from website publication lists. Use it for generated entries that should stay in the data file but should not appear publicly, such as duplicates or incorrectly generated papers. The publication sync preserves extra fields like this when the generated title and date still match the existing entry.
- Paths inside `public/` should be written as website paths, such as `/assets/pdfs/example.pdf`.
- Use `page` for a publication-specific project page. If the page is hosted in this repository, use a path such as `/proj/example-project/`.
- If a publication needs a true metadata correction, make that change deliberately and mention it clearly in the pull request so maintainers know it is meant to override the synced value.

## Host Static Project Pages

Static project pages can be added under `public/proj/`.

Use this when you want `vios.science` to host a standalone paper or project website, such as:

```text
https://vios.science/proj/example-project/
```

Use this naming convention for the project folder:

```text
{venue}_{year}_{name}_{shortname}
```

For example, `MIDL_2026_Kostas_Anat-LDM` becomes:

```text
https://vios.science/proj/MIDL_2026_Kostas_Anat-LDM/
```

The fields mean:

- `venue`: short venue name, such as `MIDL`, `MICCAI`, `CVPR`, `NeurIPS`, or `TMI`
- `year`: publication or conference year
- `name`: lead VIOS contributor name, such as `Kostas`
- `shortname`: short project or paper name, such as `Anat-LDM`

You usually need to prepare five things:

1. A stable URL slug using the naming convention above.
2. One static HTML entry point, for example `public/proj/MIDL_2026_Kostas_Anat-LDM/index.html`.
3. Any page-specific assets, for example images, CSS, JavaScript, or small downloads.
4. A `page` field on the related publication entry in `src/data/publications.yaml`.
5. A local build and preview check before opening the pull request.

Recommended folder layout:

```text
public/proj/example-project/
|-- index.html
`-- assets/
    |-- figure-1.png
    |-- figure-2.png
    `-- teaser.jpg
```

In your HTML, use root-relative paths for assets so the page works with or without a trailing slash:

```html
<img src="/proj/example-project/assets/figure-1.png" alt="Short figure description">
<link rel="stylesheet" href="/proj/example-project/assets/style.css">
<script src="/proj/example-project/assets/script.js" defer></script>
```

Avoid paths like `assets/figure-1.png` unless you have tested both `/proj/example-project` and `/proj/example-project/`. Relative paths can break when the trailing slash is missing.

To link the page from the publication list, first check whether the paper already exists on `/publications/` or in `src/data/publications.yaml`.

If the paper already exists, add only the `page` field to the matching entry:

```yaml
- title: Paper Title
  authors: Author A, Author B
  venue: Conference or Journal Name
  date: 'YYYY-MM-DD'
  website: https://doi.org/...
  page: /proj/example-project/
```

Do not edit generated fields such as `title`, `authors`, `venue`, or `date` unless you are intentionally correcting metadata.

If the paper does not exist yet, add a new publication entry with the core metadata and the `page` field:

```yaml
- title: Paper Title
  authors: Author A, Author B
  venue: Conference or Journal Name
  date: 'YYYY-MM-DD'
  website: https://doi.org/...
  page: /proj/example-project/
  image: null
  code: null
  pdf: null
```

In the pull request, mention that this is a new publication entry. Core publication metadata is normally synced from the separate [Publication Lists](https://github.com/vios-s/publication-lists) repository, so maintainers may also need to add the paper there to keep future syncs stable.

Keep the trailing slash in `page`. The website will show a `Page` button for that publication.

Before committing, test the page locally:

```sh
npm install
npm run build
npm run preview
```

The preview server prints a local URL, usually `http://localhost:4321`. Check these pages in your browser:

- `http://localhost:4321/proj/example-project/`
- `http://localhost:4321/proj/example-project`
- `http://localhost:4321/publications/`

Confirm the following before opening a pull request:

- The project page loads at both URLs, with and without the trailing slash.
- All images, CSS, JavaScript, and downloads load correctly.
- The publication entry shows a `Page` button.
- The `Page` button opens the project page.
- The page works on a narrow mobile browser width.
- `npm run build` finishes successfully.

Your pull request should include:

- the new `public/proj/example-project/` folder
- the `page: /proj/example-project/` update in `src/data/publications.yaml`
- any assets needed by the page
- a short note that you ran `npm run build`
- a screenshot or local preview link if useful for review

Anything in `public/proj/example-project/` is served unchanged at `/proj/example-project/`, so keep project pages self-contained and avoid relying on files outside the project folder unless they are shared site assets.

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

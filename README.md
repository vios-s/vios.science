# vios.science Website

This project is built using [Astro](https://astro.build/) and contains the website source code for vios.science.

## 🚀 Getting Started

To run the project locally, run the following commands in the terminal from the root of the project:

```sh
# 1. Install dependencies
npm install

# 2. Start the local development server
npm run dev
```

Your site will be running at `http://localhost:4321`.

### Build & Preview
To test a production build before deploying:
```sh
npm run build
npm run preview
```

## 📝 How to Maintain Content

The site uses Astro Content Collections for typed, easily maintainable data. All the main site content is located in the `src/content/` directory. 

### 👥 Team Members (`src/content/team/`)
To add or update a team member, create/edit a `.md` file in the `src/content/team/` directory.

**Example frontmatter:**
```yaml
---
title: "First Last"
role: "none" # or another role
subtitle: "PhD Student"
profile: "filename.jpg" # image stored in public/assets/
github: "https://github.com/username"
linkedin: "https://linkedin.com/in/username"
collection: team
permalink: /team/first
---
Biographical text goes here...
```

### 🗞️ News (`src/content/news/`)
Add Markdown files for news updates. Include `title` and `date` in the frontmatter.

### 📚 Publications (`src/content/publications/`)
Add Markdown files for papers. Ensure the frontmatter includes:
```yaml
---
title: "Paper Title"
authors: "Author A, Author B"
venue: "Conference/Journal Name"
date: "YYYY-MM-DD"
link: "https://link-to-paper..."
---
```

### 💻 Tutorials (`src/content/tutorials/`)
Add Markdown files for tutorials. Useful frontmatter properties: `title`, `description`, `date`, `author`.

### 📄 Static Pages (`src/content/pages/`)
Markdown and Markdown (MDX) content for standalone pages. E.g., `alumni.mdx`. Uses `title` in frontmatter.

### 🔬 Projects (`src/data/projects.json`)
The projects (both ongoing and completed) are listed in `src/data/projects.json`. Edit this JSON file to add new projects. 
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

## 🖼️ Adding Assets and Images
Static assets such as images and PDFs should be placed inside the `public/` directory (e.g., in `public/assets/`). Anything in `public/` is served at the root URL (for example, `public/assets/image.jpg` is accessible at `/assets/image.jpg`).

## 🛠 Project Structure

```text
/
├── public/                 # Static assets (images, icons)
├── src/
│   ├── components/         # Reusable UI components
│   ├── content/            # Markdown data collections (team, news, etc.)
│   ├── data/               # JSON data (like projects.json)
│   ├── layouts/            # Page layouts
│   └── pages/              # Astro routing (.astro pages)
├── astro.config.mjs        # Astro configuration
└── package.json            # Dependencies and scripts
```

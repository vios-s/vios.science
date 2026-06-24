# Editing the VIOS Website

All website content lives in **Markdown files** under `src/content/`. You can edit them directly on GitHub without cloning the repo.

## Quick Edit via GitHub

1. Go to the file on GitHub (links below)
2. Click the **pencil icon** (Edit this file) in the top-right
3. Make your changes
4. Click **Commit changes...**, add a short description, and commit

The site will rebuild and deploy automatically after your commit.

## Content Locations

| What | GitHub Path | Example |
|------|------------|---------|
| **Team profiles** | [`src/content/team/`](https://github.com/vios-s/vios.science/tree/main/src/content/team) | `sotos.md`, `yuyang.md` |
| **News posts** | [`src/content/news/`](https://github.com/vios-s/vios.science/tree/main/src/content/news) | `2024-02-06-hub.mdx` |
| **Projects** | [`src/content/projects/`](https://github.com/vios-s/vios.science/tree/main/src/content/projects) | `cardiacai.mdx` |
| **Tutorials** | [`src/content/tutorials/`](https://github.com/vios-s/vios.science/tree/main/src/content/tutorials) | `diffusion2024.mdx` |
| **Other pages** | [`src/content/pages/`](https://github.com/vios-s/vios.science/tree/main/src/content/pages) | `alumni.mdx`, `research.mdx` |
| **Team photos** | [`public/assets/images/team/`](https://github.com/vios-s/vios.science/tree/main/public/assets/images/team) | `sotos.jpg`, `yuyang.png` |

## How to Edit Your Team Profile

Your profile page is at `https://vios.science/team/<shortname>` (e.g., `/team/sotos`).

Direct edit link: `https://github.com/vios-s/vios.science/edit/main/src/content/team/<shortname>.md`

Each profile file has two parts:

```markdown
---
title: "Your Full Name"
role: "phd"                          # staff | postdoc | phd | sde | visiting | alumni
subtitle: "PhD Student"
profile: "yourname.png"              # photo filename in public/assets/images/team/
order: 10                            # lower = appears first in the listing

linkedin: "https://linkedin.com/in/..."
scholar: "https://scholar.google.com/..."
twitter: "https://twitter.com/..."
github: "https://github.com/..."
CV: "/assets/pdfs/your_cv.pdf"       # optional, put the PDF in public/assets/pdfs/

collection: team
permalink: /team/yourname
---

Your biography goes here in plain Markdown. You can use **bold**, *italic*,
[links](https://example.com), and any standard Markdown formatting.
```

### Updating your photo

1. Go to [`public/assets/images/team/`](https://github.com/vios-s/vios.science/tree/main/public/assets/images/team)
2. Click **Add file > Upload files**
3. Upload your photo (square crop recommended, JPG or PNG)
4. Make sure the `profile:` field in your `.md` file matches the filename

## How to Add a News Post

1. Go to [`src/content/news/`](https://github.com/vios-s/vios.science/tree/main/src/content/news)
2. Click **Add file > Create new file**
3. Name it `YYYY-MM-DD-short-title.mdx` (e.g., `2026-06-24-new-paper.mdx`)
4. Use this template:

```markdown
---
title: Your News Title
date: 2026-06-24
---

Your news content here. Supports standard Markdown.
```

## How to Add a New Team Member

1. Go to [`src/content/team/`](https://github.com/vios-s/vios.science/tree/main/src/content/team)
2. Click **Add file > Create new file**
3. Name it `shortname.md` (this becomes the URL: `/team/shortname`)
4. Use the team profile template above
5. Upload a profile photo to [`public/assets/images/team/`](https://github.com/vios-s/vios.science/tree/main/public/assets/images/team)

## Role Values

| Role value | Section on team page |
|------------|---------------------|
| `staff` or `director` | Principal Investigators & Staff |
| `postdoc` or `researcher` | Postdoctoral Researchers |
| `phd` or `student` | PhD Researchers |
| `sde` | Engineers |
| `visiting` | Visiting Researchers & Students |
| `alumni` | Alumni |

## Tips

- File names become URL slugs: `sotos.md` becomes `/team/sotos`
- News files are sorted by the `date:` field in frontmatter
- Team members are sorted by the `order:` field (lower number = higher on page)
- Use `.md` for plain Markdown, `.mdx` for Markdown with JSX components
- The `---` block at the top (frontmatter) must be valid YAML

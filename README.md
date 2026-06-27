# Rishi Rana Portfolio

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/License-Unlicensed-lightgrey)

A clean, responsive personal portfolio for Rishi Rana, a Frontend Developer and Software Development student. It highlights selected projects, experience, education, skills, and a downloadable resume in a polished single-page layout.

## Overview

This portfolio is built to feel fast, focused, and easy to scan. The design emphasizes strong typography, smooth motion, reusable components, and a direct path to the resume and contact links.

## Highlights

- Animated hero section with typewriter text and subtle motion effects.
- Project showcase with featured cards and smaller supporting projects.
- Dedicated About, Experience, Education, and Contact sections.
- Responsive layout tuned for desktop and mobile.
- Resume download from the hero section using the PDF in `public/`.

## Tech Stack

- React
- Vite
- Tailwind CSS
- Framer Motion
- React Icons

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |

## Resume

The downloadable resume lives at [public/Rishi_Rana_Resume.pdf](public/Rishi_Rana_Resume.pdf) and is linked from the hero section.

## Project Structure

```text
├── index.html
├── package.json
├── public/
│   └── Rishi_Rana_Resume.pdf
├── scripts/
│   └── generate_resume_pdf.py
└── src/
    ├── App.jsx
    ├── index.css
    ├── main.jsx
    └── components/
        ├── About.jsx
        ├── Contact.jsx
        ├── Experience.jsx
        ├── Hero.jsx
        ├── Navbar.jsx
        ├── ProjectCard.jsx
        ├── Projects.jsx
        └── SkillTag.jsx
```

## Content Sections

- Hero with CTA buttons and animated role text.
- About section with a short bio and skills.
- Projects section with featured work and supporting projects.
- Experience and education timeline.
- Contact section with email and social links.

## Updating Content

- Edit the page copy in the files under `src/components/`.
- Replace the resume PDF in `public/` when you update your CV.
- Update project links inside `src/components/Projects.jsx`.

## License

No license has been added yet.

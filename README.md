# Rishi Rana Portfolio

A modern personal portfolio built with React and Vite. It presents my background as a Frontend Developer and Software Development student, showcases selected projects, highlights experience and education, and includes a downloadable resume.

## Features

- Animated hero section with typewriter text and smooth motion effects.
- Project showcase with featured and smaller project cards.
- About, experience, education, and contact sections.
- Responsive layout designed for desktop and mobile.
- Resume download from the portfolio itself.

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

### Install

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

## Resume

The downloadable resume is stored in `public/Rishi_Rana_Resume.pdf` and is linked from the hero section.

## Project Structure

```text
├── index.html
├── package.json
├── public/
│   └── Rishi_Rana_Resume.pdf
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

## Notes

- The site is built as a single-page portfolio.
- The resume button in the hero section points to the PDF in `public/`.
- You can update the content in the component files under `src/components/`.

## License

No license has been added yet.

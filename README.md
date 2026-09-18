# Portafolio — Facundo Benítez

Portafolio personal con diseño neobrutalista, construido con React, TypeScript, Tailwind CSS y Framer Motion.

## Stack

- [Vite](https://vite.dev) + React 19 + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) (config vía `@theme` en `src/index.css`, sin `tailwind.config.js`)
- [Framer Motion](https://motion.dev) para animaciones y scroll reveal
- [lucide-react](https://lucide.dev) para iconografía
- ESLint + Prettier

## Correr en local

```bash
npm install
npm run dev
```

Abre `http://localhost:5173`.

## Editar contenido

Todo el contenido (perfil, skills, experiencia, educación, proyectos) vive en `src/data/*.ts`. No hace falta tocar los componentes para actualizar textos:

- `src/data/profile.ts` — nombre, rol, contacto, bio, disponibilidad
- `src/data/skills.ts` — stack técnico agrupado por categoría
- `src/data/experience.ts` — experiencia laboral, educación y certificaciones
- `src/data/projects.ts` — proyectos (título, descripción, stack, links)

Para reemplazar el CV descargable, sobrescribí `public/cv.pdf` (actualmente es un placeholder).

## Scripts

```bash
npm run dev       # servidor de desarrollo
npm run build     # type-check + build de producción a dist/
npm run preview   # sirve el build de dist/ localmente
npm run lint      # ESLint
npm run format    # Prettier (escribe los cambios)
```

## Deploy

### Vercel

```bash
npm install -g vercel
vercel
```

O conectá el repo directamente desde [vercel.com](https://vercel.com) — detecta Vite automáticamente (build command `npm run build`, output `dist`).

### Netlify

Build command: `npm run build`
Publish directory: `dist`

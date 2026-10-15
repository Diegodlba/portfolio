# Portfolio QA & Desarrollo

Hecho con React + Vite, desplegado en GitHub Pages.

## Qué editar
| Archivo | Qué contiene |
|---|---|
| `src/data/profile.js` | Tu nombre, bio y enlaces de contacto |
| `src/data/projects.js` | Proyectos QA (repo, Trello, informe) y de desarrollo |
| `src/data/cvs.js` | Lista de CV |
| `public/cv/` | Los PDF de tus CV |

## Desarrollo local
```bash
npm install
npm run dev
```

## Publicar en GitHub Pages
1. Creá el repo (si se llama `tu-usuario.github.io`, queda en la raíz del dominio).
2. Subí el código a la rama `main`.
3. En el repo: **Settings → Pages → Source: GitHub Actions**.
4. Cada push a `main` despliega automáticamente.

> Si el repo NO se llama `tu-usuario.github.io`, cambiá `base` en `vite.config.js` a `"/nombre-del-repo/"`.

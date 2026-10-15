import { cvs } from "../data/cvs.js";

export default function CvSection() {
  // BASE_URL respeta la configuración "base" de vite.config.js
  const base = import.meta.env.BASE_URL;

  return (
    <section className="grid">
      {cvs.map((cv) => (
        <article className="card" key={cv.file}>
          <h3>{cv.title}</h3>
          <p>{cv.description}</p>
          <div className="tags">
            <span className="tag">{cv.language}</span>
            <span className="tag">PDF</span>
          </div>
          <div className="links">
            <a href={base + cv.file} target="_blank" rel="noopener noreferrer">👁️ Ver</a>
            <a href={base + cv.file} download>⬇️ Descargar</a>
          </div>
        </article>
      ))}
    </section>
  );
}

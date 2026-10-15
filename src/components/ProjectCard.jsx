export default function ProjectCard({ project }) {
  const { title, description, tags = [], repo, trello, report, extra = [] } = project;

  const links = [
    repo && { label: "📁 Repositorio", url: repo },
    trello && { label: "📋 Trello", url: trello },
    report && { label: "📊 Informe de pruebas", url: report },
    ...extra,
  ].filter(Boolean);

  return (
    <article className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="tags">
        {tags.map((t) => (
          <span className="tag" key={t}>{t}</span>
        ))}
      </div>
      <div className="links">
        {links.map((l) => (
          <a key={l.label} href={l.url} target="_blank" rel="noopener noreferrer">
            {l.label}
          </a>
        ))}
      </div>
    </article>
  );
}

import { useState } from "react";
import { profile } from "./data/profile.js";
import { qaProjects, devProjects } from "./data/projects.js";
import ProjectCard from "./components/ProjectCard.jsx";
import CvSection from "./components/CvSection.jsx";

const TABS = [
  { id: "qa", label: "🧪 Proyectos QA" },
  { id: "dev", label: "💻 Proyectos Desarrollo" },
  { id: "cv", label: "📄 Mi CV" },
];

export default function App() {
  const [tab, setTab] = useState("qa");

  return (
    <main className="wrap">
      <header>
        <h1>Hola, soy {profile.name}</h1>
        <p className="role">{profile.title}</p>
        <p className="sub">{profile.bio}</p>
      </header>

      <nav className="tabs" aria-label="Secciones">
        {TABS.map((t) => (
          <button
            key={t.id}
            className={"tab" + (tab === t.id ? " on" : "")}
            onClick={() => setTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </nav>

      {tab === "qa" && (
        <section className="grid">
          {qaProjects.map((p) => <ProjectCard key={p.title} project={p} />)}
        </section>
      )}
      {tab === "dev" && (
        <section className="grid">
          {devProjects.map((p) => <ProjectCard key={p.title} project={p} />)}
        </section>
      )}
      {tab === "cv" && <CvSection />}

      <footer>
        Contacto: <a href={profile.github}>GitHub</a> ·{" "}
        <a href={profile.linkedin}>LinkedIn</a> ·{" "}
        <a href={"mailto:" + profile.email}>{profile.email}</a>
      </footer>
    </main>
  );
}

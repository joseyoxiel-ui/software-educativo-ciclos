/** Laboratorio de Señales: lecciones editoriales conectadas por estados, ejemplos y acciones verificables. */
import { useState } from "react";
import { Check, ChevronDown, CircleDot, Clock3, TerminalSquare } from "lucide-react";
import AppShell from "@/components/AppShell";
import { modules } from "@/data/curriculum";
import { useLearningProgress } from "@/hooks/useLearningProgress";

export default function Modules() {
  const [openTopic, setOpenTopic] = useState("1-0");
  const { completedModules, markModuleComplete } = useLearningProgress();

  return (
    <AppShell>
      <div className="page-content curriculum-page">
        <header className="page-header">
          <div><span className="eyebrow dark"><i /> Ruta curricular</span><h1>Ciclos: del código a la infraestructura</h1></div>
          <p>Avanza por tres módulos conectados. Cada concepto incluye teoría, su relación con el ciclo y un ejemplo técnico observable.</p>
        </header>

        <div className="curriculum-list">
          {modules.map((module) => (
            <section className="curriculum-module" id={`modulo-${module.id}`} key={module.id}>
              <div className="module-index"><span>{module.code}</span><i /><small>{module.duration}</small></div>
              <div className="curriculum-main">
                <div className="curriculum-title">
                  <div><span>{module.eyebrow}</span><h2>{module.title}</h2><p>{module.description}</p></div>
                  <div className="curriculum-badge"><Clock3 size={16} /> {module.topics.length} unidades</div>
                </div>
                <div className="topic-list">
                  {module.topics.map((topic, index) => {
                    const key = `${module.id}-${index}`;
                    const open = openTopic === key;
                    return (
                      <article className={`topic-item ${open ? "topic-open" : ""}`} key={topic.title}>
                        <button onClick={() => setOpenTopic(open ? "" : key)} aria-expanded={open}>
                          <span>{String(index + 1).padStart(2, "0")}</span><strong>{topic.title}</strong><ChevronDown size={18} />
                        </button>
                        {open && (
                          <div className="topic-content">
                            <p>{topic.summary}</p>
                            <blockquote><CircleDot size={17} /><span><strong>Conexión con el ciclo</strong>{topic.cycleConnection}</span></blockquote>
                            <div className="code-example"><TerminalSquare size={17} /><pre>{topic.example}</pre></div>
                          </div>
                        )}
                      </article>
                    );
                  })}
                </div>
                <button className={`complete-module ${completedModules.includes(module.id) ? "completed" : ""}`} onClick={() => markModuleComplete(module.id)} disabled={completedModules.includes(module.id)}>
                  <Check size={17} /> {completedModules.includes(module.id) ? "Módulo completado" : "Marcar módulo como completado"}
                </button>
              </div>
            </section>
          ))}
        </div>
      </div>
    </AppShell>
  );
}

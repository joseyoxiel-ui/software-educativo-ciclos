/** Laboratorio de Señales: portada asimétrica que conecta misión, módulos y telemetría de progreso. */
import { ArrowRight, BookOpen, CheckCircle2, Clock3, FlaskConical, Gauge, RadioTower } from "lucide-react";
import { Link } from "wouter";
import AppShell from "@/components/AppShell";
import { modules } from "@/data/curriculum";
import { useLearningProgress } from "@/hooks/useLearningProgress";

export default function Home() {
  const { completion, completedModules, bestScore, examsTaken } = useLearningProgress();

  return (
    <AppShell>
      <div className="page-content home-page">
        <div className="page-kicker"><span>Panel de control</span><b>SEMESTRE · 01</b></div>

        <section className="hero-section">
          <img className="hero-image" src="/manus-storage/loopnet-hero-lab-v2_1ab9f727.png" alt="Laboratorio abstracto de ciclos de código, red y telemetría" />
          <div className="hero-overlay" />
          <div className="hero-copy">
            <span className="eyebrow"><i /> Ruta activa · Fundamentos</span>
            <h1>Observa cada vuelta.<br /><em>Controla el ciclo.</em></h1>
            <p>Aprende programación, redes y automatización siguiendo la señal: desde una variable que cambia hasta una trama que nunca debe recircular.</p>
            <div className="hero-actions">
              <Link href="/simuladores" className="button button-primary">Abrir laboratorio <ArrowRight size={18} /></Link>
              <Link href="/modulos" className="button button-ghost">Ver ruta curricular</Link>
            </div>
          </div>
          <div className="hero-readout"><span>PROGRESO</span><strong>{completion}%</strong><div><i style={{ width: `${completion}%` }} /></div></div>
        </section>

        <section className="telemetry-strip" aria-label="Resumen de aprendizaje">
          <article><span className="metric-icon"><BookOpen size={20} /></span><div><small>Módulos completados</small><strong>{completedModules.length}<em>/ 3</em></strong></div></article>
          <article><span className="metric-icon"><Gauge size={20} /></span><div><small>Mejor evaluación</small><strong>{bestScore}<em>/ 10</em></strong></div></article>
          <article><span className="metric-icon"><FlaskConical size={20} /></span><div><small>Intentos registrados</small><strong>{examsTaken}<em> sesiones</em></strong></div></article>
          <article><span className="metric-icon"><RadioTower size={20} /></span><div><small>Estado PWA</small><strong className="metric-text">Disponible offline</strong></div></article>
        </section>

        <section className="section-block">
          <div className="section-heading">
            <div><span className="eyebrow dark"><i /> Ruta curricular</span><h2>Tres escalas del mismo fenómeno</h2></div>
            <p>El concepto de ciclo reaparece como estructura lógica, flujo de comunicación y operación automatizada.</p>
          </div>
          <div className="module-grid">
            {modules.map((module) => (
              <article className={`module-card module-${module.color}`} key={module.id}>
                <div className="module-visual"><img src={module.image} alt="" /><span>{module.code}</span>{completedModules.includes(module.id) && <b><CheckCircle2 size={16} /> Completado</b>}</div>
                <div className="module-body">
                  <p>{module.eyebrow}</p>
                  <h3>{module.title}</h3>
                  <span>{module.description}</span>
                  <div className="module-meta"><span><Clock3 size={15} /> {module.duration}</span><span>{module.topics.length} unidades</span></div>
                  <Link href={`/modulos#modulo-${module.id}`}>Explorar módulo <ArrowRight size={16} /></Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="signal-callout">
          <div className="signal-loop"><i /><i /><i /><span>∞</span></div>
          <div><span className="panel-code">PRINCIPIO TRANSVERSAL</span><h2>Todo ciclo necesita estado, retorno y salida.</h2><p>Si puedes ver qué cambia en cada vuelta, puedes diseñar el comportamiento y diagnosticar sus fallos.</p></div>
          <Link href="/evaluacion" className="button button-dark">Comprobar dominio <ArrowRight size={18} /></Link>
        </section>
      </div>
    </AppShell>
  );
}

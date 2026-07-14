/** Laboratorio de Señales: documentación técnica presentada como un plano operativo legible. */
import { CloudOff, Database, Gauge, Layers3, MonitorSmartphone, ServerCog } from "lucide-react";
import AppShell from "@/components/AppShell";

const stack = [
  { layer: "Frontend", technology: "React 19 + TypeScript + Tailwind CSS 4", reason: "Componentes mantenibles, tipado de contenidos y una interfaz adaptable a móvil, tableta y escritorio.", icon: MonitorSmartphone },
  { layer: "Navegación", technology: "Wouter", reason: "Enrutamiento cliente ligero para módulos, simuladores y evaluación sin recargar la aplicación.", icon: Layers3 },
  { layer: "Persistencia", technology: "localStorage", reason: "Conserva módulos completados y resultados en el dispositivo, incluso sin conexión.", icon: Database },
  { layer: "Caching", technology: "Service Worker + Cache Storage", reason: "Precarga la interfaz y aplica una estrategia cache-first para recursos educativos estáticos.", icon: CloudOff },
  { layer: "Entrega", technology: "Vite + PWA estática", reason: "Carga rápida, compilación optimizada y despliegue compatible con hosting estático.", icon: Gauge },
  { layer: "Evolución", technology: "API y base de datos opcionales", reason: "La arquitectura permite incorporar autenticación y sincronización institucional sin reemplazar el cliente.", icon: ServerCog },
];

export default function Architecture() {
  return (
    <AppShell>
      <div className="page-content architecture-page">
        <header className="page-header">
          <div><span className="eyebrow dark"><i /> Plano técnico</span><h1>Arquitectura PWA orientada al aula</h1></div>
          <p>El núcleo funciona completamente en el navegador. La aplicación se instala, conserva el progreso local y mantiene disponibles los recursos ya almacenados.</p>
        </header>
        <section className="architecture-flow">
          <div className="flow-node"><span>01</span><strong>Interfaz React</strong><small>Aprendizaje y simulación</small></div><i />
          <div className="flow-node"><span>02</span><strong>Service Worker</strong><small>Control de solicitudes</small></div><i />
          <div className="flow-node"><span>03</span><strong>Cache Storage</strong><small>Recursos offline</small></div><i />
          <div className="flow-node"><span>04</span><strong>Persistencia local</strong><small>Progreso y resultados</small></div>
        </section>
        <section className="stack-table">
          <div className="stack-head"><span>Capa</span><span>Tecnología</span><span>Justificación educativa y técnica</span></div>
          {stack.map(({ layer, technology, reason, icon: Icon }) => <article key={layer}><span><Icon size={19} /> {layer}</span><strong>{technology}</strong><p>{reason}</p></article>)}
        </section>
        <section className="pwa-rationale">
          <span className="panel-code">DECISIÓN DE PLATAFORMA</span><h2>¿Por qué una PWA para entornos académicos?</h2>
          <div><article><strong>Un único cliente</strong><p>La misma base funciona en equipos de laboratorio, dispositivos personales y móviles sin mantener aplicaciones separadas.</p></article><article><strong>Continuidad sin conexión</strong><p>El alumno puede consultar módulos, ejecutar simuladores y conservar su avance cuando la conectividad es limitada.</p></article><article><strong>Instalación controlada</strong><p>El navegador ofrece instalación sin una tienda y mantiene el software actualizado al recuperar conexión.</p></article></div>
          <blockquote>La primera carga requiere conexión para almacenar el núcleo. A partir de entonces, el service worker sirve la interfaz desde caché y actualiza recursos cuando existe red.</blockquote>
        </section>
      </div>
    </AppShell>
  );
}

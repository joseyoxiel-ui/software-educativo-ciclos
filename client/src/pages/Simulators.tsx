/** Laboratorio de Señales: dos instrumentos interactivos convierten la teoría en consecuencias visibles. */
import AppShell from "@/components/AppShell";
import CodeLoopSimulator from "@/components/CodeLoopSimulator";
import NetworkLoopSimulator from "@/components/NetworkLoopSimulator";

export default function Simulators() {
  return (
    <AppShell>
      <div className="page-content simulators-page">
        <header className="page-header compact">
          <div><span className="eyebrow dark"><i /> Laboratorio interactivo</span><h1>Manipula el ciclo. Observa la consecuencia.</h1></div>
          <p>Avanza una línea de Python o inyecta una trama Ethernet. El estado interno siempre permanece visible.</p>
        </header>
        <CodeLoopSimulator />
        <NetworkLoopSimulator />
      </div>
    </AppShell>
  );
}

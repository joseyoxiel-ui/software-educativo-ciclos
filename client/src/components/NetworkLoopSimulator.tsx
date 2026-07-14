/** Laboratorio de Señales: la topología hace visible el ciclo físico y la decisión lógica de STP. */
import { useEffect, useState } from "react";
import { Activity, Radio, RotateCcw, ShieldCheck, TriangleAlert } from "lucide-react";
import { Switch } from "@/components/ui/switch";

export default function NetworkLoopSimulator() {
  const [stp, setStp] = useState(true);
  const [running, setRunning] = useState(false);
  const [frames, setFrames] = useState(0);

  useEffect(() => {
    if (!running) return;
    const timer = window.setInterval(() => {
      setFrames((current) => {
        if (stp && current >= 6) { setRunning(false); return 6; }
        return stp ? current + 1 : Math.min(current + Math.max(2, Math.ceil(current / 3)), 999);
      });
    }, 450);
    return () => window.clearInterval(timer);
  }, [running, stp]);

  const toggleStp = (enabled: boolean) => { setStp(enabled); setFrames(0); setRunning(false); };

  return (
    <section className={`simulator-panel network-simulator ${!stp ? "storm" : ""}`} aria-labelledby="network-simulator-title">
      <div className="simulator-heading">
        <div><span className="panel-code">SIM · 02</span><h2 id="network-simulator-title">Topología LAN redundante</h2></div>
        <label className="stp-switch"><span>STP {stp ? "activo" : "desactivado"}</span><Switch checked={stp} onCheckedChange={toggleStp} /></label>
      </div>

      <div className="network-stage">
        <div className="topology" aria-label="Tres switches conectados en triángulo">
          <div className="link link-a"><span className={running ? "packet packet-a" : ""} /></div>
          <div className="link link-b"><span className={running ? "packet packet-b" : ""} /></div>
          <div className={`link link-c ${stp ? "blocked-link" : ""}`}><span className={running && !stp ? "packet packet-c" : ""} /></div>
          <div className="switch-node node-root"><small>ROOT</small><strong>SW-01</strong><span>32768 · 00:01</span></div>
          <div className="switch-node node-left"><small>EDGE</small><strong>SW-02</strong><span>RP · FWD</span></div>
          <div className="switch-node node-right"><small>EDGE</small><strong>SW-03</strong><span>{stp ? "ALT · BLK" : "DP · FWD"}</span></div>
          {stp && <div className="blocked-port"><i /> Puerto bloqueado</div>}
          {!stp && running && <><i className="storm-ring ring-one" /><i className="storm-ring ring-two" /></>}
        </div>

        <aside className="network-telemetry">
          <div className="telemetry-status">
            {stp ? <ShieldCheck size={24} /> : <TriangleAlert size={24} />}
            <div><span>Estado del dominio</span><strong>{stp ? "Estable" : "Riesgo de tormenta"}</strong></div>
          </div>
          <div className="telemetry-number"><span>Tramas observadas</span><strong>{frames}</strong></div>
          <div className="telemetry-number"><span>Puertos bloqueados</span><strong>{stp ? 1 : 0}</strong></div>
          <div className="telemetry-number"><span>Caminos activos</span><strong>{stp ? 2 : 3}</strong></div>
          <p>{stp ? "STP elimina el ciclo lógico sin retirar el enlace redundante." : "Sin un puerto bloqueado, cada broadcast puede replicarse y volver al origen."}</p>
        </aside>
      </div>

      <div className="sim-controls">
        <button className="control-primary" onClick={() => setRunning(true)}><Radio size={17} /> Inyectar broadcast</button>
        <button onClick={() => { setFrames(0); setRunning(false); }}><RotateCcw size={17} /> Limpiar</button>
        <p><Activity size={15} /> Alterna STP y compara el crecimiento del tráfico.</p>
      </div>
    </section>
  );
}

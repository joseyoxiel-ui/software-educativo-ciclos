/** Laboratorio de Señales: cada iteración debe mostrar su estado, trayectoria y condición de salida. */
import { useEffect, useMemo, useState } from "react";
import { Pause, Play, RotateCcw, StepForward } from "lucide-react";

type Mode = "for" | "while";

const programs = {
  for: [
    { line: 1, index: "—", value: "—", condition: "inicio", output: "[]" },
    { line: 2, index: "0", value: "10.0.0.1", condition: "hay elemento", output: "[]" },
    { line: 3, index: "0", value: "10.0.0.1", condition: "respuesta=True", output: "[10.0.0.1]" },
    { line: 2, index: "1", value: "10.0.0.2", condition: "hay elemento", output: "[10.0.0.1]" },
    { line: 3, index: "1", value: "10.0.0.2", condition: "respuesta=False", output: "[10.0.0.1]" },
    { line: 2, index: "2", value: "10.0.0.3", condition: "hay elemento", output: "[10.0.0.1]" },
    { line: 3, index: "2", value: "10.0.0.3", condition: "respuesta=True", output: "[10.0.0.1, 10.0.0.3]" },
    { line: 2, index: "3", value: "—", condition: "fin de secuencia", output: "[10.0.0.1, 10.0.0.3]" },
  ],
  while: [
    { line: 1, index: "—", value: "0", condition: "inicio", output: "[]" },
    { line: 2, index: "1", value: "1", condition: "1 < 4", output: "[intento 1]" },
    { line: 3, index: "2", value: "2", condition: "2 < 4", output: "[intento 1, intento 2]" },
    { line: 4, index: "2", value: "2", condition: "continue", output: "[intento 1, intento 2]" },
    { line: 2, index: "3", value: "3", condition: "3 < 4", output: "[intento 1, intento 2, intento 3]" },
    { line: 2, index: "4", value: "4", condition: "4 < 4 = False", output: "[intento 1, intento 2, intento 3]" },
  ],
};

const code = {
  for: ["activos = []", "for ip in ips:", "    if ping(ip): activos.append(ip)"],
  while: ["intento = 0", "while intento < 4:", "    intento += 1", "    if intento == 2: continue"],
};

export default function CodeLoopSimulator() {
  const [mode, setMode] = useState<Mode>("for");
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const sequence = useMemo(() => programs[mode], [mode]);
  const state = sequence[step];

  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(() => {
      setStep((current) => {
        if (current >= sequence.length - 1) {
          setPlaying(false);
          return current;
        }
        return current + 1;
      });
    }, 900);
    return () => window.clearInterval(timer);
  }, [playing, sequence.length]);

  const changeMode = (next: Mode) => { setMode(next); setStep(0); setPlaying(false); };
  const next = () => setStep((current) => Math.min(current + 1, sequence.length - 1));
  const reset = () => { setStep(0); setPlaying(false); };

  return (
    <section className="simulator-panel" aria-labelledby="code-simulator-title">
      <div className="simulator-heading">
        <div><span className="panel-code">SIM · 01</span><h2 id="code-simulator-title">Depurador visual de ciclos</h2></div>
        <div className="mode-switch" role="group" aria-label="Tipo de bucle">
          <button className={mode === "for" ? "active" : ""} onClick={() => changeMode("for")}>for</button>
          <button className={mode === "while" ? "active" : ""} onClick={() => changeMode("while")}>while</button>
        </div>
      </div>

      <div className="debugger-grid">
        <div className="code-console" aria-label="Código Python">
          <div className="console-bar"><i /><i /><i /><span>loop_debug.py</span></div>
          <pre>{code[mode].map((line, index) => <code key={line} className={state.line === index + 1 ? "code-active" : ""}><em>{index + 1}</em>{line}</code>)}</pre>
        </div>
        <div className="state-monitor">
          <p className="monitor-title">Estado de la iteración <span>{step}/{sequence.length - 1}</span></p>
          <div className="state-row"><span>Índice</span><strong>{state.index}</strong></div>
          <div className="state-row"><span>Valor</span><strong>{state.value}</strong></div>
          <div className="state-row"><span>Condición</span><strong>{state.condition}</strong></div>
          <div className="state-output"><span>Salida acumulada</span><code>{state.output}</code></div>
          <div className="cycle-meter"><span style={{ transform: `rotate(${Math.min(270, step * (270 / (sequence.length - 1)))}deg)` }} /><b>{Math.round((step / (sequence.length - 1)) * 100)}%</b></div>
        </div>
      </div>

      <div className="sim-controls">
        <button className="control-primary" onClick={() => setPlaying((value) => !value)}>{playing ? <Pause size={17} /> : <Play size={17} />} {playing ? "Pausar" : "Ejecutar"}</button>
        <button onClick={next} disabled={step >= sequence.length - 1}><StepForward size={17} /> Siguiente vuelta</button>
        <button onClick={reset}><RotateCcw size={17} /> Reiniciar</button>
        <p>La línea activa y las variables cambian en cada paso.</p>
      </div>
    </section>
  );
}

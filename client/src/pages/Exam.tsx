/** Laboratorio de Señales: evaluación aleatoria con retroalimentación técnica y progreso persistente. */
import { useMemo, useState } from "react";
import { CheckCircle2, ChevronRight, ClipboardCheck, RefreshCw, XCircle } from "lucide-react";
import AppShell from "@/components/AppShell";
import { buildRandomExam, practiceBank, theoryBank, type ExamItem } from "@/data/curriculum";
import { useLearningProgress } from "@/hooks/useLearningProgress";

export default function Exam() {
  const [exam, setExam] = useState<ExamItem[]>(() => buildRandomExam());
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [finished, setFinished] = useState(false);
  const { saveExamScore } = useLearningProgress();
  const current = exam[index];
  const selected = answers[current?.id];
  const score = useMemo(() => exam.filter((item) => answers[item.id] === item.answer).length, [answers, exam]);

  const finish = () => { setFinished(true); saveExamScore(score); };
  const restart = () => { setExam(buildRandomExam()); setIndex(0); setAnswers({}); setFinished(false); };

  if (finished) {
    return (
      <AppShell><div className="page-content exam-page"><section className="exam-result">
        <span className="result-ring">{score}<small>/10</small></span>
        <div><span className="eyebrow dark"><i /> Resultado registrado</span><h1>{score >= 8 ? "Ciclo dominado" : score >= 6 ? "Señal estable" : "Revisa la trayectoria"}</h1><p>La evaluación combinó cinco reactivos teóricos y cinco retos prácticos elegidos sin repetición dentro del intento.</p></div>
        <div className="result-actions"><button className="button button-primary" onClick={restart}><RefreshCw size={17} /> Generar otro examen</button><span>Nuevo conjunto aleatorio de 10 reactivos</span></div>
        <div className="review-list">{exam.map((item, itemIndex) => { const correct = answers[item.id] === item.answer; return <article key={item.id}><span>{correct ? <CheckCircle2 /> : <XCircle />}</span><div><small>{item.id} · {item.bank}</small><strong>{itemIndex + 1}. {item.prompt}</strong><p>{item.explanation}</p></div></article>; })}</div>
      </section></div></AppShell>
    );
  }

  return (
    <AppShell>
      <div className="page-content exam-page">
        <header className="page-header compact">
          <div><span className="eyebrow dark"><i /> Motor adaptativo</span><h1>Evaluación sin repetición lineal</h1></div>
          <div className="bank-summary"><span><strong>{theoryBank.length}</strong> teoría</span><i /><span><strong>{practiceBank.length}</strong> práctica</span></div>
        </header>
        <section className="exam-workspace">
          <aside className="exam-index">
            <span>EXAMEN · ACTIVO</span><strong>{String(index + 1).padStart(2, "0")}<small>/10</small></strong>
            <div>{exam.map((item, itemIndex) => <button key={item.id} className={`${itemIndex === index ? "active" : ""} ${answers[item.id] !== undefined ? "answered" : ""}`} onClick={() => setIndex(itemIndex)}>{itemIndex + 1}</button>)}</div>
            <p><ClipboardCheck size={16} /> Selección local y aleatoria</p>
          </aside>
          <div className="question-panel">
            <div className="question-meta"><span>{current.bank}</span><span>Módulo {current.module}</span><span>{current.id}</span></div>
            <h2>{current.prompt}</h2>
            {current.code && <pre className="question-code"><code>{current.code}</code></pre>}
            <div className="option-list">{current.options.map((option, optionIndex) => <button key={option} className={selected === optionIndex ? "selected" : ""} onClick={() => setAnswers((value) => ({ ...value, [current.id]: optionIndex }))}><span>{String.fromCharCode(65 + optionIndex)}</span>{option}</button>)}</div>
            <div className="question-footer"><span>{Object.keys(answers).length} de 10 respondidas</span>{index < 9 ? <button disabled={selected === undefined} onClick={() => setIndex((value) => value + 1)}>Siguiente reactivo <ChevronRight size={18} /></button> : <button className="finish-button" disabled={Object.keys(answers).length < 10} onClick={finish}>Calificar examen <CheckCircle2 size={18} /></button>}</div>
          </div>
        </section>
      </div>
    </AppShell>
  );
}

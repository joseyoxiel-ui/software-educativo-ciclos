/** Laboratorio de Señales: el progreso se conserva localmente para sostener el aprendizaje offline. */
import { useEffect, useMemo, useState } from "react";

type StoredProgress = {
  completedModules: number[];
  bestScore: number;
  examsTaken: number;
};

const initialProgress: StoredProgress = { completedModules: [], bestScore: 0, examsTaken: 0 };

export function useLearningProgress() {
  const [progress, setProgress] = useState<StoredProgress>(() => {
    try {
      return JSON.parse(localStorage.getItem("loopnet-progress") || "null") || initialProgress;
    } catch {
      return initialProgress;
    }
  });

  useEffect(() => {
    localStorage.setItem("loopnet-progress", JSON.stringify(progress));
  }, [progress]);

  const completion = useMemo(
    () => Math.round((progress.completedModules.length / 3) * 100),
    [progress.completedModules],
  );

  return {
    ...progress,
    completion,
    markModuleComplete: (id: number) =>
      setProgress((current) => ({
        ...current,
        completedModules: Array.from(new Set([...current.completedModules, id])),
      })),
    saveExamScore: (score: number) =>
      setProgress((current) => ({
        ...current,
        bestScore: Math.max(current.bestScore, score),
        examsTaken: current.examsTaken + 1,
      })),
  };
}

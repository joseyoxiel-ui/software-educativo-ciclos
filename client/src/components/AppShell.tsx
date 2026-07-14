/** Laboratorio de Señales: navegación asimétrica, estados visibles y controles con respuesta instrumental. */
import { useEffect, useState, type ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { BookOpen, Braces, CircuitBoard, ClipboardCheck, Download, Home, Menu, Wifi, WifiOff, X, Zap } from "lucide-react";
import { useLearningProgress } from "@/hooks/useLearningProgress";

const navItems = [
  { href: "/", label: "Panel", icon: Home },
  { href: "/modulos", label: "Módulos", icon: BookOpen },
  { href: "/simuladores", label: "Simuladores", icon: CircuitBoard },
  { href: "/evaluacion", label: "Evaluación", icon: ClipboardCheck },
  { href: "/arquitectura", label: "Arquitectura", icon: Braces },
];

type DeferredPrompt = Event & { prompt: () => Promise<void>; userChoice: Promise<{ outcome: string }> };

export default function AppShell({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  const [online, setOnline] = useState(navigator.onLine);
  const [installPrompt, setInstallPrompt] = useState<DeferredPrompt | null>(null);
  const { completion } = useLearningProgress();

  useEffect(() => {
    const updateOnline = () => setOnline(navigator.onLine);
    const captureInstall = (event: Event) => {
      event.preventDefault();
      setInstallPrompt(event as DeferredPrompt);
    };
    window.addEventListener("online", updateOnline);
    window.addEventListener("offline", updateOnline);
    window.addEventListener("beforeinstallprompt", captureInstall);
    return () => {
      window.removeEventListener("online", updateOnline);
      window.removeEventListener("offline", updateOnline);
      window.removeEventListener("beforeinstallprompt", captureInstall);
    };
  }, []);

  const install = async () => {
    if (!installPrompt) return;
    await installPrompt.prompt();
    await installPrompt.userChoice;
    setInstallPrompt(null);
  };

  return (
    <div className="app-frame">
      <header className="mobile-header">
        <Link href="/" className="brand-lockup">
          <img src="/manus-storage/loopnet-mark_7a9aed72.png" alt="Símbolo de LoopNet Academy" />
          <span>LoopNet <strong>Academy</strong></span>
        </Link>
        <button className="icon-button" aria-label="Abrir navegación" onClick={() => setOpen(true)}><Menu size={22} /></button>
      </header>

      <aside className={`sidebar ${open ? "sidebar-open" : ""}`}>
        <div className="sidebar-top">
          <Link href="/" className="brand-lockup" onClick={() => setOpen(false)}>
            <img src="/manus-storage/loopnet-mark_7a9aed72.png" alt="Símbolo de LoopNet Academy" />
            <span>LoopNet <strong>Academy</strong></span>
          </Link>
          <button className="icon-button sidebar-close" aria-label="Cerrar navegación" onClick={() => setOpen(false)}><X size={20} /></button>
          <p className="system-label"><span /> Sistema de aprendizaje activo</p>
        </div>

        <nav className="main-nav" aria-label="Navegación principal">
          {navItems.map((item) => {
            const active = location === item.href;
            const Icon = item.icon;
            return (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className={active ? "active" : ""}>
                <Icon size={18} strokeWidth={1.8} />
                <span>{item.label}</span>
                {active && <i />}
              </Link>
            );
          })}
        </nav>

        <div className="sidebar-status">
          <div className="progress-label"><span>Progreso local</span><strong>{completion}%</strong></div>
          <div className="progress-track"><span style={{ width: `${completion}%` }} /></div>
          <div className={`connectivity ${online ? "online" : "offline"}`}>
            {online ? <Wifi size={15} /> : <WifiOff size={15} />}
            <span>{online ? "Sincronización disponible" : "Modo offline activo"}</span>
          </div>
          {installPrompt && (
            <button className="install-button" onClick={install}><Download size={16} /> Instalar aplicación</button>
          )}
        </div>
      </aside>

      {open && <button className="sidebar-backdrop" aria-label="Cerrar navegación" onClick={() => setOpen(false)} />}

      <main className="workspace">
        <div className="workspace-rail">
          <span>LN</span><i /><Zap size={14} />
        </div>
        {children}
      </main>
    </div>
  );
}

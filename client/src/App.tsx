/** Laboratorio de Señales: rutas claras dentro de un instrumento educativo coherente. */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Modules from "./pages/Modules";
import Simulators from "./pages/Simulators";
import Exam from "./pages/Exam";
import Architecture from "./pages/Architecture";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/modulos" component={Modules} />
      <Route path="/simuladores" component={Simulators} />
      <Route path="/evaluacion" component={Exam} />
      <Route path="/arquitectura" component={Architecture} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

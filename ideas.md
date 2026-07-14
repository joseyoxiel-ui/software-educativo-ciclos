# Dirección de diseño — LoopNet Academy

## Exploración inicial

### Enfoque 1
**Theme Name:** Laboratorio de Señales

**Very Brief Intro:** Una interfaz de laboratorio técnico inspirada en diagramas de red, consolas de diagnóstico y cuadernos de ingeniería, con energía visual suficiente para sostener una experiencia educativa activa.

**Probability:** 0.037

### Enfoque 2
**Theme Name:** Cuaderno Cinético

**Very Brief Intro:** Un sistema editorial cálido donde anotaciones, flechas y bloques de código convierten cada lección en una página de estudio en movimiento.

**Probability:** 0.081

### Enfoque 3
**Theme Name:** Arcade de Protocolos

**Very Brief Intro:** Una experiencia lúdica de estética retrofuturista, con indicadores de misión, puntuaciones y módulos que recuerdan paneles de control de una máquina arcade técnica.

**Probability:** 0.024

## Enfoque elegido: Laboratorio de Señales

### Design Movement

**Neoindustrial editorial**, influido por paneles de instrumentación de redes, señalética técnica de los años setenta y composición editorial suiza, reinterpretado con una interfaz contemporánea de alto contraste.

### Core Principles

1. **La información se comporta como una señal:** cada estado, progreso y decisión debe tener una representación visual inequívoca.
2. **Asimetría funcional:** el contenido se organiza mediante carriles, paneles laterales y zonas de instrumentación, evitando la composición centrada genérica.
3. **Materialidad técnica:** líneas de circuito, retículas, etiquetas monoespaciadas y superficies oscuras aportan textura sin dificultar la lectura.
4. **Aprender es manipular:** las explicaciones siempre culminan en una acción observable, una simulación o una comprobación.

### Color Philosophy

La base **azul petróleo casi negra** reduce fatiga y evoca equipamiento de laboratorio. Los fondos marfil se reservan para superficies de lectura extensa. El **verde voltaje** identifica acciones, progreso y estados operativos; el coral de alerta se limita a errores, bucles peligrosos y tormentas de broadcast. La paleta comunica estado antes que decoración.

### Layout Paradigm

La aplicación adopta un **tablero de señales con carril lateral persistente**. El encabezado no domina la pantalla: la navegación principal vive en una barra lateral compacta, mientras el área de trabajo combina un carril editorial ancho y una columna de telemetría. En móvil, el carril se transforma en una banda superior y navegación inferior contextual.

### Signature Elements

1. **Trazas de ciclo:** líneas ortogonales con nodos luminosos que recorren tarjetas y conectan conceptos.
2. **Etiquetas de telemetría:** pequeñas cápsulas rectangulares monoespaciadas para estados, pasos y métricas.
3. **Anillos de iteración:** gráficos circulares incompletos que representan progreso, repetición y retorno.

### Interaction Philosophy

Las interacciones deben sentirse como operar un instrumento: respuesta inmediata, estados visibles y consecuencias reversibles. Los controles activos cambian de color y elevación; los simuladores muestran cada transición como un pulso de señal. Ninguna acción educativa importante queda sin confirmación visual.

### Animation

Las transiciones frecuentes duran entre **120 y 180 ms** y solo modifican opacidad y transformación. Los cambios de paso en simuladores usan pulsos de 220 ms y desplazamientos cortos de nodos. Las entradas de paneles se escalonan cada 45 ms. Los controles de teclado son instantáneos. Todo movimiento no esencial queda desactivado mediante `prefers-reduced-motion`.

### Typography System

**Space Grotesk** estructura títulos, cifras y navegación con personalidad geométrica. **IBM Plex Sans** se utiliza para cuerpo pedagógico y formularios por su legibilidad. **IBM Plex Mono** identifica código, direcciones IP, puertos, protocolos y telemetría. Los títulos usan peso 650–700, espaciado negativo moderado y saltos de línea intencionales; el cuerpo mantiene 16–18 px y altura de línea amplia.

### Brand Essence

**LoopNet Academy convierte conceptos recurrentes de código y redes en experimentos visibles para estudiantes técnicos que necesitan comprender haciendo.** Personalidad: **rigurosa, eléctrica, exploratoria**.

### Brand Voice

Los titulares son breves, activos y técnicos; los CTA describen la operación concreta. La microcopia explica qué cambia y por qué, sin lenguaje promocional vacío.

Ejemplos: **“Observa cada vuelta. Controla el ciclo.”** y **“Inyectar trama y seguir la señal”**.

### Wordmark & Logo

El símbolo combina **dos trazas ortogonales enlazadas** que forman un bucle incompleto y una letra “L” implícita. El wordmark utiliza una construcción geométrica personalizada con cortes en las letras “O” para sugerir puertos y ciclos; nunca se presenta como texto en una fuente predeterminada sin intervención.

### Signature Brand Color

**Verde Voltaje — `#B7F34A`**, reservado para acciones primarias, indicadores de avance y el pulso de la señal.

## Reglas de aplicación

Cada archivo de página, componente visual y hoja de estilos debe incluir al inicio una nota breve que recuerde cómo su composición refuerza el **Laboratorio de Señales**. Ante cualquier duda se aplicará la pregunta: **“¿Esta decisión refuerza o diluye nuestra filosofía de diseño?”**

## Style Decisions

**Regla global de composición:** cada ruta principal expone el carril persistente de control y telemetría junto con un área de trabajo asimétrica. Los bloques editoriales centrados solo existen dentro de ese carril de trabajo.

**Regla de Verde Voltaje:** `#B7F34A` se reserva para acciones primarias, progreso activo, pulsos de señal y estados operativos; no se utiliza como gran superficie decorativa.

**Regla del motivo de señal:** cada página incorpora al menos una traza ortogonal, una ruta de nodos o un anillo incompleto que conecta estados de contenido y refuerza el lenguaje LoopNet.

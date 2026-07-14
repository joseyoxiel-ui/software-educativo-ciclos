# LoopNet Academy

**LoopNet Academy** es una PWA educativa en español para estudiar el concepto de ciclo en tres escalas conectadas: estructuras iterativas en Python, comunicación y redundancia en redes, e integración mediante automatización y telemetría.

## Experiencia incluida

| Área | Funcionalidad |
|---|---|
| Ruta curricular | Tres módulos, doce unidades y explicaciones con ejemplos técnicos. |
| Simulador de código | Ejecución paso a paso de ciclos `for` y `while`, estado de variables y salida acumulada. |
| Simulador de red | Topología redundante, inyección de broadcast y comparación visual de STP activo/inactivo. |
| Evaluación | Examen aleatorio de diez preguntas generado a partir de bancos de teoría y práctica. |
| Progreso | Persistencia local de módulos completados, intentos y mejor resultado. |
| PWA | Manifiesto instalable, icono propio, caché mediante *service worker* y navegación offline tras la primera carga. |
| Responsive | Interfaz adaptada a escritorio, tableta y móvil. |

## Tecnologías

- React 19 y TypeScript.
- Vite 7.
- Tailwind CSS 4 y estilos propios.
- Wouter para enrutamiento.
- Lucide React para iconografía.
- `localStorage` para progreso educativo sin cuenta de usuario.

## Ejecución local

```bash
pnpm install
pnpm dev
```

La aplicación se abrirá en el puerto que indique Vite. Para comprobar la versión de producción:

```bash
pnpm check
pnpm build
pnpm start
```

## Arquitectura

```text
client/
├── public/                   # Manifiesto, service worker, icono y robots
└── src/
    ├── components/           # Shell, simuladores y componentes de interfaz
    ├── data/                 # Currículo y bancos de evaluación
    ├── hooks/                # Persistencia del progreso
    └── pages/                # Panel, módulos, laboratorio, examen y arquitectura
```

La sección **Arquitectura** de la propia aplicación documenta el flujo de aprendizaje, el almacenamiento local y la estrategia offline.

## Diseño

La identidad **Laboratorio de Señales** utiliza superficies petróleo y marfil, Verde Voltaje para estados operativos, telemetría monoespaciada y trazas ortogonales que conectan conceptos. Las decisiones completas están registradas en [`ideas.md`](./ideas.md).

## Licencia

El proyecto conserva la licencia MIT definida en `package.json`.

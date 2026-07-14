/** Laboratorio de Señales: contenido técnico estructurado como telemetría educativa. */

export type Topic = {
  title: string;
  summary: string;
  cycleConnection: string;
  example: string;
};

export type LearningModule = {
  id: number;
  code: string;
  title: string;
  eyebrow: string;
  description: string;
  duration: string;
  image: string;
  color: string;
  topics: Topic[];
};

export const modules: LearningModule[] = [
  {
    id: 1,
    code: "M01",
    title: "Bucles y estructuras iterativas",
    eyebrow: "Programación · Python",
    description: "Controla tareas repetitivas, observa el estado interno y evita ciclos que nunca terminan.",
    duration: "4 h 20 min",
    image: "/manus-storage/module-python-loops-v2_4c9b3500.png",
    color: "lime",
    topics: [
      {
        title: "Iteración como automatización",
        summary: "Una iteración ejecuta de nuevo un bloque con un estado actualizado. La secuencia entrada → operación → cambio de estado → verificación define cada vuelta.",
        cycleConnection: "El ciclo transforma una tarea manual repetida en una regla verificable.",
        example: "for intento in range(3): conectar()",
      },
      {
        title: "Bucles definidos: for",
        summary: "El bucle for recorre secuencias finitas: listas de IP, puertos, dispositivos o registros. El iterador identifica el elemento activo.",
        cycleConnection: "Cada elemento de la colección provoca una vuelta y el final de la colección cierra el ciclo.",
        example: "for ip in [\"10.0.0.1\", \"10.0.0.2\"]: ping(ip)",
      },
      {
        title: "Bucles condicionales: while",
        summary: "while repite mientras una condición sea verdadera. break interrumpe el recorrido y continue omite el resto de la vuelta actual.",
        cycleConnection: "La condición es el sensor que decide si la señal retorna o sale del circuito.",
        example: "while intentos < 5:\n    intentos += 1",
      },
      {
        title: "Optimización y seguridad",
        summary: "Los bucles anidados amplifican el trabajo. Una condición que no cambia puede producir un ciclo infinito y bloquear recursos.",
        cycleConnection: "Todo ciclo operativo necesita progreso medible y una condición de salida alcanzable.",
        example: "O(n) para un recorrido; O(n²) para dos recorridos anidados.",
      },
    ],
  },
  {
    id: 2,
    code: "M02",
    title: "Ciclos de comunicación en redes",
    eyebrow: "Ethernet · ARP · DHCP · STP",
    description: "Sigue una trama, provoca un bucle de capa 2 y comprueba cómo STP recupera la estabilidad.",
    duration: "5 h 10 min",
    image: "/manus-storage/module-network-stp-v2_32ea9786.png",
    color: "coral",
    topics: [
      {
        title: "Ciclo de una trama Ethernet",
        summary: "Los datos se encapsulan, se envían, atraviesan conmutadores y se desencapsulan en el destino. Las respuestas reinician el flujo en sentido inverso.",
        cycleConnection: "Cada comunicación completa un circuito de ida, procesamiento y retorno.",
        example: "Datos → segmento → paquete → trama → medio → desencapsulación",
      },
      {
        title: "Consulta y respuesta ARP",
        summary: "ARP difunde una consulta por una dirección IPv4 y recibe la MAC asociada, que después almacena temporalmente en caché.",
        cycleConnection: "Cuando la entrada caduca, el ciclo de descubrimiento vuelve a comenzar.",
        example: "Who has 192.168.1.1? → 192.168.1.1 is at AA:BB:CC:DD:EE:FF",
      },
      {
        title: "DHCP y el proceso DORA",
        summary: "Discover, Offer, Request y Acknowledge forman el intercambio de cuatro pasos que asigna configuración IP.",
        cycleConnection: "La renovación de la concesión reactiva periódicamente el ciclo de negociación.",
        example: "DISCOVER → OFFER → REQUEST → ACK",
      },
      {
        title: "Bucles de capa 2 y STP",
        summary: "Los enlaces redundantes pueden recircular tramas sin TTL y provocar tormentas de broadcast. STP calcula un árbol sin ciclos y bloquea puertos redundantes.",
        cycleConnection: "STP conserva la redundancia física, pero elimina lógicamente el camino circular.",
        example: "Root bridge → root ports → designated ports → alternate port bloqueado",
      },
    ],
  },
  {
    id: 3,
    code: "M03",
    title: "Integración y automatización",
    eyebrow: "Sockets · LAN · Telemetría",
    description: "Integra ciclos de código y red para escuchar conexiones, automatizar una LAN y medirla de forma continua.",
    duration: "4 h 45 min",
    image: "/manus-storage/module-automation-telemetry-v2_e957bac3.png",
    color: "blue",
    topics: [
      {
        title: "Servidores y sockets TCP",
        summary: "Un servidor prepara el socket, escucha y acepta conexiones repetidamente. Cada cliente activa una nueva vuelta del servicio.",
        cycleConnection: "while True mantiene disponible el punto de escucha hasta una señal explícita de apagado.",
        example: "while True:\n    cliente, direccion = servidor.accept()",
      },
      {
        title: "Automatización LAN",
        summary: "Un script aplica la misma operación a una colección de hosts: comprobar disponibilidad, abrir sesión o desplegar configuración.",
        cycleConnection: "for convierte el inventario de red en una secuencia de acciones reproducibles.",
        example: "for host in inventario: ejecutar_configuracion(host)",
      },
      {
        title: "Escaneo controlado",
        summary: "Un ping sweep itera únicamente por direcciones autorizadas y registra respuestas, latencia y errores sin ocultar el alcance de la operación.",
        cycleConnection: "Cada dirección constituye una vuelta; el resumen agrega el resultado del ciclo completo.",
        example: "for host in ip_network(\"192.168.10.0/29\").hosts(): comprobar(host)",
      },
      {
        title: "Telemetría recurrente",
        summary: "El polling consulta métricas ICMP o SNMP en intervalos definidos, conserva marcas de tiempo y dispara alertas ante cambios de estado.",
        cycleConnection: "Dormir → consultar → registrar → evaluar → repetir es un ciclo operativo observable.",
        example: "while activo: medir(); guardar(); sleep(60)",
      },
    ],
  },
];

export type ExamItem = {
  id: string;
  bank: "Teoría" | "Práctica";
  module: number;
  prompt: string;
  options: string[];
  answer: number;
  explanation: string;
  code?: string;
};

const theorySeeds: Omit<ExamItem, "id">[] = [
  { bank: "Teoría", module: 1, prompt: "¿Qué condición garantiza que un bucle while pueda terminar?", options: ["La condición cambia hacia un valor falso", "El cuerpo contiene print", "Existe una lista", "La variable es global"], answer: 0, explanation: "La condición debe poder evolucionar hasta falso o existir una interrupción alcanzable." },
  { bank: "Teoría", module: 1, prompt: "¿Qué representa la variable de control en un for?", options: ["El elemento activo de la secuencia", "La dirección MAC local", "El tamaño del programa", "El proceso padre"], answer: 0, explanation: "En cada vuelta, la variable recibe el siguiente elemento del iterable." },
  { bank: "Teoría", module: 1, prompt: "¿Cuál es el efecto de continue?", options: ["Omite el resto de la vuelta actual", "Finaliza el programa", "Reinicia Python", "Duplica el iterable"], answer: 0, explanation: "continue salta directamente a la siguiente comprobación o iteración." },
  { bank: "Teoría", module: 1, prompt: "¿Cuál es el coste típico de recorrer una lista una vez?", options: ["O(n)", "O(1)", "O(n²)", "O(2ⁿ)"], answer: 0, explanation: "El trabajo crece linealmente con el número de elementos." },
  { bank: "Teoría", module: 2, prompt: "¿Por qué una tormenta de broadcast puede crecer rápidamente?", options: ["Las tramas se replican y recirculan", "ARP asigna puertos", "TCP reduce el TTL", "DHCP cifra los enlaces"], answer: 0, explanation: "En un bucle de capa 2, los switches replican broadcasts que pueden circular indefinidamente." },
  { bank: "Teoría", module: 2, prompt: "¿Qué paso sigue a DHCP OFFER?", options: ["DHCP REQUEST", "DHCP DISCOVER", "DHCP RELEASE", "ARP REPLY"], answer: 0, explanation: "El cliente solicita formalmente la oferta seleccionada con DHCP REQUEST." },
  { bank: "Teoría", module: 2, prompt: "¿Qué conserva STP al bloquear un puerto?", options: ["La redundancia física sin ciclo lógico", "Dos root bridges activos", "Un broadcast permanente", "Todas las rutas en forwarding"], answer: 0, explanation: "El enlace permanece disponible como respaldo, pero no reenvía tráfico de usuario mientras está bloqueado." },
  { bank: "Teoría", module: 2, prompt: "¿Qué resuelve ARP en una LAN IPv4?", options: ["IPv4 a dirección MAC", "MAC a puerto TCP", "DNS a VLAN", "TTL a métrica"], answer: 0, explanation: "ARP descubre la dirección de enlace asociada a una dirección IPv4 local." },
  { bank: "Teoría", module: 3, prompt: "¿Por qué un servidor usa un ciclo de aceptación?", options: ["Para atender conexiones sucesivas", "Para cambiar su IP", "Para evitar escuchar", "Para borrar el socket"], answer: 0, explanation: "Después de atender o delegar un cliente, el servidor vuelve a esperar el siguiente." },
  { bank: "Teoría", module: 3, prompt: "¿Qué aporta una marca de tiempo a la telemetría?", options: ["Permite ordenar y correlacionar estados", "Aumenta el ancho de banda", "Sustituye SNMP", "Bloquea STP"], answer: 0, explanation: "La marca temporal convierte mediciones aisladas en una serie analizable." },
  { bank: "Teoría", module: 3, prompt: "¿Qué riesgo existe al reducir demasiado el intervalo de polling?", options: ["Carga innecesaria en red y dispositivos", "Desactiva Ethernet", "Elimina direcciones IP", "Convierte TCP en UDP"], answer: 0, explanation: "Consultar con demasiada frecuencia consume recursos y puede distorsionar el sistema observado." },
  { bank: "Teoría", module: 3, prompt: "¿Qué ventaja ofrece iterar un inventario?", options: ["Aplicar una operación coherente a muchos equipos", "Evitar toda validación", "Ocultar los errores", "Eliminar la autenticación"], answer: 0, explanation: "La iteración permite ejecutar una regla común y registrar el resultado por dispositivo." },
];

export const theoryBank: ExamItem[] = Array.from({ length: 100 }, (_, index) => {
  const seed = theorySeeds[index % theorySeeds.length];
  const context = ["laboratorio", "práctica guiada", "diagnóstico", "operación supervisada"][Math.floor(index / theorySeeds.length) % 4];
  return { ...seed, id: `T-${String(index + 1).padStart(3, "0")}`, prompt: `${seed.prompt} Contexto: ${context} ${index + 1}.` };
});

const pythonPractice = Array.from({ length: 50 }, (_, index): ExamItem => {
  const limit = (index % 6) + 3;
  const stop = Math.floor(limit / 2);
  const template = index % 2;
  if (template === 0) {
    return {
      id: `P-PY-${String(index + 1).padStart(2, "0")}`,
      bank: "Práctica",
      module: 1,
      prompt: "¿Qué valor imprime el código al terminar?",
      code: `total = 0\nfor n in range(${limit}):\n    total += n\nprint(total)`,
      options: [String((limit * (limit - 1)) / 2), String(limit * limit), String(limit), String(limit - 1)],
      answer: 0,
      explanation: `range(${limit}) recorre de 0 a ${limit - 1}; la suma es ${(limit * (limit - 1)) / 2}.`,
    };
  }
  return {
    id: `P-PY-${String(index + 1).padStart(2, "0")}`,
    bank: "Práctica",
    module: 1,
    prompt: "¿Cuántas veces se ejecuta la línea enviar()?",
    code: `for puerto in range(${limit}):\n    if puerto == ${stop}:\n        break\n    enviar(puerto)`,
    options: [String(stop), String(limit), String(stop + 1), String(limit - 1)],
    answer: 0,
    explanation: `break se ejecuta antes de enviar(${stop}); por eso hay ${stop} llamadas.`,
  };
});

const networkPractice = Array.from({ length: 50 }, (_, index): ExamItem => {
  const hostBits = (index % 4) + 2;
  const prefix = 32 - hostBits;
  const usable = 2 ** hostBits - 2;
  if (index % 2 === 0) {
    return {
      id: `P-NET-${String(index + 1).padStart(2, "0")}`,
      bank: "Práctica",
      module: 2,
      prompt: `Un ping sweep autorizado recorre una red /${prefix}. ¿Cuántas direcciones de host utilizables evaluará?`,
      options: [String(usable), String(2 ** hostBits), String(usable - 1), String(32 - prefix)],
      answer: 0,
      explanation: `Una /${prefix} contiene ${2 ** hostBits} direcciones; al excluir red y broadcast quedan ${usable}.`,
    };
  }
  const rootCost = 4 + (index % 3) * 4;
  const alternateCost = rootCost + 4;
  return {
    id: `P-NET-${String(index + 1).padStart(2, "0")}`,
    bank: "Práctica",
    module: 2,
    prompt: "STP compara dos caminos al root bridge. ¿Cuál debe quedar como camino activo?",
    options: [`El de coste ${rootCost}`, `El de coste ${alternateCost}`, "Ambos en forwarding", "El de mayor bridge ID"],
    answer: 0,
    explanation: "STP prefiere el camino con menor coste acumulado hacia el root bridge.",
  };
});

export const practiceBank: ExamItem[] = [...pythonPractice, ...networkPractice];

export function buildRandomExam(): ExamItem[] {
  const sample = (items: ExamItem[], count: number) => [...items].sort(() => Math.random() - 0.5).slice(0, count);
  return [...sample(theoryBank, 5), ...sample(practiceBank, 5)].sort(() => Math.random() - 0.5);
}

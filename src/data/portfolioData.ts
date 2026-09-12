import { BlogPost, Certification, Education, Experience, ProfileInfo, Project, Skill } from '../types';

export const profileInfo: ProfileInfo = {
  name: "Jose Luis Guzman",
  username: "RuisuTech",
  role: "Desarrollador de Software · Web, Mobile & AI",
  headline: "Desarrollador de software enfocado en la construcción de aplicaciones web, soluciones móviles y la integración de inteligencia artificial.",
  bio: [
    "Soy Jose Luis Guzman (@RuisuTech), desarrollador de software enfocado en soluciones web, entornos móviles e integración de inteligencia artificial.",
    "Estudiante de la carrera de Desarrollo de Software en IDAT y egresado de la Beca Generación Digital Perú (Front-End & Back-End). Complemento mi formación con programas de especialización y estudio independiente en ciencias de la computación.",
    "Cuento con experiencia en el ciclo de desarrollo de aplicaciones, desde el diseño de interfaces dinámicas y adaptables hasta la estructuración de servicios backend, consumo de APIs y modelado de bases de datos.",
    "Me enfoco en la resolución estructurada de problemas, el aprendizaje continuo y la aplicación de buenas prácticas para entregar software funcional y de calidad."
  ],
  location: "Perú",
  email: "jl.osorio.guzman@gmail.com",
  phone: "",
  availability: "",
  githubUrl: "https://github.com/RuisuTech",
  linkedinUrl: "https://www.linkedin.com/in/ruisutech",
  websiteUrl: "https://www.ruisu.tech",
  avatarUrl: "https://avatars.githubusercontent.com/u/138331809?v=4",
  cvDownloadUrl: "/CV_Jose_Luis_Guzman.pdf",
  stats: {
    yearsExperience: 2,
    projectsCompleted: 16,
    openSourceContributions: 21,
    codeReviews: 13,
  }
};

// Imagen por defecto para los proyectos (utilizando el logo oficial de RuisuTech)
export const DEFAULT_PROJECT_IMAGE = "https://avatars.githubusercontent.com/u/138331809?v=4";
export const DEFAULT_PROJECT_BANNER = "/project-default.svg";

export const projectsData: Project[] = [
  // ── 2026 ──────────────────────────────────────────────
  {
    id: "nextwaifu-ai-mobile",
    title: "NextWAIFU",
    tagline: "Compañera virtual con IA reactiva y avatares dinámicos",
    description: "Aplicación móvil con React Native y Google Gemini que cambia de expresión según la emoción.",
    fullDescription: "Aplicación móvil con React Native (Expo) y TypeScript que integra la API de Google Gemini. Incluye avatares reactivos, temas claro/oscuro y persistencia con AsyncStorage.",
    category: "AI",
    tags: ["Google Gemini", "React Native", "TypeScript", "Expo", "AsyncStorage", "Mobile UI"],
    githubUrl: "https://github.com/RuisuTech/NextWAIFU",
    featured: true,
    year: "2026",
    stars: 1,
    metrics: [
      { label: "Modelo IA", value: "Gemini 2.5" },
      { label: "Emociones", value: "5 Estados" },
      { label: "Framework", value: "React Native" }
    ],
    keyFeatures: [
      "Integración con la API de Google Gemini para generación de respuestas contextuales",
      "Avatares reactivos que cambian de ilustración según el estado de la respuesta",
      "Soporte para tema claro y oscuro con colores de acento configurables",
      "Persistencia de preferencias del usuario mediante AsyncStorage"
    ],
    architecture: [
      "Frontend: React Native con Expo y TypeScript",
      "API: Google Gemini con prompts estructurados",
      "Persistencia: AsyncStorage para almacenamiento local"
    ],
    image: "/assets/mockups/NextWAIFU.png"
  },
  {
    id: "vetcare-mobile",
    title: "VetCare",
    tagline: "Gestión de citas veterinarias con control de estados",
    description: "Sistema de citas médicas para clínicas veterinarias con prioridades y seguimiento de mascotas.",
    fullDescription: "Proyecto académico en equipo donde desarrollé el Frontend / UI. Permite organizar citas, registrar clientes y mascotas con control de estados y prioridades médicas.",
    category: "Mobile",
    tags: ["Mobile UI", "TypeScript", "React", "Tailwind CSS", "IDAT"],
    githubUrl: "https://github.com/RuisuTech/VetCare",
    featured: true,
    year: "2026",
    stars: 1,
    metrics: [
      { label: "Rol", value: "Frontend / UI" },
      { label: "Prioridades", value: "4 Niveles" },
      { label: "Diseño", value: "Mobile First" }
    ],
    keyFeatures: [
      "Diseño adaptable pensado para dispositivos móviles y tablets de consultorio",
      "Organización de citas por prioridad médica (Baja, Media, Alta, Urgente)",
      "Control del estado de atención de cada cita",
      "Registro de fichas de clientes y mascotas"
    ],
    architecture: [
      "Frontend: React con TypeScript y maquetación en Tailwind CSS",
      "Estructura: Componentes modulares y separación de vistas"
    ],
    image: "/assets/mockups/vetcare-showcase.png"
  },
  {
    id: "fimaza-mobile",
    title: "Fimaza",
    tagline: "Inventario de calzado multiplataforma",
    description: "Control de existencias de calzado con código compartido para iOS, Android y Web.",
    fullDescription: "Proyecto en IDAT con código compartido en TypeScript y React Native para iOS, Android y Web. Registra entradas, salidas y existencias de calzado.",
    category: "Mobile",
    tags: ["iOS", "Android", "Web", "TypeScript", "React Native", "IDAT"],
    githubUrl: "https://github.com/RuisuTech/Fimaza",
    featured: true,
    year: "2026",
    stars: 1,
    metrics: [
      { label: "Plataformas", value: "iOS / Android / Web" },
      { label: "Gestión", value: "Stock y Entradas" },
      { label: "Tecnología", value: "React Native" }
    ],
    keyFeatures: [
      "Base de código unificada en TypeScript para múltiples plataformas",
      "Registro de entradas y salidas de calzado",
      "Catálogo de productos con detalle de existencias por modelo",
      "Interfaz táctil diseñada para consulta rápida"
    ],
    architecture: [
      "Frontend: TypeScript y React Native con Expo",
      "Lógica: Servicios modulares para el manejo de datos de inventario"
    ],
    image: "/assets/mockups/fimaza-showcase.png"
  },
  {
    id: "clinica-api-dotnet",
    title: "ClinicaAPI",
    tagline: "API REST para gestión de clínica",
    description: "Servicio RESTful para administrar pacientes, médicos y citas médicas.",
    fullDescription: "API RESTful en C# con ASP.NET Core (.NET 8) para el curso de Servicios Web en IDAT. CRUD de pacientes, médicos y citas con eliminación lógica.",
    category: "Backend",
    tags: ["ASP.NET Core", ".NET 8", "C#", "REST API", "CRUD", "IDAT"],
    githubUrl: "https://github.com/RuisuTech/ClinicaAPI",
    featured: true,
    year: "2026",
    stars: 1,
    metrics: [
      { label: "Framework", value: ".NET 8" },
      { label: "Lenguaje", value: "C#" },
      { label: "Operaciones", value: "CRUD Completo" }
    ],
    keyFeatures: [
      "Endpoints RESTful para Pacientes, Médicos y Citas",
      "Validación de datos de entrada y manejo de respuestas HTTP",
      "Control de auditoría y eliminación lógica de registros",
      "Estructura organizada en controladores y modelos"
    ],
    architecture: [
      "Backend: ASP.NET Core (.NET 8) con C#",
      "Patrón: Arquitectura en capas con controladores RESTful"
    ],
    image: "/assets/mockups/clinica-api-showcase.png"
  },

  // ── 2025 ──────────────────────────────────────────────
  {
    id: "restaurant-john-kong",
    title: "Restaurant-John-Kong",
    tagline: "Reservas, carta digital y códigos QR",
    description: "Sistema de reservas de mesas con autenticación Firebase y generación de QR.",
    fullDescription: "Proyecto de Desarrollo de Interfaces 2 en IDAT. Incluye carta con filtros, reservas con calendario, autenticación con Firebase y códigos QR para mesas.",
    category: "Fullstack",
    tags: ["React 19", "Vite", "Tailwind CSS", "Firebase Auth", "Serverless", "QR", "IDAT"],
    githubUrl: "https://github.com/RuisuTech/Restaurant-John-Kong",
    featured: true,
    year: "2025",
    stars: 1,
    metrics: [
      { label: "Frontend", value: "React 19 + Vite" },
      { label: "Auth", value: "Firebase" },
      { label: "Funcionalidad", value: "Reservas & QR" }
    ],
    keyFeatures: [
      "Catálogo de platos organizado por categorías con filtros rápidos",
      "Flujo de reservas con calendario interactivo",
      "Autenticación de usuarios con Firebase Auth",
      "Generación y lectura de códigos QR para identificación de mesas"
    ],
    architecture: [
      "Frontend: React 19 con React Router y Tailwind CSS en Vite",
      "Servicios: Firebase Authentication y funciones serverless"
    ],
    image: "/assets/mockups/restaurant-john-kong.png"
  },
  {
    id: "mipromedio-calc",
    title: "MiPromedio",
    tagline: "Calculadora de promedios académicos",
    description: "Calculadora de calificaciones ponderadas con diseño minimalista.",
    fullDescription: "Aplicación web ligera creada para facilitar el cálculo de promedios de cursos en IDAT. Permite ingresar calificaciones y porcentajes de ponderación, valida que el total sume 100% y muestra la nota final calculada.",
    category: "Frontend",
    tags: ["JavaScript", "HTML5", "CSS3", "IDAT", "Vercel"],
    githubUrl: "https://github.com/RuisuTech/MiPromedio",
    featured: false,
    year: "2025",
    stars: 1,
    metrics: [
      { label: "Diseño", value: "Tema Oscuro" },
      { label: "Cálculo", value: "Ponderado 100%" },
      { label: "Despliegue", value: "Vercel" }
    ],
    keyFeatures: [
      "Cálculo ponderado de calificaciones con validación de porcentajes",
      "Diseño adaptable con tema oscuro",
      "Navegación sencilla para dispositivos móviles",
      "Código JavaScript limpio sin librerías externas"
    ],
    architecture: [
      "Frontend: HTML5, CSS3 y JavaScript vanilla"
    ],
    image: "/assets/mockups/mi-promedio.png"
  },
  {
    id: "avecescodeamos-community",
    title: "AVecesCodeamos",
    tagline: "Sitio conmemorativo de la comunidad de estudio",
    description: "Espacio web de recuerdo del grupo \"A Veces Codeamos\" de la Beca Generación Digital.",
    fullDescription: "Espacio web creado con React y Tailwind CSS como recuerdo del grupo de estudio formado durante la Beca Generación Digital Perú.",
    category: "Frontend",
    tags: ["React 18", "Vite", "Tailwind CSS", "Beca Generación Digital"],
    githubUrl: "https://github.com/RuisuTech/AVecesCodeamos",
    featured: false,
    year: "2025",
    stars: 1,
    metrics: [
      { label: "Comunidad", value: "Generación Digital" },
      { label: "Framework", value: "React + Vite" },
      { label: "Despliegue", value: "Vercel" }
    ],
    keyFeatures: [
      "Diseño conmemorativo para el grupo de estudio de la beca",
      "Sección informativa y reproductor de video de recuerdo",
      "Despliegue en Vercel con integración a GitHub"
    ],
    architecture: [
      "Frontend: React 18 con Vite y Tailwind CSS"
    ],
    image: "/assets/mockups/a-veces-codeamos.png"
  },
  {
    id: "mienlace-social",
    title: "MiEnlace",
    tagline: "Perfil de enlaces sociales responsive",
    description: "Tarjeta de enlaces con diseño mobile-first y efectos de interacción.",
    fullDescription: "Tarjeta de enlaces sociales con React y TypeScript, siguiendo el diseño de Frontend Mentor. Adaptada a dispositivos móviles.",
    category: "Frontend",
    tags: ["TypeScript", "React", "Tailwind CSS", "Frontend Mentor"],
    githubUrl: "https://github.com/RuisuTech/MiEnlace",
    featured: false,
    year: "2025",
    stars: 1,
    metrics: [
      { label: "Diseño", value: "Responsive" },
      { label: "Enfoque", value: "Mobile-first" }
    ],
    keyFeatures: [
      "Efectos de interacción suaves en enlaces y botones",
      "Jerarquía tipográfica clara y buen contraste",
      "Diseño ligero y de carga rápida"
    ],
    architecture: [
      "Frontend: React y TypeScript con Tailwind CSS"
    ],
    image: "/assets/mockups/mi-enlace.jpg"
  },
  {
    id: "miespacio-blog",
    title: "MiEspacio",
    tagline: "Blog personal de notas de aprendizaje",
    description: "Blog para registrar avances y reflexiones sobre desarrollo de software.",
    fullDescription: "Página web personal creada para registrar notas de estudio, aprendizajes y reflexiones sobre desarrollo de software, con énfasis en la legibilidad tipográfica y la simplicidad visual.",
    category: "Frontend",
    tags: ["HTML5", "CSS3", "JavaScript", "Blog"],
    githubUrl: "https://github.com/RuisuTech/MiEspacio",
    featured: false,
    year: "2025",
    stars: 1,
    metrics: [
      { label: "Enfoque", value: "Lectura" },
      { label: "Estructura", value: "Modular" }
    ],
    keyFeatures: [
      "Tipografía cuidada para lectura cómoda de artículos",
      "Estructura de secciones para publicaciones y notas",
      "Diseño adaptable a teléfonos y computadoras"
    ],
    architecture: [
      "Frontend: HTML5 semántico y CSS3 estructurado"
    ],
    image: "/assets/mockups/miespacio.png"
  },

  // ── 2024 ──────────────────────────────────────────────
  {
    id: "nextcard-interactive",
    title: "NextCARD",
    tagline: "Tarjeta interactiva con detección de color",
    description: "Formulario de tarjeta que extrae el color dominante de una imagen y ajusta el contraste.",
    fullDescription: "Desafío de Frontend Mentor con funcionalidad extra: detecta el color dominante de una imagen y ajusta el contraste del texto automáticamente.",
    category: "Frontend",
    tags: ["TypeScript", "React", "Tailwind CSS", "Frontend Mentor"],
    githubUrl: "https://github.com/RuisuTech/NextCARD",
    featured: false,
    year: "2024",
    stars: 1,
    metrics: [
      { label: "Color", value: "Detección Canvas" },
      { label: "Contraste", value: "Ajuste dinámico" },
      { label: "Formateo", value: "Tiempo Real" }
    ],
    keyFeatures: [
      "Carga de imagen y extracción del color representativo en el navegador",
      "Ajuste automático de color de texto para mantener contraste legible",
      "Formateo en vivo del número de tarjeta, fecha y código de seguridad",
      "Validación visual de campos del formulario"
    ],
    architecture: [
      "Frontend: React y TypeScript con Tailwind CSS",
      "Lógica: Cálculo de luminancia y manipulación de canvas"
    ],
    image: "/assets/mockups/nextcard-showcase.png"
  },
  {
    id: "mibuscador-web",
    title: "MiBuscador",
    tagline: "Buscador web con redirección a Google",
    description: "Interfaz minimalista que ejecuta búsquedas directamente en Google.",
    fullDescription: "Interfaz limpia en JavaScript vanilla que captura texto y ejecuta la búsqueda directamente en Google.",
    category: "Frontend",
    tags: ["HTML5", "CSS3", "JavaScript", "Google Search"],
    githubUrl: "https://github.com/RuisuTech/MiBuscador",
    featured: false,
    year: "2024",
    stars: 1,
    metrics: [
      { label: "Tecnología", value: "JavaScript Vanilla" },
      { label: "Dependencias", value: "0 Librerías" }
    ],
    keyFeatures: [
      "Campo de búsqueda con enfoque automático",
      "Diseño simple y directo",
      "Compatibilidad con cualquier navegador"
    ],
    architecture: [
      "HTML5 semántico, CSS3 y JavaScript vanilla"
    ],
    image: "/assets/mockups/mi-buscador.png"
  },
  {
    id: "chaupimonte-experience",
    title: "Chaupimonte",
    tagline: "Maquetación web semántica y responsiva",
    description: "Proyecto introductorio de HTML5 y CSS3 con diseño adaptable.",
    fullDescription: "Primer proyecto de maquetación web en IDAT. Estructura semántica en HTML5 y diseño responsivo con CSS.",
    category: "Frontend",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "IDAT"],
    githubUrl: "https://github.com/RuisuTech/Chaupimonte",
    featured: false,
    year: "2024",
    stars: 1,
    metrics: [
      { label: "Estructura", value: "HTML5 Semántico" },
      { label: "Diseño", value: "Responsive" }
    ],
    keyFeatures: [
      "Maquetación estructurada con CSS Grid y Flexbox",
      "Estructura semántica para accesibilidad",
      "Adaptación a distintas resoluciones de pantalla"
    ],
    architecture: [
      "Estructura basada en HTML5 estándar y hojas de estilo CSS"
    ],
    image: "/assets/mockups/chaupimonte.png"
  },
  {
    id: "backend-egg-java",
    title: "Back-End-Egg",
    tagline: "Prácticas de POO en Java",
    description: "Ejercicios de herencia, polimorfismo y colecciones en Java.",
    fullDescription: "Ejercicios de POO, herencia, polimorfismo, excepciones y colecciones realizados durante el módulo Back-End de la Beca Generación Digital.",
    category: "Backend",
    tags: ["Java", "POO", "Algoritmos", "Beca Generación Digital", "Egg"],
    githubUrl: "https://github.com/RuisuTech/Back-End-Egg",
    featured: false,
    year: "2024",
    stars: 1,
    metrics: [
      { label: "Lenguaje", value: "Java" },
      { label: "Paradigma", value: "POO" },
      { label: "Programa", value: "Generación Digital" }
    ],
    keyFeatures: [
      "Implementación de principios de POO (clases, interfaces y herencia)",
      "Resolución de ejercicios de algoritmia y estructuras de datos",
      "Manejo de colecciones y control de excepciones"
    ],
    architecture: [
      "Java SE orientado a objetos"
    ],
    image: DEFAULT_PROJECT_IMAGE
  },
  {
    id: "frontend-egg-projects",
    title: "Front-End-Egg",
    tagline: "Prácticas de maquetación y DOM",
    description: "Ejercicios de JavaScript, HTML5 y CSS3 del módulo Front-End.",
    fullDescription: "Ejercicios de manipulación del DOM, validación de formularios y diseño responsivo del módulo Front-End de la Beca Generación Digital.",
    category: "Frontend",
    tags: ["JavaScript", "HTML5", "CSS3", "DOM", "Beca Generación Digital", "Egg"],
    githubUrl: "https://github.com/RuisuTech/Front-End-Egg",
    featured: false,
    year: "2024",
    stars: 1,
    metrics: [
      { label: "Lenguaje", value: "JavaScript" },
      { label: "Manejo", value: "DOM Dinámico" },
      { label: "Programa", value: "Generación Digital" }
    ],
    keyFeatures: [
      "Manejo de eventos y manipulación dinámica del DOM",
      "Formularios con validación en el cliente",
      "Diseño adaptable mediante Flexbox y CSS Grid"
    ],
    architecture: [
      "Frontend con JavaScript vanilla, HTML5 y CSS3"
    ],
    image: DEFAULT_PROJECT_IMAGE
  },
  {
    id: "java-codigofacilito",
    title: "Java-CodigoFacilito",
    tagline: "Fundamentos de Java y POO",
    description: "Prácticas de sintaxis, colecciones y desarrollo orientado a objetos.",
    fullDescription: "Prácticas de fundamentos de Java, control de flujo, colecciones y POO basadas en el curso de Código Facilito.",
    category: "Backend",
    tags: ["Java", "Código Facilito", "POO", "Colecciones"],
    githubUrl: "https://github.com/RuisuTech/Java-CodigoFacilito",
    featured: false,
    year: "2024",
    stars: 1,
    metrics: [
      { label: "Lenguaje", value: "Java" },
      { label: "Fuente", value: "Código Facilito" },
      { label: "Enfoque", value: "POO y Colecciones" }
    ],
    keyFeatures: [
      "Uso de colecciones estándar en Java (Listas, Sets, Maps)",
      "Estructuración modular de código en paquetes y clases",
      "Ejercicios prácticos de lógica de programación"
    ],
    architecture: [
      "Java SE con programación orientada a objetos"
    ],
    image: DEFAULT_PROJECT_IMAGE
  }
];

export const skillsData: Skill[] = [
  // Frontend
  { name: "HTML5", category: "Frontend", level: 95, experienceYears: 3, highlight: true },
  { name: "CSS3", category: "Frontend", level: 95, experienceYears: 3, highlight: true },
  { name: "JavaScript", category: "Frontend", level: 92, experienceYears: 3, highlight: true },
  { name: "TypeScript", category: "Frontend", level: 92, experienceYears: 2, highlight: true },
  { name: "React", category: "Frontend", level: 95, experienceYears: 2, highlight: true },
  { name: "Tailwind CSS", category: "Frontend", level: 95, experienceYears: 2, highlight: true },
  { name: "Vite", category: "Frontend", level: 90, experienceYears: 2, highlight: true },

  // Backend
  { name: "Node.js", category: "Backend", level: 90, experienceYears: 2, highlight: true },
  { name: "Express", category: "Backend", level: 88, experienceYears: 2, highlight: true },
  { name: "C#", category: "Backend", level: 80, experienceYears: 1, highlight: false },
  { name: ".NET / ASP.NET", category: "Backend", level: 80, experienceYears: 1, highlight: false },
  { name: "Python", category: "Backend", level: 85, experienceYears: 2, highlight: true },
  { name: "Java", category: "Backend", level: 86, experienceYears: 2, highlight: true },
  { name: "Spring Boot", category: "Backend", level: 84, experienceYears: 2, highlight: true },

  // Mobile
  { name: "React Native", category: "Mobile", level: 92, experienceYears: 2, highlight: true },

  // Bases de datos
  { name: "PostgreSQL", category: "Bases de datos", level: 88, experienceYears: 2, highlight: true },
  { name: "MySQL", category: "Bases de datos", level: 88, experienceYears: 2, highlight: true },
  { name: "SQLite", category: "Bases de datos", level: 85, experienceYears: 2, highlight: true },
  { name: "Supabase", category: "Bases de datos", level: 86, experienceYears: 2, highlight: true },

  // DevOps
  { name: "Docker", category: "DevOps", level: 86, experienceYears: 2, highlight: true },
  { name: "Linux", category: "DevOps", level: 88, experienceYears: 2, highlight: true },
  { name: "Nginx", category: "DevOps", level: 84, experienceYears: 2, highlight: true },
  { name: "Cloudflare", category: "DevOps", level: 85, experienceYears: 2, highlight: true },
  { name: "Vercel", category: "DevOps", level: 92, experienceYears: 2, highlight: true },

  // AI & Automation
  { name: "Google Gemini", category: "AI & Automation", level: 92, experienceYears: 2, highlight: true },
  { name: "n8n", category: "AI & Automation", level: 88, experienceYears: 1, highlight: true },
  { name: "OpenCode", category: "AI & Automation", level: 86, experienceYears: 1, highlight: true },

  // Tools
  { name: "Git", category: "Tools", level: 94, experienceYears: 3, highlight: true },
  { name: "GitHub", category: "Tools", level: 94, experienceYears: 3, highlight: true },
  { name: "Postman", category: "Tools", level: 90, experienceYears: 2, highlight: true },
  { name: "VS Code", category: "Tools", level: 95, experienceYears: 3, highlight: true }
];

export const experienceData: Experience[] = [
  {
    id: "exp-1",
    company: "Proyectos Personales & Open Source (GitHub)",
    role: "Desarrollador de Software",
    period: "2024 - Presente",
    location: "Perú (Remoto)",
    type: "Remoto",
    summary: "Desarrollo y publicación de proyectos personales y de código abierto en GitHub, aplicando tecnologías modernas de frontend, backend y mobile.",
    achievements: [
      "Desarrollo de NextWAIFU, aplicación móvil construida con React Native (Expo), TypeScript e integración con la API de Google Gemini.",
      "Implementación de NextCARD, interfaz interactiva con extracción de color dominante y cálculo de contraste para legibilidad.",
      "Despliegue y configuración de proyectos web en plataformas como Vercel."
    ],
    techStack: ["React Native", "Expo", "Google Gemini", "TypeScript", "React", "Tailwind CSS", "Vercel", "Git"]
  },
  {
    id: "exp-2",
    company: "Escuela Superior IDAT",
    role: "Desarrollador en Proyectos Académicos",
    period: "2024 - Presente",
    location: "Perú (Remoto)",
    type: "Remoto",
    summary: "Desarrollo de aplicaciones web, servicios web y sistemas de información en los cursos de la carrera de Desarrollo de Software.",
    achievements: [
      "Desarrollo del Frontend / UI del sistema VetCare para la gestión de citas veterinarias y registro de pacientes.",
      "Construcción de Fimaza, aplicación móvil con TypeScript y React Native para control de inventario de calzado.",
      "Desarrollo de Restaurant John Kong con React 19, autenticación con Firebase, gestión de reservas y códigos QR.",
      "Implementación de ClinicaAPI, servicio RESTful en C# con ASP.NET Core (.NET 8), validaciones y borrado lógico.",
      "Creación de MiPromedio, calculadora de calificaciones ponderadas adaptada a los criterios de evaluación de IDAT."
    ],
    techStack: ["C#", "ASP.NET Core (.NET 8)", "React", "React Native", "TypeScript", "Firebase Auth", "MySQL", "Java", "Tailwind CSS"]
  },
  {
    id: "exp-3",
    company: "Beca Generación Digital Perú (MTPE, BID, Es Hoy, Egg)",
    role: "Especialización en Front-End & Back-End",
    period: "2024",
    location: "Perú (Remoto)",
    type: "Remoto",
    summary: "Capacitación intensiva en desarrollo web (JavaScript, HTML, CSS) y desarrollo backend con Java POO, trabajando en equipo y con control de versiones.",
    achievements: [
      "Desarrollo de laboratorios y proyectos modulares en JavaScript y Java (POO, colecciones, algoritmos).",
      "Creación del sitio conmemorativo de la comunidad de estudio 'A Veces Codeamos' con React y Tailwind CSS.",
      "Práctica constante de control de versiones con Git y GitHub en entornos colaborativos."
    ],
    techStack: ["Java", "JavaScript", "HTML5", "CSS3", "React", "Tailwind CSS", "Git"]
  }
];

export const educationData: Education[] = [
  {
    id: "edu-1",
    institution: "Escuela de Educación Superior Tecnológica Privada IDAT",
    degree: "Desarrollo de Software / Computación e Informática",
    period: "2024 - En curso",
    location: "Perú (Remoto)",
    honors: "En curso (Estudios regulares)",
    courses: [
      "Servicios Web (ASP.NET Core .NET 8, C#)",
      "Desarrollo de Interfaces 2 (React 19, Firebase, Tailwind CSS)",
      "Desarrollo de Aplicaciones Móviles (React Native)",
      "Modelado y Administración de Bases de Datos (MySQL)",
      "Programación Orientada a Objetos (Java y C#)"
    ]
  },
  {
    id: "edu-2",
    institution: "Beca Generación Digital Perú (MTPE, BID, Asociación Es Hoy, Egg)",
    degree: "Especialización en Desarrollo Front-End & Back-End (Egresado)",
    period: "2024",
    location: "Perú (Remoto)",
    honors: "Certificado oficial emitido por Egg Cooperation",
    courses: [
      "Desarrollo Front-End con JavaScript y Diseño Web",
      "Desarrollo Back-End con Java y Programación Orientada a Objetos",
      "Metodologías Ágiles y Trabajo Colaborativo en Equipo",
      "Control de Versiones Profesional con Git y GitHub"
    ]
  },
  {
    id: "edu-3",
    institution: "Harvard University (CS50)",
    degree: "CS50: Introduction to Computer Science",
    period: "2024",
    location: "Online / Autoaprendizaje",
    honors: "Estudio independiente mediante clases y material abierto",
    courses: [
      "Ciencias de la Computación, Algoritmos y Estructuras de Datos",
      "Gestión de Memoria y Punteros en lenguaje C",
      "Bases de Datos Relacionales (SQL) y Programación Web",
      "Resolución de problemas de lógica y algoritmos"
    ]
  },
  {
    id: "edu-4",
    institution: "Oracle Next Education (ONE) & Alura Latam",
    degree: "Formación Principiante en Programación & Java POO",
    period: "2023",
    location: "Remoto",
    honors: "Certificados oficiales emitidos por Alura Latam / Oracle",
    courses: [
      "Formación Principiante en Programación (Lógica y bases computacionales)",
      "Formación Java Orientado a Objetos (Java POO y modularidad)",
      "Buenas prácticas de desarrollo de software",
      "Pensamiento algorítmico y resolución de problemas"
    ]
  },
  {
    id: "edu-5",
    institution: "Platzi",
    degree: "Curso de Programación Básica",
    period: "2023",
    location: "Online",
    honors: "Curso libre introductorio",
    courses: [
      "Primer contacto con el desarrollo web",
      "Construcción de aplicación web con PokéAPI",
      "Fundamentos iniciales de HTML, CSS y JavaScript"
    ]
  }
];

export const certificationsData: Certification[] = [
  {
    id: "cert-1",
    title: "Beca Generación Digital Perú (Front-End & Back-End)",
    issuer: "MTPE, BID, Es Hoy & Egg Cooperation",
    issueDate: "2024",
    credentialUrl: "https://egg-csv-bulk-certificates-prod.s3.amazonaws.com/certificates/65d6688b339a554a49904f5e-1734053500724.pdf",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30"
  },
  {
    id: "cert-2",
    title: "Oracle Next Education (ONE) - Formación Java Orientado a Objetos G5",
    issuer: "Oracle & Alura Latam",
    issueDate: "2023",
    credentialUrl: "https://app.aluracursos.com/user/joseluisosorioguzman11/degree-javaoo-grupo5-one-15581/certificate",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30"
  },
  {
    id: "cert-3",
    title: "Oracle Next Education (ONE) - Formación Principiante en Programación G5",
    issuer: "Oracle & Alura Latam",
    issueDate: "2023",
    credentialUrl: "https://app.aluracursos.com/user/joseluisosorioguzman11/degree-programacion-primeros-pasos-grupo5-one-15570/certificate",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
  }
];

export const blogPostsData: BlogPost[] = [
  {
    id: "post-1",
    slug: "el-arte-de-aprender-programacion-de-los-errores",
    title: "El Aprendizaje Continuo en Programación: Superando Desafíos Técnicos",
    excerpt: "Reflexiones sobre el proceso formativo en desarrollo de software: cómo interpretar errores en consola y convertirlos en oportunidades para comprender a fondo la tecnología.",
    date: "28 Feb 2025",
    readTime: "5 min de lectura",
    category: "Carrera Tech",
    tags: ["Aprendizaje", "JavaScript", "Buenas Prácticas", "Debugging"],
    views: 1240,
    coverImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
    content: `
### El proceso de aprendizaje técnico

Al iniciarse en la programación, encontrar errores en consola o fallas de compilación es parte natural del trabajo. Con la práctica, el análisis de estos mensajes se convierte en una de las herramientas de diagnóstico más valiosas para comprender el comportamiento del software.

---

### Tres hábitos útiles en el desarrollo cotidiano

1. **Leer con atención el mensaje de error y el stack trace**: Analizar la línea exacta y el tipo de excepción antes de buscar soluciones genéricas ayuda a entender la causa raíz del problema.
2. **Desarrollar proyectos con requerimientos definidos**: Desarrollar proyectos como *VetCare*, *Fimaza* y *MiPromedio* permite enfrentarse a casos de uso prácticos como control de estados, manejo de inventario y validación de datos.
3. **Revisar la documentación oficial**: Consultar las fuentes oficiales de frameworks y librerías permite escribir código más ordenado y actualizado.
`
  },
  {
    id: "post-2",
    slug: "tailwind-css-por-que-cambio-mi-flujo-de-trabajo",
    title: "Uso de Tailwind CSS en el Desarrollo Web y Móvil",
    excerpt: "Experiencia utilizando Tailwind CSS para maquetación modular y consistente en aplicaciones web y móviles.",
    date: "14 Feb 2025",
    readTime: "6 min de lectura",
    category: "Frontend",
    tags: ["Tailwind CSS", "React", "Mobile UI", "UI Design"],
    views: 980,
    coverImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    content: `
### Adopción del diseño utilitario

Al trabajar en proyectos como **Restaurant John Kong** y **NextCARD**, el uso de utilidades CSS permitió agilizar la maquetación sin perder consistencia en el espaciado y la paleta de colores.

---

### Aspectos clave en el flujo de trabajo

- **Estandarización visual**: La escala de medidas y colores de Tailwind facilita mantener coherencia entre distintas vistas.
- **Diseño responsivo**: Los prefijos condicionales (\`sm:\`, \`md:\`, \`lg:\`) simplifican la adaptación entre pantallas móviles y de escritorio.
- **Soporte para temas**: La gestión de modo claro y oscuro se integra de forma directa mediante selectores y clases de estado.
`
  },
  {
    id: "post-3",
    slug: "nextwaifu-compañera-virtual-gemini-react-native",
    title: "Desarrollo de NextWAIFU: React Native y la API de Google Gemini",
    excerpt: "Estructura e integración de la API de Gemini en una aplicación móvil con Expo y TypeScript.",
    date: "02 Feb 2025",
    readTime: "7 min de lectura",
    category: "Arquitectura",
    tags: ["Google Gemini", "React Native", "AI", "Mobile", "TypeScript"],
    views: 1410,
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    content: `
### Integración con modelos de lenguaje

En **NextWAIFU**, el objetivo fue integrar la API de Google Gemini dentro de una aplicación móvil en React Native con Expo, complementando el texto con cambios visuales en el avatar.

---

### Componentes de la solución:

1. **Avatares reactivos**: Según el tipo de respuesta clasificada por la API, se actualiza el estado visual del avatar.
2. **Consumo de Google Gemini**: Conexión mediante peticiones estructuradas para obtener respuestas contextuales.
3. **Configuraciones locales**: Uso de AsyncStorage para guardar las preferencias de interfaz y credenciales del usuario de manera local.
`
  }
];

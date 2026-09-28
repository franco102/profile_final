import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { Education, FeaturedSystem, Job, LinkPortafolio, Portafolio, SkillGroup, SocialNetwork, Tool } from "../type";

interface PortafolioState {
  name: string
  lastname: string
  phone: string
  whatsapp: string
  email: string
  location: string
  position: string
  cvEs: string
  cvEn: string
  listLink: LinkPortafolio[]
  socialNetworks: SocialNetwork[]
  softSkills: { name: string, icon: string }[]
  skillGroups: SkillGroup[]
  tools: Tool[]
  jobs: Job[]
  education: Education[]
  featured: FeaturedSystem[]
  portafolio: Portafolio[]
}

// Sin `persist`: el contenido es estático y guardarlo en localStorage
// hacía que los visitantes vieran datos antiguos después de cada cambio.
export const usePortafalioStore = create<PortafolioState>()(
  devtools(() => ({
    name: 'Alan Franco',
    lastname: 'Silva Huarachi',
    phone: '+51 964 118 376',
    whatsapp: '51964118376',
    email: 'francodannaeyal@gmail.com',
    location: 'Lima, Perú',
    position: 'Desarrollador Full Stack | Analista de Base de Datos',
    cvEs: '/files/CV_Alan_Franco_Silva_2026_ES.pdf',
    cvEn: '/files/CV_Alan_Franco_Silva_2026_EN.pdf',
    listLink: [
      { title: 'Sobre Mí', url: 'sobre-mi' },
      { title: 'Stack', url: 'stack' },
      { title: 'Experiencia', url: 'experiencia' },
      { title: 'Proyectos', url: 'proyectos' },
      { title: 'Contacto', url: 'contacto' },
    ],
    socialNetworks: [
      { title: 'GitHub', url: 'https://github.com/franco102', icon: 'fa-brands fa-github' },
      { title: 'LinkedIn', url: 'https://www.linkedin.com/in/alan-franco-silva-huarachi-82bb40167/', icon: 'fa-brands fa-linkedin-in' },
      { title: 'WhatsApp', url: 'https://wa.me/51964118376', icon: 'fa-brands fa-whatsapp' },
    ],
    softSkills: [
      { name: 'Proactividad', icon: 'bolt' },
      { name: 'Liderazgo técnico', icon: 'flag' },
      { name: 'Trabajo en equipo', icon: 'groups' },
      { name: 'Resiliencia', icon: 'shield' },
      { name: 'Responsabilidad', icon: 'task_alt' },
    ],
    skillGroups: [
      {
        title: 'Bases de Datos', icon: 'database', accent: 'secondary', note: 'Modelado & Migración',
        items: ['PostgreSQL', 'PL/pgSQL', 'SQL Server', 'Informix', 'MySQL', 'MongoDB', 'Redis', 'Búsqueda vectorial'],
      },
      {
        title: 'Backend', icon: 'dns', accent: 'tertiary', note: 'APIs REST',
        items: ['PHP / Laravel', 'Python / FastAPI', 'C# / ASP.NET', 'Node.js', 'Go', 'TypeScript'],
      },
      {
        title: 'Frontend & Móvil', icon: 'devices', accent: 'primary', note: 'SPAs & Apps',
        items: ['Vue.js / Nuxt', 'React / Next.js', 'React Native', 'Angular', 'JavaScript', 'Tailwind CSS', 'Bootstrap', 'Flutter / Dart'],
      },
      {
        title: 'Cloud & DevOps', icon: 'cloud', accent: 'amber', note: 'CI/CD',
        items: ['AWS EC2', 'AWS S3', 'RDS / Aurora', 'AWS ECS', 'Docker', 'Kubernetes', 'GitHub Actions', 'Azure DevOps'],
      },
    ],
    tools: [
      { name: 'Linux (Ubuntu / Debian) & Nginx', icon: 'terminal', accent: 'secondary', tag: 'Servidores' },
      { name: 'TLS en conexiones a BD', icon: 'lock', accent: 'tertiary', tag: 'Seguridad' },
      { name: 'Mapbox & Leaflet', icon: 'map', accent: 'primary', tag: 'Geo' },
      { name: 'AmCharts4 / ApexCharts', icon: 'monitoring', accent: 'amber', tag: 'Dashboards' },
      { name: 'WebSockets', icon: 'sync_alt', accent: 'secondary', tag: 'Tiempo real' },
      { name: 'Windows Server / IIS & Git', icon: 'deployed_code', accent: 'tertiary', tag: 'Deploy' },
    ],
    jobs: [
      {
        company: 'Urbano Express', date: 'Feb 2024 - Actualidad', current: true, accent: 'secondary',
        roles: [
          {
            position: 'Analista de Base de Datos', date: 'Oct 2025 - Actualidad',
            bullets: [
              'Lidero la migración de procesos logísticos de Informix a PostgreSQL en AWS RDS (Aurora): modelado de tablas, índices y vistas, y migración y carga de información entre ambos motores.',
              'Desarrollo stored procedures y funciones PL/pgSQL para las áreas de Facturación, Cobranzas y Experiencia de Usuario.',
              'Configuré conexiones cifradas con TLS hacia la base de datos e implementé búsquedas vectoriales (similitud semántica) sobre PostgreSQL.',
            ],
          },
          {
            position: 'Desarrollador Full Stack', date: 'Feb 2024 - Set 2025',
            bullets: [
              'Diseñé y desarrollé APIs REST con Laravel y FastAPI para integrar los sistemas internos con socios como LG, Ripley y Mercado Libre.',
              'Contenericé aplicaciones con Docker y Kubernetes y automaticé despliegues en AWS (EC2, S3, RDS, ECS) con CI/CD en GitHub Actions.',
              'Administré servidores Linux con Nginx y desarrollé interfaces con Vue/Nuxt, React/Next.js, Angular y React Native.',
            ],
          },
        ],
        stack: ['PostgreSQL', 'Informix', 'AWS Aurora', 'Laravel', 'FastAPI', 'Docker', 'Kubernetes', 'MongoDB'],
      },
      {
        company: 'Maprosoft', date: 'Dic 2021 - Ene 2024', current: false, accent: 'tertiary',
        roles: [
          {
            position: 'Desarrollador Full Stack', date: '',
            bullets: [
              'Automaticé procesos operativos para clientes mineros (Summa Gold y Shougang), incluyendo un sistema de dispatch en tiempo real con WebSockets para el control de flota.',
              'Desarrollé dashboards y mapas geológicos interactivos con AmCharts4, ApexCharts, Mapbox y Leaflet para la visualización de KPIs mineros.',
              'Construí el backend con ASP.NET y SQL Server (stored procedures), con integración continua en Azure DevOps y despliegue en Windows Server / IIS.',
            ],
          },
        ],
        stack: ['C#', 'ASP.NET', 'SQL Server', 'DevExpress', 'Mapbox', 'Azure DevOps'],
      },
      {
        company: 'Universidad Nacional del Callao', date: 'Set 2021 - Nov 2021', current: false, accent: 'primary',
        roles: [
          {
            position: 'Soporte Técnico · Oficina de Educación Virtual', date: '',
            bullets: ['Mantenimiento y conexión de equipos, y administración de cuentas de correo institucional.'],
          },
        ],
        stack: [],
      },
      {
        company: 'Fénix Logistic S.A.C.', date: 'Jun 2020 - Ene 2021', current: false, accent: 'amber',
        roles: [
          {
            position: 'Analista Programador Jr.', date: '',
            bullets: ['Desarrollé el sistema logístico de la empresa con Laravel y Vue.js, integrado con NubeFact para facturación electrónica según SUNAT, y lo desplegué en servidor web.'],
          },
        ],
        stack: ['Laravel', 'Vue.js', 'Bootstrap', 'NubeFact'],
      },
    ],
    education: [
      { title: 'Bachiller en Ingeniería de Sistemas', institution: 'Universidad Nacional del Callao · Tercio superior', date: '2017 - 2021', icon: 'school' },
      { title: 'Especialización en Bases de Datos', institution: 'CIBERTEC', date: '2024', icon: 'database' },
      { title: 'Inglés Avanzado (Nivel 10)', institution: 'ICPNA · En curso', date: '2023 - 2026', icon: 'translate' },
    ],
    featured: [
      {
        kicker: 'Base de Datos // Urbano Express', badge: 'En curso', accent: 'secondary', icon: 'swap_horiz',
        title: 'Migración Informix → PostgreSQL en AWS Aurora',
        description: 'Modernización de la capa de datos logística: modelado de tablas, índices y vistas, migración de información entre motores, stored procedures PL/pgSQL, conexiones con TLS y búsquedas vectoriales.',
        stack: ['Informix', 'PostgreSQL', 'PL/pgSQL', 'AWS Aurora', 'TLS'],
      },
      {
        kicker: 'Integraciones // Retail', badge: 'Producción', accent: 'primary', icon: 'hub',
        title: 'APIs de integración con LG, Ripley y Mercado Libre',
        description: 'APIs REST en Laravel y FastAPI que conectan los sistemas internos de Urbano Express con socios comerciales, contenerizadas con Docker y Kubernetes y desplegadas en AWS.',
        stack: ['Laravel', 'FastAPI', 'Docker', 'Kubernetes', 'AWS'],
      },
      {
        kicker: 'Minería // Maprosoft', badge: 'Summa Gold & Shougang', accent: 'tertiary', icon: 'local_shipping',
        title: 'Dispatch minero en tiempo real',
        description: 'Control de flota en tiempo real con WebSockets, dashboards de KPIs y mapas geológicos interactivos para las operaciones mineras.',
        stack: ['WebSockets', 'ASP.NET', 'SQL Server', 'Mapbox', 'Leaflet'],
      },
    ],
    portafolio: [
      { img: 'img/quisco-next.png', title: 'Quiosco', description: 'Sistema de ventas con Next.js', url: 'https://quiosco-next-wine.vercel.app/order/cafe' },
      { img: 'img/up-task.png', title: 'Up-Task', description: 'Planificador de proyectos', url: 'https://up-task-sigma.vercel.app' },
      { img: 'img/project_students.png', title: 'Project Students', description: 'Gestión de estudiantes', url: 'https://front-students-qfzbd3w2p-francosh102798s-projects.vercel.app' },
      { img: 'img/back_node.png', title: 'BackProductApp', description: 'API REST de productos (Node)', url: 'https://server-product-69pm.onrender.com/docs/#/Products' },
      { img: 'img/admin_producto.png', title: 'ProductosApp', description: 'Administrador de productos', url: 'https://crud-product-rouge-theta.vercel.app/' },
      { img: 'img/pacientes_app.png', title: 'PacientesApp', description: 'Seguimiento de pacientes veterinaria', url: 'https://pacientes-zustand-azure.vercel.app/' },
      { img: 'img/cocktail.png', title: 'CockTailApp', description: 'Buscador de recetas de tragos', url: 'https://bebidas-react-one.vercel.app' },
      { img: 'img/guitar-la.png', title: 'GuitarLA', description: 'Tienda de instrumentos', url: 'https://guitar-la-ghnl.vercel.app/' },
      { img: 'img/cripto_app.png', title: 'CriptoApp', description: 'Cotizador de criptomonedas', url: 'https://cripto-cotiza.vercel.app/' },
      { img: 'img/clima_app.png', title: 'ClimaApp', description: 'Buscador de clima', url: 'https://clima-beta-umber.vercel.app/' },
      { img: 'img/gasto_app.png', title: 'GastosApp', description: 'Planificador de gastos', url: 'https://control-gastos-taupe.vercel.app/' },
      { img: 'img/contador_calories.png', title: 'CaloriasApp', description: 'Contador de calorías', url: 'https://calorie-tracker-dun.vercel.app/' },
      { img: 'img/propinas_app.png', title: 'PropinasApp', description: 'Calculadora de propinas', url: 'https://calculadora-propinas-gamma.vercel.app/' },
    ],
  }), { name: 'portafolio-store' })
);

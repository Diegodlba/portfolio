// ✏️ Editá, agregá o borrá proyectos.
// QA: repo + trello + report son opcionales (si no existen, no se muestra el botón).
// Podés agregar más enlaces en "extra": [{ label: "🎥 Video", url: "..." }]

const GH = "https://github.com/tu-usuario/";

export const qaProjects = [
  {
    title: "Automatización de pruebas: AdminCES",
    description: "4 escenarios end-to-end documentados en Trello y automatizados en código, con funciones auxiliares reutilizables y pruebas basadas en conjuntos de datos.",
    tags: ["Java", "Selenium", "JUnit", "Allure", "Maven", "Data-driven"],
    repo: "https://github.com/Diegodlba/tatf-scripts",
    trello: "https://trello.com/b/pntWKSx8/adminces-guiones-de-prueba",
    report: "https://docs.google.com/document/d/1muj4mOOp8Ye421yohXkYldb8LK0_TzTl/edit",
  },
  {
    title: "Prueba funcional con Selenium IDE: registro de tester",
    description: "Prueba end-to-end grabada y parametrizada en Selenium IDE: inicio de sesión, alta de un usuario tester y verificación en el listado. Usa variables para los datos y verifica cada campo ingresado. Incluye el guion de la prueba con funciones auxiliares.",
    tags: ["Selenium IDE", "Pruebas funcionales", "Parametrización", "Guion de prueba"],
    repo: "https://github.com/Diegodlba/adminces-selenium-ide",
    extra: [
      { label: "📄 Guion de prueba (PDF)", url: "https://github.com/Diegodlba/adminces-selenium-ide/blob/main/README.md" },
    ],
  },
  {
    title: "Pruebas de servicio SOAP con SoapUI: cotizaciones BCU",
    description: "Suite de 11 casos válidos, inválidos y de borde sobre el servicio SOAP de cotizaciones del Banco Central del Uruguay, con assertions XPath, de contenido y de errores de negocio. Detecté un HTTP 500 al enviar un tipo de dato inválido.",
    tags: ["SoapUI", "SOAP", "XPath", "Assertions", "Casos inválidos"],
    repo: "https://github.com/Diegodlba/api-testing-soapui-postman",
    trello: "https://trello.com/b/jHgsXFR8/pruebas-de-api-soapui-y-postman",
    report: "https://github.com/Diegodlba/api-testing-soapui-postman/blob/main/api-testing-soapui-postman/SoapUI_Postman_Informe_delaBarreraDiego.pdf",
  },
  {
    title: "Pruebas de API REST con Postman: JSONPlaceholder",
    description: "Colección de 12 requests (GET, POST, PUT, DELETE) sobre el recurso /comments, con casos válidos e inválidos y tests en JavaScript. Encontré un error 500 al actualizar un id inexistente y comportamientos inconsistentes entre operaciones.",
    tags: ["Postman", "REST", "JavaScript", "Tests de API", "Casos inválidos"],
    repo: "https://github.com/Diegodlba/api-testing-soapui-postman",
    trello: "https://trello.com/b/jHgsXFR8/pruebas-de-api-soapui-y-postman",
    report: "https://github.com/Diegodlba/api-testing-soapui-postman/blob/main/api-testing-soapui-postman/SoapUI_Postman_Informe_delaBarreraDiego.pdf",
  },
  {
    title: "Pruebas manuales: casos de prueba y defectos",
    description: "Diseño y ejecución de casos de prueba manuales sobre un sitio web de alojamientos (fe.deitech.online): pruebas positivas y negativas, prueba funcional y reporte de defectos. Incluye un defecto encontrado en la ubicación del mapa.",
    tags: ["Pruebas manuales", "Casos de prueba", "Pruebas positivas y negativas", "Reporte de defectos", "Prueba funcional"],
    extra: [
      { label: "📊 Casos de prueba y defectos (planilla)", url: "https://docs.google.com/spreadsheets/d/1vK7k8giD4B4YobRunPfCgSiusdceSGOn/edit?gid=1428491753" },
    ],
  },
  {
    title: "Pruebas manuales: casos positivos y negativos de un sitio de venta de entradas",
    description: "14 casos de prueba manuales sobre los flujos principales de un sitio de venta de entradas: inicio de sesión, registro, búsqueda, filtros, contacto, recuperación de contraseña y compra. Incluye prioridad y estado de cada caso, con 3 fallas de baja prioridad detectadas.",
    tags: ["Pruebas manuales", "Casos de prueba", "Pruebas positivas y negativas", "Pruebas funcionales"],
    extra: [
      { label: "📊 Casos de prueba (planilla)", url: "https://docs.google.com/spreadsheets/d/1suZXea_GGvc32Dtypupm0UIVkVbPytfRa3IZbU4m7ko/edit?gid=0" },
    ],
  },
];

export const devProjects = [
  {
    title: "Tienda online: shopping-online",
    description: "Sitio de comercio electrónico con inicio, categorías, ofertas, detalle de producto y carrito de compras que se guarda en el navegador. Proyecto de curso: el registro y el login dependían de una API que ya no está en línea.",
    tags: ["HTML", "CSS", "JavaScript", "Fetch API"],
    repo: "https://github.com/Diegodlba/shooping-online",
  },
  {
    title: "Clínica odontológica: proyecto final Front III",
    description: "Sitio web de una clínica odontológica en React: listado de odontólogos desde una API, detalle de cada uno, favoritos, contacto y cambio de tema. Proyecto final en equipo.",
    tags: ["React", "Vite", "JavaScript", "CSS", "API REST"],
    repo: "https://github.com/Diegodlba/FinalFrontIII",
  },
  {
    title: "Clínica odontológica: backend con Spring Boot",
    description: "Backend en Java con Spring Boot para gestionar pacientes y domicilios de una clínica odontológica, con persistencia en base de datos H2 mediante JPA y registro de operaciones en logs.",
    tags: ["Java", "Spring Boot", "JPA", "H2", "Maven"],
    repo: "https://github.com/Diegodlba/clinica_odontologica",
  },
];

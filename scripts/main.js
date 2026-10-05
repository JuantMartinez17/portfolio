/* ============================================
   PORTFOLIO — main.js
   ============================================ */

/* ---- i18n translations ---- */
const translations = {
  es: {
    "a11y.skip": "Saltar al contenido",
    "nav.about": "Sobre mí",
    "nav.experience": "Experiencia",
    "nav.work": "Proyectos",
    "nav.stack": "Stack",
    "nav.contact": "Contacto",
    "hero.title.line1": "Forward Deployed Engineer",
    "hero.title.line2": "De un problema difuso a una solución en producción.",
    "hero.sub": "Soy Juan Tomás, Analista Funcional / Solutions Engineer en Aeroterra, en Buenos Aires. Trabajo dentro de proyectos de clientes empresariales de punta a punta: relevo el problema, diseño la solución y la construyo junto al equipo hasta producción.",
    "hero.cta.primary": "Ver mi trabajo",
    "hero.cta.cv": "Descargar CV",
    "hero.cta.secondary": "Contactarme",
    "hero.meta.location": "Ubicación",
    "hero.meta.role": "Rol",
    "hero.meta.role.value": "Analista Funcional · Solutions Engineer",
    "hero.meta.timezone": "Zona horaria",
    "about.title": "Sobre mí",
    "about.p1": "Trabajo donde se cruzan el negocio y el software. Casi siempre empieza con un cliente que trae un problema todavía mal definido: lo relevo con la gente que lo vive, lo convierto en una especificación, diseño la solución y el modelo de datos, y después la construyo junto a los equipos de desarrollo del cliente y de delivery hasta que funciona en producción.",
    "about.p2": "Me siento cómodo con problemas abiertos y de alto impacto, con poca estructura previa y en dominios de negocio que no conocía — energía, gobierno, seguridad pública. Hace un año y medio que hago este trabajo en Aeroterra. Mi base es la programación, así que no me quedo en la especificación: también escribo el código, armo las integraciones y las pruebo.",
    "about.education": "Formación",
    "about.education.value": "Técnico Universitario en Programación de Sistemas (2023–2024)",
    "about.focus": "Foco",
    "about.focus.value": "Requerimientos · Diseño de solución · Implementación",
    "about.languages": "Idiomas",
    "about.languages.value": "Español (nativo) · Inglés profesional (CILE 3, UBA)",
    "experience.title": "Experiencia",
    "experience.aeroterra.period": "Abr 2025 — Presente",
    "experience.aeroterra.place": "Buenos Aires, AR",
    "experience.role": "Analista Funcional / Solutions Engineer",
    "experience.desc": "Proyectos empresariales para clientes de energía, gobierno y seguridad pública. Soy el primer punto de contacto entre el cliente y los equipos de desarrollo, y cada proyecto recorre el mismo ciclo:",
    "experience.nda": "Clientes bajo acuerdo de confidencialidad; no se detallan alcances, volúmenes ni nombres.",
    "experience.stage1.title": "1 · Relevar el problema",
    "experience.stage1.desc": "Me siento con el cliente a entender el problema, y después relevo, analizo y documento los requerimientos funcionales — por ejemplo, los de una solución de gestión de emergencias para un organismo nacional de seguridad pública, organizados por módulo, con especificaciones funcionales y documentación de procesos.",
    "experience.stage2.title": "2 · Diseñar la solución",
    "experience.stage2.desc": "Lo traduzco en una solución viable: arquitectura, modelo de datos relacional e integración de datos de fuentes heterogéneas (KML, PDF, formularios de campo). La presento ante el cliente con demos y pruebas de concepto.",
    "experience.stage3.title": "3 · Construirla hasta producción",
    "experience.stage3.desc": "Comparto el diseño aprobado con desarrolladores y analistas y trabajo con ellos hasta que sale a producción — a veces configurando yo mismo el aplicativo de punta a punta. En el camino valido APIs REST e integraciones con Postman, ejecuto pruebas funcionales y automatizo con Python el trabajo repetitivo.",
    "experience.highlight.title": "Caso destacado · Cliente de oil & gas",
    "experience.highlight.desc": "Para la plataforma de operaciones en campo de un cliente de oil & gas, diseñé un modelo de datos relacional de 3 niveles (novedad → evento → seguimiento) y un módulo de inspecciones independiente, y configuré yo mismo el aplicativo de campo de punta a punta, mientras el equipo de desarrollo construía sobre ese mismo modelo las apps de monitoreo separadas. Un solo diseño sostuvo dos implementaciones independientes.",
    "experience.chip.requirements": "Análisis de requerimientos",
    "experience.chip.datamodeling": "Modelado de datos",
    "experience.chip.architecture": "Arquitectura de soluciones",
    "experience.chip.integration": "Integración de datos",
    "experience.chip.demos": "Demos y pruebas de concepto",
    "work.title": "Proyectos destacados",
    "work.type.ml": "Machine Learning · API",
    "work.type.automation": "Automatización · Asistida por IA",
    "work.type.backend": "Backend · API REST",
    "work.type.fullstack": "Web fullstack",
    "work.type.mobile": "App Android",
    "work.type.game": "Juego 2D",
    "work.invgate.desc": "Una herramienta que extrae datos de tickets ITSM desde exports en PDF y los convierte en historias de usuario de Jira con criterios de aceptación, listas para cargar. Construida con Claude Code.",
    "work.invgate.note": "Repositorio privado.",
    "work.predictor.title": "Predictor de Partidos · Mundial 2026",
    "work.predictor.desc": "Un backend que predice todos los partidos del Mundial 2026 — probabilidades de victoria/empate/derrota, goles esperados y los marcadores más probables — expuesto como API REST. El motor combina un modelo estadístico Dixon-Coles con ratings Elo y simulación Monte Carlo.",
    "work.predictor.metric": "55.9% de acierto · validado sobre Mundiales 2018–2022 · 48 selecciones",
    "work.predictor.note": "El frontend lo construyó una colaboradora; el modelo y la API son míos.",
    "work.vaquitapp.desc": "El backend de una app de gastos compartidos del hogar, con la especificación de producto y los casos de uso documentados en el repo. Incluye un módulo de autenticación completo: registro, login, refresh JWT con rotación de tokens y middleware de protección de rutas.",
    "work.movieverse.desc": "App fullstack de descubrimiento de películas: explorá, buscá y guardá films en listas personales. La diseñé de punta a punta — una API REST con autenticación JWT sobre mi propia base de datos, con frontend en React.",
    "work.mealmind.desc": "App Android nativa de recetas: buscá comidas y mirá el detalle traído en vivo desde una API externa. Construida sobre una arquitectura MVVM limpia con manejo de estado prolijo, siguiendo las buenas prácticas de Android.",
    "work.knight.desc": "Plataformero 2D con sprites animados a mano, persistencia de partida y máquinas de estado para el comportamiento del jugador y los enemigos — una inmersión práctica en game loops y lógica en tiempo real.",
    "work.code": "Ver código",
    "work.demo": "Demo en vivo",
    "work.all": "Ver todos los repositorios en GitHub",
    "stack.title": "Stack",
    "stack.frontend": "Frontend",
    "stack.backend": "Backend",
    "stack.data": "Datos & Mobile",
    "stack.data.modeling": "Modelado de datos",
    "stack.mobile": "Mobile",
    "stack.tools": "Herramientas",
    "contact.title": "Hablemos",
    "contact.lead": "¿Tenés una pregunta, un proyecto o un problema que quieras charlar? Mandame un mensaje y respondo en menos de 24 horas.",
    "contact.email": "Email",
    "form.name": "Nombre",
    "form.email": "Email",
    "form.subject": "Asunto",
    "form.message": "Mensaje",
    "form.send": "Enviar mensaje",
    "form.error.required": "Este campo es obligatorio",
    "form.error.email": "Ingresá un email válido",
    "form.error.short": "Demasiado corto",
    "form.success": "Mensaje enviado. Te respondo pronto.",
    "form.error.generic": "No se pudo enviar. Probá de nuevo o escribime directo por email.",
    "footer.built": "Construido con HTML, CSS y JavaScript."
  },
  en: {
    "a11y.skip": "Skip to content",
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.work": "Work",
    "nav.stack": "Stack",
    "nav.contact": "Contact",
    "hero.title.line1": "Forward Deployed Engineer",
    "hero.title.line2": "From an unclear problem to a solution in production.",
    "hero.sub": "I'm Juan Tomás, a Functional Analyst / Solutions Engineer at Aeroterra, in Buenos Aires. I work inside enterprise client projects end to end: I scope the problem, design the solution, and build it with the team through to production.",
    "hero.cta.primary": "See my work",
    "hero.cta.cv": "Download CV",
    "hero.cta.secondary": "Get in touch",
    "hero.meta.location": "Location",
    "hero.meta.role": "Role",
    "hero.meta.role.value": "Functional Analyst · Solutions Engineer",
    "hero.meta.timezone": "Timezone",
    "about.title": "About",
    "about.p1": "I work where business and software meet. It usually starts with a client bringing a problem that isn't well defined yet: I scope it with the people who live it, turn it into a specification, design the solution and the data model, and then build it alongside the client's and the delivery team's engineers until it's running in production.",
    "about.p2": "I'm comfortable owning open-ended, high-stakes problems with little structure around them, in business domains I didn't know beforehand — energy, government, public safety. I've been doing this at Aeroterra for a year and a half. My background is in programming, so I don't stop at the spec: I also write the code, wire up the integrations and test them.",
    "about.education": "Education",
    "about.education.value": "University Technician in Systems Programming (2023–2024)",
    "about.focus": "Focus",
    "about.focus.value": "Requirements · Solution design · Implementation",
    "about.languages": "Languages",
    "about.languages.value": "Spanish (native) · Professional English (CILE 3, UBA)",
    "experience.title": "Experience",
    "experience.aeroterra.period": "Apr 2025 — Present",
    "experience.aeroterra.place": "Buenos Aires, AR",
    "experience.role": "Functional Analyst / Solutions Engineer",
    "experience.desc": "Enterprise projects for clients in energy, government and public safety. I'm the first point of contact between the client and the development teams, and every project runs through the same cycle:",
    "experience.nda": "Clients under NDA; scope, volumes and names are not disclosed.",
    "experience.stage1.title": "1 · Scope the problem",
    "experience.stage1.desc": "I sit with the client to understand the problem, then gather, analyze and document the functional requirements — for example, the requirements for an emergency-management solution for a national public-safety agency, organized by module with functional specs and process documentation.",
    "experience.stage2.title": "2 · Design the solution",
    "experience.stage2.desc": "I turn that into a viable solution: architecture, relational data model, and integration of data from heterogeneous sources (KML, PDF, field forms). I present it to the client with demos and proofs of concept.",
    "experience.stage3.title": "3 · Build it through to production",
    "experience.stage3.desc": "I share the approved design with developers and analysts and work with them until it ships — sometimes configuring the application end to end myself. Along the way I validate REST APIs and integrations with Postman, run functional tests, and automate repetitive work with Python.",
    "experience.highlight.title": "Highlight · Oil & gas client",
    "experience.highlight.desc": "For an oil & gas client's field-operations platform, I designed a 3-level relational data model (report → event → follow-up) and a standalone inspection module, and configured the field application end to end myself, while the development team built the separate monitoring apps on that same model. One design held two independent implementations.",
    "experience.chip.requirements": "Requirements analysis",
    "experience.chip.datamodeling": "Data modeling",
    "experience.chip.architecture": "Solution architecture",
    "experience.chip.integration": "Data integration",
    "experience.chip.demos": "Demos & proofs of concept",
    "work.title": "Selected work",
    "work.type.ml": "Machine Learning · API",
    "work.type.automation": "Automation · AI-assisted",
    "work.type.backend": "Backend · REST API",
    "work.type.fullstack": "Fullstack web",
    "work.type.mobile": "Android app",
    "work.type.game": "2D game",
    "work.invgate.desc": "A tool that extracts ITSM ticket data from PDF exports and turns it into Jira-ready user stories with acceptance criteria. Built with Claude Code.",
    "work.invgate.note": "Private repository.",
    "work.predictor.title": "World Cup 2026 Match Predictor",
    "work.predictor.desc": "A backend that forecasts every World Cup 2026 match — win/draw/loss probabilities, expected goals and the most likely scorelines — served as a REST API. The engine blends a Dixon-Coles statistical model with Elo ratings and Monte Carlo simulation.",
    "work.predictor.metric": "55.9% result accuracy · backtested on 2018–2022 World Cups · 48 teams",
    "work.predictor.note": "Frontend built by a collaborator; the prediction model and API are mine.",
    "work.vaquitapp.desc": "The backend for a shared household-expenses app, with its product spec and use cases documented in the repo. It includes a full auth module: registration, login, JWT refresh with token rotation, and route-protection middleware.",
    "work.movieverse.desc": "A fullstack movie-discovery app: browse, search and save films to personal lists. I designed it end to end — a JWT-secured REST API over my own database, with a React frontend.",
    "work.mealmind.desc": "A native Android recipe app: search meals and browse details pulled live from an external API. Built on a clean MVVM architecture with proper state handling, following Android best practices.",
    "work.knight.desc": "A 2D platformer with hand-animated sprites, persistent save data, and state-machine-driven enemy and player behavior — a hands-on dive into game loops and real-time logic.",
    "work.code": "View code",
    "work.demo": "Live demo",
    "work.all": "See all repositories on GitHub",
    "stack.title": "Stack",
    "stack.frontend": "Frontend",
    "stack.backend": "Backend",
    "stack.data": "Data & Mobile",
    "stack.data.modeling": "Data modeling",
    "stack.mobile": "Mobile",
    "stack.tools": "Tools",
    "contact.title": "Get in touch",
    "contact.lead": "Have a question, a project or a problem you'd like to talk through? Send a message and I'll get back within 24 hours.",
    "contact.email": "Email",
    "form.name": "Name",
    "form.email": "Email",
    "form.subject": "Subject",
    "form.message": "Message",
    "form.send": "Send message",
    "form.error.required": "This field is required",
    "form.error.email": "Please enter a valid email",
    "form.error.short": "Too short",
    "form.success": "Message sent. I'll get back to you soon.",
    "form.error.generic": "Couldn't send. Try again or email me directly.",
    "footer.built": "Built with HTML, CSS & JavaScript."
  }
};

/* ---- i18n ---- */
/* These keys and the fallbacks below are duplicated in the inline <head> script
   of index.html, which applies theme + lang before the first paint (this file is
   a module, so it runs too late for that). Change both together. */
const STORAGE_LANG = "portfolio:lang";
const STORAGE_THEME = "portfolio:theme";

function getInitialLang() {
  const stored = localStorage.getItem(STORAGE_LANG);
  if (stored === "es" || stored === "en") return stored;
  const browser = navigator.language?.toLowerCase() || "";
  return browser.startsWith("es") ? "es" : "en";
}

function setLang(lang) {
  localStorage.setItem(STORAGE_LANG, lang);
  document.documentElement.lang = lang;

  // Update all data-i18n nodes
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = translations[lang]?.[key];
    if (value !== undefined) el.textContent = value;
  });

  // Update lang toggle visual state
  document.querySelectorAll(".lang-option").forEach((opt) => {
    opt.classList.toggle("active", opt.dataset.lang === lang);
  });

  // Point the CV download to the matching-language PDF
  const cv = document.getElementById("cv-download");
  if (cv) {
    cv.href =
      lang === "es"
        ? "assets/cv/JuanTomasMartinez_Curriculum.pdf"
        : "assets/cv/JuanTomasMartinez_Resume.pdf";
  }
}

/* ---- Theme ---- */
function getInitialTheme() {
  const stored = localStorage.getItem(STORAGE_THEME);
  if (stored === "dark" || stored === "light") return stored;
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

function setTheme(theme) {
  localStorage.setItem(STORAGE_THEME, theme);
  document.documentElement.setAttribute("data-theme", theme);
}

/* ---- Header scroll state ---- */
function initHeaderScroll() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  let ticking = false;
  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        header.classList.toggle("scrolled", window.scrollY > 8);
        ticking = false;
      });
      ticking = true;
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ---- Mobile menu ---- */
function initMobileMenu() {
  const btn = document.getElementById("menu-btn");
  const nav = document.querySelector(".nav");
  if (!btn || !nav) return;

  btn.addEventListener("click", () => {
    const open = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("open", !open);
  });

  // Close on link tap
  nav.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      btn.setAttribute("aria-expanded", "false");
      nav.classList.remove("open");
    });
  });
}

/* ---- Scroll reveal ---- */
function initReveal() {
  const targets = document.querySelectorAll(
    ".section-head, .about-grid, .timeline-item, .work-item, .stack-group, .contact-grid"
  );
  targets.forEach((el) => el.classList.add("reveal"));

  if (!("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("visible"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -50px 0px" }
  );

  targets.forEach((el) => io.observe(el));
}

/* ---- Year ---- */
function initYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = String(new Date().getFullYear());
}

/* ---- Hero photo (hide gracefully if the image is missing) ---- */
function initPhoto() {
  const fig = document.getElementById("hero-photo");
  const img = fig?.querySelector("img");
  if (!fig || !img) return;

  const hide = () => fig.setAttribute("hidden", "");
  if (img.complete && img.naturalWidth === 0) {
    hide();
  } else {
    img.addEventListener("error", hide, { once: true });
  }
}

/* ---- Form ---- */
function initForm() {
  const form = document.getElementById("contact-form");
  const submitBtn = document.getElementById("submit-btn");
  const feedback = document.getElementById("form-feedback");
  if (!form || !submitBtn || !feedback) return;

  const getLang = () => localStorage.getItem(STORAGE_LANG) || "es";
  const t = (k) => translations[getLang()]?.[k] || k;

  function showError(name, key) {
    const input = form.querySelector(`#${name}`);
    const errorEl = form.querySelector(`[data-error-for="${name}"]`);
    if (!input || !errorEl) return;
    input.setAttribute("aria-invalid", "true");
    errorEl.textContent = t(key);
    errorEl.classList.add("visible");
  }

  function clearError(name) {
    const input = form.querySelector(`#${name}`);
    const errorEl = form.querySelector(`[data-error-for="${name}"]`);
    if (!input || !errorEl) return;
    input.removeAttribute("aria-invalid");
    errorEl.textContent = "";
    errorEl.classList.remove("visible");
  }

  function clearAllErrors() {
    ["name", "email", "subject", "message"].forEach(clearError);
  }

  function validate(data) {
    let valid = true;
    if (!data.name || data.name.trim().length < 2) {
      showError("name", "form.error.required");
      valid = false;
    }
    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      showError("email", "form.error.email");
      valid = false;
    }
    if (!data.subject || data.subject.trim().length < 2) {
      showError("subject", "form.error.required");
      valid = false;
    }
    if (!data.message || data.message.trim().length < 10) {
      showError("message", "form.error.short");
      valid = false;
    }
    return valid;
  }

  // Live error-clearing on input
  ["name", "email", "subject", "message"].forEach((name) => {
    const input = form.querySelector(`#${name}`);
    if (input) {
      input.addEventListener("input", () => clearError(name));
    }
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    clearAllErrors();
    feedback.textContent = "";
    feedback.className = "form-feedback";

    const fd = new FormData(form);
    const data = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      subject: String(fd.get("subject") || ""),
      message: String(fd.get("message") || ""),
      website: String(fd.get("website") || ""), // honeypot
    };

    // Honeypot: silently drop submission if filled
    if (data.website) {
      feedback.textContent = t("form.success");
      feedback.classList.add("success");
      form.reset();
      return;
    }

    if (!validate(data)) return;

    // Formspree (or any compatible service) endpoint, read from the form's action.
    const endpoint = form.getAttribute("action") || "";
    if (!endpoint || endpoint.includes("YOUR_FORM_ID")) {
      feedback.textContent = t("form.error.generic");
      feedback.classList.add("error");
      return;
    }

    submitBtn.setAttribute("data-state", "loading");
    submitBtn.disabled = true;

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        }),
      });

      if (!response.ok) throw new Error("Bad response");

      feedback.textContent = t("form.success");
      feedback.classList.add("success");
      form.reset();
    } catch (err) {
      feedback.textContent = t("form.error.generic");
      feedback.classList.add("error");
    } finally {
      submitBtn.removeAttribute("data-state");
      submitBtn.disabled = false;
    }
  });
}

/* ---- Bootstrap ---- */
function init() {
  // Theme first to avoid flash
  setTheme(getInitialTheme());
  setLang(getInitialLang());

  // Bind toggles
  document.getElementById("theme-toggle")?.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    setTheme(current === "dark" ? "light" : "dark");
  });

  document.getElementById("lang-toggle")?.addEventListener("click", () => {
    const current = localStorage.getItem(STORAGE_LANG) || "es";
    setLang(current === "es" ? "en" : "es");
  });

  initHeaderScroll();
  initMobileMenu();
  initReveal();
  initYear();
  initPhoto();
  initForm();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

/* ============================================
   PORTFOLIO — main.js
   ============================================ */

/* ---- i18n translations ---- */
const translations = {
  es: {
    "a11y.skip": "Saltar al contenido",
    "nav.about": "Sobre mí",
    "nav.work": "Proyectos",
    "nav.stack": "Stack",
    "nav.contact": "Contacto",
    "hero.status": "Disponible para nuevas oportunidades",
    "hero.title.line1": "Software developer",
    "hero.title.line2": "construyendo cosas para la web",
    "hero.sub": "Soy Juan Tomás — Técnico en Programación de Sistemas, de Buenos Aires. Construyo apps web fullstack y aplicaciones Android nativas, con foco en arquitectura limpia y los detalles que importan.",
    "hero.cta.primary": "Ver mi trabajo",
    "hero.cta.secondary": "Contactarme",
    "hero.meta.location": "Ubicación",
    "hero.meta.role": "Rol",
    "hero.meta.role.value": "Fullstack / Mobile",
    "hero.meta.timezone": "Zona horaria",
    "about.title": "Sobre mí",
    "about.p1": "Soy Técnico en Programación de Sistemas y disfruto genuinamente del oficio de construir software. La mayoría de mi trabajo vive en la intersección entre web y mobile — apps fullstack con React y Node, Android nativo con Kotlin, y alguna que otra inmersión en desarrollo de juegos con Godot.",
    "about.p2": "Me importa el código que sea fácil de leer seis meses después, las interfaces que respetan al usuario, y entregar cosas de punta a punta en lugar de pasar trabajo a medio hacer. Actualmente busco un puesto full-time como ingeniero de software donde pueda seguir aprendiendo junto a gente que se tome el oficio en serio.",
    "about.education": "Formación",
    "about.education.value": "Técnico en Programación de Sistemas",
    "about.focus": "Foco",
    "about.focus.value": "Web · Mobile · Arquitectura limpia",
    "about.languages": "Idiomas",
    "about.languages.value": "Español (nativo) · Inglés (profesional)",
    "work.title": "Proyectos destacados",
    "work.type.fullstack": "Web fullstack",
    "work.type.mobile": "App Android",
    "work.type.game": "Juego 2D",
    "work.movieverse.desc": "Plataforma fullstack de descubrimiento de películas. Backend en Express siguiendo el patrón MVC, autenticación con JWT, y una API REST propia conectada a mi base de datos. Frontend en React.",
    "work.mealmind.desc": "App Android nativa construida en Kotlin con patrón MVVM. Se conecta a una API externa de recetas con autenticación por API key, usa RecyclerView para listados y sigue las buenas prácticas de Android para manejo de estado.",
    "work.knight.desc": "Plataformero 2D construido en Godot con GDScript. Animaciones cuadro a cuadro, persistencia de partida, y máquinas de estado para el comportamiento del jugador y enemigos.",
    "work.code": "Ver código",
    "work.all": "Ver todos los repositorios en GitHub",
    "stack.title": "Stack",
    "stack.frontend": "Frontend",
    "stack.backend": "Backend",
    "stack.mobile": "Mobile",
    "stack.tools": "Herramientas",
    "contact.title": "Hablemos",
    "contact.lead": "¿Buscás un desarrollador? ¿Tenés una pregunta? ¿Querés charlar sobre un proyecto? Mandame un mensaje y respondo en menos de 24 horas.",
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
    "nav.work": "Work",
    "nav.stack": "Stack",
    "nav.contact": "Contact",
    "hero.status": "Available for new opportunities",
    "hero.title.line1": "Software developer",
    "hero.title.line2": "building things for the web",
    "hero.sub": "I'm Juan Tomás — a Systems Programming Technician from Buenos Aires. I build fullstack web apps and native Android applications, with a focus on clean architecture and the details that matter.",
    "hero.cta.primary": "See my work",
    "hero.cta.secondary": "Get in touch",
    "hero.meta.location": "Location",
    "hero.meta.role": "Role",
    "hero.meta.role.value": "Fullstack / Mobile",
    "hero.meta.timezone": "Timezone",
    "about.title": "About",
    "about.p1": "I'm a Systems Programming Technician who genuinely enjoys the craft of building software. Most of my work lives at the intersection of web and mobile — fullstack apps with React and Node, native Android with Kotlin, and the occasional dive into game development with Godot.",
    "about.p2": "I care about code that's easy to read six months later, interfaces that respect the user, and shipping things end-to-end rather than handing off half-finished work. I'm currently looking for a full-time software engineering role where I can keep learning alongside people who take the craft seriously.",
    "about.education": "Education",
    "about.education.value": "Systems Programming Technician",
    "about.focus": "Focus",
    "about.focus.value": "Web · Mobile · Clean architecture",
    "about.languages": "Languages",
    "about.languages.value": "Spanish (native) · English (professional)",
    "work.title": "Selected work",
    "work.type.fullstack": "Fullstack web",
    "work.type.mobile": "Android app",
    "work.type.game": "2D game",
    "work.movieverse.desc": "A fullstack movie discovery platform. Backend built with Express following the MVC pattern, JWT-based auth, and a custom REST API on top of my own database. Frontend in React.",
    "work.mealmind.desc": "Native Android app built in Kotlin with the MVVM pattern. Connects to an external recipes API with API key auth, uses RecyclerView for data lists, and follows Android best practices for state management.",
    "work.knight.desc": "A 2D platformer built in Godot with GDScript. Features frame-by-frame animations, persistent save data, and state machines driving enemy and player behavior.",
    "work.code": "View code",
    "work.all": "See all repositories on GitHub",
    "stack.title": "Stack",
    "stack.frontend": "Frontend",
    "stack.backend": "Backend",
    "stack.mobile": "Mobile",
    "stack.tools": "Tools",
    "contact.title": "Get in touch",
    "contact.lead": "Looking for a developer? Have a question? Want to chat about a project? Send a message and I'll get back within 24 hours.",
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

  // Update document title
  document.title =
    lang === "es"
      ? "Juan Tomás Martínez — Software Developer"
      : "Juan Tomás Martínez — Software Developer";
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
    ".section-head, .about-grid, .work-item, .stack-group, .contact-grid"
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

    submitBtn.setAttribute("data-state", "loading");
    submitBtn.disabled = true;

    try {
      // Posts to your existing backend endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
  initForm();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

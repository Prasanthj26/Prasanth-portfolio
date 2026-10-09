const { createElement: h } = React;

const resumeFile = "Prasanth_J_Resume.pdf";
const portraitSrc = "assets/prasanth-portrait.jpg";
const uploadedPhoto = "assets/profile-photo.jpg";

const profile = {
  name: "Prasanth J.",
  role: "Java Full Stack Developer",
  email: "prasanth.j226@gmail.com",
  phone: "+91 7558198500",
  phoneHref: "tel:+917558198500",
  location: "Madurai, Tamil Nadu, India",
  github: "https://github.com/Prasanthj26",
  linkedin: "https://www.linkedin.com/in/prasanthj2622",
};

const navItems = [
  ["#home", "Home"],
  ["#about", "About"],
  ["#skills", "Skills"],
  ["#projects", "Projects"],
  ["#experience", "Experience"],
  ["#contact", "Contact"],
];

const skillGroups = [
  {
    id: "programming",
    title: "Programming",
    icon: "code",
    items: ["Java", "Object-Oriented Programming"],
    detail: "Core Java and OOP principles used to architect robust backend modules, data classes, and clean application logic.",
  },
  {
    id: "frontend",
    title: "Frontend",
    icon: "layout",
    items: ["HTML5", "CSS3", "JavaScript"],
    detail: "Clean, responsive user interfaces developed with semantic markup, modern CSS styling, and dynamic JavaScript interactions.",
  },
  {
    id: "backend",
    title: "Backend",
    icon: "server",
    items: ["JDBC", "Java Servlets", "REST APIs"],
    detail: "Request dispatching, session handling, secure prepared data access, and API-oriented backend services.",
  },
  {
    id: "database",
    title: "Database",
    icon: "database",
    items: ["MySQL"],
    detail: "Relational database schemas, CRUD operations, transactions, and foreign key relationships optimized for performance.",
  },
  {
    id: "tools",
    title: "Tools & Deployment",
    icon: "tool",
    items: ["VS Code", "GitHub", "Apache Tomcat"],
    detail: "Daily version control, servlet container deployment, modular testing, and professional developer workflows.",
  },
];

const projects = [
  {
    featured: true,
    title: "Food Ordering System",
    kicker: "Featured Project · Full-Stack Java",
    description:
      "A complete full-stack food ordering platform built using Java Servlets and JDBC, deployed on Apache Tomcat to handle customer orders, cart states, and administrative operations.",
    features: [
      "Relational MySQL schemas with PreparedStatement CRUD operations for menu items, categories, and customers",
      "Secure session-based authentication for user login and admin management",
      "Dynamic shopping cart, real-time checkout, order placement, and historical tracking",
      "Administrative dashboard for menu item inventory, pricing, and order status updates",
      "Transaction management to ensure data integrity during multi-step order checkout",
    ],
    tech: ["Java Servlets", "JDBC", "MySQL", "Apache Tomcat", "HTML5", "CSS3", "JavaScript"],
  },
  {
    title: "JDBC Interactive Explorer",
    description:
      "An interactive visual simulation demonstrating how Java applications connect and communicate with relational databases via JDBC, tracing DriverManager, Connections, Statements, SQL queries, and ResultSets.",
    tech: ["Java", "JDBC", "MySQL", "JavaScript"],
    live: "https://prasanthj26.github.io/JDBC-Interactive-Explorer/",
    code: "https://github.com/Prasanthj26/JDBC-Interactive-Explorer",
  },
  {
    title: "Java Servlet Interactive Explorer",
    description:
      "A public developer project exploring the Java Servlet lifecycle, request-response lifecycles, doGet/doPost dispatching, and session tracking through an accessible interactive interface.",
    tech: ["Java", "Servlets", "Tomcat", "Web"],
    code: "https://github.com/Prasanthj26/JavaServlet-Interactive-Explorer",
  },
];

const timeline = [
  {
    type: "Internship",
    title: "Java Full Stack Intern",
    place: "Tap Academy, Bengaluru, Karnataka",
    dates: "May 2026 — Present",
    detail:
      "Developing modular backend systems using Java, JDBC, MySQL, and REST APIs while contributing to end-to-end full-stack web applications, integrating frontend views with reliable database workflows.",
  },
  {
    type: "Internship",
    title: "Python Programming Internship",
    place: "Unified Mentor Pvt. Ltd.",
    dates: "1 month",
    detail:
      "Gained hands-on experience in core Python programming, data manipulation, algorithm design, and foundational concepts in Artificial Intelligence.",
  },
  {
    type: "Education",
    title: "B.Tech in Artificial Intelligence and Data Science",
    place: "NPR College of Engineering and Technology, Natham",
    dates: "Undergraduate Program",
    detail:
      "Comprehensive engineering foundation in algorithmic problem-solving, data structures, and database systems, directed into modern full-stack software development.",
  },
];

function el(type, props, ...children) {
  return h(type, props || null, ...children.filter((child) => child !== false && child != null));
}

// Inline SVGs for agency-style icons
function Icon({ name, className = "" }) {
  switch (name) {
    case "server":
      // Backend development / server icon
      return el(
        "svg",
        { className: `agency-icon ${className}`, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
        el("rect", { x: "2", y: "2", width: "20", height: "8", rx: "2", ry: "2" }),
        el("rect", { x: "2", y: "14", width: "20", height: "8", rx: "2", ry: "2" }),
        el("line", { x1: "6", y1: "6", x2: "6.01", y2: "6" }),
        el("line", { x1: "6", y1: "18", x2: "6.01", y2: "18" })
      );
    case "layers":
      // Database integration / 3 stacked layers icon (matches reference screenshot!)
      return el(
        "svg",
        { className: `agency-icon ${className}`, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
        el("polygon", { points: "12 2 2 7 12 12 22 7 12 2" }),
        el("polyline", { points: "2 17 12 22 22 17" }),
        el("polyline", { points: "2 12 12 17 22 12" })
      );
    case "users":
      // Web development / users / frontend icon (matches reference screenshot!)
      return el(
        "svg",
        { className: `agency-icon ${className}`, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
        el("path", { d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }),
        el("circle", { cx: "9", cy: "7", r: "4" }),
        el("path", { d: "M23 21v-2a4 4 0 0 0-3-3.87" }),
        el("path", { d: "M16 3.13a4 4 0 0 1 0 7.75" })
      );
    case "code":
      return el(
        "svg",
        { className: `agency-icon ${className}`, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
        el("polyline", { points: "16 18 22 12 16 6" }),
        el("polyline", { points: "8 6 2 12 8 18" })
      );
    case "layout":
      return el(
        "svg",
        { className: `agency-icon ${className}`, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
        el("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", ry: "2" }),
        el("line", { x1: "3", y1: "9", x2: "21", y2: "9" }),
        el("line", { x1: "9", y1: "21", x2: "9", y2: "9" })
      );
    case "database":
      return el(
        "svg",
        { className: `agency-icon ${className}`, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
        el("ellipse", { cx: "12", cy: "5", rx: "9", ry: "3" }),
        el("path", { d: "M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" }),
        el("path", { d: "M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" })
      );
    case "tool":
      return el(
        "svg",
        { className: `agency-icon ${className}`, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
        el("path", { d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" })
      );
    default:
      return null;
  }
}

function enhanceImage(file) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    const url = URL.createObjectURL(file);

    image.onload = () => {
      const maxSide = 1400;
      const scale = Math.min(1, maxSide / Math.max(image.width, image.height));
      const width = Math.max(1, Math.round(image.width * scale));
      const height = Math.max(1, Math.round(image.height * scale));
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");

      canvas.width = width;
      canvas.height = height;
      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = "high";
      context.filter = "contrast(1.04) brightness(1.02)";
      context.drawImage(image, 0, 0, width, height);
      URL.revokeObjectURL(url);
      canvas.toBlob((blob) => (blob ? resolve(blob) : reject(new Error("Could not process image"))), "image/jpeg", 0.94);
    };

    image.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Invalid image"));
    };

    image.src = url;
  });
}

function App() {
  const [profileSrc, setProfileSrc] = React.useState(portraitSrc);
  const [uploadStatus, setUploadStatus] = React.useState("Update photo");
  const [uploadState, setUploadState] = React.useState("idle");
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [active, setActive] = React.useState("home");
  const [skillFilter, setSkillFilter] = React.useState("all");
  const [copyLabel, setCopyLabel] = React.useState("Copy email");
  const [formStatus, setFormStatus] = React.useState("");
  const [formErrors, setFormErrors] = React.useState({});

  // Active navigation tracking
  React.useEffect(() => {
    const ids = ["home", "about", "skills", "projects", "experience", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: 0.1 }
    );

    ids.forEach((id) => {
      const node = document.getElementById(id);
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  // Scroll reveal animation
  React.useEffect(() => {
    const nodes = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [skillFilter]);

  // Subtle button ripple effect
  React.useEffect(() => {
    const controls = document.querySelectorAll(".btn-agency-primary, .btn-agency-secondary, .filter-btn, .header-resume-btn, .btn-pill");
    const cleanups = [];

    controls.forEach((control) => {
      const press = (event) => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const rect = control.getBoundingClientRect();
        const ripple = document.createElement("span");
        const size = Math.max(rect.width, rect.height);
        const x = "clientX" in event ? event.clientX - rect.left : rect.width / 2;
        const y = "clientY" in event ? event.clientY - rect.top : rect.height / 2;

        ripple.className = "agency-ripple";
        ripple.style.width = `${size}px`;
        ripple.style.height = `${size}px`;
        ripple.style.left = `${x - size / 2}px`;
        ripple.style.top = `${y - size / 2}px`;

        control.querySelectorAll(".agency-ripple").forEach((node) => node.remove());
        control.appendChild(ripple);
        window.setTimeout(() => ripple.remove(), 600);
      };

      control.addEventListener("pointerdown", press);
      cleanups.push(() => control.removeEventListener("pointerdown", press));
    });

    return () => cleanups.forEach((cleanup) => cleanup());
  }, [skillFilter, menuOpen, copyLabel, uploadStatus]);

  const uploadPhoto = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setUploadStatus("Saving...");
    setUploadState("saving");
    try {
      const imageBlob = await enhanceImage(file);
      const response = await fetch("/upload-photo", {
        method: "POST",
        headers: { "Content-Type": "image/jpeg" },
        body: imageBlob,
      });
      if (!response.ok) throw new Error("Upload failed");
      setProfileSrc(`${uploadedPhoto}?v=${Date.now()}`);
      setUploadStatus("Photo saved");
      setUploadState("success");
      setTimeout(() => {
        setUploadStatus("Update photo");
        setUploadState("idle");
      }, 2500);
    } catch (error) {
      setUploadStatus("Upload failed");
      setUploadState("error");
      setTimeout(() => {
        setUploadStatus("Update photo");
        setUploadState("idle");
      }, 3000);
    } finally {
      event.target.value = "";
    }
  };

  const copyEmail = async () => {
    setCopyLabel("Copying...");
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyLabel("Copied to clipboard!");
      setTimeout(() => setCopyLabel("Copy email"), 2000);
    } catch (error) {
      setCopyLabel("Copy failed");
    }
  };

  const submitForm = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    const errors = {};

    if (!name) errors.name = "Please enter your name.";
    if (!email) errors.email = "Please enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Enter a valid email address.";
    if (!message) errors.message = "Please write a short message.";

    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      setFormStatus("Please fix the highlighted errors before submitting.");
      return;
    }

    setFormStatus("Opening your email client...");
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    window.setTimeout(() => {
      setFormStatus("Your email app has been opened. You can also write directly to prasanth.j226@gmail.com.");
    }, 400);
  };

  const visibleSkills = skillGroups.filter((group) => skillFilter === "all" || group.id === skillFilter);

  return el(
    "div",
    { className: "agency-site-wrapper" },
    el(Header, { menuOpen, setMenuOpen, active }),
    el(
      "main",
      { id: "main" },
      el(Hero, { profileSrc, uploadPhoto, uploadStatus, uploadState }),
      el(FocusSection),
      el(About),
      el(Skills, { skillFilter, setSkillFilter, visibleSkills }),
      el(Projects),
      el(Experience),
      el(Contact, { copyEmail, copyLabel, submitForm, formStatus, formErrors })
    ),
    el(Footer)
  );
}

// 2. White Navigation Bar inspired by reference screenshot
function Header({ menuOpen, setMenuOpen, active }) {
  return el(
    "header",
    { className: "agency-header" },
    el(
      "div",
      { className: "agency-header-inner" },
      el(
        "a",
        { className: "agency-brand", href: "#home" },
        el(
          "span",
          { className: "agency-brand-icon", "aria-hidden": "true" },
          el("span", { className: "brand-bar yellow" }),
          el("span", { className: "brand-bar red" }),
          el("span", { className: "brand-bar pink" })
        ),
        el("span", { className: "agency-brand-name" }, "Prasanth J.")
      ),
      el(
        "button",
        {
          className: "agency-nav-toggle",
          type: "button",
          "aria-expanded": menuOpen ? "true" : "false",
          "aria-controls": "agency-primary-nav",
          "aria-label": "Toggle navigation",
          onClick: () => setMenuOpen((open) => !open),
        },
        el("span", { className: `hamburger-icon ${menuOpen ? "open" : ""}` })
      ),
      el(
        "nav",
        { className: `agency-nav ${menuOpen ? "is-open" : ""}`, id: "agency-primary-nav", "aria-label": "Primary navigation" },
        navItems.map(([href, label]) =>
          el(
            "a",
            {
              key: href,
              href,
              className: `nav-link ${active === href.slice(1) ? "is-active" : ""}`,
              onClick: () => setMenuOpen(false),
            },
            label
          )
        )
      ),
      el(
        "div",
        { className: "agency-header-action" },
        el(
          "a",
          {
            className: "header-resume-btn",
            href: resumeFile,
            target: "_blank",
            rel: "noreferrer",
            "aria-label": "Download Resume PDF",
          },
          "Resume"
        )
      )
    )
  );
}

// 1 & 3. Photographic Hero Section & Hero Content
function Hero({ profileSrc, uploadPhoto, uploadStatus, uploadState }) {
  return el(
    "section",
    { className: "agency-hero", id: "home" },
    // Wide photographic backdrop covering the entire hero
    el("div", { className: "hero-backdrop", "aria-hidden": "true" }),
    el(
      "div",
      { className: "hero-grid" },
      // Subject integrated seamlessly on the LEFT
      el(
        "div",
        { className: "hero-subject-area" },
        el("img", {
          src: profileSrc,
          alt: "Prasanth J. - Java Full Stack Developer",
          className: "hero-subject-image",
          width: "1306",
          height: "1600",
          loading: "eager",
        }),
        // Discreet photo upload trigger
        el(
          "label",
          { className: `hero-upload-badge ${uploadState}` },
          el("input", { type: "file", accept: "image/*", onChange: uploadPhoto }),
          el("span", null, uploadStatus)
        )
      ),
      // Introduction and CTA on the RIGHT side
      el(
        "div",
        { className: "hero-text-area" },
        el("div", { className: "hero-headline-block" },
          el("h1", { className: "hero-heading" }, "PRASANTH J."),
          el("h2", { className: "hero-subheading" }, "Java Full Stack Developer"),
          el(
            "p",
            { className: "hero-lead-text" },
            "Build reliable applications using Java, JDBC, MySQL, Java Servlets, and modern web technologies."
          ),
          el(
            "div",
            { className: "hero-cta-row" },
            el("a", { className: "btn-agency-primary", href: "#contact" }, "CONTACT ME"),
            el("a", { className: "btn-agency-secondary", href: "#projects" }, "VIEW PROJECTS")
          ),
          // Accent dots matching reference screenshot
          el(
            "div",
            { className: "hero-accent-dots", "aria-hidden": "true" },
            el("span", { className: "hero-dot active" }),
            el("span", { className: "hero-dot" }),
            el("span", { className: "hero-dot" })
          ),
          // Social links row
          el(
            "div",
            { className: "hero-social-links" },
            el("a", { href: profile.github, target: "_blank", rel: "noreferrer" }, "GitHub"),
            el("span", { className: "dot-sep" }, "•"),
            el("a", { href: profile.linkedin, target: "_blank", rel: "noreferrer" }, "LinkedIn"),
            el("span", { className: "dot-sep" }, "•"),
            el("a", { href: `mailto:${profile.email}` }, "Email")
          )
        )
      )
    )
  );
}

// 4. Clean White Focus Section Immediately Below the Hero
function FocusSection() {
  const cards = [
    {
      title: "Backend Development",
      description: "Java, Servlets, JDBC, REST APIs, and application logic.",
      icon: "server",
    },
    {
      title: "Database Integration",
      description: "MySQL, relational data, PreparedStatement, CRUD operations, and transaction handling.",
      icon: "layers",
    },
    {
      title: "Web Development",
      description: "Responsive HTML, CSS, JavaScript, and practical web interfaces.",
      icon: "users",
    },
  ];

  return el(
    "section",
    { className: "agency-focus-section", id: "services", "aria-label": "Core Expertise" },
    el(
      "div",
      { className: "agency-container" },
      el(
        "div",
        { className: "focus-cards-grid" },
        cards.map((card) =>
          el(
            "div",
            { className: "focus-card reveal", key: card.title },
            el(
              "div",
              { className: "focus-card-icon-wrap" },
              el(Icon, { name: card.icon })
            ),
            el("h3", { className: "focus-card-title" }, card.title),
            el("p", { className: "focus-card-description" }, card.description)
          )
        )
      )
    )
  );
}

// 5. About Section
function About() {
  return el(
    "section",
    { className: "agency-section alt-bg", id: "about" },
    el(
      "div",
      { className: "agency-container" },
      el(
        "div",
        { className: "agency-section-header reveal" },
        el("span", { className: "agency-kicker" }, "About Me"),
        el("h2", { className: "agency-title" }, "Building practical Java systems with a full-stack mindset.")
      ),
      el(
        "div",
        { className: "about-layout-grid" },
        el(
          "div",
          { className: "about-story reveal" },
          el(
            "p",
            { className: "lead-paragraph" },
            "I am a B.Tech graduate in Artificial Intelligence and Data Science with hands-on experience in Java-based full-stack development. I enjoy turning application requirements into working backend modules, relational data flows, and clear user interfaces."
          ),
          el(
            "p",
            null,
            "My current focus is Java, Object-Oriented Programming, JDBC, MySQL, Java Servlets, REST APIs, and web technologies. I care about writing clean, efficient code and shipping features that people can actually use."
          ),
          el(
            "div",
            { className: "about-badges-wrap" },
            ["Java", "JDBC", "MySQL", "Java Servlets", "REST APIs", "HTML5", "CSS3", "JavaScript", "Tomcat"].map((item) =>
              el("span", { className: "agency-badge", key: item }, item)
            )
          )
        ),
        el(
          "div",
          { className: "about-stats-column reveal" },
          el(
            "div",
            { className: "stat-box" },
            el("div", { className: "stat-tag" }, "Location"),
            el("h4", null, "Madurai, Tamil Nadu"),
            el("p", null, "Based in India and actively open to Java & Full-Stack software engineering opportunities.")
          ),
          el(
            "div",
            { className: "stat-box" },
            el("div", { className: "stat-tag" }, "Current Role"),
            el("h4", null, "Java Full Stack Intern"),
            el("p", null, "Tap Academy in Bengaluru, working across backend application logic, database pipelines, and web interfaces.")
          ),
          el(
            "div",
            { className: "stat-box" },
            el("div", { className: "stat-tag" }, "Core Stack"),
            el("h4", null, "Full-Stack Java"),
            el("p", null, "Servlets, JDBC, MySQL, and Apache Tomcat for request handling and data-backed web applications.")
          )
        )
      )
    )
  );
}

// 5. Skills Section
function Skills({ skillFilter, setSkillFilter, visibleSkills }) {
  const filters = [
    ["all", "All Skills"],
    ["programming", "Programming"],
    ["frontend", "Frontend"],
    ["backend", "Backend"],
    ["database", "Database"],
    ["tools", "Tools"],
  ];

  return el(
    "section",
    { className: "agency-section", id: "skills" },
    el(
      "div",
      { className: "agency-container" },
      el(
        "div",
        { className: "agency-section-header reveal" },
        el("span", { className: "agency-kicker" }, "Technical Skills"),
        el("h2", { className: "agency-title" }, "A focused Java full-stack toolkit.")
      ),
      el(
        "div",
        { className: "skills-toolbar reveal", role: "tablist", "aria-label": "Skill categories" },
        filters.map(([id, label]) =>
          el(
            "button",
            {
              key: id,
              type: "button",
              className: `filter-btn ${skillFilter === id ? "is-active" : ""}`,
              onClick: () => setSkillFilter(id),
            },
            label
          )
        )
      ),
      el(
        "div",
        { className: "skills-cards-grid" },
        visibleSkills.map((group) =>
          el(
            "div",
            { className: "skill-box reveal", key: group.id },
            el(
              "div",
              { className: "skill-icon-bubble" },
              el(Icon, { name: group.icon })
            ),
            el("h3", { className: "skill-box-title" }, group.title),
            el("p", { className: "skill-box-detail" }, group.detail),
            el(
              "div",
              { className: "skill-tags-list" },
              group.items.map((item) => el("span", { className: "skill-tag-pill", key: item }, item))
            )
          )
        )
      )
    )
  );
}

// 5. Projects Section
function Projects() {
  const featured = projects.find((project) => project.featured);
  const secondary = projects.filter((project) => !project.featured);

  return el(
    "section",
    { className: "agency-section alt-bg", id: "projects" },
    el(
      "div",
      { className: "agency-container" },
      el(
        "div",
        { className: "agency-section-header reveal" },
        el("span", { className: "agency-kicker" }, "Featured Work"),
        el("h2", { className: "agency-title" }, "Selected work grounded in Java & web applications.")
      ),
      // Featured Project Card
      el(
        "div",
        { className: "featured-project-card reveal" },
        el(
          "div",
          { className: "featured-project-info" },
          el("span", { className: "featured-kicker" }, featured.kicker),
          el("h3", { className: "featured-title" }, featured.title),
          el("p", { className: "featured-desc" }, featured.description),
          el(
            "ul",
            { className: "featured-bullets" },
            featured.features.map((item) => el("li", { key: item }, item))
          ),
          el(
            "div",
            { className: "featured-tech-chips" },
            featured.tech.map((t) => el("span", { className: "tech-chip", key: t }, t))
          )
        ),
        el(
          "div",
          { className: "featured-project-mockup" },
          el(
            "div",
            { className: "browser-window-preview" },
            el(
              "div",
              { className: "browser-window-header" },
              el("span", { className: "dot red" }),
              el("span", { className: "dot yellow" }),
              el("span", { className: "dot green" }),
              el("span", { className: "browser-title" }, "Food Ordering System · Tomcat Deployment")
            ),
            el(
              "div",
              { className: "browser-window-body" },
              el(
                "div",
                { className: "mock-nav" },
                el("div", { className: "mock-logo" }),
                el("div", { className: "mock-links" }, el("span", null), el("span", null), el("span", null))
              ),
              el(
                "div",
                { className: "mock-content-grid" },
                el(
                  "div",
                  { className: "mock-card-food" },
                  el("div", { className: "mock-img" }),
                  el("div", { className: "mock-line long" }),
                  el("div", { className: "mock-line short" })
                ),
                el(
                  "div",
                  { className: "mock-card-food" },
                  el("div", { className: "mock-img" }),
                  el("div", { className: "mock-line long" }),
                  el("div", { className: "mock-line short" })
                )
              ),
              el(
                "div",
                { className: "mock-cart-bar" },
                el("span", { className: "cart-label" }, "JDBC Connection: MySQL pool verified"),
                el("span", { className: "cart-btn" }, "Active Session")
              )
            )
          )
        )
      ),
      // Secondary Projects Grid
      el(
        "div",
        { className: "secondary-projects-grid" },
        secondary.map((proj) =>
          el(
            "div",
            { className: "secondary-project-card reveal", key: proj.title },
            el("h3", { className: "secondary-project-title" }, proj.title),
            el("p", { className: "secondary-project-desc" }, proj.description),
            el(
              "div",
              { className: "secondary-tech-chips" },
              proj.tech.map((t) => el("span", { className: "tech-chip", key: t }, t))
            ),
            el(
              "div",
              { className: "secondary-actions" },
              proj.live &&
                el(
                  "a",
                  { className: "btn-agency-primary-sm", href: proj.live, target: "_blank", rel: "noreferrer" },
                  "Live Simulation"
                ),
              proj.code &&
                el(
                  "a",
                  { className: "btn-agency-outline-sm", href: proj.code, target: "_blank", rel: "noreferrer" },
                  "GitHub Repo"
                )
            )
          )
        )
      )
    )
  );
}

// 5. Experience Section
function Experience() {
  return el(
    "section",
    { className: "agency-section", id: "experience" },
    el(
      "div",
      { className: "agency-container" },
      el(
        "div",
        { className: "agency-section-header reveal" },
        el("span", { className: "agency-kicker" }, "Career Journey"),
        el("h2", { className: "agency-title" }, "Experience & verified education.")
      ),
      el(
        "div",
        { className: "timeline-track" },
        timeline.map((item, idx) =>
          el(
            "div",
            { className: "timeline-item reveal", key: item.title },
            el("div", { className: "timeline-marker" }),
            el(
              "div",
              { className: "timeline-content-card" },
              el(
                "div",
                { className: "timeline-badge-row" },
                el("span", { className: "timeline-type" }, item.type),
                el("span", { className: "timeline-date" }, item.dates)
              ),
              el("h3", { className: "timeline-item-title" }, item.title),
              el("h4", { className: "timeline-item-place" }, item.place),
              el("p", { className: "timeline-item-detail" }, item.detail)
            )
          )
        )
      )
    )
  );
}

// 5. Contact Section
function Contact({ copyEmail, copyLabel, submitForm, formStatus, formErrors }) {
  return el(
    "section",
    { className: "agency-section alt-bg", id: "contact" },
    el(
      "div",
      { className: "agency-container" },
      el(
        "div",
        { className: "agency-section-header reveal" },
        el("span", { className: "agency-kicker" }, "Get In Touch"),
        el("h2", { className: "agency-title" }, "Let’s talk about Java full-stack work.")
      ),
      el(
        "div",
        { className: "contact-layout-grid" },
        el(
          "div",
          { className: "contact-info-cards reveal" },
          el(
            "div",
            { className: "contact-info-card" },
            el("span", { className: "info-label" }, "Email Address"),
            el("a", { className: "info-value", href: `mailto:${profile.email}` }, profile.email),
            el("button", { className: "btn-copy-inline", type: "button", onClick: copyEmail }, copyLabel)
          ),
          el(
            "div",
            { className: "contact-info-card" },
            el("span", { className: "info-label" }, "Phone Number"),
            el("a", { className: "info-value", href: profile.phoneHref }, profile.phone)
          ),
          el(
            "div",
            { className: "contact-info-card" },
            el("span", { className: "info-label" }, "Location"),
            el("p", { className: "info-value static" }, profile.location)
          ),
          el(
            "div",
            { className: "contact-socials-row" },
            el("a", { className: "btn-social-chip", href: profile.github, target: "_blank", rel: "noreferrer" }, "GitHub Profile"),
            el("a", { className: "btn-social-chip", href: profile.linkedin, target: "_blank", rel: "noreferrer" }, "LinkedIn Profile")
          )
        ),
        el(
          "form",
          { className: "contact-form-card reveal", onSubmit: submitForm, noValidate: true },
          el("h3", { className: "form-title" }, "Send a Direct Message"),
          el(
            "div",
            { className: "form-group" },
            el("label", { htmlFor: "contact-name" }, "Your Name"),
            el("input", {
              id: "contact-name",
              name: "name",
              type: "text",
              placeholder: "Enter your name",
              autoComplete: "name",
              required: true,
              "aria-invalid": formErrors.name ? "true" : "false",
              "aria-describedby": formErrors.name ? "name-error" : undefined,
            }),
            formErrors.name && el("p", { className: "field-error-msg", id: "name-error", role: "alert" }, formErrors.name)
          ),
          el(
            "div",
            { className: "form-group" },
            el("label", { htmlFor: "contact-email" }, "Your Email"),
            el("input", {
              id: "contact-email",
              name: "email",
              type: "email",
              placeholder: "you@example.com",
              autoComplete: "email",
              required: true,
              "aria-invalid": formErrors.email ? "true" : "false",
              "aria-describedby": formErrors.email ? "email-error" : undefined,
            }),
            formErrors.email && el("p", { className: "field-error-msg", id: "email-error", role: "alert" }, formErrors.email)
          ),
          el(
            "div",
            { className: "form-group" },
            el("label", { htmlFor: "contact-message" }, "Message"),
            el("textarea", {
              id: "contact-message",
              name: "message",
              rows: 5,
              placeholder: "How can I contribute to your team or application?",
              required: true,
              "aria-invalid": formErrors.message ? "true" : "false",
              "aria-describedby": formErrors.message ? "message-error" : undefined,
            }),
            formErrors.message && el("p", { className: "field-error-msg", id: "message-error", role: "alert" }, formErrors.message)
          ),
          el(
            "button",
            { className: "btn-agency-primary w-100", type: "submit" },
            "OPEN EMAIL DRAFT"
          ),
          formStatus && el("p", { className: "form-status-alert", role: "status" }, formStatus)
        )
      )
    )
  );
}

// 5. Minimal Redesigned Footer
function Footer() {
  return el(
    "footer",
    { className: "agency-footer" },
    el(
      "div",
      { className: "agency-container agency-footer-inner" },
      el(
        "div",
        { className: "footer-brand-side" },
        el("span", { className: "footer-name" }, "Prasanth J."),
        el("span", { className: "footer-role" }, "Java Full Stack Developer")
      ),
      el(
        "p",
        { className: "footer-copyright" },
        `© ${new Date().getFullYear()} Prasanth J. All rights reserved.`
      ),
      el(
        "div",
        { className: "footer-links" },
        el("a", { href: "#home" }, "Back to top ↑")
      )
    )
  );
}

// Render root
ReactDOM.createRoot(document.getElementById("root")).render(h(App));

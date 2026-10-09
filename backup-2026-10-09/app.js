const { createElement: h } = React;

const resumeFile = "prasanth resume(nutri smart) (2).pdf";

const skills = [
  { name: "Python", tone: "mint", detail: "Programming, automation, data workflows" },
  { name: "Java", tone: "coral", detail: "Object-oriented problem solving" },
  { name: "C & C++", tone: "gold", detail: "Core programming foundations" },
  { name: "MySQL", tone: "leaf", detail: "Structured data storage for projects" },
  { name: "AI & Data Science", tone: "ink", detail: "ML, analysis, practical AI solutions" },
  { name: "Tkinter", tone: "sky", detail: "Desktop interface development" },
];

const profilePhoto = "assets/profile-photo.png";

const timeline = [
  {
    eyebrow: "Education",
    title: "B.Tech Artificial Intelligence & Data Science",
    meta: "NPR College of Engineering & Technology",
  },
  {
    eyebrow: "Internship",
    title: "Python Programming Internship",
    meta: "Unified Mentor Pvt. Ltd. - 1 month",
  },
  {
    eyebrow: "Achievement",
    title: "Top 10 College Hackathon Finish",
    meta: "Recognized for building under pressure with a team",
  },
];

function App() {
  const [profileSrc, setProfileSrc] = React.useState(null);
  const [uploadStatus, setUploadStatus] = React.useState("Upload photo");

  React.useEffect(() => {
    fetch(profilePhoto, { cache: "no-store" })
      .then((response) => {
        if (response.ok) {
          setProfileSrc(`${profilePhoto}?v=${Date.now()}`);
        }
      })
      .catch(() => {});
  }, []);

  React.useEffect(() => {
    const cards = document.querySelectorAll("[data-tilt]");
    const cleanups = [];

    cards.forEach((card) => {
      const move = (event) => {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const rotateY = ((x / rect.width) - 0.5) * 8;
        const rotateX = ((0.5 - y / rect.height)) * 8;
        card.style.setProperty("--rx", `${rotateX}deg`);
        card.style.setProperty("--ry", `${rotateY}deg`);
      };

      const leave = () => {
        card.style.setProperty("--rx", "0deg");
        card.style.setProperty("--ry", "0deg");
      };

      card.addEventListener("mousemove", move);
      card.addEventListener("mouseleave", leave);
      cleanups.push(() => {
        card.removeEventListener("mousemove", move);
        card.removeEventListener("mouseleave", leave);
      });
    });

    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);

  return h(
    "main",
    null,
    h(Header),
    h(Hero, { profileSrc, setProfileSrc, uploadStatus, setUploadStatus }),
    h(About),
    h(Services),
    h(Project),
    h(Skills),
    h(Timeline),
    h(Contact)
  );
}

function Header() {
  return h(
    "header",
    { className: "site-header" },
    h("a", { className: "brand", href: "#top", "aria-label": "Prasanth portfolio home" }, "Portfolio"),
    h(
      "nav",
      { "aria-label": "Portfolio sections" },
      h("a", { href: "#top" }, "Home"),
      h("a", { href: "#about" }, "About"),
      h("a", { href: "#skills" }, "Skills"),
      h("a", { href: "#services" }, "Services"),
      h("a", { href: "#project" }, "Portfolio"),
      h("a", { href: "#contact" }, "Contact")
    ),
    h("a", { className: "download-link", href: resumeFile, target: "_blank", rel: "noreferrer" }, "Download CV")
  );
}

function Hero({ profileSrc, setProfileSrc, uploadStatus, setUploadStatus }) {
  const uploadPhoto = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploadStatus("Enhancing...");

    try {
      const imageBlob = await enhanceImage(file);
      const response = await fetch("/upload-photo", {
        method: "POST",
        headers: { "Content-Type": "image/jpeg" },
        body: imageBlob,
      });

      if (!response.ok) throw new Error("Upload failed");

      setProfileSrc(`${profilePhoto}?v=${Date.now()}`);
      setUploadStatus("Photo saved");
    } catch (error) {
      setUploadStatus("Try again");
    } finally {
      event.target.value = "";
    }
  };

  return h(
    "section",
    { className: "hero", id: "top" },
    h(
      "aside",
      { className: "profile-studio", "data-tilt": true },
      h(
        "div",
        { className: "photo-frame" },
        profileSrc
          ? h("img", { src: profileSrc, alt: "Prasanth J profile" })
          : h("div", { className: "photo-placeholder" }, h("strong", null, "PJ"), h("span", null, "Upload your photo"))
      ),
      h(
        "label",
        { className: "upload-control" },
        h("input", { type: "file", accept: "image/*", onChange: uploadPhoto }),
        h("span", null, uploadStatus)
      )
    ),
    h(
      "div",
      { className: "hero-copy" },
      h("p", { className: "intro" }, "Hello, I'm"),
      h("h1", null, "Prasanth J"),
      h("h2", { className: "hero-role" }, "AI & Data Science Student"),
      h(
        "p",
        { className: "lead" },
        "Final-year B.Tech student building practical AI-driven solutions with Python, Java, data analysis, and clean user-focused software."
      ),
      h(
        "div",
        { className: "hero-actions" },
        h("a", { className: "button primary", href: "#project" }, "Hire Me"),
        h("a", { className: "button ghost", href: "#contact" }, "Contact Me")
      ),
      h(
        "div",
        { className: "social-row", "aria-label": "Contact links" },
        h("a", { href: "mailto:pp560891@gmail.com" }, "@"),
        h("a", { href: "tel:+917558198500" }, "ph"),
        h("a", { href: "https://www.linkedin.com/in/prasanth-j-35436a258", target: "_blank", rel: "noreferrer" }, "in")
      )
    )
  );
}

function About() {
  return h(
    "section",
    { className: "about-section", id: "about" },
    h("div", { className: "section-heading" }, h("p", { className: "kicker" }, "About"), h("h2", null, "I build practical AI tools with a clean user experience.")),
    h(
      "p",
      { className: "about-copy" },
      "I am a final-year B.Tech Artificial Intelligence and Data Science student with hands-on experience in Python, Java, machine learning concepts, data analysis, and desktop application development."
    )
  );
}

function Services() {
  const services = [
    ["AI Projects", "Machine learning ideas, data workflows, and practical prototype development."],
    ["Python Apps", "Tkinter interfaces, automation scripts, and beginner-friendly software tools."],
    ["Data Systems", "MySQL-backed project storage, organized data handling, and analysis-ready flows."],
  ];

  return h(
    "section",
    { className: "services-section", id: "services" },
    h("div", { className: "section-heading" }, h("p", { className: "kicker" }, "Services"), h("h2", null, "What I can help build")),
    h(
      "div",
      { className: "service-grid" },
      services.map(([title, text]) => h("article", { className: "service-card", key: title }, h("h3", null, title), h("p", null, text)))
    )
  );
}

function enhanceImage(file) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    const url = URL.createObjectURL(file);

    image.onload = () => {
      const maxSide = 960;
      const scale = Math.min(1, maxSide / Math.max(image.width, image.height));
      const width = Math.max(1, Math.round(image.width * scale));
      const height = Math.max(1, Math.round(image.height * scale));
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");

      canvas.width = width;
      canvas.height = height;
      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = "high";
      context.filter = "contrast(1.08) saturate(1.08) brightness(1.02)";
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

function Project() {
  return h(
    "section",
    { className: "project-section", id: "project" },
    h(
      "div",
      { className: "section-heading" },
      h("p", { className: "kicker" }, "Featured Build"),
      h("h2", null, "Nutri Smart Nutrition Management System")
    ),
    h(
      "div",
      { className: "project-grid" },
      h(
        "div",
        { className: "project-copy" },
        h(
          "p",
          null,
          "A nutrition planning system that helps users log meals, follow personalized diet plans, discover recipe suggestions, and manage shopping needs from one place."
        ),
        h(
          "ul",
          { className: "feature-list" },
          h("li", null, "Meal logging and healthy eating support"),
          h("li", null, "Personalized diet planning flow"),
          h("li", null, "Recipe suggestions and shopping module"),
          h("li", null, "Python Tkinter interface with MySQL storage")
        )
      ),
      h(
        "figure",
        { className: "project-visual", "data-tilt": true },
        h("img", { src: "assets/nutri-smart-preview.png", alt: "Nutri Smart dashboard preview" }),
        h("figcaption", null, "Concept preview based on the resume project")
      )
    )
  );
}

function Skills() {
  return h(
    "section",
    { className: "skills-section", id: "skills" },
    h("div", { className: "section-heading" }, h("p", { className: "kicker" }, "Toolbox"), h("h2", null, "Skills that connect code with real problems")),
    h(
      "div",
      { className: "skill-grid" },
      skills.map((skill) =>
        h(
          "article",
          { className: `skill-card ${skill.tone}`, key: skill.name },
          h("span", null),
          h("h3", null, skill.name),
          h("p", null, skill.detail)
        )
      )
    )
  );
}

function Timeline() {
  return h(
    "section",
    { className: "timeline-section" },
    h("div", { className: "section-heading" }, h("p", { className: "kicker" }, "Background"), h("h2", null, "Learning, building, improving")),
    h(
      "div",
      { className: "timeline" },
      timeline.map((item) =>
        h(
          "article",
          { className: "timeline-item", key: item.title },
          h("p", null, item.eyebrow),
          h("h3", null, item.title),
          h("span", null, item.meta)
        )
      )
    )
  );
}

function Contact() {
  return h(
    "section",
    { className: "contact-section", id: "contact" },
    h("div", null, h("p", { className: "kicker" }, "Contact"), h("h2", null, "Open to internships, projects, and AI-focused collaboration.")),
    h(
      "div",
      { className: "contact-actions" },
      h("a", { href: "mailto:pp560891@gmail.com" }, "pp560891@gmail.com"),
      h("a", { href: "tel:+917558198500" }, "+91 75581 98500"),
      h("a", { href: "https://www.linkedin.com/in/prasanth-j-35436a258", target: "_blank", rel: "noreferrer" }, "LinkedIn")
    )
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(h(App));

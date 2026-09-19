import { useEffect, useState } from "react";

const skillCategories = {
  Frontend: {
    description:
      "Building responsive and interactive user interfaces with modern JavaScript technologies.",
    skills: [
      { name: "HTML5", short: "HT" },
      { name: "CSS3", short: "CS" },
      { name: "JavaScript", short: "JS" },
      { name: "React.js", short: "RE" },
      { name: "Redux Toolkit", short: "RX" },
      { name: "Tailwind CSS", short: "TW" },
      { name: "Vite", short: "VI" },
    ],
  },

  Backend: {
    description:
      "Developing server-side applications, REST APIs and backend functionality.",
    skills: [
      { name: "Node.js", short: "NO" },
      { name: "Express.js", short: "EX" },
      { name: "REST APIs", short: "API" },
      { name: "JWT", short: "JW" },
      { name: "Nodemailer", short: "NM" },
      { name: "Axios", short: "AX" },
    ],
  },

  Database: {
    description:
      "Working with application data, cloud databases and authentication services.",
    skills: [
      { name: "MongoDB", short: "MO" },
      { name: "MongoDB Atlas", short: "AT" },
      { name: "Firebase", short: "FB" },
      { name: "Firestore", short: "FS" },
      { name: "Firebase Auth", short: "FA" },
    ],
  },

  Tools: {
    description:
      "Using development and collaboration tools throughout the application lifecycle.",
    skills: [
      { name: "Git", short: "GI" },
      { name: "GitHub", short: "GH" },
      { name: "Postman", short: "PM" },
      { name: "VS Code", short: "VS" },
      { name: "Vercel", short: "VE" },
      { name: "Render", short: "RD" },
    ],
  },
};

function Skills() {
  const [activeCategory, setActiveCategory] = useState("Frontend");
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = document.getElementById("Skills");

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const currentCategory = skillCategories[activeCategory];

  return (
    <section
      id="Skills"
      className="relative overflow-hidden bg-slate-50 py-24 transition-colors duration-300 dark:bg-slate-900"
    >
      {/* Background decoration */}

      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl dark:bg-blue-600/10" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-cyan-200/20 blur-3xl dark:bg-cyan-600/10" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}

        <div
          className={`mx-auto max-w-2xl text-center transition-all duration-700 ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
            Technical Skills
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            My Development{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Toolkit
            </span>
          </h2>

          <p className="mt-5 leading-7 text-slate-600 dark:text-slate-400">
            Technologies and tools I use to design, develop and
            deploy full-stack web applications.
          </p>
        </div>

        {/* Category selector */}

        <div
          className={`mx-auto mt-12 flex max-w-3xl flex-wrap justify-center gap-2 transition-all duration-700 delay-150 ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          {Object.keys(skillCategories).map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => {
                setActiveCategory(category);
                setSelectedSkill(null);
              }}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                  : "border border-slate-200 bg-white text-slate-600 hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300 dark:hover:border-blue-500/40 dark:hover:text-blue-400"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Main skills panel */}

        <div
          className={`mt-10 grid gap-8 lg:grid-cols-[0.75fr_1.25fr] transition-all duration-700 delay-300 ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >

          {/* Category information */}

          <div className="glass-card rounded-2xl p-7 sm:p-9">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-lg font-black text-white shadow-lg shadow-blue-600/20">
              {activeCategory === "Frontend" && "FE"}
              {activeCategory === "Backend" && "BE"}
              {activeCategory === "Database" && "DB"}
              {activeCategory === "Tools" && "TL"}
            </div>

            <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              {activeCategory}
            </p>

            <h3 className="mt-2 text-2xl font-black text-slate-900 dark:text-white">
              {activeCategory} Development
            </h3>

            <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
              {currentCategory.description}
            </p>

            {/* Dynamic count */}

            <div className="mt-8 rounded-xl border border-blue-100 bg-blue-50 p-5 dark:border-blue-500/20 dark:bg-blue-500/10">
              <p className="text-3xl font-black text-blue-600 dark:text-blue-400">
                {currentCategory.skills.length}
              </p>

              <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-300">
                Technologies in this category
              </p>
            </div>
          </div>

          {/* Skill cards */}

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {currentCategory.skills.map((skill, index) => {
              const isSelected = selectedSkill === skill.name;

              return (
                <button
                  key={skill.name}
                  type="button"
                  onClick={() =>
                    setSelectedSkill(
                      isSelected ? null : skill.name
                    )
                  }
                  className={`group relative overflow-hidden rounded-2xl border p-5 text-left transition-all duration-300 hover:-translate-y-1 ${
                    isSelected
                      ? "border-blue-400 bg-blue-50 shadow-lg shadow-blue-500/10 dark:border-blue-500/60 dark:bg-blue-500/10"
                      : "border-slate-200 bg-white hover:border-blue-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-950 dark:hover:border-blue-500/40"
                  }`}
                  style={{
                    transitionDelay: `${index * 50}ms`,
                  }}
                >
                  {/* Hover glow */}

                  <span className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-blue-500/10 blur-2xl transition-transform duration-500 group-hover:scale-150" />

                  <div className="relative">

                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl text-xs font-black transition-all duration-300 ${
                        isSelected
                          ? "bg-blue-600 text-white"
                          : "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-500/10 dark:text-blue-400 dark:group-hover:bg-blue-500 dark:group-hover:text-white"
                      }`}
                    >
                      {skill.short}
                    </div>

                    <h4 className="mt-4 text-sm font-bold text-slate-800 dark:text-slate-100">
                      {skill.name}
                    </h4>

                    <div className="mt-3 h-1 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                      <div
                        className={`h-full rounded-full bg-blue-600 transition-all duration-700 ${
                          isSelected
                            ? "w-full"
                            : "w-1/2 group-hover:w-3/4"
                        }`}
                      />
                    </div>

                    <p className="mt-2 text-[11px] text-slate-400 dark:text-slate-500">
                      {isSelected ? "Selected" : "Explore skill"}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Full stack flow */}

        <div
          className={`mt-10 rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition-all duration-700 delay-500 dark:border-blue-500/20 dark:bg-slate-950 ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
            Full-Stack Development Flow
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {[
              "React",
              "Node.js",
              "Express",
              "REST API",
              "MongoDB",
              "Deployment",
            ].map((item, index, array) => (
              <div
                key={item}
                className="flex items-center gap-3"
              >
                <span className="rounded-lg border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-300">
                  {item}
                </span>

                {index < array.length - 1 && (
                  <span className="hidden text-blue-300 sm:inline dark:text-blue-700">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
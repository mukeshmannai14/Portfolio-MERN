import { useState } from "react";

const skillCategories = {
  Languages: [
    "JavaScript (ES6+)",
    "TypeScript",
    "HTML5",
    "CSS3",
  ],

  Frontend: [
    "React.js",
    "Next.js",
    "Redux",
    "Tailwind CSS",
    "Vite.js",
  ],

  Backend: [
    "Node.js",
    "Express.js",
    "REST APIs",
    "Axios",
  ],

  Authentication: [
    "Firebase Authentication",
    "JWT",
    "Authorization",
    "Role-Based Access Control",
    "Protected Routes",
  ],

  Tools: [
    "Git",
    "GitHub",
    "Postman",
    "VS Code",
    "npm",
    "Render",
    "Vercel",
  ],
};

function Skills() {
  const categories = Object.keys(skillCategories);

  const [activeCategory, setActiveCategory] = useState(
    categories[0]
  );

  return (
    <section
      id="Skills"
      className="relative overflow-hidden bg-slate-50 py-24 transition-colors duration-300 dark:bg-slate-950"
    >
      {/* Background decoration */}

      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl dark:bg-blue-600/10" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-cyan-200/30 blur-3xl dark:bg-cyan-600/10" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
            Technical Skills
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            My{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-400">
              Skills
            </span>
          </h2>

          <p className="mt-5 leading-7 text-slate-600 dark:text-slate-400">
            Technologies and tools I use to build responsive,
            scalable and full-stack web applications.
          </p>
        </div>

        {/* Category buttons */}

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                  : "border border-slate-200 bg-white text-slate-600 hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-blue-500 dark:hover:text-blue-400"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills grid */}

        <div className="mx-auto mt-12 max-w-5xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skillCategories[activeCategory].map(
              (skill, index) => (
                <div
                  key={skill}
                  className="group rounded-2xl border border-blue-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/10 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-blue-500/40"
                  style={{
                    animationDelay: `${index * 60}ms`,
                  }}
                >
                  <div className="flex items-center gap-4">

                    {/* Skill icon */}

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-black text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-500/10 dark:text-blue-400 dark:group-hover:bg-blue-600 dark:group-hover:text-white">
                      {skill
                        .split(/[\s.+-]/)
                        .filter(Boolean)
                        .map((word) => word[0])
                        .slice(0, 2)
                        .join("")
                        .toUpperCase()}
                    </div>

                    {/* Skill name */}

                    <div className="min-w-0">
                      <h3 className="font-semibold text-slate-800 dark:text-slate-200">
                        {skill}
                      </h3>

                      <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">
                        Technology
                      </p>
                    </div>

                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* Stack summary */}

        <div className="mt-12 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-cyan-50 p-7 dark:border-blue-500/20 dark:from-blue-500/5 dark:to-cyan-500/5">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                Primary Stack
              </p>

              <h3 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
                MERN Stack Development
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-400">
                React.js for frontend development, Node.js and
                Express.js for backend services, and MongoDB for
                database management.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {["MongoDB", "Express.js", "React.js", "Node.js"].map(
                (technology) => (
                  <span
                    key={technology}
                    className="rounded-lg border border-blue-200 bg-white px-3 py-2 text-xs font-bold text-blue-700 dark:border-blue-500/20 dark:bg-slate-900 dark:text-blue-300"
                  >
                    {technology}
                  </span>
                )
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;
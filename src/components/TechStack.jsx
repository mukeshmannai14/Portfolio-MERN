import { useState } from "react";

const technologies = [
  {
    name: "React.js",
    category: "Frontend",
    short: "RE",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    short: "JS",
  },
  {
    name: "Node.js",
    category: "Backend",
    short: "NO",
  },
  {
    name: "Express.js",
    category: "Backend",
    short: "EX",
  },
  {
    name: "MongoDB",
    category: "Database",
    short: "MO",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    short: "TW",
  },
  {
    name: "Firebase",
    category: "Backend",
    short: "FB",
  },
  {
    name: "Git & GitHub",
    category: "Tools",
    short: "GH",
  },
];

function TechStack() {
  const [activeTech, setActiveTech] = useState(null);

  return (
    <div className="mt-10">
      {/* Section label */}
      <div className="mb-4 flex items-center gap-3">
        <span className="h-px w-8 bg-blue-600 dark:bg-blue-400" />

        <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
          Technologies I Work With
        </p>
      </div>

      {/* Technology cards */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {technologies.map((tech, index) => (
          <button
            key={tech.name}
            type="button"
            onClick={() => setActiveTech(tech.name)}
            className={`group relative overflow-hidden rounded-xl border p-3 text-left transition-all duration-300 hover:-translate-y-1 ${
              activeTech === tech.name
                ? "border-blue-400 bg-blue-50 shadow-lg shadow-blue-500/10 dark:border-blue-500/60 dark:bg-blue-500/10"
                : "border-slate-200 bg-white hover:border-blue-300 hover:bg-blue-50/50 dark:border-slate-700 dark:bg-slate-900/70 dark:hover:border-blue-500/40 dark:hover:bg-blue-950/30"
            }`}
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            {/* Hover glow */}
            <span className="pointer-events-none absolute -right-5 -top-5 h-12 w-12 rounded-full bg-blue-500/10 blur-xl transition-all duration-500 group-hover:scale-150" />

            <div className="relative flex items-center gap-3">
              {/* Tech abbreviation */}
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-xs font-black transition-all duration-300 ${
                  activeTech === tech.name
                    ? "bg-blue-600 text-white dark:bg-blue-500"
                    : "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-500/10 dark:text-blue-400 dark:group-hover:bg-blue-500 dark:group-hover:text-white"
                }`}
              >
                {tech.short}
              </span>

              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-slate-800 dark:text-slate-100">
                  {tech.name}
                </p>

                <p className="mt-0.5 text-[11px] text-slate-400 dark:text-slate-500">
                  {tech.category}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Selected technology */}
      <div
        className={`mt-4 overflow-hidden transition-all duration-500 ${
          activeTech
            ? "max-h-20 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="rounded-xl border border-blue-100 bg-blue-50/70 px-4 py-3 dark:border-blue-500/20 dark:bg-blue-500/10">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Currently selected:{" "}
            <span className="font-bold text-blue-600 dark:text-blue-400">
              {activeTech}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TechStack;
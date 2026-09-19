import { useState } from "react";
import projects from "../data/projects";

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = ["All", "Full Stack", "Frontend"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <section
      id="Projects"
      className="bg-white py-24 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}

        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
            My Work
          </p>

          <h2 className="mt-3 text-4xl font-black text-slate-900 sm:text-5xl dark:text-white">
            Featured{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Projects
            </span>
          </h2>

          <p className="mt-5 leading-7 text-slate-600 dark:text-slate-400">
            Projects demonstrating my experience in frontend,
            backend and full-stack development.
          </p>
        </div>

        {/* Filters */}

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                activeFilter === filter
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-blue-500 dark:hover:text-blue-400"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects */}

        <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">

          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10 dark:border-slate-700 dark:bg-slate-900"
            >

              {/* Project Visual - No Image */}

              <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 to-cyan-600 dark:from-blue-950 dark:to-cyan-950">

                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border border-white/10" />

                <div className="absolute -bottom-16 -left-10 h-48 w-48 rounded-full border border-white/10" />

                <div className="relative text-center">

                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 text-2xl font-black text-white backdrop-blur-md transition duration-500 group-hover:scale-110">
                    {project.title
                      .split(" ")
                      .map((word) => word[0])
                      .slice(0, 2)
                      .join("")}
                  </div>

                  <p className="mt-4 text-sm font-semibold text-white">
                    {project.category}
                  </p>

                </div>

                <span className="absolute left-4 top-4 rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white backdrop-blur-md">
                  {project.category}
                </span>

              </div>

              {/* Content */}

              <div className="p-6">

                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {project.description}
                </p>

                {/* Technologies */}

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md bg-blue-50 px-2.5 py-1 text-[11px] font-semibold text-blue-700 dark:bg-blue-500/10 dark:text-blue-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Actions */}

                <div className="mt-6 grid grid-cols-2 gap-3">

                  {/* View Details */}

                  <button
                    type="button"
                    onClick={() =>
                      setSelectedProject(project)
                    }
                    className="rounded-lg bg-blue-600 px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                  >
                    View Details
                  </button>

                  {/* GitHub */}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg border border-slate-200 px-3 py-2.5 text-center text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-blue-500 dark:hover:text-blue-400"
                  >
                    GitHub ↗
                  </a>

                  {/* Live Demo */}

                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="col-span-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/20"
                    >
                      Live Demo ↗
                    </a>
                  ) : (
                    <span
                      title="Live demo not available yet"
                      className="col-span-2 cursor-not-allowed rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-center text-sm font-semibold text-slate-400 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-500"
                    >
                      Live Demo — Coming Soon
                    </span>
                  )}

                </div>
              </div>
            </article>
          ))}

        </div>
      </div>

      {/* Modal */}

      {selectedProject && (
        <div
          className="fixed inset-0 z- [100] flex items-center justify-center bg-slate-950/70 p-5 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl dark:bg-slate-900"
            onClick={(event) => event.stopPropagation()}
          >

            {/* Modal Header */}

            <div className="flex items-center justify-between border-b border-slate-200 p-6 dark:border-slate-700">

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  {selectedProject.category}
                </p>

                <h3 className="mt-1 text-2xl font-black text-slate-900 dark:text-white">
                  {selectedProject.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="rounded-full bg-slate-100 px-3 py-2 text-slate-600 transition hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
              >
                ✕
              </button>

            </div>

            {/* Modal Content */}

            <div className="p-6">

              <p className="leading-7 text-slate-600 dark:text-slate-400">
                {selectedProject.description}
              </p>

              {/* Technologies */}

              <h4 className="mt-7 font-bold text-slate-900 dark:text-white">
                Technologies
              </h4>

              <div className="mt-4 flex flex-wrap gap-2">
                {selectedProject.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700 dark:bg-blue-500/10 dark:text-blue-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Features */}

              <h4 className="mt-7 font-bold text-slate-900 dark:text-white">
                Key Features
              </h4>

              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {selectedProject.features.map((feature) => (
                  <div
                    key={feature}
                    className="rounded-lg border border-slate-200 p-3 text-sm text-slate-600 dark:border-slate-700 dark:text-slate-300"
                  >
                    <span className="mr-2 text-blue-600 dark:text-blue-400">
                      ✓
                    </span>

                    {feature}
                  </div>
                ))}
              </div>

              {/* Modal Actions */}

              <div className="mt-7 flex flex-wrap gap-3">

                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  View GitHub ↗
                </a>

                {selectedProject.live ? (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:shadow-lg hover:shadow-cyan-500/20"
                  >
                    Live Demo ↗
                  </a>
                ) : (
                  <span className="cursor-not-allowed rounded-lg border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-400 dark:border-slate-700 dark:text-slate-500">
                    Live Demo — Coming Soon
                  </span>
                )}

              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
import { motion } from "framer-motion";

const timeline = [
  {
    year: "Career Transition",
    type: "Current Focus",
    title: "Full-Stack Development",
    organization: "Software Development",
    description:
      "Focused on transitioning into software development and building practical full-stack web applications using the MERN stack.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
    ],
  },

  {
    year: "Completed",
    type: "Professional Training",
    title: "AI + MERN Stack Developer Program",
    organization: "Error Makes Clever Institution",
    description:
      "Completed hands-on training in React.js, JavaScript, Node.js, Express.js, MongoDB, REST APIs, authentication, CRUD operations, Git/GitHub and deployment.",
    technologies: [
      "MERN",
      "REST APIs",
      "Authentication",
      "Git/GitHub",
      "Deployment",
    ],
  },

  {
    year: "2023 – Dec 2024",
    type: "Professional Experience",
    title: "Operations",
    organization: "DCB Bank — Chennai",
    description:
      "Managed daily banking operations while maintaining accuracy, documentation, process compliance and timely service delivery. Handled customer and operational requests while working with structured data and internal systems.",
    technologies: [
      "Problem Solving",
      "Documentation",
      "Communication",
      "Process Management",
    ],
  },

  {
    year: "2023",
    type: "Education",
    title: "Bachelor of Engineering",
    organization: "Mechanical Engineering",
    description:
      "Completed B.E. in Mechanical Engineering with a CGPA of 7.69.",
    technologies: [
      "Mechanical Engineering",
      "Problem Solving",
      "Technical Skills",
    ],
  },
];

function Experience() {
  return (
    <section
      id="Experience"
      className="relative overflow-hidden bg-slate-50 py-24 dark:bg-slate-950"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl dark:bg-blue-900/20" />
      <div className="pointer-events-none absolute bottom-20 right-0 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl dark:bg-cyan-900/20" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
            My Journey
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-900 dark:text-white md:text-5xl">
            Experience &{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-400">
              Education
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 dark:text-slate-400">
            A timeline of my professional experience, technical training,
            education and transition into full-stack development.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-16">
          {/* Center line - desktop */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-blue-300 via-blue-500 to-cyan-400 dark:from-blue-800 dark:via-blue-500 dark:to-cyan-700 md:block" />

          <div className="space-y-12 md:space-y-16">
            {timeline.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={`${item.title}-${index}`}
                  initial={{
                    opacity: 0,
                    x: isLeft ? -40 : 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="relative md:grid md:grid-cols-2 md:gap-16"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-8 z-10 hidden h-4 w-4 rounded-full border-4 border-slate-50 bg-blue-600 shadow-lg shadow-blue-500/30 dark:border-slate-950 md:left-1/2 md:block md:-translate-x-1/2" />

                  {/* Empty side for alternating layout */}
                  {isLeft ? (
                    <>
                      <div className="md:pr-8">
                        <TimelineCard item={item} />
                      </div>

                      <div />
                    </>
                  ) : (
                    <>
                      <div />

                      <div className="md:pl-8">
                        <TimelineCard item={item} />
                      </div>
                    </>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineCard({ item }) {
  return (
    <article className="group rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/50 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-700 dark:hover:shadow-blue-950/30">
      {/* Year + type */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700 dark:bg-blue-950/50 dark:text-blue-300">
          {item.year}
        </span>

        <span className="text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
          {item.type}
        </span>
      </div>

      {/* Title */}
      <h3 className="mt-5 text-xl font-bold text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
        {item.title}
      </h3>

      {/* Organization */}
      <p className="mt-1 text-sm font-semibold text-blue-600 dark:text-blue-400">
        {item.organization}
      </p>

      {/* Description */}
      <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
        {item.description}
      </p>

      {/* Technologies */}
      <div className="mt-5 flex flex-wrap gap-2">
        {item.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 transition-colors group-hover:border-blue-100 group-hover:text-blue-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:group-hover:border-blue-800 dark:group-hover:text-blue-300"
          >
            {technology}
          </span>
        ))}
      </div>
    </article>
  );
}

export default Experience;
import { useEffect, useRef, useState } from "react";

function About() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="About"
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-24 transition-colors duration-300 dark:bg-slate-950"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl dark:bg-blue-600/10" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-cyan-100/50 blur-3xl dark:bg-cyan-600/10" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* =========================
            SECTION HEADER
        ========================= */}
        <div
          className={`mx-auto max-w-3xl text-center transition-all duration-700 ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
            About Me
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            Building with{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-400">
              purpose
            </span>
          </h2>

          <p className="mt-5 leading-7 text-slate-600 dark:text-slate-400">
            A Mechanical Engineering graduate who transitioned into software
            development with a focus on modern full-stack web applications.
          </p>
        </div>

        {/* =========================
            MAIN CONTENT
        ========================= */}
        <div className="mt-16 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          {/* =========================
              LEFT — INTRODUCTION
          ========================= */}
          <div
            className={`transition-all duration-700 delay-150 ${
              visible
                ? "translate-x-0 opacity-100"
                : "-translate-x-12 opacity-0"
            }`}
          >
            <div className="glass-card interactive-card rounded-2xl p-7 sm:p-9">
              {/* Profile heading */}
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-lg font-black text-white shadow-lg shadow-blue-600/20">
                  MK
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Mukesh Kanna
                  </h3>

                  <p className="text-sm text-blue-600 dark:text-blue-400">
                    Full-Stack Developer
                  </p>
                </div>
              </div>

              {/* About content */}
              <div className="space-y-5 text-[15px] leading-7 text-slate-600 dark:text-slate-400">
                <p>
                  I am a{" "}
                  <span className="font-semibold text-slate-900 dark:text-white">
                    Full-Stack Developer
                  </span>{" "}
                  focused on building responsive, scalable and user-friendly
                  web applications using modern JavaScript technologies.
                </p>

                <p>
                  My development journey started with a background in{" "}
                  <span className="font-semibold text-blue-600 dark:text-blue-400">
                    Mechanical Engineering
                  </span>
                  . I made a career transition into software development and
                  have been building practical projects using the{" "}
                  <span className="font-semibold text-blue-600 dark:text-blue-400">
                    MERN stack
                  </span>
                  .
                </p>

                <p>
                  I enjoy working across both frontend and backend development
                  — from designing{" "}
                  <span className="font-semibold text-slate-900 dark:text-white">
                    React interfaces
                  </span>{" "}
                  to creating{" "}
                  <span className="font-semibold text-slate-900 dark:text-white">
                    REST APIs
                  </span>
                  , connecting databases and implementing authentication.
                </p>
              </div>

              {/* Career Objective */}
              <div className="mt-7 rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50/60 p-5 dark:border-blue-500/20 dark:from-blue-500/10 dark:to-cyan-500/5">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400" />

                  <p className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                    Career Objective
                  </p>
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  To contribute to a professional software development team
                  where I can apply my full-stack development skills, solve
                  real-world problems and continuously grow as a software
                  engineer.
                </p>
              </div>
            </div>
          </div>

          {/* =========================
              RIGHT — DETAILS
          ========================= */}
          <div
            className={`grid gap-5 transition-all duration-700 delay-300 ${
              visible
                ? "translate-x-0 opacity-100"
                : "translate-x-12 opacity-0"
            }`}
          >
            {/* Education */}
            <div className="glass-card interactive-card rounded-2xl p-7">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-xl dark:bg-blue-500/10">
                  🎓
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                    Education
                  </p>

                  <h3 className="mt-1 text-lg font-bold text-slate-900 dark:text-white">
                    Bachelor of Engineering
                  </h3>

                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    Mechanical Engineering
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
                      2023 Graduate
                    </span>

                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                      CGPA 7.69
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* AI + MERN Training */}
            <div className="glass-card interactive-card rounded-2xl p-7">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-xl dark:bg-cyan-500/10">
                  💻
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                    Professional Training
                  </p>

                  <h3 className="mt-1 text-lg font-bold text-slate-900 dark:text-white">
                    AI + MERN Stack Developer Program
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                    Hands-on training in React.js, JavaScript, Node.js,
                    Express.js, MongoDB, REST APIs, authentication, CRUD
                    operations, Git/GitHub and deployment.
                  </p>

                  <span className="mt-3 inline-flex rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700 dark:bg-cyan-500/10 dark:text-cyan-300">
                    Completed
                  </span>

                  {/* Prompt Engineering */}
                  <div className="mt-6 border-t border-slate-200 pt-5 dark:border-slate-700">
                    <p className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                      Additional Training
                    </p>

                    <h4 className="mt-2 text-base font-bold text-slate-900 dark:text-white">
                      Prompt Engineering Course
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                      Training focused on prompt engineering and creating
                      effective prompts for AI-based applications and
                      workflows.
                    </p>

                    <span className="mt-3 inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
                      Completed
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* What I Work With */}
            <div className="glass-card interactive-card rounded-2xl p-7">
              <p className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                What I Work With
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "JavaScript",
                  "TypeScript",
                  "React.js",
                  "Next.js",
                  "Redux",
                  "Tailwind CSS",
                  "Vite.js",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "Firebase",
                  "REST APIs",
                  "JWT",
                  "Git & GitHub",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-600 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-blue-500/40 dark:hover:bg-blue-500/10 dark:hover:text-blue-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* =========================
            BOTTOM HIGHLIGHTS
        ========================= */}
        <div
          className={`mt-12 grid gap-4 sm:grid-cols-3 transition-all duration-700 delay-500 ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          {[
            {
              title: "Frontend Development",
              text: "Responsive and user-friendly interfaces using React.js and modern CSS technologies.",
            },
            {
              title: "Backend Development",
              text: "REST APIs and server-side applications using Node.js and Express.js.",
            },
            {
              title: "Database & Authentication",
              text: "MongoDB-based data management with authentication and authorization workflows.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50/80 to-cyan-50/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100/50 dark:border-blue-500/10 dark:from-blue-500/5 dark:to-cyan-500/5 dark:hover:border-blue-500/30"
            >
              <div className="mb-4 h-1 w-10 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500" />

              <h3 className="font-bold text-slate-900 dark:text-white">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
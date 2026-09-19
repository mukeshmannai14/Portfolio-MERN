import { motion } from "framer-motion";

function Resume() {
  return (
    <section
      id="Resume"
      className="relative overflow-hidden bg-white px-6 py-24 dark:bg-slate-950"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-8 shadow-xl shadow-blue-500/10 dark:border-slate-700 dark:from-slate-900 dark:via-slate-900 dark:to-blue-950/40 md:p-12"
        >
          <div className="grid items-center gap-10 md:grid-cols-[1fr_auto]">
            <div>
              <span className="inline-flex rounded-full border border-blue-200 bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-400">
                Resume
              </span>

              <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 dark:text-white md:text-4xl">
                Let&apos;s build something{" "}
                <span className="text-blue-600 dark:text-blue-400">
                  meaningful.
                </span>
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">
                Explore my resume to learn more about my technical skills,
                projects, professional experience, education and full-stack
                development journey.
              </p>

              <div className="mt-7 flex flex-wrap gap-4">
                <a
                  href="/assets/Mukesh-Kanna-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700"
                >
                  View Resume
                </a>

                <a
                  href="/assets/Mukesh-Kanna-Resume.pdf"
                  download="Mukesh-Kanna-Resume.pdf"
                  className="rounded-xl border border-blue-200 bg-white px-6 py-3 text-sm font-bold text-blue-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-50 dark:border-slate-600 dark:bg-slate-800 dark:text-blue-400 dark:hover:border-blue-500 dark:hover:bg-slate-700"
                >
                  Download Resume
                </a>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mx-auto flex h-32 w-32 items-center justify-center rounded-3xl border border-blue-200 bg-white shadow-xl shadow-blue-500/10 dark:border-blue-500/30 dark:bg-slate-800"
            >
              <div className="text-center">
                <p className="text-4xl font-black text-blue-600 dark:text-blue-400">
                  CV
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                  Resume
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Resume;
import { useEffect, useState } from "react";
import TypingText from "../components/TypingText";
import TechStack from "../components/TechStack";
import StatCard from "../components/StatCard";
import projects from "../data/projects";

function Hero() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x =
        (event.clientX / window.innerWidth - 0.5) * 12;

      const y =
        (event.clientY / window.innerHeight - 0.5) * 12;

      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      id="Home"
      className="relative min-h-screen overflow-hidden bg-slate-50 pt-20 transition-colors duration-300 dark:bg-slate-950"
    >
      {/* ==============================
          Background Grid
      ============================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-50 dark:opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(#bfdbfe 1px, transparent 1px),
            linear-gradient(90deg, #bfdbfe 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ==============================
          Background Glow
      ============================== */}

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-300/30 blur-3xl dark:bg-blue-600/10" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-300/20 blur-3xl dark:bg-cyan-600/10" />

      {/* ==============================
          Main Container
      ============================== */}

      <div className="relative mx-auto w-full max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">

          {/* =================================
              LEFT CONTENT
          ================================= */}

          <div className="max-w-3xl">

            {/* Availability */}

            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />

                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>

              Available for Full-Stack Developer Opportunities
            </div>

            {/* Greeting */}

            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
              Hello, I'm
            </p>

            {/* Name */}

            <h1 className="text-5xl font-black leading-[1.05] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl dark:text-white">
              Mukesh{" "}
              <span className="shimmer-text">
                Kanna
              </span>
            </h1>

            {/* Dynamic Role */}

            <div className="mt-6 min-h-[45px] text-2xl font-bold sm:text-3xl lg:text-4xl">
              <TypingText />
            </div>

            {/* Description */}

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-400">
              I build modern, responsive and scalable web
              applications using the MERN stack. I enjoy
              transforming ideas into clean, functional and
              user-focused digital experiences.
            </p>

            {/* =================================
                CTA BUTTONS
            ================================= */}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <a
                href="#Projects"
                className="group inline-flex items-center justify-center gap-3 rounded-lg bg-blue-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
              >
                View Projects

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="/assets/Mukesh-Kanna-Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-lg border border-slate-200 bg-white px-7 py-3.5 font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-blue-500/50 dark:hover:text-blue-400"
              >
                View Resume

                <span className="transition-transform duration-300 group-hover:translate-y-1">
                  ↓
                </span>
              </a>

              <a
                href="#Contact"
                className="inline-flex items-center justify-center rounded-lg border border-blue-200 bg-blue-50 px-7 py-3.5 font-semibold text-blue-700 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-100 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-300 dark:hover:bg-blue-500/20"
              >
                Contact Me
              </a>

            </div>

            {/* =================================
                SOCIAL LINKS
            ================================= */}

            <div className="mt-7 flex flex-wrap items-center gap-6 text-sm">

              <a
                href="https://github.com/mukeshmannai14"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-slate-500 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/mukeshkanna14"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-slate-500 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
              >
                LinkedIn ↗
              </a>

              <a
                href="mailto:mukeshkannamannai04@gmail.com"
                className="font-medium text-slate-500 transition hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400"
              >
                Email ↗
              </a>

            </div>

            {/* =================================
                DYNAMIC TECHNOLOGY STACK
            ================================= */}

            <TechStack />

            {/* =================================
                DYNAMIC PROJECT STATS
            ================================= */}

            <div className="mt-8">
              <StatCard
                value={`${projects.length}+`}
                label="Projects Built"
              />
            </div>

          </div>

          {/* =================================
              RIGHT PROFILE AREA
          ================================= */}

          <div className="relative flex min-h-[480px] items-center justify-center lg:justify-end">

            {/* Animated Glow */}

            <div className="glow-pulse absolute h-[350px] w-[350px] rounded-full bg-blue-400/20 blur-3xl sm:h-[450px] sm:w-[450px] dark:bg-blue-500/20" />

            {/* =================================
                Floating React Badge
            ================================= */}

            <div className="float-animation absolute left-2 top-5 z-20 hidden rounded-xl border border-blue-100 bg-white px-4 py-3 text-sm font-bold text-blue-600 shadow-lg sm:block dark:border-blue-500/20 dark:bg-slate-900 dark:text-blue-400">
              &lt; React /&gt;
            </div>

            {/* =================================
                Floating Node Badge
            ================================= */}

            <div
              className="float-animation absolute right-0 top-1/2 z-20 hidden rounded-xl border border-cyan-100 bg-white px-4 py-3 text-sm font-bold text-cyan-600 shadow-lg sm:block dark:border-cyan-500/20 dark:bg-slate-900 dark:text-cyan-400"
              style={{
                animationDelay: "1s",
              }}
            >
              Node.js
            </div>

            {/* =================================
                Floating MongoDB Badge
            ================================= */}

            <div
              className="float-animation absolute bottom-8 left-4 z-20 hidden rounded-xl border border-blue-100 bg-white px-4 py-3 text-sm font-bold text-blue-600 shadow-lg sm:block dark:border-blue-500/20 dark:bg-slate-900 dark:text-blue-400"
              style={{
                animationDelay: "2s",
              }}
            >
              MongoDB
            </div>

            {/* =================================
                Profile Card
            ================================= */}

            <div
              className="relative transition-transform duration-200 ease-out"
              style={{
                transform: `perspective(1000px) rotateX(${-mousePosition.y}deg) rotateY(${mousePosition.x}deg)`,
              }}
            >

              {/* Outer Ring */}

              <div className="absolute -inset-5 rounded-full border border-blue-200/70 dark:border-blue-500/20" />

              <div className="absolute -inset-9 rounded-full border border-blue-100/50 dark:border-blue-500/10" />

              {/* Card */}

              <div className="glass-card relative rounded-full p-4">

                <div className="relative overflow-hidden rounded-full">

                  <img
                    src="/assets/profile.png"
                    alt="Mukesh Kanna - Full Stack Developer"
                    className="h-[290px] w-[290px] rounded-full border-4 border-blue-100 object-cover shadow-2xl transition-transform duration-500 hover:scale-[1.03] sm:h-[390px] sm:w-[390px] dark:border-blue-500/20"
                  />

                  {/* Image Overlay */}

                  <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-t from-blue-950/20 via-transparent to-transparent" />

                </div>

                {/* Inner Border */}

                <div className="pointer-events-none absolute inset-0 rounded-full border border-blue-200 dark:border-blue-500/30" />

              </div>

              {/* Bottom Developer Badge */}

              <div className="absolute -bottom-5 left-1/2 z-30 -translate-x-1/2 whitespace-nowrap rounded-full border border-blue-100 bg-white px-5 py-2.5 text-sm font-semibold text-blue-700 shadow-xl dark:border-blue-500/20 dark:bg-slate-900 dark:text-blue-300">
                MERN Stack Developer
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* =================================
          SCROLL INDICATOR
      ================================= */}

      <a
        href="#About"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs font-medium text-slate-400 transition hover:text-blue-600 dark:hover:text-blue-400 sm:flex"
      >
        <span>Scroll to explore</span>

        <span className="flex h-9 w-6 items-start justify-center rounded-full border border-slate-300 p-1.5 dark:border-slate-700">
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue-600 dark:bg-blue-400" />
        </span>
      </a>
    </section>
  );
}

export default Hero;
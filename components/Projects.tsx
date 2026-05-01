"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  status?: "In development" | "Live";
};

const projects: Project[] = [
  {
    title: "Drum Coach",
    description:
      "A Spotify-integrated drumming coach that analyzes tracks and generates practice exercises tailored to what you're listening to.",
    tech: ["React", "Vite", "Spotify API"],
    status: "In development",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="flex items-center gap-4 text-2xl font-bold text-ink mb-12">
          <span className="text-olive font-mono text-xl">03.</span>
          Projects
          <span className="flex-1 h-px bg-ink/10 ml-4" />
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col rounded-lg border border-muted/20 bg-surface p-6 hover:border-terracotta/40 transition-colors duration-200"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-olive text-2xl">▹</span>
                <div className="flex items-center gap-3">
                  {project.status && (
                    <span className="text-xs font-mono text-muted border border-muted rounded px-2 py-0.5">
                      {project.status}
                    </span>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-olive transition-colors duration-200 text-sm font-mono"
                      aria-label={`${project.title} on GitHub`}
                    >
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-olive transition-colors duration-200 text-sm font-mono"
                      aria-label={`${project.title} live demo`}
                    >
                      Demo
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-ink font-semibold text-lg mb-2">
                {project.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-6 flex-1">
                {project.description}
              </p>

              <ul className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-mono text-muted">
                {project.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  "C/C++", "Python", "Java", "React", "Node.js",
  "Git", "Docker", "Kubernetes", "REST APIs", "Agentic Development"
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="flex items-center gap-4 text-2xl font-bold text-white mb-12">
          <span className="text-blue-400 font-mono text-xl">01.</span>
          About Me
          <span className="flex-1 h-px bg-white/10 ml-4" />
        </h2>

        <div className="grid md:grid-cols-[1fr_380px] gap-12 items-start">
          <div className="space-y-4 text-gray-400 leading-relaxed">
            <p>
              I&apos;m a software engineer with 3 years of professional experience
              building and shipping production software. I care about writing
              clean, maintainable code and delivering real value to users.
            </p>
            <p>
              I earned my B.S. in Computer Science with a minor in Mathematics from
              Santa Clara University (Class of 2023).
            </p>
            <p>
              When I&apos;m not coding, you can find me running and road cycling around the Bay Area and playing the drums with my band.
            </p>
            <p>
              I&apos;m currently open to new full-time opportunities. If you have
              a role that might be a fit, I&apos;d love to connect.
            </p>

            <div className="pt-6">
              <p className="text-gray-400 mb-4 text-sm font-mono">Technologies I work with:</p>
              <ul className="grid grid-cols-2 gap-2 max-w-md">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-gray-400 text-sm"
                  >
                    <span className="text-blue-400">▹</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-full max-w-[380px] mx-auto md:mx-0">
            <Image
              src="/images/camden-portrait.jpg"
              alt="Camden Rothleder"
              width={760}
              height={912}
              priority
              className="w-full h-auto rounded"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

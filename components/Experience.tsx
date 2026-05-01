"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const jobs = [
  {
    company: "Dell DevOps",
    title: "Software Engineer II",
    range: "July 2025 – Present",
    bullets: [
      "Designed and integrated a Retrieval-Augmented Generation (RAG) agent using LLMs and the ELK stack, enabling developers and support engineers to query deployment health through natural-language prompts and replacing manual log analysis",
      "Built a bash automation pipeline to batch-test an internal AI-driven build failure triage API across hundreds of CI runs, helping improve triage accuracy to 95% across 400+ build failures",
      "Built Groovy-based Jenkins and Elastic Stack tooling to automatically back up and restore build artifacts, enabling 600+ developers to recover failed or lost builds in seconds",
      "Analyzed large-scale build failure logs to generate training data for an internal AI model that predicts and categorizes CI failures",
      "Improved average build times by using Kibana visualizations to identify and remediate low-performing build servers",
    ],
  },
  {
    company: "Dell Security",
    title: "Software Engineer I",
    range: "July 2023 – July 2025",
    bullets: [
      "Designed and shipped a customer-facing C-based security CLI released in PowerProtect Data Domain OS 8.3, enabling enterprise data centers to cryptographically lock down systems against unauthorized access",
      "Integrated KMIP-based key management to automatically lock down filesystems during unauthorized startups, preventing data access even if hardware is physically removed or stolen",
      "Implemented mutual TLS across a multi-service Kubernetes scale-out system, securing all internal service-to-service communication for enterprise-grade zero-trust compliance",
      "Developed gRPC security library methods to standardize encrypted communication and certificate handling across multiple production microservices",
      "Delivered a live security feature demo to enterprise customers, translating low-level system behavior into business and compliance impact",
    ],
  },
  {
    company: "Dell Intern",
    title: "Software Engineering Intern",
    range: "June 2022 – August 2022",
    bullets: [
      "Developed a REST API backed by MongoDB for product managers to create, edit, store, and filter customer survey questions, cutting deployment time from 4 weeks to 1 week",
      "Designed and implemented a React UI enabling product managers to build and manage a dynamic question bank without engineering support",
      "Used Spring Boot to implement the question payload data stream between the API and database",
      "Improved unit test coverage from 60% to 100%",
    ],
  },
];

export default function Experience() {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="flex items-center gap-4 text-2xl font-bold text-ink mb-12">
          <span className="text-olive font-mono text-xl">02.</span>
          Work Experience
          <span className="flex-1 h-px bg-ink/10 ml-4" />
        </h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Tab list */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible min-w-[160px] border-b md:border-b-0 md:border-l border-ink/10">
            {jobs.map((job, i) => (
              <button
                key={job.company}
                onClick={() => setActive(i)}
                className={`px-4 py-3 text-sm font-mono text-left whitespace-nowrap transition-colors duration-200 border-b-2 md:border-b-0 md:border-l-2 -mb-px md:mb-0 md:-ml-px ${
                  active === i
                    ? "text-olive border-olive bg-olive/5"
                    : "text-muted border-transparent hover:text-ink hover:bg-ink/5"
                }`}
              >
                {job.company}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="flex-1 min-h-[200px]">
            <h3 className="text-ink font-semibold text-lg">
              {jobs[active].title}{" "}
              <span className="text-olive">@ {jobs[active].company}</span>
            </h3>
            <p className="text-muted font-mono text-sm mt-1 mb-6">
              {jobs[active].range}
            </p>
            <ul className="space-y-3">
              {jobs[active].bullets.map((b, i) => (
                <li key={i} className="flex gap-3 text-muted text-sm leading-relaxed">
                  <span className="text-olive mt-1 shrink-0">▹</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 px-6 max-w-5xl mx-auto text-center" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className="text-olive font-mono mb-4">04. What&apos;s Next?</p>
        <h2 className="text-4xl sm:text-5xl font-bold text-ink mb-6">
          Get In Touch
        </h2>
        <p className="text-muted max-w-md mx-auto mb-10 leading-relaxed">
          I&apos;m currently open to new opportunities. Whether you have a
          question or just want to say hi, my inbox is always open.
        </p>
        <a
          href="mailto:crothleder@gmail.com"
          className="inline-block px-8 py-4 bg-terracotta text-cream rounded font-mono text-sm hover:bg-terracotta/90 transition-colors duration-200"
        >
          Say Hello
        </a>

        <div className="flex justify-center gap-6 mt-16">
          <a
            href="https://github.com/crothleder-123"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-ink transition-colors duration-200 text-sm font-mono"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/camden-rothleder"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-ink transition-colors duration-200 text-sm font-mono"
          >
            LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
}

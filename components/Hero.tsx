"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-olive font-mono mb-4"
      >
        Hi, my name is
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="text-5xl sm:text-7xl font-bold text-ink mb-2"
      >
        Camden Rothleder.
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-4xl sm:text-6xl font-bold text-muted mb-6"
      >
        Looking to solve real problems for real people.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65 }}
        className="text-muted max-w-xl text-lg leading-relaxed mb-10"
      >
        I&apos;m a software engineer with 3 years of professional experience
        building reliable, scalable software. Currently looking for my next
        opportunity.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex gap-4"
      >
        <a
          href="#contact"
          className="px-6 py-3 bg-terracotta text-cream rounded font-mono text-sm hover:bg-terracotta/90 transition-colors duration-200"
        >
          Get in touch
        </a>
        <a
          href="#experience"
          className="px-6 py-3 border border-terracotta text-terracotta rounded font-mono text-sm hover:bg-terracotta/10 transition-colors duration-200"
        >
          See my work →
        </a>
      </motion.div>
    </section>
  );
}

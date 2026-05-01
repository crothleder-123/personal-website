"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveSection(id);
          }
        });
      },
      { threshold: 0.3 }
    );

    links.forEach((link) => {
      const id = link.href.slice(1);
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled ? "bg-cream/90 backdrop-blur border-muted/20" : "border-muted/10"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-olive font-mono font-semibold tracking-tight">
          CR
        </span>
        <ul className="flex gap-8">
          {links.map((link) => {
            const id = link.href.slice(1);
            const isActive = activeSection === id;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-sm transition-colors duration-200 ${
                    isActive
                      ? "text-ink font-medium"
                      : "text-muted hover:text-ink"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </motion.nav>
  );
}

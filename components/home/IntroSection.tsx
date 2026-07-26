"use client";

import { motion } from "framer-motion";
import { INTRO_LINES } from "@/lib/constants";

export function IntroSection() {
  return (
    <section id="intro" className="mx-auto max-w-2xl px-6 py-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="space-y-4 font-body text-lg font-medium leading-relaxed text-ink-muted md:text-xl"
      >
        {INTRO_LINES.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </motion.div>
    </section>
  );
}

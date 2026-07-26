"use client";

import { motion, useScroll } from "framer-motion";

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed left-0 top-0 z-50 h-1 w-full origin-left bg-lavender-400"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

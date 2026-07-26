"use client";

import { motion } from "framer-motion";
import { BlobShape2 } from "@/components/ui/shapes";

export function NavIllustration() {
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none hidden w-48 shrink-0 md:block"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 40 }}
      transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
    >
      <BlobShape2 className="h-auto w-full text-lavender-300" />
    </motion.div>
  );
}

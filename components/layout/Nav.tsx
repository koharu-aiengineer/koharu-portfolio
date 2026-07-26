"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_ITEMS } from "@/lib/constants";
import { NavIllustration } from "./NavIllustration";

type NavProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function Nav({ isOpen, onClose }: NavProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="site-nav"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-40 flex items-center justify-center gap-10 bg-cream-50/95 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="flex flex-col gap-8 text-center font-heading text-3xl text-ink">
            {NAV_ITEMS.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{ delay: 0.08 * i, duration: 0.3 }}
              >
                <Link href={item.href} onClick={onClose}>
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>
          <NavIllustration />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
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
          {/* The header's own hamburger/close button sits at z-20, below this
              panel's z-40, so it's covered and unclickable while open — this
              button is the panel's own, always-reachable close control. */}
          <button
            onClick={onClose}
            aria-label="メニューを閉じる"
            className="absolute right-4 top-4 rounded-full p-3 text-ink transition-colors hover:bg-lavender-100 sm:right-6 sm:top-6"
          >
            <X size={32} />
          </button>
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

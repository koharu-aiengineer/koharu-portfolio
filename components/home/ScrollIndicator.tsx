"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";

type ScrollIndicatorProps = {
  targetId?: string;
};

export function ScrollIndicator({ targetId = "intro" }: ScrollIndicatorProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [visible, setVisible] = useState(true);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          ref={ref}
          onClick={() =>
            document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" })
          }
          aria-label="次のセクションへスクロール"
          className="absolute inset-x-0 bottom-6 mx-auto flex flex-col items-center gap-1 text-lavender-500"
          animate={reduceMotion ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          exit={{ opacity: 0 }}
        >
          <span className="text-xs tracking-widest">SCROLL</span>
          <ChevronDown className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

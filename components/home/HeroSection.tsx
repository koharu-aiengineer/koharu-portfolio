"use client";

import { motion } from "framer-motion";
import { FloatingShape } from "@/components/ui/FloatingShape";
import { CATCHCOPY, SITE_NAME } from "@/lib/constants";
import { ScrollIndicator } from "./ScrollIndicator";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden px-6 pb-28 pt-16 md:pt-24">
      {/* soft glow: adds depth behind the floating shapes. Kept faint so it
          doesn't fight with the text color for contrast. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 -z-20 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lavender-300 opacity-25 blur-2xl md:h-[560px] md:w-[560px]"
      />
      <div className="pointer-events-none absolute inset-0 -z-10">
        <FloatingShape
          variant="blob-1"
          color="lavender"
          size={300}
          delaySec={0}
          direction="up"
          className="-left-20 -top-16"
        />
        <FloatingShape
          variant="circle"
          color="blush"
          size={90}
          delaySec={1.2}
          direction="down"
          className="right-6 top-8"
        />
        <FloatingShape
          variant="blob-2"
          color="lavender"
          size={220}
          delaySec={2.4}
          direction="down"
          className="-right-14 top-1/3"
        />
        <FloatingShape
          variant="blob-2"
          color="blush"
          size={240}
          delaySec={0.8}
          direction="up"
          opacity={0.35}
          className="-bottom-16 right-1/4"
        />
        <FloatingShape
          variant="wave"
          color="lavender"
          size={260}
          delaySec={3.6}
          direction="up"
          className="left-1/4 bottom-0"
        />
        <FloatingShape
          variant="lightbulb"
          color="lavender"
          size={52}
          delaySec={2}
          direction="down"
          opacity={0.55}
          className="left-[18%] bottom-20"
        />
        <FloatingShape
          variant="star"
          color="blush"
          size={34}
          delaySec={0.5}
          direction="up"
          opacity={0.6}
          className="left-[40%] bottom-6"
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 mx-auto max-w-3xl text-center"
      >
        {/* Contrast now comes primarily from darker text colors
            (lavender-700 / lavender-700→blush-600 gradient), with the bright
            drop-shadow kept as a secondary lift off the lavender backdrop.
            `filter: drop-shadow()` (Tailwind's drop-shadow-* utility) is used
            rather than text-shadow — text-shadow does not render on text
            with a gradient + bg-clip-text fill, so the same mechanism is
            used for both lines to keep the effect consistent. */}
        <p className="font-heading text-2xl text-lavender-700 drop-shadow-[0_2px_8px_rgba(255,253,250,0.7)] sm:text-3xl md:text-4xl">
          {CATCHCOPY}
        </p>
        <h1 className="mt-4 bg-gradient-to-r from-lavender-700 to-blush-600 bg-clip-text font-heading text-5xl text-transparent drop-shadow-[0_3px_10px_rgba(255,253,250,0.8)] md:text-7xl">
          {SITE_NAME}
        </h1>
      </motion.div>
      <ScrollIndicator targetId="intro" />
    </section>
  );
}

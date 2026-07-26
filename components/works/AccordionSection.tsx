"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type AccordionSectionProps = {
  title: string;
  children: React.ReactNode;
};

// Reserved for detail sections with a longer write-up (e.g. 3+ bullet points)
// where collapsing by default keeps the page scannable. Not currently used —
// see app/works/[slug]/page.tsx, which renders short sections inline instead.
export function AccordionSection({ title, children }: AccordionSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="rounded-2xl bg-cream-50">
      <button
        onClick={() => setIsOpen((v) => !v)}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between px-6 py-4 text-left"
      >
        <h2 className="font-heading text-xl text-ink">{title}</h2>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-lavender-500 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {/* grid-template-rows 0fr/1fr trick: a plain CSS transition, no JS
          animation loop, so it keeps working regardless of animation-library quirks. */}
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6">{children}</div>
        </div>
      </div>
    </section>
  );
}

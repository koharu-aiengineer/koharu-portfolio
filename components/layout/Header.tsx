"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { FloatingShape } from "@/components/ui/FloatingShape";
import { SITE_NAME } from "@/lib/constants";
import { Nav } from "./Nav";

export function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20">
      {/* backdrop-filter/overflow-hidden must stay off the <header> itself —
          either one turns it into a containing block that would trap Nav's
          `fixed inset-0` inside this bar instead of the viewport. */}
      <div className="relative isolate overflow-hidden bg-cream-100/90 backdrop-blur-sm">
        <div className="pointer-events-none absolute inset-0 z-0">
          <FloatingShape
            variant="blob-1"
            color="lavender"
            size={100}
            delaySec={0}
            direction="up"
            opacity={0.35}
            className="-left-6 -top-6"
          />
          <FloatingShape
            variant="circle"
            color="blush"
            size={40}
            delaySec={1.4}
            direction="down"
            opacity={0.4}
            className="right-24 top-2"
          />
        </div>
        <div className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="font-heading text-lg text-ink">
            {SITE_NAME}
          </Link>
          <button
            onClick={() => setIsNavOpen((v) => !v)}
            aria-expanded={isNavOpen}
            aria-controls="site-nav"
            aria-label={isNavOpen ? "メニューを閉じる" : "メニューを開く"}
            className="rounded-full p-3 text-ink transition-colors hover:bg-lavender-100"
          >
            {isNavOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>
      <Nav isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} />
    </header>
  );
}

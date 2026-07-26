import Link from "next/link";
import { FloatingShape } from "@/components/ui/FloatingShape";
import { ABOUT_TEASER, FEATURED_SKILLS } from "@/lib/constants";

export function AboutExcerptSection() {
  return (
    <section className="relative isolate overflow-hidden px-6 py-20 text-center">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <FloatingShape
          variant="blob-2"
          color="lavender"
          size={160}
          opacity={0.3}
          direction="down"
          delaySec={1}
          className="-right-14 top-4"
        />
        <FloatingShape
          variant="circle"
          color="blush"
          size={44}
          opacity={0.4}
          direction="up"
          delaySec={2.2}
          className="left-10 bottom-6"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-2xl">
        <h2 className="font-heading text-2xl text-ink md:text-3xl">About</h2>
        <p className="mt-4 font-medium leading-relaxed text-ink-muted">{ABOUT_TEASER}</p>
        <ul className="mt-5 flex flex-wrap justify-center gap-2">
          {FEATURED_SKILLS.map((skill) => (
            <li
              key={skill}
              className="rounded-full bg-lavender-50 px-3 py-1 text-xs text-lavender-700"
            >
              {skill}
            </li>
          ))}
        </ul>
        <Link
          href="/about"
          className="mt-6 inline-block text-sm text-lavender-600 transition-colors hover:text-lavender-700"
        >
          About詳しく見る →
        </Link>
      </div>
    </section>
  );
}

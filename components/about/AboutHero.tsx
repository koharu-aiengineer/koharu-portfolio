import { FloatingShape } from "@/components/ui/FloatingShape";

export function AboutHero() {
  return (
    <section className="relative isolate overflow-hidden px-6 pb-4 pt-16 text-center md:pt-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <FloatingShape
          variant="blob-2"
          color="lavender"
          size={130}
          delaySec={0.3}
          direction="down"
          opacity={0.35}
          className="-left-10 top-0"
        />
        <FloatingShape
          variant="circle"
          color="blush"
          size={44}
          delaySec={1.6}
          direction="up"
          opacity={0.4}
          className="right-8 top-6"
        />
      </div>
      <h1 className="relative z-10 font-heading text-3xl text-ink md:text-4xl">About</h1>
    </section>
  );
}

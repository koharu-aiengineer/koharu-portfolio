import { FloatingShape } from "@/components/ui/FloatingShape";
import { GreetingShape } from "@/components/ui/shapes";
import { CONTACT_GREETING } from "@/lib/constants";

export function ContactSection() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-cream-50 to-lavender-200 px-6 py-24 text-center">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <FloatingShape
          variant="blob-1"
          color="lavender"
          size={180}
          delaySec={0.6}
          direction="up"
          opacity={0.3}
          className="-left-16 bottom-0"
        />
        <FloatingShape
          variant="circle"
          color="cream"
          size={50}
          delaySec={1.8}
          direction="down"
          opacity={0.5}
          className="right-10 top-8"
        />
      </div>

      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 flex select-none items-center justify-center font-heading text-[4.5rem] font-bold leading-none text-transparent sm:text-[7rem] md:text-[9rem]"
        style={{ WebkitTextStroke: "1.5px var(--color-lavender-300)" }}
      >
        CONTACT
      </span>

      <div className="relative z-10">
        <GreetingShape className="mx-auto h-14 w-14 text-lavender-500" />
        <h2 className="mt-4 whitespace-nowrap font-heading text-lg text-ink sm:text-xl md:text-2xl">
          {CONTACT_GREETING}
        </h2>
      </div>
    </section>
  );
}

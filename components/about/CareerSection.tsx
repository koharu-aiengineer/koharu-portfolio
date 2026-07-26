import { CAREER_LINES } from "@/lib/constants";

export function CareerSection() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-12">
      <h2 className="text-center font-heading text-2xl text-ink md:text-3xl">経歴</h2>
      <div className="mt-6 space-y-4 font-medium leading-relaxed text-ink-muted">
        {CAREER_LINES.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </section>
  );
}

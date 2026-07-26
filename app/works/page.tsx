import { WorkCard } from "@/components/works/WorkCard";
import { WORKS } from "@/lib/works";

export default function WorksPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <div className="text-center">
        <h1 className="font-heading text-3xl text-ink md:text-4xl">Works</h1>
        <p className="mt-3 text-ink-muted">これまでに取り組んだ案件です。</p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {WORKS.map((work) => (
          <WorkCard key={work.slug} work={work} />
        ))}
      </div>
    </section>
  );
}

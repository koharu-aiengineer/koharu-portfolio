import Link from "next/link";
import { WorkCard } from "@/components/works/WorkCard";
import { WORKS } from "@/lib/works";
import { HOME_WORK_SLUGS } from "@/lib/constants";

export function WorksExcerptSection() {
  const featured = HOME_WORK_SLUGS.map((slug) =>
    WORKS.find((work) => work.slug === slug),
  ).filter((work) => work !== undefined);

  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <div className="text-center">
        <h2 className="font-heading text-2xl text-ink md:text-3xl">Works</h2>
        <p className="mt-3 text-ink-muted">取り組んできた案件の一部です。</p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((work) => (
          <WorkCard key={work.slug} work={work} />
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link
          href="/works"
          className="text-sm text-lavender-600 transition-colors hover:text-lavender-700"
        >
          Works一覧をもっと見る →
        </Link>
      </div>
    </section>
  );
}

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { WORKS, type Work } from "@/lib/works";
import { WORK_DETAILS } from "@/lib/work-details";
import { WorkGallery } from "@/components/works/WorkGallery";

function deliverableLabel(url: string): string {
  const match = url.match(/^https:\/\/github\.com\/(.+)$/);
  return match ? `GitHub: ${match[1]}` : "成果物を見る";
}

const STATUS_LABEL: Record<Work["status"], string> = {
  completed: "完了",
  "in-progress": "開発中",
};

const STATUS_CLASS: Record<Work["status"], string> = {
  completed: "bg-lavender-100 text-lavender-700",
  "in-progress": "bg-blush-400 text-white",
};

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const work = WORKS.find((w) => w.slug === slug);
  const detail = WORK_DETAILS[slug];

  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <Link
        href="/works"
        className="inline-flex items-center gap-1 text-sm text-lavender-600 transition-colors hover:text-lavender-700"
      >
        ← Works一覧へ戻る
      </Link>

      {!work ? (
        <div className="mt-8 rounded-2xl bg-cream-50 p-8 text-center text-ink-muted">
          <h1 className="font-heading text-2xl text-ink">Work not found</h1>
        </div>
      ) : (
        <>
          <div className="mt-8 flex flex-wrap items-start justify-between gap-4">
            <h1 className="font-heading text-3xl text-ink md:text-4xl">{work.title}</h1>
            <span
              className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium ${STATUS_CLASS[work.status]}`}
            >
              {STATUS_LABEL[work.status]}
            </span>
          </div>

          <WorkGallery main={work.images.main} subs={work.images.subs} title={work.title} />

          {!detail ? (
            <div className="mt-8 rounded-2xl bg-cream-50 p-8 text-center text-ink-muted">
              <p>{work.summary}</p>
              <p className="mt-4">詳細ページは準備中です。</p>
            </div>
          ) : (
            <div className="mt-8 space-y-10">
              <section>
                <h2 className="font-heading text-xl text-ink">概要</h2>
                <p className="mt-3 leading-relaxed text-ink-muted">{detail.overview}</p>
              </section>

              <section>
                <h2 className="font-heading text-xl text-ink">設計・技術選定のポイント</h2>
                <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-ink-muted">
                  {detail.designPoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </section>

              {detail.challenge && (
                <section>
                  <h2 className="font-heading text-xl text-ink">課題・要件</h2>
                  <p className="mt-3 leading-relaxed text-ink-muted">{detail.challenge}</p>
                </section>
              )}

              {detail.implementationNotes && (
                <section>
                  <h2 className="font-heading text-xl text-ink">実装で工夫した点</h2>
                  <p className="mt-3 leading-relaxed text-ink-muted">
                    {detail.implementationNotes}
                  </p>
                </section>
              )}

              {detail.roadmap && (
                <section>
                  <h2 className="font-heading text-xl text-ink">今後のロードマップ</h2>
                  <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-ink-muted">
                    {detail.roadmap.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              )}

              <section>
                <h2 className="font-heading text-xl text-ink">使用技術</h2>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {work.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-lavender-50 px-3 py-1 text-xs text-lavender-700"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                {detail.deliverableUrl && (
                  <a
                    href={detail.deliverableUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm text-lavender-600 hover:underline"
                  >
                    {deliverableLabel(detail.deliverableUrl)}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </section>
            </div>
          )}
        </>
      )}
    </section>
  );
}

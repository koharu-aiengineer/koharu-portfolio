import Link from "next/link";
import type { Work } from "@/lib/works";
import { WorkThumbnail } from "./WorkThumbnail";

const STATUS_LABEL: Record<Work["status"], string> = {
  completed: "完了",
  "in-progress": "開発中",
};

const STATUS_CLASS: Record<Work["status"], string> = {
  completed: "bg-lavender-100 text-lavender-700",
  "in-progress": "bg-blush-400 text-white",
};

export function WorkCard({ work }: { work: Work }) {
  return (
    <Link
      href={`/works/${work.slug}`}
      className="group block overflow-hidden rounded-2xl bg-cream-50 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <WorkThumbnail src={work.images.main} alt={work.images.mainMeta?.alt ?? work.title} />
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-heading text-lg font-bold text-ink">{work.title}</h3>
          <span
            className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium ${STATUS_CLASS[work.status]}`}
          >
            {STATUS_LABEL[work.status]}
          </span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">{work.summary}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {work.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-lavender-50 px-3 py-1 text-xs text-lavender-700"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}

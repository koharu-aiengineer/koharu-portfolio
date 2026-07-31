import Image from "next/image";
import { CAREER_LINES, FEELINGS_LINES, SITE_NAME, VALUES } from "@/lib/constants";

const PROFILE_SECTIONS = [
  { title: "きっかけ", lines: CAREER_LINES },
  { title: "大切にしていること", lines: VALUES.map((value) => value.body) },
  { title: "ものづくりへの想い", lines: FEELINGS_LINES },
];

export function ProfileSection() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-12">
      <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
        <div>
          <p className="font-heading text-sm uppercase tracking-[0.2em] text-lavender-600">
            {SITE_NAME}
          </p>
          <h2 className="mt-2 font-heading text-3xl text-ink md:text-4xl">{SITE_NAME}</h2>
          <div className="mt-8 space-y-6">
            {PROFILE_SECTIONS.map((section) => (
              <div key={section.title}>
                <h3 className="font-heading text-base font-bold text-ink">{section.title}</h3>
                <div className="mt-2 space-y-2 font-medium leading-relaxed text-ink-muted">
                  {section.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-64 shrink-0 drop-shadow-lg md:w-80">
          {/* Same organic silhouette as FloatingShape's blob-1, scaled up to
              read as a frame rather than a small decoration, so the profile
              illustration crops like the site's floating shapes instead of a
              plain circle. */}
          <svg width="0" height="0" className="absolute">
            <clipPath id="profile-blob" clipPathUnits="objectBoundingBox">
              <path
                d="M43.9,-56.3C56.7,-46.7,66.2,-32.4,70.6,-16.4C75,-0.4,74.3,17.3,66.7,31.4C59.1,45.5,44.6,55.9,29,62.1C13.4,68.3,-3.3,70.3,-19.6,66.7C-35.9,63.1,-51.8,53.9,-61.8,40C-71.8,26.1,-75.9,7.5,-73.3,-9.8C-70.7,-27.1,-61.4,-43.1,-48,-53C-34.6,-62.9,-17.3,-66.7,-0.2,-66.4C16.9,-66.1,33.8,-61.7,43.9,-56.3Z"
                transform="translate(0.5 0.5) scale(0.0095)"
              />
            </clipPath>
          </svg>
          <div
            className="relative h-full w-full overflow-hidden bg-cream-100"
            style={{ clipPath: "url(#profile-blob)" }}
          >
            <Image
              src="/images/about/profile-icon.png"
              alt={`${SITE_NAME}のプロフィールイラスト`}
              fill
              sizes="(min-width: 768px) 320px, 256px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

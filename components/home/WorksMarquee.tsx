import Link from "next/link";
import Image from "next/image";
import { WORKS } from "@/lib/works";

const MARQUEE_ITEMS = WORKS.map((work) => ({
  slug: work.slug,
  title: work.title,
  src: work.images.main,
}));

// Fades the marquee out at both edges so cards appear to drift in/out of
// view rather than being clipped abruptly. Written as inline style (not a
// Tailwind mask-* utility) so both the standard and -webkit- prefixed
// properties are set together.
const EDGE_FADE_MASK: React.CSSProperties = {
  WebkitMaskImage:
    "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
  maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
};

function MarqueeTrackItems({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <>
      {MARQUEE_ITEMS.map((item) => (
        <Link
          key={item.slug}
          href={`/works/${item.slug}`}
          aria-hidden={ariaHidden}
          tabIndex={ariaHidden ? -1 : undefined}
          className="group/item relative mr-6 block h-[180px] w-[280px] shrink-0 overflow-hidden rounded-2xl border border-lavender-200 bg-cream-50 shadow-md"
        >
          {/* browser-window chrome: gives every screenshot a shared frame
              regardless of the source app's own colors */}
          <div className="flex h-7 items-center gap-1.5 border-b border-lavender-200 bg-cream-100 px-3">
            <span className="h-2 w-2 rounded-full bg-blush-300" />
            <span className="h-2 w-2 rounded-full bg-lavender-300" />
            <span className="h-2 w-2 rounded-full bg-cream-300" />
          </div>
          <div className="relative h-[152px] w-full">
            <Image
              src={item.src}
              alt={item.title}
              fill
              sizes="280px"
              className="object-cover transition-transform duration-300 group-hover/item:scale-105"
            />
          </div>
        </Link>
      ))}
    </>
  );
}

export function WorksMarquee() {
  return (
    <div className="group/marquee overflow-hidden py-4" style={EDGE_FADE_MASK}>
      <div className="flex w-max animate-marquee group-hover/marquee:[animation-play-state:paused] motion-reduce:animate-none">
        <MarqueeTrackItems />
        <MarqueeTrackItems ariaHidden />
      </div>
    </div>
  );
}

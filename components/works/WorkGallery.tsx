"use client";

import { useState } from "react";
import Image from "next/image";
import { ZoomIn } from "lucide-react";
import type { WorkImageMeta } from "@/lib/works";
import { ImageLightbox, type LightboxImage } from "./ImageLightbox";

type WorkGalleryProps = {
  main: string;
  subs: string[];
  title: string;
  mainMeta?: WorkImageMeta;
  subsMeta?: WorkImageMeta[];
};

// Shown in the corner at all times (so touch devices, which never see a
// hover state, still get the cue) and brightened further on hover/focus.
function ZoomBadge() {
  return (
    <span className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-ink/60 px-2.5 py-1.5 text-xs text-cream-50 backdrop-blur-sm transition-colors group-hover:bg-ink/80">
      <ZoomIn size={14} />
    </span>
  );
}

export function WorkGallery({ main, subs, title, mainMeta, subsMeta }: WorkGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const images: LightboxImage[] = [
    { src: main, alt: mainMeta?.alt ?? title, caption: mainMeta?.caption },
    ...subs.map((src, i) => ({
      src,
      alt: subsMeta?.[i]?.alt ?? `${title} サブ画像${i + 1}`,
      caption: subsMeta?.[i]?.caption,
    })),
  ];
  const [mainImage, ...subImages] = images;

  return (
    <>
      <figure className="mt-8">
        <button
          onClick={() => setLightboxIndex(0)}
          aria-label={`${mainImage.caption ?? `${title} のメイン画像`}を拡大表示`}
          className="group relative block aspect-[16/9] w-full cursor-zoom-in overflow-hidden rounded-2xl bg-cream-200"
        >
          <Image
            src={mainImage.src}
            alt={mainImage.alt}
            fill
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            priority
          />
          <ZoomBadge />
        </button>
        {mainImage.caption && (
          <figcaption className="mt-2 text-center text-sm text-ink-muted">
            {mainImage.caption}
          </figcaption>
        )}
      </figure>

      {subImages.length > 0 && (
        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {subImages.map((image, i) => (
            <figure key={image.src}>
              <button
                onClick={() => setLightboxIndex(i + 1)}
                aria-label={`${image.caption ?? `${title} のサブ画像${i + 1}`}を拡大表示`}
                className="group relative block aspect-[4/3] w-full cursor-zoom-in overflow-hidden rounded-2xl bg-cream-200"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 640px) 33vw, 50vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <ZoomBadge />
              </button>
              {image.caption && (
                <figcaption className="mt-2 text-center text-xs leading-relaxed text-ink-muted">
                  {image.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      )}

      <ImageLightbox
        images={images}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onIndexChange={setLightboxIndex}
      />
    </>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { ImageLightbox, type LightboxImage } from "./ImageLightbox";

type WorkGalleryProps = {
  main: string;
  subs: string[];
  title: string;
};

export function WorkGallery({ main, subs, title }: WorkGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const images: LightboxImage[] = [
    { src: main, alt: title },
    ...subs.map((src, i) => ({ src, alt: `${title} サブ画像${i + 1}` })),
  ];

  return (
    <>
      <button
        onClick={() => setLightboxIndex(0)}
        aria-label={`${title} のメイン画像を拡大表示`}
        className="relative mt-8 block aspect-[16/9] w-full overflow-hidden rounded-2xl bg-cream-200"
      >
        <Image
          src={main}
          alt={title}
          fill
          sizes="(min-width: 768px) 768px, 100vw"
          className="object-cover"
          priority
        />
      </button>

      {subs.length > 0 && (
        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {subs.map((src, i) => (
            <button
              key={src}
              onClick={() => setLightboxIndex(i + 1)}
              aria-label={`${title} のサブ画像${i + 1}を拡大表示`}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-cream-200"
            >
              <Image
                src={src}
                alt={`${title} サブ画像${i + 1}`}
                fill
                sizes="(min-width: 640px) 33vw, 50vw"
                className="object-cover"
              />
            </button>
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

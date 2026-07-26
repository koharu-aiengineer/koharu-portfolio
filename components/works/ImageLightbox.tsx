"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export type LightboxImage = {
  src: string;
  alt: string;
};

type ImageLightboxProps = {
  images: LightboxImage[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (index: number) => void;
};

export function ImageLightbox({ images, index, onClose, onIndexChange }: ImageLightboxProps) {
  const isOpen = index !== null;
  const hasMultiple = images.length > 1;

  const goPrev = useCallback(() => {
    if (index === null) return;
    onIndexChange((index - 1 + images.length) % images.length);
  }, [index, images.length, onIndexChange]);

  const goNext = useCallback(() => {
    if (index === null) return;
    onIndexChange((index + 1) % images.length);
  }, [index, images.length, onIndexChange]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose, goPrev, goNext]);

  const current = index !== null ? images[index] : null;

  return (
    <AnimatePresence>
      {isOpen && current && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/80 p-6 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <button
            onClick={onClose}
            aria-label="閉じる"
            className="absolute right-5 top-5 rounded-full p-2 text-cream-50 transition-colors hover:bg-cream-50/20"
          >
            <X size={28} />
          </button>

          {hasMultiple && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              aria-label="前の画像"
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full p-2 text-cream-50 transition-colors hover:bg-cream-50/20 sm:left-5"
            >
              <ChevronLeft size={32} />
            </button>
          )}

          <motion.div
            key={current.src}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="relative h-[80vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={current.src}
              alt={current.alt}
              fill
              sizes="90vw"
              className="rounded-2xl object-contain"
            />
          </motion.div>

          {hasMultiple && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              aria-label="次の画像"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-2 text-cream-50 transition-colors hover:bg-cream-50/20 sm:right-5"
            >
              <ChevronRight size={32} />
            </button>
          )}

          {hasMultiple && (
            <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-sm text-cream-50">
              {index + 1} / {images.length}
            </p>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

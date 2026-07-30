import Image from "next/image";

type WorkThumbnailProps = {
  src: string;
  alt: string;
};

export function WorkThumbnail({ src, alt }: WorkThumbnailProps) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl bg-cream-200">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover"
      />
    </div>
  );
}

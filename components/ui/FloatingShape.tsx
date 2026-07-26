import type { ComponentType } from "react";
import {
  BlobShape1,
  BlobShape2,
  CircleShape,
  WaveShape,
  LightbulbShape,
  StarShape,
} from "./shapes";

type Variant = "blob-1" | "blob-2" | "circle" | "wave" | "lightbulb" | "star";
type ShapeColor = "lavender" | "cream" | "blush";

const shapeMap: Record<Variant, ComponentType<{ className?: string }>> = {
  "blob-1": BlobShape1,
  "blob-2": BlobShape2,
  circle: CircleShape,
  wave: WaveShape,
  lightbulb: LightbulbShape,
  star: StarShape,
};

// Tailwind's compiler needs statically-written class names — never build these via string interpolation.
const colorClassMap: Record<ShapeColor, string> = {
  lavender: "text-lavender-300",
  cream: "text-cream-300",
  blush: "text-blush-400",
};

type FloatingShapeProps = {
  variant: Variant;
  color?: ShapeColor;
  size?: number;
  delaySec?: number;
  durationSec?: number;
  direction?: "up" | "down";
  opacity?: number;
  className?: string;
};

export function FloatingShape({
  variant,
  color = "lavender",
  size = 160,
  delaySec = 0,
  durationSec = 8,
  direction = "up",
  opacity = 0.6,
  className = "",
}: FloatingShapeProps) {
  const Shape = shapeMap[variant];
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute motion-reduce:animate-none ${
        direction === "up" ? "animate-float-slow" : "animate-float-slow-reverse"
      } ${className}`}
      style={{
        width: size,
        height: size,
        animationDelay: `${delaySec}s`,
        animationDuration: `${durationSec}s`,
        opacity,
      }}
    >
      <Shape className={`h-full w-full ${colorClassMap[color]}`} />
    </div>
  );
}

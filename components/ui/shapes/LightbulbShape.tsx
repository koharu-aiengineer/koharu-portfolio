export function LightbulbShape({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" aria-hidden="true">
      <path
        d="M100 28 C132 28 158 54 158 86 C158 106 148 118 137 132 C130 141 126 149 126 160 H74 C74 149 70 141 63 132 C52 118 42 106 42 86 C42 54 68 28 100 28 Z"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M80 176 H120" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
      <path
        d="M88 96 L100 78 L112 96"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M100 78 V128" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
    </svg>
  );
}

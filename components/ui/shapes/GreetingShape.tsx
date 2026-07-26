export function GreetingShape({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" aria-hidden="true">
      <path
        d="M40 50 H150 a20 20 0 0 1 20 20 V130 a20 20 0 0 1 -20 20 H95 L65 178 V150 H40 a20 20 0 0 1 -20 -20 V70 a20 20 0 0 1 20 -20 Z"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M100 112 C84 96 62 96 62 76 C62 62 77 56 88 68 L100 81 L112 68 C123 56 138 62 138 76 C138 96 116 96 100 112 Z"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

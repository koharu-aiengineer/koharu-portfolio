export function StarShape({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" aria-hidden="true">
      <path
        d="M100 20 C104 70 130 96 180 100 C130 104 104 130 100 180 C96 130 70 104 20 100 C70 96 96 70 100 20 Z"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

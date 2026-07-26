export function WaveShape({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 100" className={className} fill="none" aria-hidden="true">
      <path
        d="M0,50 C40,10 80,10 120,50 C160,90 200,90 240,50 C260,30 280,30 300,50"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
      />
    </svg>
  );
}

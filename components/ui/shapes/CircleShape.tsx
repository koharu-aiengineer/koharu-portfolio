export function CircleShape({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor" aria-hidden="true">
      <circle cx="50" cy="50" r="46" />
    </svg>
  );
}

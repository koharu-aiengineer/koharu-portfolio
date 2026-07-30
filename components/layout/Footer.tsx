import Link from "next/link";
import { NAV_ITEMS, SITE_NAME } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-lavender-100 bg-cream-50 px-6 py-10 text-center text-sm text-ink-muted">
      <p className="font-heading text-base text-ink">{SITE_NAME}</p>
      <nav className="mt-3 flex justify-center gap-6">
        {NAV_ITEMS.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <p className="mt-6">&copy; {new Date().getFullYear()} {SITE_NAME}</p>
    </footer>
  );
}

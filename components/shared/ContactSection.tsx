"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { FloatingShape } from "@/components/ui/FloatingShape";
import { GreetingShape } from "@/components/ui/shapes";
import { CONTACT_EMAIL, CONTACT_GREETING, CONTACT_GUIDE } from "@/lib/constants";

export function ContactSection() {
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopyState("copied");
    } catch {
      setCopyState("failed");
    }
    setTimeout(() => setCopyState("idle"), 2000);
  };

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-cream-50 to-lavender-200 px-6 py-24 text-center">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <FloatingShape
          variant="blob-1"
          color="lavender"
          size={180}
          delaySec={0.6}
          direction="up"
          opacity={0.3}
          className="-left-16 bottom-0"
        />
        <FloatingShape
          variant="circle"
          color="cream"
          size={50}
          delaySec={1.8}
          direction="down"
          opacity={0.5}
          className="right-10 top-8"
        />
      </div>

      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 flex select-none items-center justify-center font-heading text-[4.5rem] font-bold leading-none text-transparent sm:text-[7rem] md:text-[9rem]"
        style={{ WebkitTextStroke: "1.5px var(--color-lavender-300)" }}
      >
        CONTACT
      </span>

      <div className="relative z-10">
        <GreetingShape className="mx-auto h-14 w-14 text-lavender-500" />
        <h2 className="mt-4 whitespace-nowrap font-heading text-lg text-ink sm:text-xl md:text-2xl">
          {CONTACT_GREETING}
        </h2>
      </div>

      <div className="relative z-10 mx-auto max-w-md">
        <p className="mt-3 text-ink-muted">{CONTACT_GUIDE}</p>

        <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-lavender-300 bg-cream-50 px-6 py-4">
          <span className="font-medium text-ink">{CONTACT_EMAIL}</span>
          <button
            onClick={handleCopy}
            aria-label="メールアドレスをコピー"
            className="rounded-full p-1.5 text-lavender-600 transition-colors hover:bg-lavender-100"
          >
            {copyState === "copied" ? (
              <Check className="h-4 w-4" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </button>
        </div>
        {copyState === "copied" && (
          <p className="mt-2 text-xs text-lavender-600">コピーしました</p>
        )}
        {copyState === "failed" && (
          <p className="mt-2 text-xs text-blush-400">
            コピーに失敗しました。手動で選択してください
          </p>
        )}
      </div>
    </section>
  );
}

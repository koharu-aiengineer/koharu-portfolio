import { VALUES } from "@/lib/constants";

export function ValuesSection() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-12">
      <h2 className="text-center font-heading text-2xl text-ink md:text-3xl">
        大切にしていること
      </h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {VALUES.map((value) => (
          <div key={value.title} className="rounded-2xl bg-cream-50 p-6">
            <h3 className="font-heading text-lg font-bold text-ink">{value.title}</h3>
            <p className="mt-3 font-medium leading-relaxed text-ink-muted">{value.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

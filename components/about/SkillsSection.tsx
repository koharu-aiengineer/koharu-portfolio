import { SKILLS } from "@/lib/constants";

export function SkillsSection() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-12">
      <h2 className="text-center font-heading text-2xl text-ink md:text-3xl">
        使用技術・スキル
      </h2>
      <ul className="mt-6 flex flex-wrap justify-center gap-2">
        {SKILLS.map((skill) => (
          <li
            key={skill}
            className="rounded-full bg-lavender-50 px-3 py-1 text-xs text-lavender-700"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

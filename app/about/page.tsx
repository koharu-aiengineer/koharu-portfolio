import { AboutHero } from "@/components/about/AboutHero";
import { ProfileSection } from "@/components/about/ProfileSection";
import { ValuesSection } from "@/components/about/ValuesSection";
import { SkillsSection } from "@/components/about/SkillsSection";
import { ContactSection } from "@/components/shared/ContactSection";
import { FloatingShape } from "@/components/ui/FloatingShape";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <div className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <FloatingShape
            variant="wave"
            color="lavender"
            size={200}
            opacity={0.25}
            direction="up"
            delaySec={0.5}
            className="-left-12 top-24"
          />
          <FloatingShape
            variant="circle"
            color="blush"
            size={44}
            opacity={0.3}
            direction="down"
            delaySec={1.8}
            className="-right-4 bottom-16"
          />
        </div>
        <ProfileSection />
        <ValuesSection />
      </div>
      <SkillsSection />
      <ContactSection />
    </>
  );
}

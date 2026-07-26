import { HeroSection } from "@/components/home/HeroSection";
import { WorksMarquee } from "@/components/home/WorksMarquee";
import { IntroSection } from "@/components/home/IntroSection";
import { WorksExcerptSection } from "@/components/home/WorksExcerptSection";
import { AboutExcerptSection } from "@/components/home/AboutExcerptSection";
import { ContactSection } from "@/components/shared/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WorksMarquee />
      <IntroSection />
      <WorksExcerptSection />
      <AboutExcerptSection />
      <ContactSection />
    </>
  );
}

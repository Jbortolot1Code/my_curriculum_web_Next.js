import { LanguageProvider } from "@/contexts/LanguageContext";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { AboutSection } from "@/components/sections/AboutSection";
import { CertificatesSection } from "@/components/sections/CertificatesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ScrollFadeSection } from "@/components/ui/ScrollFadeSection";
import { StickyHeroSection } from "@/components/ui/StickyHeroSection";

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-[#0c1220] text-white">
        <Navbar />
        <StickyHeroSection>
          <HeroSection />
        </StickyHeroSection>
        <ScrollFadeSection variant="late" className="relative z-10"><AboutSection /></ScrollFadeSection>
        <ScrollFadeSection variant="late"><ExperienceSection /></ScrollFadeSection>
        <ScrollFadeSection variant="late"><ProjectsSection /></ScrollFadeSection>
        <ScrollFadeSection variant="late"><SkillsSection /></ScrollFadeSection>
        <ScrollFadeSection variant="late"><CertificatesSection /></ScrollFadeSection>
        <ContactSection />
        <Footer />
      </main>
    </LanguageProvider>
  );
}

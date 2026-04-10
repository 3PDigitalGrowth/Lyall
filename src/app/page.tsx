import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { CredentialsSection } from "@/components/CredentialsSection";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { InsightsSection } from "@/components/InsightsSection";
import { Navigation } from "@/components/Navigation";
import { RoutingSection } from "@/components/RoutingSection";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ExpertiseSection />
        <CredentialsSection />
        <InsightsSection />
        <RoutingSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

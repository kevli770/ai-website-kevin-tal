import { HeroSection } from "@/components/homepage/hero-section";
import { ClientLogosSection } from "@/components/homepage/client-logos-section";
import { ProblemSection } from "@/components/homepage/problem-section";
import { AboutSection } from "@/components/homepage/about-section";
import { ValuePropositionSection } from "@/components/homepage/value-proposition-section";
import { ServicesSection } from "@/components/homepage/services-section";
import { WorkshopsSection } from "@/components/homepage/workshops-section";
import { CaseStudySection } from "@/components/homepage/case-study-section";
import { FAQSection } from "@/components/homepage/faq-section";
import { ContactFormSection } from "@/components/homepage/contact-form-section";
import { Navigation } from "@/components/shared/navigation";
import { Footer } from "@/components/shared/footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16">
        <HeroSection />
        <ClientLogosSection />
        <ProblemSection />
        <AboutSection />
        <ValuePropositionSection />
        <ServicesSection />
        <WorkshopsSection />
        <CaseStudySection />
        <FAQSection />
        <ContactFormSection />
      </main>
      <Footer />
    </>
  );
}

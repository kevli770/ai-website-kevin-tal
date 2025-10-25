import { HeroSection } from "@/components/homepage/hero-section";
import { StatsSection } from "@/components/homepage/stats-section";
import { ProblemSection } from "@/components/homepage/problem-section";
import { ValuePropositionSection } from "@/components/homepage/value-proposition-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <ProblemSection />
      <ValuePropositionSection />

      {/* More sections coming soon... */}
      <div className="py-20 text-center text-muted-foreground">
        <p>סקשנים נוספים בפיתוח...</p>
      </div>
    </main>
  );
}

import { SectionContainer } from "@/components/shared/section-container";

const stats = [
  {
    number: "100+",
    label: "ארגונים",
    description: "שדרגו את הדרך שבה הם עובדים עם AI",
  },
  {
    number: "10,000+",
    label: "תלמידים",
    description: "רכשו את הקורסים והדרכות AI",
  },
];

export function StatsSection() {
  return (
    <SectionContainer spacing="md" className="border-y border-border/50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="text-center space-y-3 p-8 rounded-lg glass hover:scale-105 transition-transform"
          >
            <div className="text-5xl md:text-6xl lg:text-7xl font-bold gradient-text">
              {stat.number}
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
              {stat.label}
            </h3>
            <p className="text-lg text-muted-foreground max-w-xs mx-auto">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}

"use client";

import { SectionContainer } from "@/components/shared/section-container";
import { CTAButton } from "@/components/shared/cta-button";
import { ImagePlaceholder } from "@/components/shared/image-placeholder";
import { Clock, Users } from "lucide-react";
import Image from "next/image";

const workshops = [
  {
    title: "GenAI למנהלים והנהלות",
    duration: "חצי יום",
    participants: "10-20 מנהלים",
    topics: ["אסטרטגיית AI", "כלי GenAI למנהלים", "יצירת תוכן אוטומטי"],
    imageLabel: "מנהלים לומדים GenAI",
    imageSrc: "/workshop-executives-genai.png",
  },
  {
    title: "יצירת תוכן ויזואלי עם AI",
    duration: "יום שלם",
    participants: "8-15 משווקים/מעצבים",
    topics: ["תמונות AI", "וידאו AI", "כלים ויזואליים"],
    imageLabel: "יצירת תכנים עם AI",
    imageSrc: "/workshop-visual-content.png",
  },
  {
    title: "אוטומציות No-Code עם AI",
    duration: "יומיים",
    participants: "6-12 אנליסטים",
    topics: ["בניית אוטומציות", "אינטגרציות", "זרימות עבודה"],
    imageLabel: "בניית אוטומציות ללא קוד",
    imageSrc: "/workshop-automation-nocode.png",
  },
  {
    title: "פיתוח אפליקציות AI",
    duration: "יום וחצי",
    participants: "5-10 product managers",
    topics: ["תכנון אפליקציית AI", "No-Code App Creation", "Vibe Coding"],
    imageLabel: "פיתוח אפליקציות AI",
    imageSrc: "/workshop-app-development.png",
  },
  {
    title: "AI ו-BI לאנליסטים",
    duration: "חצי יום",
    participants: "8-15 BI analysts",
    topics: ["AI עבור אנליטיקה", "דשבורדים AI", "תובנות אוטומטיות"],
    imageLabel: "AI לאנליטיקה ו-BI",
    imageSrc: "/workshop-ai-bi-analytics.png",
  },
  {
    title: "AI לחינוך ואקדמיה",
    duration: "יום שלם",
    participants: "מורים/מרצים",
    topics: ["כלי AI לחינוך", "יצירת תכנים לימודיים", "מעורבות תלמידים"],
    imageLabel: "AI בחינוך",
    imageSrc: "/workshop-ai-education.png",
  },
];

export function WorkshopsSection() {
  return (
    <SectionContainer spacing="md" variant="dark" id="workshops">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            הסדנאות והקורסים שלנו
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            למידה מעשית מותאמת לקהלים שונים - ממנהלים ועד מורים
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshops.map((workshop, index) => (
            <div
              key={index}
              className="glass rounded-xl overflow-hidden card-hover"
            >
              {workshop.imageSrc ? (
                <div className="relative aspect-video">
                  <Image
                    src={workshop.imageSrc}
                    alt={workshop.imageLabel}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              ) : (
                <ImagePlaceholder
                  aspectRatio="video"
                  label={workshop.imageLabel}
                  className="rounded-none"
                />
              )}

              <div className="p-6 space-y-3">
                <h3 className="text-2xl font-bold text-foreground">
                  {workshop.title}
                </h3>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{workshop.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-primary" />
                    <span>{workshop.participants}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-semibold text-foreground">נושאים:</p>
                  <div className="flex flex-wrap gap-2">
                    {workshop.topics.map((topic, topicIndex) => (
                      <span
                        key={topicIndex}
                        className="text-xs px-2 py-1 rounded bg-muted/50 text-foreground/70"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <CTAButton
                  href={`#contact`}
                  variant="outline"
                  size="default"
                  className="w-full"
                >
                  פרטים נוספים
                </CTAButton>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-8">
          <CTAButton href="#contact" variant="primary" size="lg">
            בואו נדבר על הסדנה המתאימה לארגון שלכם
          </CTAButton>
        </div>
      </div>
    </SectionContainer>
  );
}

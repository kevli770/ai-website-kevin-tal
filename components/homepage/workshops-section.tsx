"use client";

import { SectionContainer } from "@/components/shared/section-container";
import { CTAButton } from "@/components/shared/cta-button";
import { ImagePlaceholder } from "@/components/shared/image-placeholder";
import { Clock, Users } from "lucide-react";

const workshops = [
  {
    title: "ChatGPT למנהלים",
    duration: "חצי יום",
    participants: "10-20 מנהלים",
    topics: ["prompt engineering", "decision support", "report generation"],
    imageLabel: "מנהל משתמש ב-AI",
  },
  {
    title: "Midjourney ליצירת תכנים",
    duration: "יום שלם",
    participants: "8-15 משווקים/מעצבים",
    topics: ["prompt crafting", "brand consistency", "commercial usage"],
    imageLabel: "יצירת תכנים עם AI",
  },
  {
    title: "Make.com Automation Workshop",
    duration: "יומיים",
    participants: "6-12 טכנאים/אנליסטים",
    topics: ["workflow design", "API integration", "error handling"],
    imageLabel: "תרשים זרימת אוטומציה",
  },
  {
    title: "Custom GPT Development",
    duration: "יום וחצי",
    participants: "5-10 product managers",
    topics: ["GPT design", "knowledge bases", "actions/APIs"],
    imageLabel: "ממשק Custom GPT",
  },
  {
    title: "AI for BI Professionals",
    duration: "חצי יום",
    participants: "8-15 BI analysts",
    topics: ["AI-enhanced analytics", "Qlik Sense + AI", "automated insights"],
    imageLabel: "דשבורד BI",
  },
  {
    title: "Executive AI Briefing",
    duration: "3 שעות",
    participants: "C-level executives",
    topics: ["AI strategy", "competitive landscape", "risk management"],
    imageLabel: "חדר ישיבות הנהלה",
  },
];

export function WorkshopsSection() {
  return (
    <SectionContainer spacing="xl" id="workshops">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            הסדנאות הפופולריות שלנו
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            למידה מעשית שמתחילה להניב תוצאות כבר באותו יום
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshops.map((workshop, index) => (
            <div
              key={index}
              className="glass rounded-xl overflow-hidden card-hover"
            >
              <ImagePlaceholder
                aspectRatio="video"
                label={workshop.imageLabel}
                className="rounded-none"
              />

              <div className="p-6 space-y-4">
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
                  href={`/workshops#${workshop.title.toLowerCase().replace(/\s+/g, '-')}`}
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
          <CTAButton href="/workshops" variant="primary" size="lg">
            צפו בכל הסדנאות שלנו
          </CTAButton>
        </div>
      </div>
    </SectionContainer>
  );
}

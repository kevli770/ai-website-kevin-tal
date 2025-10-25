"use client";

import { CTAButton } from "@/components/shared/cta-button";
import { SectionContainer } from "@/components/shared/section-container";
import { Check } from "lucide-react";

export function HeroSection() {
  return (
    <SectionContainer
      variant="gradient"
      spacing="xl"
      className="min-h-screen flex items-center justify-center"
      id="hero"
    >
      <div className="text-center max-w-5xl mx-auto space-y-8">
        {/* Trust badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-foreground/90">
          <Check className="h-4 w-4 text-primary" />
          <span>ניסיון מוכח עם אלפי תלמידים וארגונים מובילים</span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          האם הארגון שלך כבר{" "}
          <span className="gradient-text">עובד עם AI</span>
          <br />
          או שהוא רק{" "}
          <span className="text-muted-foreground">מדבר על AI</span>?
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl lg:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
          אני טל חקוקי, מנהל תחום GenAI במרכז כנרת לחדשנות.
          <br />
          אני בונה אצלך{" "}
          <span className="text-primary font-semibold">
            יכולת עבודה עם בינה מלאכותית
          </span>{" "}
          שמייצרת חיסכון בזמן, שיפור בתפוקה והורדת עלויות.
          <br />
          <span className="text-primary font-bold text-2xl">בתוך 90 יום.</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <CTAButton
            href="#contact"
            variant="primary"
            size="xl"
          >
            שריין פגישת הנהלה
          </CTAButton>

          <CTAButton
            href="#courses"
            variant="outline"
            size="lg"
            showIcon={false}
          >
            קורסים דיגיטליים
          </CTAButton>
        </div>
      </div>
    </SectionContainer>
  );
}

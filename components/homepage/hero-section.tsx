"use client";

import { CTAButton } from "@/components/shared/cta-button";
import { SectionContainer } from "@/components/shared/section-container";
import Image from "next/image";
import { Check, Users, Building2, Rocket } from "lucide-react";

export function HeroSection() {
  return (
    <SectionContainer
      variant="gradient"
      spacing="xl"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24"
      id="hero"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 gradient-radial opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Images at Top - Side by Side, Equal Size */}
        <div className="flex justify-center items-center gap-6 mb-12">
          <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-primary/20 border-2 border-primary/20 w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56">
            <Image
              src="/kevin.webp"
              alt="קווין ליאקס - מומחה AI ו-BI"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-primary/20 border-2 border-primary/20 w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56">
            <Image
              src="/tal.jpg"
              alt="טל חקוקי - מנהיג AI אסטרטגי"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Text Content - Centered */}
        <div className="max-w-4xl mx-auto space-y-8 text-center">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-foreground">
            <Check className="h-4 w-4 text-primary" />
            <span className="font-medium">ניסיון מוכח עם 10,000+ תלמידים ו-100+ ארגונים</span>
          </div>

          {/* Direct Response Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-foreground">
            איך להטמיע AI בארגון{" "}
            <span className="text-primary">בלי לבזבז מיליונים</span>
            <br />
            גם אם אין לכם צוות טכני
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto">
            קווין ליאקס וטל חקוקי - מומחי AI ארגוני שהופכים AI מתיאוריה למציאות
            מדידה תוך 90 יום
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <CTAButton
              href="#contact"
              variant="primary"
              size="xl"
            >
              קבעו פגישת אסטרטגיה חינם
            </CTAButton>

            <CTAButton
              href="#services"
              variant="outline"
              size="xl"
              showIcon={false}
            >
              למד עוד על השירותים שלנו
            </CTAButton>
          </div>
        </div>

        {/* Bottom Section - Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
          <div className="glass rounded-lg p-6 text-center">
            <div className="flex items-center justify-center gap-2 text-primary mb-2">
              <Users className="w-6 h-6" />
            </div>
            <div className="text-3xl font-bold text-foreground">10,000+</div>
            <div className="text-sm text-muted-foreground">תלמידים הוכשרו</div>
          </div>
          <div className="glass rounded-lg p-6 text-center">
            <div className="flex items-center justify-center gap-2 text-primary mb-2">
              <Building2 className="w-6 h-6" />
            </div>
            <div className="text-3xl font-bold text-foreground">100+</div>
            <div className="text-sm text-muted-foreground">ארגונים</div>
          </div>
          <div className="glass rounded-lg p-6 text-center">
            <div className="flex items-center justify-center gap-2 text-primary mb-2">
              <Rocket className="w-6 h-6" />
            </div>
            <div className="text-3xl font-bold text-foreground">500+</div>
            <div className="text-sm text-muted-foreground">פרויקטים מוצלחים</div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

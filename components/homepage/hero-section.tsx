"use client";

import { CTAButton } from "@/components/shared/cta-button";
import { SectionContainer } from "@/components/shared/section-container";
import { ImagePlaceholder } from "@/components/shared/image-placeholder";
import { Check, Users, Building2, Rocket } from "lucide-react";

export function HeroSection() {
  return (
    <SectionContainer
      variant="gradient"
      spacing="xl"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      id="hero"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 gradient-radial opacity-50" />

      <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        {/* Left Column - Content */}
        <div className="space-y-8 text-center lg:text-right">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-foreground">
            <Check className="h-4 w-4 text-primary" />
            <span className="font-medium">ניסיון מוכח עם אלפי תלמידים וארגונים מובילים</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
            מה-AI ל-ROI:{" "}
            <span className="text-primary">הפכנו AI מתיאוריה ליכולת ארגונית מדידה</span>
            {" "}תוך 90 יום
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
            קווין טל וטל חקוקי - מומחי AI ארגוני עם ניסיון מעשי בחברות Fortune 500 וסטארטאפים מובילים
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 py-4">
            <div className="glass rounded-lg p-4">
              <div className="flex items-center justify-center gap-2 text-primary mb-1">
                <Users className="w-5 h-5" />
              </div>
              <div className="text-2xl font-bold text-foreground">10,000+</div>
              <div className="text-sm text-muted-foreground">תלמידים הוכשרו</div>
            </div>
            <div className="glass rounded-lg p-4">
              <div className="flex items-center justify-center gap-2 text-primary mb-1">
                <Building2 className="w-5 h-5" />
              </div>
              <div className="text-2xl font-bold text-foreground">100+</div>
              <div className="text-sm text-muted-foreground">ארגונים</div>
            </div>
            <div className="glass rounded-lg p-4">
              <div className="flex items-center justify-center gap-2 text-primary mb-1">
                <Rocket className="w-5 h-5" />
              </div>
              <div className="text-2xl font-bold text-foreground">500+</div>
              <div className="text-sm text-muted-foreground">פרויקטים מוצלחים</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end items-center pt-4">
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

        {/* Right Column - Hero Image */}
        <div className="hidden lg:block">
          <ImagePlaceholder
            aspectRatio="portrait"
            label="תמונת Hero - קווין וטל עם רקע AI"
            className="rounded-2xl shadow-2xl shadow-primary/20"
          />
        </div>
      </div>
    </SectionContainer>
  );
}

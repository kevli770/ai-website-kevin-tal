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
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      id="hero"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 gradient-radial opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Top Section - Content + Images */}
        <div className="grid lg:grid-cols-[2fr_1fr] gap-12 items-center mb-12">
          {/* Left Column - Content */}
          <div className="space-y-8 text-center lg:text-right">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-foreground">
              <Check className="h-4 w-4 text-primary" />
              <span className="font-medium">ניסיון מוכח עם אלפי תלמידים וארגונים מובילים</span>
            </div>

            {/* Main heading - Shorter and catchier */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              <span className="text-primary">AI שעובד</span>
              <br />
              לא רק נשמע טוב
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              קווין ליאקס וטל חקוקי - מומחי AI ארגוני שהופכים AI מתיאוריה למציאות מדידה תוך 90 יום
            </p>

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

          {/* Right Column - Two Expert Images */}
          <div className="hidden lg:flex flex-col gap-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 border-2 border-primary/20">
              <Image
                src="/kevin.webp"
                alt="קווין ליאקס - מומחה AI ו-BI"
                width={400}
                height={400}
                className="object-cover w-full aspect-square"
                priority
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 border-2 border-primary/20">
              <Image
                src="/tal.jpg"
                alt="טל חקוקי - מנהיג AI אסטרטגי"
                width={400}
                height={400}
                className="object-cover w-full aspect-square"
                priority
              />
            </div>
          </div>
        </div>

        {/* Bottom Section - Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
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

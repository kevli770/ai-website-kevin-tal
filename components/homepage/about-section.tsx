"use client";

import { SectionContainer } from "@/components/shared/section-container";
import { ImagePlaceholder } from "@/components/shared/image-placeholder";
import { Bot, Zap, BarChart3, Sparkles, Target, Users } from "lucide-react";

export function AboutSection() {
  return (
    <SectionContainer spacing="xl" id="about">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            מי אנחנו? <span className="text-primary">הצוות שיוביל אתכם למהפכת ה-AI</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            שילוב ייחודי של יישום מעשי ואסטרטגיה ארגונית
          </p>
        </div>

        {/* Kevin Tal Card */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <ImagePlaceholder
              aspectRatio="square"
              label="תמונה מקצועית של קווין טל"
              className="rounded-2xl shadow-xl"
            />
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-2">קווין טל</h3>
              <p className="text-xl text-primary font-semibold">AI Implementation Expert</p>
            </div>

            <p className="text-lg text-foreground/80 leading-relaxed">
              Kevin is a hands-on AI implementation specialist who bridges the gap between AI
              potential and practical business results. With deep expertise spanning ChatGPT,
              Midjourney, Make.com automation, Custom GPT development, and BI platforms like
              Qlik Sense, Kevin transforms abstract AI concepts into concrete workflows that
              save time and money.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              He's known for his ability to spot automation opportunities others miss and for
              creating solutions that teams actually want to use.
            </p>

            <div className="space-y-3">
              <p className="text-sm font-semibold text-foreground">תחומי התמחות:</p>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-foreground/80">
                  <Bot className="w-4 h-4 text-primary" />
                  <span className="text-sm">Custom GPT Development</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/80">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className="text-sm">Make.com Automation</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/80">
                  <BarChart3 className="w-4 h-4 text-primary" />
                  <span className="text-sm">BI & Analytics (Qlik Sense)</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/80">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-sm">Midjourney & Image AI</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tal Hakooki Card */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-2">טל חקוקי</h3>
              <p className="text-xl text-primary font-semibold">Strategic AI Leader</p>
            </div>

            <p className="text-lg text-foreground/80 leading-relaxed">
              Tal is a strategic AI leader who helps organizations navigate the complex
              landscape of AI adoption. As the Head of GenAI at the Kineret Innovation Center,
              Tal has guided dozens of companies through successful AI transformations.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              His approach combines strategic vision with practical implementation, ensuring AI
              initiatives align with business goals and deliver measurable ROI. Tal excels at
              securing stakeholder buy-in and creating sustainable AI capabilities within
              organizations.
            </p>

            <div className="space-y-3">
              <p className="text-sm font-semibold text-foreground">תחומי התמחות:</p>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-foreground/80">
                  <Target className="w-4 h-4 text-primary" />
                  <span className="text-sm">AI Strategy & Roadmapping</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/80">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-sm">Change Management</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/80">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-sm">GenAI Leadership</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/80">
                  <BarChart3 className="w-4 h-4 text-primary" />
                  <span className="text-sm">Innovation Program Design</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <ImagePlaceholder
              aspectRatio="square"
              label="תמונה מקצועית של טל חקוקי"
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

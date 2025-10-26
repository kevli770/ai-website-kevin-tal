"use client";

import { SectionContainer } from "@/components/shared/section-container";
import { ImagePlaceholder } from "@/components/shared/image-placeholder";
import { Quote, TrendingUp, Users, CheckCircle2 } from "lucide-react";

export function CaseStudySection() {
  return (
    <SectionContainer spacing="lg" variant="accent">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            סיפורי הצלחה מהשטח
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            כך עזרנו לחברות מובילות להפוך AI לחלק מה-DNA הארגוני
          </p>
        </div>

        {/* Featured Case: Kornit Digital */}
        <div className="glass rounded-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <ImagePlaceholder
                aspectRatio="square"
                label="משרדי Kornit Digital / תמונת צוות"
                className="rounded-none h-full"
              />
            </div>

            <div className="p-8 lg:p-12 space-y-6">
              <div className="flex items-start gap-3">
                <Quote className="w-8 h-8 text-primary shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Kornit Digital
                  </h3>
                  <p className="text-muted-foreground">Global Leader in Digital Textile Printing</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="glass rounded-lg p-4">
                  <p className="font-semibold text-primary mb-2">האתגר</p>
                  <p className="text-foreground/80">
                    צוות גלובלי של 300+ עובדים ללא סטנדרט משותף לשימוש ב-AI. כל מחלקה פעלה
                    בנפרד, ללא ידע משותף או best practices.
                  </p>
                </div>

                <div className="glass rounded-lg p-4">
                  <p className="font-semibold text-primary mb-2">הפתרון</p>
                  <p className="text-foreground/80">
                    תוכנית הדרכה מותאמת ב-3 שכבות: מנהלים, PM-ים, וצוותי R&D. כל קבוצה קיבלה
                    כלים מותאמים לצרכיה הספציפיים.
                  </p>
                </div>

                <div className="space-y-3">
                  <p className="font-semibold text-foreground">תוצאות:</p>
                  <div className="grid gap-3">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <TrendingUp className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">40% חיסכון בזמן</p>
                        <p className="text-sm text-muted-foreground">
                          כתיבת דוקומנטציה טכנית
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Users className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">25+ Custom GPTs</p>
                        <p className="text-sm text-muted-foreground">
                          פעילים בארגון במגוון תפקידים
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">85% אימוץ</p>
                        <p className="text-sm text-muted-foreground">
                          מהצוות משתמש ב-AI באופן שבועי
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <blockquote className="text-foreground/90 italic leading-relaxed">
                    "Kevin and Tal didn't just teach us about AI – they transformed how our
                    entire organization approaches work. The practical, hands-on approach meant
                    our team was seeing results from day one."
                  </blockquote>
                  <p className="text-sm text-muted-foreground mt-3">
                    – VP of Product, Kornit Digital
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

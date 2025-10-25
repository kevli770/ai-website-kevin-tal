"use client";

import { SectionContainer } from "@/components/shared/section-container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ImagePlaceholder } from "@/components/shared/image-placeholder";
import { Mail, Phone, Calendar } from "lucide-react";

export function ContactFormSection() {
  return (
    <SectionContainer spacing="lg" variant="gradient" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-3 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            בואו נתחיל לעבוד
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            מלאו את הפרטים ונחזור אליכם תוך 24 שעות
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="glass rounded-2xl p-8 space-y-6">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-foreground">
                    שם מלא *
                  </Label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="שם מלא"
                    required
                    className="text-right"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground">
                    טלפון *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="050-123-4567"
                    required
                    className="text-right"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-foreground">
                    שם החברה *
                  </Label>
                  <Input
                    id="company"
                    type="text"
                    placeholder="שם החברה"
                    required
                    className="text-right"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="orgSize" className="text-foreground">
                  גודל הארגון
                </Label>
                <select
                  id="orgSize"
                  className="w-full h-10 px-3 rounded-md bg-background border border-input text-foreground text-right"
                >
                  <option value="">בחר...</option>
                  <option value="1-10">1-10 עובדים</option>
                  <option value="11-50">11-50 עובדים</option>
                  <option value="51-200">51-200 עובדים</option>
                  <option value="201-500">201-500 עובדים</option>
                  <option value="500+">500+ עובדים</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label className="text-foreground">אני מעוניין ב... *</Label>
                <div className="space-y-2">
                  {[
                    "סדנאות והכשרות",
                    "ייעוץ ארגוני",
                    "תוכנית המאיץ (90 יום)",
                    "פגישת ייעוץ חינם",
                  ].map((option) => (
                    <label
                      key={option}
                      className="flex items-center gap-2 text-foreground/80 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-input"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground">
                  הודעה
                </Label>
                <Textarea
                  id="message"
                  placeholder="ספרו לנו קצת על הצרכים שלכם..."
                  rows={4}
                  className="text-right resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold"
              >
                שלחו בקשה
              </Button>
            </form>
          </div>

          {/* Contact Info & Image */}
          <div className="space-y-8">
            <ImagePlaceholder
              aspectRatio="video"
              label="תמונת צור קשר / שיתוף פעולה"
              className="rounded-2xl"
            />

            <div className="glass rounded-xl p-6 space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                דרכי התקשרות נוספות
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <a
                      href="mailto:contact@kevintal.ai"
                      className="text-primary hover:underline"
                    >
                      contact@kevintal.ai
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">טלפון</p>
                    <a
                      href="tel:054-123-4567"
                      className="text-primary hover:underline"
                    >
                      054-123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">קבעו פגישה ישירות</p>
                    <a
                      href="https://calendly.com/kevintal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      לחצו כאן ליומן שלנו
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

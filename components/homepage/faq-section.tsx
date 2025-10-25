"use client";

import { SectionContainer } from "@/components/shared/section-container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "האם צריך רקע טכני כדי ללמוד AI?",
    answer:
      "לא! הסדנאות שלנו מותאמות לכל רמה. רוב הכלים שאנחנו מלמדים (ChatGPT, Midjourney) פשוטים לשימוש ולא דורשים ידע בתכנות.",
  },
  {
    question: "כמה זמן לוקח לראות תוצאות?",
    answer:
      "תלוי בשירות: סדנאות מספקות value מיידי (אותו יום). פרויקטי ייעוץ - תוך 2-4 שבועות. תוכנית המאיץ - quick wins תוך 3 שבועות, שינוי מלא תוך 90 יום.",
  },
  {
    question: "מה ההבדל בינכם לקורסים אונליין?",
    answer:
      "אנחנו לא מלמדים תיאוריה כללית. אנחנו עובדים על הבעיות האמיתיות שלכם, עם הנתונים שלכם, ומשאירים אתכם עם פתרונות פעילים. זה ליווי, לא רק הדרכה.",
  },
  {
    question: "האם אתם עובדים עם חברות קטנות או רק ארגונים גדולים?",
    answer:
      "שניהם! יש לנו פתרונות מותאמים לסטארטאפים של 10 איש וגם לחברות של 500+ עובדים. השירות משתנה, התוצאות תמיד מדידות.",
  },
  {
    question: "האם AI יחליף את העובדים שלנו?",
    answer:
      "לא, אם תטמיעו אותו נכון. AI צריך להשלים את הצוות, לא להחליף אותו. המטרה שלנו: לגרום לעובדים שלכם לעשות עבודה מעניינת יותר, לא להחליף אותם.",
  },
  {
    question: "מה קורה אחרי שאתם מסיימים את הפרויקט?",
    answer:
      "אנחנו משאירים אתכם עם יכולות פנימיות: צוות מיומן, תיעוד מקיף, ופתרונות שאתם יכולים להמשיך לפתח בעצמכם. בנוסף, אנחנו זמינים לתמיכה שוטפת.",
  },
  {
    question: "כמה עולה לעבוד איתכם?",
    answer:
      "תלוי בהיקף: סדנה של יום אחד - החל מ-₪15,000. ייעוץ חודשי - ₪25,000-50,000. תוכנית המאיץ (90 יום) - החל מ-₪150,000. נשמח לבנות הצעה מותאמת.",
  },
  {
    question: "מה אם ננסה בעצמנו קודם?",
    answer:
      "מעולה! רוב הלקוחות שלנו ניסו לבד והבינו שחסר להם framework ו-accountability. אנחנו נשמח לתת לכם כיוון אפילו בשיחת ייעוץ חינם.",
  },
  {
    question: "איזה תעשיות אתם מכירים?",
    answer:
      "עבדנו עם: טק, תעשייה, פיננסים, שירותים מקצועיים, חינוך, בריאות. העקרונות של AI זהים, אבל אנחנו תמיד לומדים את הדומיין לפני שמתחילים.",
  },
  {
    question: "האם אתם נשארים מעורבים אחרי ההדרכה?",
    answer:
      "כן. לכל פרויקט יש תקופת תמיכה של לפחות 30 יום. בתוכנית המאיץ - 90 יום. אנחנו רוצים לוודא שהשינוי באמת נדבק.",
  },
];

export function FAQSection() {
  return (
    <SectionContainer spacing="lg" id="faq">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            שאלות נפוצות
          </h2>
          <p className="text-xl text-muted-foreground">
            התשובות לשאלות שכולם שואלים
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="glass rounded-lg px-6 border-none"
            >
              <AccordionTrigger className="text-right text-lg font-semibold text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-right text-foreground/80 leading-relaxed pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionContainer>
  );
}

# דף הבית - Homepage Design

## סקירה כללית
דף הבית הוא לב האתר - 7 סקשנים מרכזיים שמובילים את המבקר ממודעות לפעולה.

---

## סקשן 1: Hero Section
**מטרה**: לכידת תשומת לב מיידית + הצגת הערך המרכזי

**תוכן**:
- כותרת ראשית: "האם הארגון שלך כבר עובד עם AI או שהוא רק מדבר על AI?"
- תת-כותרת: "אני טל חקוקי, מנהל תחום GenAI במרכז כנרת לחדשנות. אני בונה אצלך יכולת עבודה עם בינה מלאכותית שמייצרת חיסכון בזמן, שיפור בתפוקה והורדת עלויות. בתוך 90 יום."
- תג אמון: "ניסיון מוכח עם אלפי תלמידים וארגונים מובילים" (עם אייקון ✓)
- 2 CTA buttons:
  - ראשי: "שריין פגישת הנהלה" (כחול, גדול)
  - משני: "קורסים דיגיטליים" (outline)

**עיצוב**:
- רקע: gradient כהה (navy → darker navy)
- טקסט: לבן עם highlight כחול על מילות מפתח
- אנימציה: fade-in + slide-up
- גובה: 100vh (full viewport)

**Patterns נדרשים**:
- `button-standard` - CTA ראשי
- `button-outline` - CTA משני
- Custom Hero wrapper

**Pattern browsing**:
- Buttons: https://www.kibo-ui.com/patterns/button

---

## סקשן 2: Stats / Social Proof קצר
**מטרה**: אמינות מיידית עם מספרים

**תוכן**:
- Grid של 2 stats cards:
  - "100+ ארגונים שדרגו את הדרך שבה הם עובדים עם AI"
  - "10,000+ תלמידים רכשו את הקורסים"

**עיצוב**:
- 2 עמודות responsive
- כל card: מספר גדול + תיאור
- רקע: שקוף/glass effect

**Patterns נדרשים**:
- `card-standard` (variation: stats/numbers)

**Pattern browsing**:
- Cards: https://www.kibo-ui.com/patterns/card

---

## סקשן 3: Problem Section - "אתה כבר שילמת ביוקר"
**מטרה**: יצירת חוסר נוחות + identification עם הכאב

**תוכן**:
- כותרת: "אתה כבר שילמת ביוקר על חוסר יעילות"
- רשימת כאבים (bullets):
  - עובדים משחיקים זמן על הכנת דוחות
  - מנהלים כותבים שוב ושוב את אותה המצגת
  - שיווק מייצר תוכן לא עקבי
  - ישיבות נסגרות בלי תיעוד
  - ידע שווה כסף הולך לאיבוד
- שאלה מאתגרת (bold): "כמה שעות עבודה שילמת החודש על משימות שאפשר להוריד ל-10 דקות?"

**עיצוב**:
- רשימה עם אייקונים (X או !)
- טקסט בולט לשאלה
- רקע: subtle gradient

**Patterns נדרשים**:
- Custom list component (נבנה ידנית)

---

## סקשן 4: Value Proposition - "שיטת היישום הארגוני"
**מטרה**: הצגת הפתרון - תהליך מובנה

**תוכן**:
- כותרת: "מה אני עושה בפועל בארגונים"
- תת-כותרת: "אני נכנס לארגון שלך לכשלושה חודשים. יחד אנחנו ממפים, מיישמים ומעבירים לבעלות פנימית."

- 3 Steps Cards:
  1. **זיהוי ערך**
     - מיפוי אי יעילות
     - רשימת מקרי שימוש ספציפיים
  2. **הפעלה**
     - בניית תהליכי עבודה עם AI
     - תיעוד + פרומפטים + אוטומציות
  3. **העברה לבעלות**
     - מדיניות שימוש בטוח
     - תוכנית המשך 90 יום

- CTA: "אני רוצה שיחה על יישום AI בארגון שלי"

**עיצוב**:
- 3 cards אופקיים/grid
- כל card: מספר גדול + כותרת + bullet points
- Progressive arrows/connectors בין steps
- רקע: כהה עם borders בכחול

**Patterns נדרשים**:
- `card-standard` (variation: process/steps) - x3
- `button-standard` - CTA

**Pattern browsing**:
- Cards: https://www.kibo-ui.com/patterns/card

---

## סקשן 5: Social Proof - "הוכחות מהשטח"
**מטרה**: אמינות עמוקה עם case studies

**תוכן**:
- כותרת: "מה השתנה אצל מנהלים שעבדו איתי"

- 3-4 Case Study Cards:
  1. **חברת תעשייה אנרגטית (Ormat)**
     - בעיה: הפקת דוחות הנהלה שעתיים לעובד
     - פתרון: פרומפטים קבועים + תיעוד
     - תוצאה: ירידה ל-15 דקות
  2. **ארגון ציבורי - תשתיות מים (IDE)**
     - בעיה: חשש משימוש ב-AI (רגולציה)
     - פתרון: מדיניות שימוש בטוח
     - תוצאה: עובדים משתמשים בבטחון
  3. **צוות שיווק בחברת טכנולוגיה**
     - בעיה: תלות בגרפיקאים חיצוניים
     - פתרון: סדנת יצירת תוכן
     - תוצאה: עצמאות + זמני תגובה מהירים

- Logo cloud: Ormat, Kornit Digital, IDE, צמח חברה, מועצות אזוריות

**עיצוב**:
- Grid של cards (2 cols desktop, 1 col mobile)
- כל card: לוגו חברה + quote/story + תוצאה מודגשת
- Logo cloud בתחתית

**Patterns נדרשים**:
- `card-standard` (variation: testimonial) - x3-4
- Custom logo grid

**Pattern browsing**:
- Cards: https://www.kibo-ui.com/patterns/card

---

## סקשן 6: Qualification - "למי אני מתאים ולמי לא"
**מטרה**: סינון לידים + positioning

**תוכן**:
- כותרת: "למי אני מתאים ולמי לא"

- 2 columns:
  **מתאים**:
  - ✓ ארגון שמבין שאי אפשר לעבוד ידנית כמו 2022
  - ✓ הנהלה שמבקשת תוצאה עסקית, לא מצגת "חדשנות"
  - ✓ צוות שמוכן לאתגר הרגלים ישנים

  **לא מתאים**:
  - ✗ ארגונים שמחפשים "הרצאת השראה" ליום כיף
  - ✗ הנהלה שמחפשת "לסמן וי" לוועד מנהלים
  - ✗ מי שמצפה לקסם בלי לשנות תהליך

- CTA: "אם אתה בצד הראשון, שריין פגישת הנהלה"

**עיצוב**:
- 2 columns (responsive stack)
- צד "מתאים": רקע ירוק בהיר, checkmarks
- צד "לא מתאים": רקע אדום בהיר, X icons
- CTA bold בתחתית

**Patterns נדרשים**:
- Custom comparison grid
- `button-standard` - CTA

---

## סקשן 7: FAQ
**מטרה**: טיפול בהתנגדויות אחרונות

**תוכן**:
- כותרת: "שאלות שאתה הולך לשאול אותי גם ככה"

- 3 שאלות ראשיות:
  1. **איך בינה מלאכותית עוזרת לי ברמה מדידה?**
     - תשובה: חיסכון בזמן (דוגמה: 2 שעות → 15 דקות)
  2. **כמה זה עולה לי?**
     - תשובה: פגישה ראשונה בתשלום, אחר כך החלטה על תהליך מלא
  3. **האם זה בטוח מבחינת מידע?**
     - תשובה: מדיניות שימוש מוגדרת לפני התחלה

**עיצוב**:
- Accordion style (expand/collapse)
- רקע: כהה, borders עדינים

**Patterns נדרשים**:
- `accordion-standard` - x3

**Pattern browsing**:
- Accordion: https://www.kibo-ui.com/patterns/accordion

---

## סקשן 8: Contact Form + Final CTA
**מטרה**: conversion - לכידת פרטים

**תוכן**:
- כותרת: "בוא נדבר על ה-AI בארגון שלך בצורה רצינית"

- טופס:
  - שם מלא
  - תפקיד
  - שם הארגון
  - אימייל
  - טלפון
  - "מה הכאב התפעולי הכי בוער אצלך כרגע?" (textarea)

- טקסט ליד טופס:
  "השיחה מיועדת למנהלים עם אחריות ישירה. לא לתלמידים. לא לפרילנסרים."

- CTA button: "שלח ובקש פגישת הנהלה"

**עיצוב**:
- 2 columns: טופס משמאל, טקסט מימין
- טופס: רקע glass effect, inputs מודרניים
- Validation errors inline

**Patterns נדרשים**:
- `form-layouts` (variation: contact/side-by-side)
- `button-standard` - submit

**Pattern browsing**:
- Forms: https://www.kibo-ui.com/patterns/form

---

## סיכום Patterns לדף הבית

| Component | Pattern Type | Level 2 Variation | Quantity | Browse URL |
|-----------|--------------|-------------------|----------|------------|
| CTA Buttons | button | standard | 1 | https://www.kibo-ui.com/patterns/button |
| CTA Buttons | button | outline | 1 | https://www.kibo-ui.com/patterns/button |
| Stats Cards | card | standard (stats) | 2 | https://www.kibo-ui.com/patterns/card |
| Process Cards | card | standard (steps) | 3 | https://www.kibo-ui.com/patterns/card |
| Testimonial Cards | card | standard (testimonial) | 4 | https://www.kibo-ui.com/patterns/card |
| FAQ | accordion | standard | 3 | https://www.kibo-ui.com/patterns/accordion |
| Contact Form | form | layouts (side-by-side) | 1 | https://www.kibo-ui.com/patterns/form |

---

## רכיבים מותאמים אישית (Custom)
- Hero Section wrapper
- Problem list (bullets with icons)
- Qualification comparison grid
- Logo cloud
- Section containers

---

**Status**: ✅ Design complete - ready for user pattern selection
**Next step**: User browses patterns and selects Level 3 pattern numbers

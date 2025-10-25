# רכיבים משותפים - Shared Components

רכיבים שיהיו בשימוש חוזר בכל האתר.

## 1. Navigation Menu
**Pattern**: `navigation-menu-complex` (Level 2: complex)
**מיקום**: `/components/shared/navigation-menu/`
**תיאור**: תפריט ראשי עם תמיכה RTL, dropdown menus, responsive

**תוכן פריטים**:
- הבית
- שיטת היישום הארגוני
- סדנאות והדרכות
- ליווי הנהלה
- ידע וכלים
- אודות
- **CTA**: שריין פגישת הנהלה

**Pattern to browse**: https://www.kibo-ui.com/patterns/navigation-menu
**User selection needed**: כן - Level 3 pattern number

---

## 2. Footer
**Pattern**: Custom (נבנה ידנית)
**מיקום**: `/components/shared/footer/`
**תיאור**: פוטר עם ניוזלטר, קישורים, פרטי התקשרות

**אלמנטים**:
- לוגו
- ניוזלטר signup (email input + button)
- קישורים מהירים (navigation)
- קישורים חברתיים (YouTube, LinkedIn, Facebook, WhatsApp)
- פרטי התקשרות
- Copyright

**Patterns שנשתמש בהם**:
- `form-patterns` - ניוזלטר signup
- `button-standard` - כפתור הרשמה

---

## 3. CTA Button
**Pattern**: `button-standard` (Level 2: standard)
**מיקום**: `/components/shared/cta-button/`
**תיאור**: כפתור קריאה לפעולה ראשי - כחול, גדול, בולט

**וריאנטים**:
- Primary (כחול מלא)
- Secondary (outline)
- Large (hero sections)
- Standard (inline CTAs)

**Pattern to browse**: https://www.kibo-ui.com/patterns/button
**User selection needed**: כן - נבחר 2-3 וריאציות

---

## 4. Section Container
**Pattern**: Custom wrapper
**מיקום**: `/components/shared/section-container/`
**תיאור**: Wrapper לסקשנים עם padding, max-width, centering

**Props**:
- `variant`: 'light' | 'dark' | 'gradient'
- `spacing`: 'sm' | 'md' | 'lg' | 'xl'
- `fullWidth`: boolean

---

## 5. Card Component
**Pattern**: `card-standard` (Level 2: standard)
**מיקום**: `/components/shared/card/`
**תיאור**: כרטיס בסיסי לתצוגת תוכן

**שימושים**:
- Case studies
- סדנאות
- תכונות
- Testimonials

**Pattern to browse**: https://www.kibo-ui.com/patterns/card
**User selection needed**: כן - נבחר 2-3 סגנונות

---

## סטטוס התקנה

| Component | Pattern Selected | Installed | Status |
|-----------|------------------|-----------|--------|
| Navigation Menu | TBD | ❌ | Pending user selection |
| Footer | Custom | ❌ | To be built |
| CTA Button | TBD | ❌ | Pending user selection |
| Section Container | Custom | ❌ | To be built |
| Card | TBD | ❌ | Pending user selection |

---

**הערות**:
- כל הרכיבים יתמכו ב-RTL
- כל הרכיבים יהיו responsive
- נשתמש ב-Tailwind CSS Variables לצבעים

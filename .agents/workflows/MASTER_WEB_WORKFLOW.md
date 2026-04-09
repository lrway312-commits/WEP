---
description: دليل بناء المواقع الاحترافية من الصفر إلى الإطلاق — الإصدار 2026
---

# 🏛️ MASTER WEB WORKFLOW — الدليل الشامل لبناء المواقع الفاخرة
> من الصفر إلى 100 — إصدار 2026 | مبني على Impeccable + UI-UX Pro Max + Awesome Skills

---

## 📋 فهرس المراحل

| # | المرحلة | الهدف |
|---|---------|-------|
| 0 | الاستكشاف والإلهام | فهم المشهد وجمع الأفكار |
| 1 | جمع المتطلبات | سؤال العميل والتخطيط |
| 2 | الهوية البصرية | الألوان، الخطوط، نظام التصميم |
| 3 | تخطيط البنية | الأقسام، التخطيط، المحتوى |
| 3.5 | هندسة التحويل | الإقناع، الـ Copywriting، الـ CTA |
| 4 | الأصول البصرية | الصور، الفيديوهات، الـ 3D |
| 5 | بناء نظام الحركة | الأنيميشن، البارالاكس، الـ Scroll |
| 6 | التنفيذ التقني | الكود، الـ Stack، المكونات |
| 7 | التدقيق والصقل | Audit، Polish، Distill |
| 8 | الأداء والإطلاق | Optimization، Deploy |

---

## 🔍 المرحلة 0: الاستكشاف والإلهام
**الهدف**: بناء مكتبة إلهام حية قبل رسم أي خط

### 📍 المصادر المطلوب التصفح فيها أولاً:
- **Awwwards**: https://www.awwwards.com/websites/winner_category_ecommerce/
- **reem.dev**: https://www.reem.dev — لتحليل حركة التابلت والانتقال بين المكونات
- **21st.dev**: https://21st.dev — مكتبة مكونات UI جاهزة للـ React

### 🛠️ السكيلز المستخدمة في هذه المرحلة:
- `@visual-emotion-engineer` — لتحديد الشعور المستهدف قبل أي قرار بصري
- `@brand-perception-psychologist` — لفهم كيف يرى الجمهور العلامة التجارية

### ❓ أسئلة يجب طرحها على نفسك:
```
- ما النوع الذي أريد بناؤه؟ (Editorial / 3D Immersive / Minimal / E-commerce)
- ما الشعور الذي يجب أن يحس به المستخدم في أول 5 ثوانٍ؟
- ما المنافسون وكيف أكون مختلفاً؟
```

---

## 📝 المرحلة 1: جمع المتطلبات
**الهدف**: الوصول إلى "وثيقة المشروع" الكاملة قبل بدء أي تصميم

### 🤖 أسئلة أوجهها للعميل (يجب الإجابة عليها قبل المتابعة):

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 استبيان المشروع — إلزامي قبل البدء
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

أ) هوية العلامة التجارية:
   [ ] ما اسم المشروع/العلامة؟
   [ ] ما القطاع؟ (موضة / مجوهرات / تقنية / خدمات / إبداع)
   [ ] هل هناك شعار؟ ألوان حالية؟ خطوط محددة؟

ب) الجمهور المستهدف:
   [ ] ما الفئة العمرية؟
   [ ] ما مستوى الدخل؟ (يؤثر على أسلوب التصميم الفاخر vs الاقتصادي)
   [ ] موبايل أم ديسكتوب أم كلاهما؟

ج) الهدف من الموقع:
   [ ] عرض المنتجات؟ بيع مباشر؟ تقديم خدمات؟ عرض حافظة أعمال؟
   [ ] ما الإجراء الرئيسي المطلوب من الزائر؟ (شراء / تواصل / اشتراك)

د) الأصول المتاحة:
   [ ] هل هناك صور جاهزة؟ فيديوهات؟
   [ ] هل تحتاج إنتاج صور AI؟
   [ ] هل هناك محتوى نصي؟ أم يحتاج كتابة؟

هـ) المرجعي البصري:
   [ ] أعطني 3 مواقع تعجبك — لماذا تعجبك؟
   [ ] ما الكلمات التي تصف شعور الموقع المطلوب؟
     (فاخر / عصري / بارد / دافئ / جريء / هادئ)

و) التقني:
   [ ] هل هناك CMS مطلوب؟
   [ ] هل هناك متجر إلكتروني؟ (Stripe / Shopify)
   [ ] ما ميزانية الاستضافة والبناء؟
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### 🛠️ السكيلز المستخدمة:
- `@customer-psychographic-profiler` — تحليل الجمهور
- `@ui-ux-pro-max` — لتوليد نظام التصميم المناسب للقطاع

---

## 🎨 المرحلة 2: الهوية البصرية ونظام التصميم
**الهدف**: تحديد كل "رموز" الموقع قبل كتابة سطر كود واحد

> ⚠️ **قاعدة ذهبية**: لا تختار لوناً، ولا خطاً، ولا تباعداً من دون سبب وظيفي وعاطفي

### أ) نظام الألوان (Color System)

**الطريقة المعتمدة — OKLCH (معيار 2026)**:
```css
/* ❌ ممنوع — HSL التقليدي */
color: hsl(220, 80%, 50%);

/* ✅ المطلوب — OKLCH */
color: oklch(55% 0.18 265);
/*           ↑    ↑    ↑
         Lightness Chroma Hue */
```

**قاعدة 60-30-10**:
| النسبة | الاستخدام |
|--------|-----------|
| 60% | خلفيات محايدة (دائماً مع Chroma 0.01 من لون العلامة) |
| 30% | نصوص وحدود وعناصر ثانوية |
| 10% | الألوان القوية — CTAs، Accents فقط |

**قاعدة Tinted Neutrals**:
```css
/* ❌ رمادي صافي — يبدو رخيصاً */
--neutral: oklch(50% 0 0);

/* ✅ رمادي ملوّن — يبدو فاخراً */
--neutral: oklch(50% 0.01 265); /* لمسة زرقاء خفية */
```

**أسئلة يجب الإجابة عليها قبل اختيار الألوان**:
```
[ ] ما الشعور المستهدف؟ (calm / trust / prestige / urgency / warmth)
[ ] ما الثقافة والجمهور؟ (الألوان تختلف بين الثقافات)
[ ] هل الموضة تقتضي لوناً معيناً في 2026؟
[ ] هل الموقع dark mode أم light أم كلاهما؟
```

### ب) نظام الخطوط (Typography)

**المطلوب من العميل**: لا شيء — أنا أختار

**عملية الاختيار**:
1. حدد "شخصية" الموقع أولاً
2. اختر Heading Font + Body Font
3. تحقق من Google Fonts أو Adobe Fonts

| الشخصية | Heading Font | Body Font |
|---------|-------------|-----------|
| Editorial/Luxury | Fraunces / Playfair Display | Instrument Sans |
| Modern SaaS | Inter / Geist | Inter |
| Bold Creative | Cabinet Grotesk / Syne | Manrope |
| Minimal Fashion | Cormorant Garamond | DM Sans |

**قاعدة الحجم**:
```css
/* Fluid Type Scale — يتكيف مع الشاشة */
--text-xs:   clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
--text-sm:   clamp(0.875rem, 0.8rem + 0.375vw, 1rem);
--text-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);
--text-lg:   clamp(1.125rem, 1rem + 0.625vw, 1.25rem);
--text-xl:   clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem);
--text-2xl:  clamp(1.5rem, 1.3rem + 1vw, 2rem);
--text-hero: clamp(3rem, 8vw, 14rem); /* للعناوين الضخمة */
```

### ج) نظام المسافات — 4pt Grid
```css
/* القاعدة: كل مسافة يجب أن تكون مضاعفاً لـ 4px */
--space-1:  4px;
--space-2:  8px;
--space-3:  12px;
--space-4:  16px;
--space-6:  24px;
--space-8:  32px;
--space-12: 48px;
--space-16: 64px;
--space-24: 96px;
--space-32: 128px;
```

### 🛠️ السكيلز المستخدمة:
- `@ui-ux-pro-max` — يولد نظام التصميم كاملاً
- `@visual-emotion-engineer` — يربط اختيارات التصميم بالمشاعر
- قاعدة Python:
  ```bash
  python3 .agents/skills/ui-ux-pro-max/scripts/search.py "luxury fashion editorial" --design-system -p "ProjectName"
  ```

---

## 🗺️ المرحلة 3: تخطيط البنية (Information Architecture)
**الهدف**: رسم هيكل الموقع — الأقسام، الصفحات، التدفق

> ❌ لا تبدأ هنا في اختيار موضع العناصر — ذلك يأتي في المرحلة التالية

### أ) تحديد الأقسام

**قالب البنية العام**:
```
صفحة رئيسية:
├── Hero (130vh) — الطبعة الأولى
├── Feature/Intro (100vh) — تقديم القيمة
├── Gallery/Showcase (وفق المحتوى) — عرض البصري
├── About/Story (80vh) — قصة الهوية
├── Social Proof (60vh) — آراء / شركاء
└── Footer — Contact / CTA / Navigation

صفحات ثانوية (حسب المشروع):
├── /collection أو /work — معرض المنتجات
├── /about — قصة العلامة
├── /contact — التواصل
└── /[product] — صفحة المنتج/المشروع
```

### ب) تحديد نوع كل قسم

**أسئلة للقرار**:
```
[ ] هل يحتوي هذا القسم على صور؟ كم صورة؟
[ ] هل هو نص + صورة؟ أم طبقات متداخلة؟
[ ] هل يحتوي على Grid أم على تخطيط Editorial حر؟
[ ] هل يجب أن يكون sticky أثناء التمرير؟
[ ] هل يتفاعل مع الـ Scroll (parallax)?
```

**أنماط التخطيط المتاحة**:
| النمط | متى تستخدمه |
|-------|------------|
| Full-Bleed Hero | لصنع أثر قوي في البداية |
| Asymmetric Split | لكسر الرتابة (60/40 أو 70/30) |
| Editorial Overlap | لتداخل الصور والنصوص فنياً |
| Bento Grid | لعرض ميزات أو أعمال متعددة |
| Sticky Scroll | لسرد القصة أثناء التمرير |
| Horizontal Scroll | لمعارض الصور الكبيرة |

---

## 🧠 المرحلة 3.5: هندسة التحويل (Conversion) وكتابة المحتوى
**الهدف**: ضمان أن الموقع الجميل يبيع ويقنع الزائر باتخاذ إجراء

### أ) قواعد كتابة النصوص (Copywriting)
- **Benefit-Driven Copy**: لا تكتب الميزات (Features)، بل اكتب الفوائد والتحول (Transformation). 
  - *خطأ*: "مصنوع من التيتانيوم القوي جداً"
  - *صح*: "خفة لا تشعر بها، وصلابة ترافقك عمراً كاملاً"
- **Clear Transformation**: وضّح للعميل كيف ستتغير حياته قبل وبعد عرض المنتج.
- **No Vague Language**: تجنب الكلمات المبتذلة وضعيفة المعنى. كن مباشراً.

### ب) استراتيجية الـ CTA (Call to Action)
- **Rule of One**: يجب أن يكون هناك هدف واحد واضح فقط لكل صفحة (مثال: "تواصل معنا" أو "احجز القطعة"). 
- **التكرار الذكي (Repetition)**: اعرض نفس هدف مسار الـ CTA كل قسمين إلى 3 أقسام كي لا يتوه الزائر.

### ج) الفخامة للجميع (Accessible Luxury)
- **التباين المريح**: يجب ألا تضحي الفخامة بالمقروئية. تفادى الحروف الباهتة والصغيرة جداً.
- **الحركة (Reduced Motion)**: احترم أجهزة زوار الموقع لتعطيل الحركات الدرامية إذا كانت تزعجهم.

### 🛠️ السكيلز المستخدمة:
- `@copywriting-psychologist` — لتوليد العناوين الرئيسية المعتمدة على الفائدة.
- `@ux-persuasion-engineer` — لهندسة تدفق رحلة المبيعات داخل الصفحة.

---

## 🖼️ المرحلة 4: الأصول البصرية (Assets)
**الهدف**: جمع أو إنتاج كل صورة وفيديو قبل البرمجة

> 🚨 **قاعدة صارمة**: لا تستخدم Placeholder أبداً. الموقع الفاخر يحتاج أصولاً فاخرة.

### أ) قائمة الأصول المطلوبة (تُحدَّد لكل موقع)

```
أسألني لأصمم الصور المناسبة إذا لم تكن متوفرة:

للموقع الفاخر النموذجي:
[ ] Hero Image — الصورة الرئيسية (1920×1080 كحد أدنى)
[ ] Background Texture — نسيج خلفية (رخام / حرير / ليلي)
[ ] Detail Images — صور تفصيلية للمنتجات (Macro)
[ ] Portrait/Model — صور الموديل أو الشخص
[ ] Brand Elements — شعار، أيقونات (SVG)
```

### ب) معايير الصور

**لتوليد الصور بـ AI** — صياغة الـ Prompt:
```
يجب أن يحتوي الـ Prompt على:
1. الأسلوب الفني: (chiaroscuro / editorial / fashion photography / macro)
2. الإضاءة: (dramatic / natural / studio / golden hour)
3. اللون المهيمن: (black and white / emerald / deep burgundy)
4. الموضوع: (fashion model / luxury watch / abstract texture)
5. الخلفية: (dark void / marble / silk / bokeh)

مثال كامل:
"Editorial fashion photography, dramatic chiaroscuro lighting, model wearing 
emerald silk dress, dark void background, magazine quality, ultra sharp, 
shot on Hasselblad, shadows and highlights contrast"
```

### ج) الأصول الثلاثية الأبعاد

**متى تحتاج 3D؟**
```
استخدم 3D عندما:
✅ عرض منتج يحتاج الدوران (ساعة، حقيبة، جوهرة)
✅ خلفية محيطية للـ Hero (جزيئات، أمواج)
✅ قصة بصرية تحتاج عمقاً حقيقياً
✅ Element تفاعلي يوفر "wow factor"

لا تستخدم 3D عندما:
❌ الموقع ثقيل أصلاً
❌ الجمهور يستخدم الموبايل بكثافة
❌ 3D لمجرد 3D (بدون هدف وظيفي)
```

**الخيارات**:
```
1. Spline (الأسرع) → @spline-3d-integration
   - مناسب: عناصر تفاعلية بسيطة
   - التكامل: <Spline scene="URL" />

2. Three.js (التحكم الأقصى) → @threejs-skills
   - مناسب: تجارب مخصصة بالكامل (Abyss experience)
   - الـ Stack: Three.js + GSAP + Lenis

3. React Three Fiber (للـ React) → @3d-web-experience
   - مناسب: تكامل مع React
   - الـ Package: @react-three/fiber + @react-three/drei
```

**مصادر النماذج ثلاثية الأبعاد**:
- Sketchfab.com — ملايين نماذج GLTF
- Poly Haven — خرائط HDR مجانية للإضاءة
- Market.pmnd.rs — نماذج محسّنة للويب

---

## 🎬 المرحلة 5: نظام الحركة (Motion Design)
**الهدف**: رسم خارطة كل حركة في الموقع قبل البرمجة

> ❌ **ممنوع**: التحريك العشوائي — كل حركة يجب أن يكون لها هدف

### أ) قاعدة التوقيت (Impeccable Standard)

```
100-150ms → تفاعلات لحظية (Hover على الأزرار)
200-300ms → تغيير الحالة (فتح القوائم، الـ Focus)
300-500ms → تغيير التخطيط (Modals، Accordions)
600-900ms → دخول الأقسام (Hero reveal، Section entrance)
1200ms+  → رحلات سينمائية (Page transitions، Story reveals)
```

### ب) قاعدة الـ Easing (Impeccable)

```javascript
// ✅ للعناصر الداخلة — ناعمة وسريعة
cubic-bezier(0.16, 1, 0.3, 1)

// ✅ للعناصر الخارجة — أسرع بـ 75%
cubic-bezier(0.4, 0, 1, 1)

// ✅ للحركة الطبيعية العامة
cubic-bezier(0.25, 0.46, 0.45, 0.94)

// ❌ ممنوع — يبدو للهواة
ease-in-out / bounce / elastic
```

### ج) خارطة الحركة (يجب رسمها لكل موقع)

```
مثال لخارطة حركة كاملة:

HERO SECTION:
├── Load    → Background texture فيد (700ms, cubic-bezier(0.16,1,0.3,1))
├── Load +100ms → Main image slide from bottom (900ms)
├── Load +300ms → Heading reveal letter by letter (1200ms)
├── Load +500ms → Subtitle fade in (300ms)
├── Scroll  → Background parallax (0.2x speed)
├── Scroll  → Main image parallax (0.5x speed)
└── Scroll  → Heading opacity fade out (0 to 500px scroll)

GALLERY SECTION:
├── InView  → Cards stagger reveal (delay: 100ms each)
├── Hover   → Card scale (1.03, 200ms)
├── Hover   → Image zoom (scale 1.1, 500ms)
└── Click   → Expand animation (FLIP technique)
```

### د) قاعدة طبقات البارالاكس

```
طبقة الخلفية   → يتحرك بسرعة 0.2x (يبدو بعيداً)
طبقة المنتصف   → يتحرك بسرعة 0.5x (يبدو في المنتصف)
طبقة المقدمة   → يتحرك بسرعة 1.0x (عادي)
طبقة العائمة   → يتحرك بسرعة 1.2-1.5x (يبرز للأمام)
```

### هـ) اختيار أداة التحريك

```
Framer Motion → للمشاريع React (مزود في Aurora)
  أفضل لـ: Component animations, useScroll, useTransform
  npm: framer-motion

GSAP + ScrollTrigger → لأي مشروع، للسيطرة الأعلى
  أفضل لـ: Complex timelines, Pinned sections, Horizontal scroll
  npm: gsap

Anime.js → للتحريكات المعقدة جداً والـ SVG
  أفضل لـ: Stagger animations, SVG morphing
  npm: animejs

CSS Native (2024+) → للتأثيرات البسيطة
  أفضل لـ: Simple on-scroll reveals
  لا حاجة لأي مكتبة
```

### 🛠️ السكيلز المستخدمة:
- `@scroll-experience` — تخطيط Scroll كـ سرد قصصي
- `@animejs-animation` — تحريك SVG والـ Stagger
- `@fixing-motion-performance` — ضمان أداء 60fps
- `@magic-animator` — تحريك الشعارات والأيقونات

---

## 💻 المرحلة 6: التنفيذ التقني (Build Phase)

> ❌ **ممنوع البدء هنا** قبل إنهاء المراحل 1-5 كاملة

### أ) اختيار الـ Stack

```
خيار 1 — React + Vite (الحالي للمشروع):
├── React 19
├── Vite 8
├── Tailwind CSS v4 (OKLCH tokens)
├── Framer Motion 12
├── react-router-dom v7
└── Lenis (Smooth Scroll)

خيار 2 — Next.js (للمشاريع الكبيرة):
├── Next.js 15
├── Tailwind CSS v4
├── Framer Motion
└── Contentful أو Sanity (CMS)

خيار 3 — Vanilla HTML/CSS/JS (للـ Experiments):
├── Vite (Build tool فقط)
├── Three.js (CDN Import Maps)
├── GSAP (CDN)
└── Lenis (CDN)
```

### ب) البنية المقترحة للمشروع

```
src/
├── assets/          ← كل الأصول (صور، فيديوهات)
├── components/
│   ├── ui/          ← مكونات عامة (Button, Card)
│   ├── sections/    ← أقسام الصفحة (Hero, Gallery)
│   └── layout/      ← Header, Footer, Navigation
├── pages/           ← الصفحات الكاملة
├── hooks/           ← useScroll, useMouseParallax, etc.
├── store/           ← الحالة العامة
└── style.css        ← نظام التصميم (tokens, utilities)
```

### ج) الـ CSS Token System (أساسي)

```css
/* style.css — يجب أن يكون هذا الملف أولاً */
@import url('Google Fonts URL');

@layer base {
  :root {
    /* ── Colors ── */
    --color-bg:      oklch(8% 0.01 265);    /* خلفية قاتمة */
    --color-surface: oklch(12% 0.01 265);   /* بطاقات */
    --color-border:  oklch(20% 0.02 265);   /* حدود */
    --color-text:    oklch(95% 0.01 265);   /* نص رئيسي */
    --color-muted:   oklch(60% 0.01 265);   /* نص ثانوي */
    --color-accent:  oklch(75% 0.12 85);    /* لون العلامة */

    /* ── Typography ── */
    --font-editorial: 'Fraunces', serif;
    --font-body:      'Instrument Sans', sans-serif;

    /* ── Spacing (4pt grid) ── */
    --space-4:  4px;
    --space-8:  8px;
    --space-16: 16px;
    --space-24: 24px;
    --space-32: 32px;
    --space-48: 48px;
    --space-64: 64px;
    --space-96: 96px;

    /* ── Motion ── */
    --ease-out:   cubic-bezier(0.16, 1, 0.3, 1);
    --ease-in:    cubic-bezier(0.4, 0, 1, 1);
    --ease-inout: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    --duration-fast:   150ms;
    --duration-normal: 300ms;
    --duration-slow:   600ms;
    --duration-epic:   1200ms;
  }
}
```

### د) مبادئ كتابة المكونات

```jsx
// ✅ مكوّن احترافي — يستخدم الـ Design Tokens
function Section({ children }) {
  return (
    <section 
      className="relative py-[var(--space-96)] px-[var(--space-32)]"
      style={{ background: 'var(--color-surface)' }}
    >
      {children}
    </section>
  );
}

// ✅ استخدام Framer Motion
import { motion, useScroll, useTransform } from 'framer-motion';

function ParallaxLayer({ speed = 0.5, children }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -1000 * speed]);
  return <motion.div style={{ y }}>{children}</motion.div>;
}
```

### هـ) نمط الطبقات (Compositional Layering)

```
لكل Hero أو Section يحتوي على صور متداخلة:

Layer 1 (z-index: 0) → خلفية نسيج (blur, grayscale, opacity-30%)
Layer 2 (z-index: 10) → الصورة الرئيسية (clip-path, border)
Layer 3 (z-index: 20) → إطار التفصيل العائم (offset, rotated)
Layer 4 (z-index: 30) → النصوص (mix-blend-mode: difference)
Layer 5 (z-index: 40) → عناصر الـ UI (CTA buttons, hints)
```

### 🛠️ السكيلز المستخدمة:
- `@threejs-skills` — عند بناء تجارب 3D
- `@3d-web-experience` — قرار Stack ثلاثي الأبعاد
- `@shader-programming-glsl` — للتأثيرات الخاصة (Liquid، Distortion)
- `@spline-3d-integration` — عند استخدام Spline
- `@react-best-practices` — أنماط React الصحيحة
- `@web-performance-optimization` — ضمان الأداء

---

## 🔍 المرحلة 7: التدقيق والصقل (Audit & Polish)

### أ) قائمة التدقيق — قبل أي إطلاق

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ AUDIT CHECKLIST — Impeccable Standard
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

الألوان:
[ ] لا رمادي صافي — كل الرماديات بها Chroma > 0
[ ] التباين يلبي WCAG AA (4.5:1 للنصوص)
[ ] لا نص رمادي فوق خلفية ملونة

الخطوط:
[ ] لا خطوط نظام (Arial, System Sans)
[ ] Google Fonts تحمّل بشكل صحيح
[ ] Fluid type scale مطبق

المسافات:
[ ] كل مسافة مضاعف لـ 4px
[ ] لا nested cards
[ ] padding/margin متناسق

الحركة:
[ ] لا `ease` أو `ease-in-out` — فقط cubic-bezier
[ ] لا bounce أو elastic
[ ] prefers-reduced-motion محترم
[ ] will-change: transform على العناصر المتحركة

التفاعل:
[ ] cursor-pointer على كل العناصر القابلة للنقر
[ ] Hover states على كل الأزرار والروابط
[ ] Focus states مرئي للـ Keyboard navigation

الأداء:
[ ] LCP < 2.5s
[ ] الصور محسّنة (WebP/AVIF)
[ ] Lazy loading على الصور خارج الـ viewport
[ ] لا animation loops بدون stop condition

الموبايل:
[ ] مختبر على 375px و 768px و 1024px
[ ] تأثيرات 3D تعمل أو لها Fallback
[ ] Touch interactions تعمل بشكل صحيح
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### ب) أوامر الصقل (Steering Commands)

```
/audit  → تحليل شامل واستخراج المشكلات
/polish → تنظيف الهوامش، تحسين التباين، لمسة نهائية
/distill → إزالة التعقيد الزائد وتبسيط العناصر
```

### 🛠️ السكيلز المستخدمة:
- `@fixing-motion-performance` — لإصلاح أداء الحركة
- `@web-performance-optimization` — تحسين الأداء العام
- `@ui-visual-validator` — فحص بصري شامل

---

## 🚀 المرحلة 8: الأداء والإطلاق

### أ) تحسين الأداء

```bash
# بناء للإنتاج
npm run build

# تحليل حجم الـ Bundle
npx vite-bundle-analyzer

# تحسين الصور (مطلوب قبل البناء)
# استخدم Sharp أو Squoosh
```

**قائمة تحسين الصور**:
```
[ ] تحويل PNG/JPG إلى WebP
[ ] استخدام AVIF للمتصفحات الحديثة
[ ] srcset لأحجام مختلفة
[ ] loading="lazy" على الصور الثانوية
[ ] حجم الصورة يتطابق مع عرض العنصر
```

### ب) قائمة قبل الإطلاق

```
[ ] favicon موجود
[ ] Meta tags صحيحة (title, description, og:image)
[ ] 404 page
[ ] Robots.txt و Sitemap
[ ] HTTPS مفعّل
[ ] Semantic HTML5 مُطبق لـ SEO
[ ] Schema.org markup موجود (إذا كان متجراً أو شركة)
[ ] Console free من الأخطاء
[ ] تجربة النشر على بيئة staging
```

---

## 📚 مرجع سريع للمكتبات والأدوات

| الأداة | الاستخدام | الـ Package | الـ Skill |
|--------|-----------|------------|----------|
| Framer Motion | تحريك React | `framer-motion` | — |
| GSAP | تحريك متقدم + ScrollTrigger | `gsap` | — |
| Anime.js | SVG + Stagger | `animejs` | `@animejs-animation` |
| Three.js | 3D Scenes | `three` | `@threejs-skills` |
| R3F | React 3D | `@react-three/fiber` | `@3d-web-experience` |
| Spline | 3D سريع | `@splinetool/react-spline` | `@spline-3d-integration` |
| Lenis | Smooth Scroll | `lenis` | — |
| GSAP ScrollTrigger | Scroll Animations | `gsap` | `@scroll-experience` |
| Tailwind v4 | Utility CSS | `tailwindcss` | — |
| Vite | Build Tool | — | — |

---

## 🧰 دليل استخدام السكيلز

```
المرحلة → السكيل المستخدم → متى يُستدعى

@visual-emotion-engineer     → قبل تحديد أي لون
@ui-ux-pro-max              → لتوليد نظام تصميم كامل تلقائياً
@scroll-experience          → عند تصميم تجربة التمرير
@3d-web-experience          → عند اتخاذ قرار 3D
@threejs-skills             → عند كتابة Three.js
@spline-3d-integration      → عند دمج Spline
@shader-programming-glsl    → للتأثيرات المتقدمة
@animejs-animation          → للـ Stagger والـ SVG
@magic-animator             → لتحريك الشعارات والأيقونات
@copywriting-psychologist   → لكتابة نصوص التحويل والمبيعات
@ux-persuasion-engineer     → قبل توزيع أزرار CTA
@fixing-motion-performance  → لإصلاح الأداء
@interactive-portfolio      → لمواقع عرض الأعمال
@web-performance-optimization → قبل الإطلاق
```

---

## 🌐 مواقع الإلهام المرجعية

```
التصميم الفائز:
• Awwwards E-commerce: https://www.awwwards.com/websites/winner_category_ecommerce/

التفاعل والحركة:
• reem.dev: https://www.reem.dev — تابلت flip interaction

مكتبات UI:
• 21st.dev: https://21st.dev
• magic-mcp: https://21st-dev.github.io/magic-mcp

الفلسفة التصميمية:
• Impeccable: https://github.com/pbakaus/impeccable
```

---

## 📌 ملاحظات ختامية

> **القاعدة الذهبية**: التخطيط الجيد يساوي 50% من التنفيذ.
> قضاء 2 ساعة في الاستكشاف والتخطيط يوفّر 10 ساعات في الإصلاح لاحقاً.

> **قاعدة الأصول**: الموقع الفاخر يحتاج أصولاً فاخرة.
> لا تبرمج شيئاً حتى تكون كل الصور والأصول جاهزة.

> **قاعدة الحركة**: كل حركة يجب أن يكون لها سبب.
> الحركة لمجرد الحركة = فوضى بصرية.

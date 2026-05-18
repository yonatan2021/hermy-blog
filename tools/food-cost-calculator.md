---
layout: page
title: "מחשבון פוד קוסט"
permalink: /tools/food-cost-calculator/
description: "כלי קטן ובטוח לחישוב ראשוני של פוד קוסט למנה, עם נתונים מומצאים בלבד."
---

<style>
.food-cost-tool {
  direction: rtl;
  text-align: start;
  display: grid;
  gap: var(--space-8);
}

.food-cost-hero,
.food-cost-card,
.food-cost-result,
.food-cost-guide,
.food-cost-note {
  border: 1px solid var(--border-standard);
  border-radius: var(--radius-xl);
  background: var(--bg-panel);
}

.food-cost-hero {
  position: relative;
  overflow: hidden;
  padding: clamp(var(--space-6), 5vw, var(--space-10));
  background:
    radial-gradient(circle at 12% 20%, var(--accent-dim), transparent 34%),
    radial-gradient(circle at 86% 12%, var(--accent-secondary-dim), transparent 36%),
    linear-gradient(135deg, color-mix(in oklab, var(--bg-panel) 92%, var(--accent) 8%), var(--bg-panel));
}

.food-cost-kicker,
.food-cost-step,
.food-cost-label-note,
.food-cost-pill,
.food-cost-guide small {
  color: var(--text-quaternary);
}

.food-cost-kicker {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  margin: 0 0 var(--space-3);
  font-family: var(--font-mono);
  font-size: 0.78rem;
  letter-spacing: 0.03em;
}

.food-cost-kicker::before {
  content: '';
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: var(--accent);
  box-shadow: 0 0 18px var(--accent-glow);
}

.food-cost-title {
  margin: 0 0 var(--space-4) !important;
  max-width: 760px;
  font-size: clamp(2rem, 5vw, 3.15rem) !important;
  line-height: 1.08 !important;
}

.food-cost-subtitle {
  max-width: 680px;
  margin: 0 !important;
  color: var(--text-secondary);
  font-size: clamp(1.02rem, 2.4vw, 1.2rem) !important;
  line-height: 1.85 !important;
}

.food-cost-hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  margin-top: var(--space-6);
}

.food-cost-pill {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-4);
  border: 1px solid var(--border-standard);
  border-radius: 999px;
  background: color-mix(in oklab, var(--bg-surface) 70%, transparent);
  font-size: 0.9rem;
}

.food-cost-main {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(280px, 1.1fr);
  gap: var(--space-5);
  align-items: start;
}

.food-cost-card,
.food-cost-result,
.food-cost-guide,
.food-cost-note {
  padding: var(--space-6);
}

.food-cost-card h2,
.food-cost-result h2,
.food-cost-guide h2,
.food-cost-note h2 {
  margin-top: 0 !important;
}

.food-cost-form {
  display: grid;
  gap: var(--space-5);
}

.food-cost-field {
  display: grid;
  gap: var(--space-2);
}

.food-cost-field label {
  color: var(--text-primary);
  font-weight: 600;
}

.food-cost-label-note {
  font-size: 0.9rem;
  line-height: 1.65;
}

.food-cost-input-wrap {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-2) var(--space-3);
  border: 1px solid var(--border-standard);
  border-radius: var(--radius-lg);
  background: var(--bg-surface);
  transition: border-color var(--transition-fast), box-shadow var(--transition-fast), background var(--transition-fast);
}

.food-cost-input-wrap:focus-within {
  border-color: var(--border-accent);
  background: var(--bg-hover);
  box-shadow: 0 0 0 3px var(--accent-dim);
}

.food-cost-currency {
  color: var(--accent);
  font-weight: 600;
}

.food-cost-input {
  width: 100%;
  min-height: 46px;
  padding: 0;
  border: 0;
  outline: 0;
  background: transparent;
  color: var(--text-primary);
  font-family: var(--font-mono);
  font-size: clamp(1.2rem, 3vw, 1.55rem);
  font-variant-numeric: tabular-nums;
  direction: ltr;
  text-align: end;
}

.food-cost-result {
  position: sticky;
  top: 80px;
  overflow: hidden;
  background:
    radial-gradient(circle at 20% 18%, var(--accent-dim), transparent 38%),
    radial-gradient(circle at 86% 72%, var(--accent-secondary-dim), transparent 42%),
    var(--bg-panel);
}

.food-cost-score {
  display: grid;
  gap: var(--space-2);
  padding: var(--space-6);
  margin-bottom: var(--space-5);
  border: 1px solid var(--border-accent);
  border-radius: var(--radius-xl);
  background: color-mix(in oklab, var(--accent-dim) 62%, transparent);
}

.food-cost-score-label {
  color: var(--text-tertiary);
  font-size: 0.95rem;
}

.food-cost-score-value {
  color: var(--text-primary);
  font-family: var(--font-mono);
  font-size: clamp(2.6rem, 9vw, 4.6rem);
  line-height: 1;
  font-weight: 500;
  direction: ltr;
  unicode-bidi: isolate;
}

.food-cost-metrics {
  display: grid;
  gap: var(--space-3);
}

.food-cost-metric {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: baseline;
  gap: var(--space-4);
  padding: var(--space-4);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  background: color-mix(in oklab, var(--bg-surface) 62%, transparent);
}

.food-cost-metric span:first-child {
  color: var(--text-tertiary);
}

.food-cost-metric strong {
  color: var(--text-primary);
  font-family: var(--font-mono);
  font-size: 1.15rem;
  direction: ltr;
  unicode-bidi: isolate;
}

.food-cost-decision {
  margin: var(--space-5) 0 0 !important;
  padding: var(--space-4);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-standard);
  background: var(--accent-secondary-dim);
  color: var(--text-secondary);
}

.food-cost-guide-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--space-4);
}

.food-cost-guide-item {
  padding: var(--space-5);
  border: 1px solid var(--border-standard);
  border-radius: var(--radius-lg);
  background: var(--bg-panel);
}

.food-cost-guide strong {
  display: block;
  margin-bottom: var(--space-2);
  color: var(--text-primary);
  font-size: 1.05rem;
}

.food-cost-guide small {
  display: block;
  line-height: 1.7;
}

.food-cost-note {
  border-color: var(--border-accent);
  background: linear-gradient(135deg, var(--accent-dim), var(--accent-secondary-dim));
}

.food-cost-note p,
.food-cost-guide p {
  margin-bottom: 0 !important;
}

.food-cost-actions-list {
  margin-bottom: 0 !important;
}

.food-cost-actions-list li + li {
  margin-top: var(--space-2);
}

@media (max-width: 820px) {
  .food-cost-main,
  .food-cost-guide-grid {
    grid-template-columns: 1fr;
  }

  .food-cost-result {
    position: static;
  }
}

@media (max-width: 520px) {
  .food-cost-hero,
  .food-cost-card,
  .food-cost-result,
  .food-cost-guide,
  .food-cost-note {
    padding: var(--space-4);
  }

  .food-cost-metric {
    grid-template-columns: 1fr;
    gap: var(--space-2);
  }
}
</style>

<div class="food-cost-tool" dir="rtl">
  <header class="food-cost-hero">
    <p class="food-cost-kicker">כלים / מסעדנות / בדיקה ראשונית</p>
    <h1 class="food-cost-title">כמה חומרי הגלם באמת אוכלים מהמנה?</h1>
    <p class="food-cost-subtitle">מכניסים מחיר מכירה ועלות חומרי גלם, ומקבלים מיד פוד קוסט, רווח גולמי ותרומה אחרי עלויות משתנות. זה לא מחליף חשבון עסקי מלא, אבל זה כן עוצר את האשליה ש״פדיון״ שווה ״רווח״.</p>
    <div class="food-cost-hero-actions" aria-label="הבהרות קצרות">
      <span class="food-cost-pill">נתונים מומצאים בלבד</span>
      <span class="food-cost-pill">מיועד לבדיקה ראשונית</span>
      <span class="food-cost-pill">לא כולל עבודה ושכירות</span>
    </div>
  </header>

  <section class="food-cost-main" aria-label="מחשבון פוד קוסט">
    <div class="food-cost-card">
      <p class="food-cost-step">שלב 1</p>
      <h2>מכניסים מספרים של מנה אחת</h2>
      <div class="food-cost-form">
        <div class="food-cost-field">
          <label for="dish-price">מחיר מכירה ללקוח</label>
          <div class="food-cost-input-wrap">
            <span class="food-cost-currency">₪</span>
            <input class="food-cost-input" id="dish-price" type="number" min="0" step="0.1" value="48" inputmode="decimal" aria-describedby="dish-price-help">
          </div>
          <small class="food-cost-label-note" id="dish-price-help">בדוגמה: מנה שנמכרת ב־48 ₪.</small>
        </div>

        <div class="food-cost-field">
          <label for="ingredient-cost">עלות חומרי גלם למנה</label>
          <div class="food-cost-input-wrap">
            <span class="food-cost-currency">₪</span>
            <input class="food-cost-input" id="ingredient-cost" type="number" min="0" step="0.1" value="14" inputmode="decimal" aria-describedby="ingredient-cost-help">
          </div>
          <small class="food-cost-label-note" id="ingredient-cost-help">בדוגמה: בצק, גבינה, רוטב, תוספות וכל מה שנכנס לצלחת.</small>
        </div>

        <div class="food-cost-field">
          <label for="extra-cost">עלויות משתנות נוספות</label>
          <div class="food-cost-input-wrap">
            <span class="food-cost-currency">₪</span>
            <input class="food-cost-input" id="extra-cost" type="number" min="0" step="0.1" value="0" inputmode="decimal" aria-describedby="extra-cost-help">
          </div>
          <small class="food-cost-label-note" id="extra-cost-help">אופציונלי: אריזה, עמלה, משלוח, הנחה, בזבוז או קומפ.</small>
        </div>
      </div>
    </div>

    <aside class="food-cost-result" aria-live="polite" aria-label="תוצאות החישוב">
      <p class="food-cost-step">שלב 2</p>
      <h2>קוראים את התוצאה</h2>
      <div class="food-cost-score">
        <span class="food-cost-score-label">פוד קוסט</span>
        <strong class="food-cost-score-value" id="food-cost-percent">29.2%</strong>
      </div>
      <div class="food-cost-metrics">
        <div class="food-cost-metric">
          <span>רווח גולמי לפני הוצאות קבועות</span>
          <strong id="gross-margin">₪34.00</strong>
        </div>
        <div class="food-cost-metric">
          <span>תרומה אחרי עלויות משתנות</span>
          <strong id="contribution-margin">₪34.00</strong>
        </div>
        <div class="food-cost-metric">
          <span>נוסחה</span>
          <strong id="food-cost-formula">14 / 48</strong>
        </div>
      </div>
      <p class="food-cost-decision" id="food-cost-decision">זו נקודת פתיחה סבירה לבדיקה, אבל זה עדיין לא רווח סופי.</p>
    </aside>
  </section>

  <section class="food-cost-guide" aria-labelledby="foodCostGuideTitle">
    <h2 id="foodCostGuideTitle">איך לקרוא את המספר</h2>
    <div class="food-cost-guide-grid">
      <div class="food-cost-guide-item">
        <strong>עד 32%</strong>
        <small>בדרך כלל נקודת פתיחה נוחה. עדיין צריך לבדוק עבודה, שכירות, תדירות מכירה ובזבוז.</small>
      </div>
      <div class="food-cost-guide-item">
        <strong>32%–40%</strong>
        <small>אזור ביניים. לא בהכרח בעייתי, אבל דורש להבין למה המנה יקרה והאם היא מוכרת מספיק.</small>
      </div>
      <div class="food-cost-guide-item">
        <strong>מעל 40%</strong>
        <small>נורת אזהרה. כדאי לבדוק מחיר, מתכון, ספק, גודל מנה או ערוץ מכירה.</small>
      </div>
    </div>
  </section>

  <section class="food-cost-guide" aria-labelledby="foodCostActionsTitle">
    <h2 id="foodCostActionsTitle">מה עושים אם המספר חלש?</h2>
    <ul class="food-cost-actions-list">
      <li>בודקים אם המחיר נמוך מדי ביחס לערך שהלקוח מקבל.</li>
      <li>בודקים בזבוז בהכנה, מדידה לא עקבית או חומר גלם יקר שלא מרגישים בצלחת.</li>
      <li>מפרידים בין ישיבה, איסוף ומשלוח. אותה מנה לא חייבת לשאת אותו מחיר בכל ערוץ.</li>
      <li>לא מוחקים מנה רק בגלל אחוז אחד. מסתכלים גם על נפח מכירה, מהירות הכנה ותפקיד בתפריט.</li>
    </ul>
  </section>

  <section class="food-cost-note" aria-label="הערת פרטיות וגבולות הכלי">
    <h2>גבולות הכלי</h2>
    <p><strong>חשוב:</strong> הדוגמה כאן משתמשת בנתונים מומצאים בלבד. אין כאן נתונים אמיתיים של עסק, ספק, מקום עבודה, אדם פרטי, או מערכת פיננסית פרטית. זה כלי חשיבה מהיר, לא דוח רווח והפסד.</p>
  </section>
</div>

<script>
(function() {
  const priceInput = document.getElementById('dish-price');
  const costInput = document.getElementById('ingredient-cost');
  const extraInput = document.getElementById('extra-cost');
  const percentEl = document.getElementById('food-cost-percent');
  const grossEl = document.getElementById('gross-margin');
  const contributionEl = document.getElementById('contribution-margin');
  const formulaEl = document.getElementById('food-cost-formula');
  const decisionEl = document.getElementById('food-cost-decision');

  function money(value) {
    return '₪' + value.toLocaleString('he-IL', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  function numberValue(input) {
    const value = Number(input.value);
    return Number.isFinite(value) ? value : 0;
  }

  function decisionText(percent, contribution) {
    if (!Number.isFinite(percent)) return 'צריך מחיר מכירה גדול מאפס כדי לחשב פוד קוסט.';
    if (contribution < 0) return 'המנה לא מכסה את העלויות המשתנות שהוזנו. צריך לעצור ולבדוק מחיר, מתכון או ערוץ מכירה.';
    if (percent > 40) return 'פוד קוסט גבוה. כדאי לבדוק מחיר, מנה, בזבוז או חומר גלם יקר מדי.';
    if (percent > 32) return 'זה אזור ביניים. לא בהכרח בעיה, אבל צריך לבדוק עבודה, בזבוז ותדירות מכירה.';
    return 'זו נקודת פתיחה סבירה לבדיקה, אבל זה עדיין לא רווח סופי.';
  }

  function update() {
    const price = numberValue(priceInput);
    const cost = numberValue(costInput);
    const extra = numberValue(extraInput);
    const percent = price > 0 ? (cost / price) * 100 : NaN;
    const gross = price - cost;
    const contribution = price - cost - extra;

    percentEl.textContent = Number.isFinite(percent) ? percent.toFixed(1) + '%' : '—';
    grossEl.textContent = money(gross);
    contributionEl.textContent = money(contribution);
    formulaEl.textContent = price > 0 ? cost.toLocaleString('he-IL') + ' / ' + price.toLocaleString('he-IL') : '—';
    decisionEl.textContent = decisionText(percent, contribution);
  }

  [priceInput, costInput, extraInput].forEach(function(input) {
    input.addEventListener('input', update);
  });

  update();
})();
</script>

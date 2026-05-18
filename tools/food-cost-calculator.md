---
layout: page
title: "מחשבון פוד קוסט פשוט"
permalink: /tools/food-cost-calculator/
description: "כלי קטן ובטוח לחישוב ראשוני של פוד קוסט למנה, עם נתונים מומצאים בלבד."
---

<style>
.food-cost-tool {
  display: grid;
  gap: var(--space-6);
}

.food-cost-note,
.food-cost-panel,
.food-cost-result,
.food-cost-warning {
  border: 1px solid var(--border-standard);
  border-radius: var(--radius-lg);
  background: color-mix(in oklab, var(--bg-panel) 88%, transparent);
}

.food-cost-note {
  padding: var(--space-5);
  border-color: var(--border-accent);
  background: linear-gradient(135deg, var(--accent-dim), var(--accent-secondary-dim));
}

.food-cost-note strong {
  color: var(--text-primary);
}

.food-cost-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: var(--space-5);
}

.food-cost-panel,
.food-cost-result,
.food-cost-warning {
  padding: var(--space-5);
}

.food-cost-panel h2,
.food-cost-result h2,
.food-cost-warning h2 {
  margin-top: 0;
}

.food-cost-field {
  display: grid;
  gap: var(--space-2);
  margin-block-end: var(--space-4);
}

.food-cost-field label {
  color: var(--text-primary);
  font-weight: 600;
}

.food-cost-field small {
  color: var(--text-tertiary);
  line-height: 1.6;
}

.food-cost-input {
  width: 100%;
  min-height: 46px;
  padding: var(--space-3) var(--space-4);
  border: 1px solid var(--border-standard);
  border-radius: var(--radius-md);
  background: var(--bg-surface);
  color: var(--text-primary);
  font-family: var(--font-hebrew), var(--font-sans);
  font-size: 1rem;
  text-align: start;
}

.food-cost-input:focus {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
  border-color: var(--accent);
}

.food-cost-metrics {
  display: grid;
  gap: var(--space-3);
}

.food-cost-metric {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--space-4);
  padding: var(--space-3) 0;
  border-bottom: 1px solid var(--border-subtle);
}

.food-cost-metric:last-child {
  border-bottom: none;
}

.food-cost-metric span:first-child {
  color: var(--text-tertiary);
}

.food-cost-metric strong {
  color: var(--text-primary);
  font-size: 1.25rem;
  font-variant-numeric: tabular-nums;
  direction: ltr;
  unicode-bidi: isolate;
}

.food-cost-decision {
  margin-top: var(--space-5);
  padding: var(--space-4);
  border-radius: var(--radius-md);
  background: var(--accent-secondary-dim);
  color: var(--text-secondary);
}

.food-cost-formula {
  direction: ltr;
  unicode-bidi: isolate;
  text-align: start;
  overflow-x: auto;
}

.food-cost-warning {
  border-color: var(--border-accent);
}

@media (max-width: 720px) {
  .food-cost-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<div class="food-cost-tool">
  <header>
    <h1>מחשבון פוד קוסט פשוט</h1>
    <p>כלי קטן לבדיקה ראשונית: כמה חומרי הגלם של מנה עולים ביחס למחיר המכירה, ומה נשאר לפני עבודה, שכירות, חשמל, אריזות ועמלות.</p>
  </header>

  <section class="food-cost-note" aria-label="הערת פרטיות">
    <p><strong>חשוב:</strong> הדוגמה כאן משתמשת בנתונים מומצאים בלבד. אין כאן נתונים אמיתיים של עסק, ספק, מקום עבודה, אדם פרטי, או מערכת פיננסית פרטית.</p>
  </section>

  <section class="food-cost-grid" aria-label="מחשבון">
    <div class="food-cost-panel">
      <h2>הזינו מספרים של מנה אחת</h2>

      <div class="food-cost-field">
        <label for="dish-price">מחיר מכירה ללקוח, בש״ח</label>
        <input class="food-cost-input" id="dish-price" type="number" min="0" step="0.1" value="48" inputmode="decimal">
        <small>בדוגמה הסינתטית: מנה שנמכרת ב־₪48.</small>
      </div>

      <div class="food-cost-field">
        <label for="ingredient-cost">עלות חומרי גלם למנה, בש״ח</label>
        <input class="food-cost-input" id="ingredient-cost" type="number" min="0" step="0.1" value="14" inputmode="decimal">
        <small>בדוגמה הסינתטית: חומרי גלם בעלות ₪14.</small>
      </div>

      <div class="food-cost-field">
        <label for="extra-cost">עלויות משתנות נוספות, בש״ח</label>
        <input class="food-cost-input" id="extra-cost" type="number" min="0" step="0.1" value="0" inputmode="decimal">
        <small>לא חובה. אפשר להכניס אריזה, עמלת משלוח, הנחה או בזבוז משוער.</small>
      </div>
    </div>

    <div class="food-cost-result" aria-live="polite">
      <h2>התוצאה</h2>
      <div class="food-cost-metrics">
        <div class="food-cost-metric">
          <span>פוד קוסט</span>
          <strong id="food-cost-percent">29.2%</strong>
        </div>
        <div class="food-cost-metric">
          <span>רווח גולמי לפני הוצאות נוספות</span>
          <strong id="gross-margin">₪34.00</strong>
        </div>
        <div class="food-cost-metric">
          <span>תרומה אחרי עלויות משתנות נוספות</span>
          <strong id="contribution-margin">₪34.00</strong>
        </div>
      </div>
      <p class="food-cost-decision" id="food-cost-decision">מנה סביב 29% פוד קוסט יכולה להיות נקודת פתיחה סבירה, אבל זה עדיין לא רווח סופי.</p>
    </div>
  </section>

  <section>
    <h2>הנוסחה</h2>
    <pre class="food-cost-formula"><code>פוד קוסט % = עלות חומרי גלם / מחיר מכירה × 100
רווח גולמי = מחיר מכירה - עלות חומרי גלם
תרומה משוערת = מחיר מכירה - חומרי גלם - עלויות משתנות נוספות</code></pre>
  </section>

  <section>
    <h2>דוגמה סינתטית</h2>
    <ul>
      <li>מחיר מנה: ₪48</li>
      <li>עלות חומרי גלם: ₪14</li>
      <li>פוד קוסט: 29.2%</li>
      <li>רווח גולמי לפני עבודה, שכירות ועמלות: ₪34</li>
    </ul>
  </section>

  <section class="food-cost-warning">
    <h2>מה זה לא אומר</h2>
    <p>זה לא רווח סופי. צריך עוד לבדוק עבודה, שכירות, חשמל, אריזות, עמלות משלוחים, החזרות, בזבוז, קומפים, מנות צוות ולחץ על הסרוויס.</p>
  </section>

  <section>
    <h2>החלטה אפשרית</h2>
    <p>אם מנה נמכרת הרבה אבל משאירה מעט מדי כסף, לא חייבים להוריד אותה מיד. אפשר לבדוק:</p>
    <ul>
      <li>שינוי מחיר קטן.</li>
      <li>הקטנת בזבוז בהכנה.</li>
      <li>החלפת חומר גלם יקר בלי לפגוע בחוויה.</li>
      <li>הפרדה בין מחיר ישיבה, איסוף ומשלוח.</li>
      <li>מיקום אחר בתפריט כדי לא לדחוף מנה חלשה מדי.</li>
    </ul>
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
    decisionEl.textContent = decisionText(percent, contribution);
  }

  [priceInput, costInput, extraInput].forEach(function(input) {
    input.addEventListener('input', update);
  });

  update();
})();
</script>

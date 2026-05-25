---
layout: page
title: "מבחן אות-לקוח לעסק קטן"
permalink: /tools/customer-signal-checker/
description: "כלי קצר לבחינה ראשונית של פניות לעסק קטן: האם זה רעש, סימן חלש, או סימן לפעולה."
lang: he
---

<style>
.customer-signal-tool {
  direction: rtl;
  text-align: start;
  display: grid;
  gap: var(--space-6);
}

.customer-signal-hero,
.customer-signal-card,
.customer-signal-result {
  border: 1px solid var(--border-standard);
  border-radius: var(--radius-xl);
  background: var(--bg-panel);
}

.customer-signal-hero,
.customer-signal-card,
.customer-signal-result {
  padding: clamp(var(--space-5), 4vw, var(--space-8));
}

.customer-signal-kicker {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  margin: 0 0 var(--space-3);
  color: var(--text-quaternary);
  font-family: var(--font-mono);
  font-size: 0.78rem;
  letter-spacing: 0.03em;
}

.customer-signal-kicker::before {
  content: '';
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: var(--accent);
  box-shadow: 0 0 18px var(--accent-glow);
}

.customer-signal-title {
  margin: 0 0 var(--space-3) !important;
  font-size: clamp(2rem, 5vw, 3rem) !important;
  line-height: 1.12 !important;
}

.customer-signal-subtitle {
  max-width: 70ch;
  margin: 0 !important;
  color: var(--text-secondary);
  font-size: clamp(1rem, 2.2vw, 1.15rem) !important;
  line-height: 1.85 !important;
}

.customer-signal-main {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(280px, 0.9fr);
  gap: var(--space-5);
  align-items: start;
}

.customer-signal-form {
  display: grid;
  gap: var(--space-4);
}

.customer-signal-question {
  display: grid;
  gap: var(--space-2);
  padding: var(--space-4);
  border: 1px solid var(--border-standard);
  border-radius: var(--radius-lg);
  background: var(--bg-surface);
}

.customer-signal-question legend {
  padding: 0;
  color: var(--text-primary);
  font-weight: 600;
}

.customer-signal-options {
  display: grid;
  gap: var(--space-2);
}

.customer-signal-option {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3);
  border-radius: var(--radius-md);
  background: color-mix(in oklab, var(--bg-panel) 85%, transparent);
}

.customer-signal-option input {
  margin: 0;
}

.customer-signal-actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
}

.customer-signal-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  min-height: 46px;
  padding: 0 var(--space-5);
  border: 1px solid var(--border-standard);
  border-radius: 999px;
  background: var(--bg-surface);
  color: var(--text-primary);
  font: inherit;
  cursor: pointer;
}

.customer-signal-button.primary {
  border-color: var(--border-accent);
  background: var(--accent-dim);
}

.customer-signal-result-box {
  display: grid;
  gap: var(--space-4);
}

.customer-signal-score {
  display: grid;
  gap: var(--space-2);
  padding: var(--space-5);
  border: 1px solid var(--border-accent);
  border-radius: var(--radius-xl);
  background: color-mix(in oklab, var(--accent-dim) 55%, transparent);
}

.customer-signal-score-label {
  color: var(--text-tertiary);
  font-size: 0.95rem;
}

.customer-signal-score-value {
  font-family: var(--font-mono);
  font-size: clamp(2rem, 8vw, 4rem);
  line-height: 1;
  font-weight: 600;
}

.customer-signal-badge {
  display: inline-flex;
  align-items: center;
  width: fit-content;
  padding: var(--space-2) var(--space-3);
  border-radius: 999px;
  background: var(--bg-surface);
  color: var(--text-primary);
  border: 1px solid var(--border-standard);
  font-weight: 600;
}

.customer-signal-list {
  margin: 0;
  padding-inline-start: 1.2rem;
  color: var(--text-secondary);
}

.customer-signal-list li + li {
  margin-top: var(--space-2);
}

.customer-signal-note {
  color: var(--text-quaternary);
  font-size: 0.95rem;
  line-height: 1.75;
}

@media (max-width: 860px) {
  .customer-signal-main {
    grid-template-columns: 1fr;
  }
}
</style>

<div class="customer-signal-tool">
  <section class="customer-signal-hero">
    <p class="customer-signal-kicker">כלי קטן | בדיקה ראשונית בלבד</p>
    <h1 class="customer-signal-title">מבחן אות-לקוח לעסק קטן</h1>
    <p class="customer-signal-subtitle">מכניסים כמה סימנים פשוטים מתוך הפנייה, ומקבלים החלטה מהירה: להתעלם, לשאול עוד שאלה, או לעבור לפעולה. זה לא נבואה ולא CRM. זה מסנן ראשוני נגד רעש.</p>
  </section>

  <div class="customer-signal-main">
    <section class="customer-signal-card">
      <form class="customer-signal-form" id="signalForm">
        <fieldset class="customer-signal-question">
          <legend>1. יש פנייה ישירה וברורה?</legend>
          <div class="customer-signal-options">
            <label class="customer-signal-option"><input type="radio" name="q1" value="2"> כן, יש בקשה ספציפית או בעיה מוגדרת</label>
            <label class="customer-signal-option"><input type="radio" name="q1" value="1"> בערך, יש עניין אבל לא ברור מה צריך</label>
            <label class="customer-signal-option"><input type="radio" name="q1" value="0" checked> לא, זו רק הודעה כללית או לייק</label>
          </div>
        </fieldset>

        <fieldset class="customer-signal-question">
          <legend>2. יש דחיפות אמיתית?</legend>
          <div class="customer-signal-options">
            <label class="customer-signal-option"><input type="radio" name="q2" value="2"> כן, יש מועד קרוב או כאב כואב עכשיו</label>
            <label class="customer-signal-option"><input type="radio" name="q2" value="1"> אולי, אבל זה יכול לחכות</label>
            <label class="customer-signal-option"><input type="radio" name="q2" value="0" checked> לא, אין סימן לדחיפות</label>
          </div>
        </fieldset>

        <fieldset class="customer-signal-question">
          <legend>3. יש התאמה בסיסית למה שהעסק יודע לספק?</legend>
          <div class="customer-signal-options">
            <label class="customer-signal-option"><input type="radio" name="q3" value="2"> כן, זה ממש בתחום</label>
            <label class="customer-signal-option"><input type="radio" name="q3" value="1"> חלקית, צריך לדייק</label>
            <label class="customer-signal-option"><input type="radio" name="q3" value="0" checked> לא, זה לא נראה רלוונטי</label>
          </div>
        </fieldset>

        <fieldset class="customer-signal-question">
          <legend>4. יש נכונות לשלב הבא?</legend>
          <div class="customer-signal-options">
            <label class="customer-signal-option"><input type="radio" name="q4" value="2"> כן, אפשר לקבוע שיחה / לשלוח פרטים</label>
            <label class="customer-signal-option"><input type="radio" name="q4" value="1"> אולי, אם תבוא תשובה טובה</label>
            <label class="customer-signal-option"><input type="radio" name="q4" value="0" checked> לא, רק בדיקה כללית</label>
          </div>
        </fieldset>

        <fieldset class="customer-signal-question">
          <legend>5. יש סימן לאמון?</legend>
          <div class="customer-signal-options">
            <label class="customer-signal-option"><input type="radio" name="q5" value="2"> כן, יש שם, עסק, או הקשר ברור</label>
            <label class="customer-signal-option"><input type="radio" name="q5" value="1"> חלקית, יש מידע מועט</label>
            <label class="customer-signal-option"><input type="radio" name="q5" value="0" checked> לא, אנונימי לגמרי</label>
          </div>
        </fieldset>

        <div class="customer-signal-actions">
          <button class="customer-signal-button primary" type="button" id="calculateBtn">לחשב</button>
          <button class="customer-signal-button" type="button" id="resetBtn">איפוס</button>
        </div>
      </form>
    </section>

    <aside class="customer-signal-result">
      <div class="customer-signal-result-box">
        <div class="customer-signal-score">
          <span class="customer-signal-score-label">ציון אות</span>
          <span class="customer-signal-score-value" id="scoreValue">0</span>
          <span class="customer-signal-badge" id="scoreBadge">רעש</span>
        </div>

        <div>
          <h2>מה לעשות עכשיו</h2>
          <ul class="customer-signal-list" id="adviceList">
            <li>אין סימן חזק כרגע.</li>
            <li>עדיף לא לבזבז זמן על רדיפה.</li>
            <li>אם חוזרים אליך עם פרטים, אפשר לבדוק שוב.</li>
          </ul>
        </div>

        <p class="customer-signal-note">ככל שהציון גבוה יותר, כך יש יותר סיבה להשקיע עוד שאלה, עוד שיחה או תגובה מהירה. הכלי הזה נועד לחסוך זמן, לא להחליף שיקול דעת.</p>
      </div>
    </aside>
  </div>
</div>

<script>
(function () {
  const form = document.getElementById('signalForm');
  const scoreValue = document.getElementById('scoreValue');
  const scoreBadge = document.getElementById('scoreBadge');
  const adviceList = document.getElementById('adviceList');
  const calculateBtn = document.getElementById('calculateBtn');
  const resetBtn = document.getElementById('resetBtn');

  const adviceSets = {
    noise: [
      'אין סימן חזק כרגע.',
      'עדיף לא לבזבז זמן על רדיפה.',
      'אם חוזרים אליך עם פרטים, אפשר לבדוק שוב.'
    ],
    weak: [
      'יש סימן חלש, אבל עדיין לא מספיק כדי לרוץ.',
      'שווה לשאול שאלה אחת שמבהירה צורך ודחיפות.',
      'אם אין תשובה טובה, להוריד עדיפות.'
    ],
    action: [
      'יש כאן אות אמיתי.',
      'כדאי להגיב מהר, לשאול את השאלה הבאה, או להציע שלב ברור.',
      'אם יש התאמה מלאה, אפשר להתקדם לפעולה.'
    ]
  };

  function getScore() {
    return Array.from(form.querySelectorAll('input[type="radio"]:checked'))
      .reduce((sum, input) => sum + Number(input.value), 0);
  }

  function render(score) {
    scoreValue.textContent = String(score);
    let badge = 'רעש';
    let advice = adviceSets.noise;

    if (score >= 8) {
      badge = 'לפעולה';
      advice = adviceSets.action;
    } else if (score >= 4) {
      badge = 'סימן חלש';
      advice = adviceSets.weak;
    }

    scoreBadge.textContent = badge;
    adviceList.innerHTML = advice.map(item => `<li>${item}</li>`).join('');
  }

  calculateBtn.addEventListener('click', () => render(getScore()));
  resetBtn.addEventListener('click', () => {
    form.reset();
    render(0);
  });

  render(getScore());
})();
</script>

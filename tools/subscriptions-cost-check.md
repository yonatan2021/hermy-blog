---
layout: page
title: "כמה עולים לי המנויים?"
permalink: /tools/subscriptions-cost-check/
description: "בדיקה קטנה ובטוחה שמתרגמת חיובים חוזרים לסכום חודשי ושנתי — בלי שמירה, בלי שליחה ובלי פרטים אישיים."
lang: he
---

<style>
.subscriptions-tool {
  direction: rtl;
  text-align: start;
  display: grid;
  gap: var(--space-8);
}

.subscriptions-hero,
.subscriptions-panel,
.subscriptions-result,
.subscriptions-note {
  border: 1px solid var(--border-standard);
  border-radius: var(--radius-xl);
  background: var(--bg-panel);
}

.subscriptions-hero {
  padding: clamp(var(--space-6), 5vw, var(--space-10));
  background:
    radial-gradient(circle at 14% 16%, var(--accent-dim), transparent 34%),
    radial-gradient(circle at 84% 18%, var(--accent-secondary-dim), transparent 36%),
    linear-gradient(135deg, color-mix(in oklab, var(--bg-panel) 92%, var(--accent) 8%), var(--bg-panel));
}

.subscriptions-hero h1 {
  margin-block-start: 0 !important;
  max-width: 780px;
}

.subscriptions-hero p {
  max-width: 720px;
}

.subscriptions-badges,
.subscriptions-actions,
.subscriptions-source-list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.subscriptions-badge,
.subscriptions-action,
.subscriptions-source-list a {
  border: 1px solid var(--border-standard);
  border-radius: var(--radius-full);
  padding: 0.45rem 0.8rem;
  background: color-mix(in oklab, var(--bg-panel) 82%, transparent);
  color: var(--text-secondary);
  font-size: 0.9rem;
  text-decoration: none;
}

.subscriptions-action.primary {
  border-color: color-mix(in oklab, var(--accent) 55%, var(--border-standard));
  color: var(--text-primary);
  background: color-mix(in oklab, var(--accent) 12%, var(--bg-panel));
}

.subscriptions-main {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(280px, 0.85fr);
  gap: var(--space-5);
  align-items: start;
}

.subscriptions-panel,
.subscriptions-result,
.subscriptions-note {
  padding: var(--space-6);
}

.subscriptions-panel h2,
.subscriptions-result h2,
.subscriptions-note h2 {
  margin-block-start: 0 !important;
}

.subscription-rows {
  display: grid;
  gap: var(--space-3);
  margin-block: var(--space-5);
}

.subscription-row {
  display: grid;
  grid-template-columns: minmax(9rem, 1fr) minmax(7rem, 0.7fr) minmax(8rem, 0.8fr) auto;
  gap: var(--space-3);
  align-items: end;
  padding: var(--space-4);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  background: color-mix(in oklab, var(--bg-surface) 76%, transparent);
}

.subscription-field {
  display: grid;
  gap: var(--space-2);
}

.subscription-field label {
  color: var(--text-tertiary);
  font-size: 0.88rem;
}

.subscription-input,
.subscription-select {
  width: 100%;
  min-height: 44px;
  border: 1px solid var(--border-standard);
  border-radius: var(--radius-md);
  padding: 0.55rem 0.7rem;
  background: var(--bg-panel);
  color: var(--text-primary);
  font: inherit;
}

.subscription-input[type="number"] {
  direction: ltr;
  text-align: end;
  font-family: var(--font-mono);
  font-variant-numeric: tabular-nums;
}

.subscription-input:focus,
.subscription-select:focus {
  outline: 0;
  border-color: var(--border-accent);
  box-shadow: 0 0 0 3px var(--accent-dim);
}

.subscription-remove,
.subscriptions-button {
  min-height: 44px;
  border: 1px solid var(--border-standard);
  border-radius: var(--radius-md);
  padding: 0.55rem 0.85rem;
  background: color-mix(in oklab, var(--bg-elevated) 70%, transparent);
  color: var(--text-primary);
  cursor: pointer;
  font: inherit;
}

.subscriptions-button.primary {
  border-color: color-mix(in oklab, var(--accent) 52%, var(--border-standard));
  background: color-mix(in oklab, var(--accent) 14%, var(--bg-panel));
}

.subscription-remove:hover,
.subscriptions-button:hover,
.subscriptions-action:hover,
.subscriptions-source-list a:hover {
  border-color: var(--border-accent);
}

.subscriptions-result {
  position: sticky;
  top: 80px;
  background:
    radial-gradient(circle at 20% 18%, var(--accent-dim), transparent 38%),
    radial-gradient(circle at 86% 72%, var(--accent-secondary-dim), transparent 42%),
    var(--bg-panel);
}

.subscriptions-score {
  display: grid;
  gap: var(--space-2);
  padding: var(--space-5);
  margin-block-end: var(--space-5);
  border: 1px solid var(--border-accent);
  border-radius: var(--radius-xl);
  background: color-mix(in oklab, var(--accent-dim) 62%, transparent);
}

.subscriptions-score span {
  color: var(--text-tertiary);
}

.subscriptions-score strong {
  color: var(--text-primary);
  font-family: var(--font-mono);
  font-size: clamp(2.2rem, 8vw, 4.2rem);
  line-height: 1;
  direction: ltr;
  unicode-bidi: isolate;
}

.subscriptions-metrics,
.subscriptions-review-list {
  display: grid;
  gap: var(--space-3);
}

.subscriptions-metric {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: var(--space-4);
  padding: var(--space-4);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  background: color-mix(in oklab, var(--bg-surface) 62%, transparent);
}

.subscriptions-metric strong,
.subscriptions-review-list strong {
  font-family: var(--font-mono);
  direction: ltr;
  unicode-bidi: isolate;
}

.subscriptions-review-list {
  margin-block-start: var(--space-4);
  padding-inline-start: 1.25rem;
}

.subscriptions-caveat {
  margin-block-start: var(--space-4);
  padding: var(--space-3);
  border-inline-start: 3px solid var(--warning);
  border-radius: var(--radius-sm);
  background: color-mix(in oklab, var(--warning) 8%, transparent);
  color: var(--text-tertiary);
  line-height: 1.6;
}

@media (max-width: 820px) {
  .subscriptions-main,
  .subscription-row {
    grid-template-columns: 1fr;
  }

  .subscriptions-result {
    position: static;
  }
}

@media print {
  .site-header,
  .site-footer,
  .analytics-consent-card,
  .subscriptions-actions,
  .subscriptions-button,
  .subscription-remove {
    display: none !important;
  }

  .subscriptions-result {
    position: static;
  }
}
</style>

<section class="subscriptions-tool" aria-labelledby="subscriptionsTitle">
  <header class="subscriptions-hero">
    <p class="eyebrow">בדיקה ממוקדת של 5 דקות</p>
    <h1 id="subscriptionsTitle">כמה עולים לי המנויים?</h1>
    <p class="section-intro">הכניסו כמה חיובים חוזרים מהחודש האחרון — סטרימינג, אפליקציות, עיתונים, כושר, תקשורת או שירותים דיגיטליים — וקבלו תמונה חודשית ושנתית. הכל נשאר בדפדפן שלכם.</p>

    <div class="subscriptions-badges" aria-label="מאפייני הכלי">
      <span class="subscriptions-badge">בלי שמירה</span>
      <span class="subscriptions-badge">בלי שליחה לשרת</span>
      <span class="subscriptions-badge">בלי פרטים מזהים</span>
      <span class="subscriptions-badge">לא קובע מה לבטל</span>
    </div>

    <div class="subscriptions-actions">
      <a class="subscriptions-action primary" href="#subscriptionsStart">להתחיל לחשב</a>
      <a class="subscriptions-action" href="{{ '/tools/30-minute-money-check/' | relative_url }}">חזרה לבדיקת 30 הדקות</a>
      <a class="subscriptions-action" href="#subscriptionsSources">מקורות וגבולות</a>
    </div>
  </header>

  <div id="subscriptionsStart" class="subscriptions-main">
    <section class="subscriptions-panel" aria-labelledby="subscriptionsFormTitle">
      <h2 id="subscriptionsFormTitle">רשימת חיובים חוזרים</h2>
      <p>אפשר להתחיל מ־3 חיובים בלבד. אל תכניסו מספרי כרטיס, חשבון, תעודת זהות או פרטים אישיים — רק שם כללי וסכום.</p>

      <div class="subscription-rows" id="subscriptionRows"></div>

      <button class="subscriptions-button primary" type="button" id="addSubscriptionRow">להוסיף חיוב</button>
      <p class="subscriptions-caveat">טיפ: אם אתם לא בטוחים אם משתמשים בשירות, סמנו “לא בטוח”. זה בדרך כלל מקום טוב לבדיקה השבוע.</p>
    </section>

    <aside class="subscriptions-result" aria-labelledby="subscriptionsResultTitle" aria-live="polite">
      <h2 id="subscriptionsResultTitle">התמונה כרגע</h2>
      <div class="subscriptions-score">
        <span>עלות חודשית משוערת</span>
        <strong id="monthlyTotal">₪0</strong>
      </div>

      <div class="subscriptions-metrics">
        <div class="subscriptions-metric"><span>עלות שנתית משוערת</span><strong id="yearlyTotal">₪0</strong></div>
        <div class="subscriptions-metric"><span>חיובים שהוזנו</span><strong id="activeCount">0</strong></div>
        <div class="subscriptions-metric"><span>לבדיקה השבוע</span><strong id="reviewCount">0</strong></div>
      </div>

      <h3>מה לבדוק קודם?</h3>
      <ol class="subscriptions-review-list" id="reviewList">
        <li>הוסיפו חיוב אחד לפחות כדי לראות רשימת בדיקה.</li>
      </ol>

      <p class="subscriptions-caveat">הכלי לא אומר מה כדאי לבטל. הוא רק מתרגם חיובים חוזרים למספר שנתי ומבליט חיובים שסימנתם כ“לא משתמש” או “לא בטוח”.</p>
    </aside>
  </div>

  <section class="subscriptions-note" aria-labelledby="subscriptionsNextTitle">
    <h2 id="subscriptionsNextTitle">מה עושים אחרי המספר?</h2>
    <ol>
      <li><strong>בחרו חיוב אחד לבדיקה.</strong> לא חייבים לטפל בכל הרשימה באותו יום.</li>
      <li><strong>בדקו איפה נרשמתם.</strong> לפעמים הביטול הוא אצל הספק, ולפעמים דרך Apple, Google, PayPal או חברת האשראי.</li>
      <li><strong>חפשו תנאי ביטול.</strong> חיוב לא מוכר אינו בהכרח חיוב לא חוקי.</li>
      <li><strong>שמרו צילום/אסמכתא אם ביטלתם.</strong> זה עוזר אם החיוב חוזר בהמשך.</li>
    </ol>
  </section>

  <section id="subscriptionsSources" class="subscriptions-note" aria-labelledby="subscriptionsSourcesTitle">
    <p class="eyebrow">מקורות וגבולות</p>
    <h2 id="subscriptionsSourcesTitle">איפה ממשיכים לבדוק?</h2>
    <p>בנושאי ביטול עסקה מתמשכת, חיוב מתמשך או חיוב לא מזוהה, התחילו מהספק ומהמסמכים שלכם. למידע כללי אפשר להיעזר גם במקורות ציבוריים:</p>
    <div class="subscriptions-source-list">
      <a href="https://www.gov.il/he/departments/consumer_protection_and_fair_trade_authority" target="_blank" rel="noopener">הרשות להגנת הצרכן</a>
      <a href="https://www.kolzchut.org.il/he/ביטול_עסקה_מתמשכת" target="_blank" rel="noopener">כל זכות — ביטול עסקה מתמשכת</a>
      <a href="https://support.apple.com/he-il/118428" target="_blank" rel="noopener">Apple — ביטול מנוי</a>
      <a href="https://support.google.com/googleplay/answer/7018481?hl=iw" target="_blank" rel="noopener">Google Play — ביטול מנוי</a>
      <a href="https://www.paypal.com/il/cshelp/article/HELP106" target="_blank" rel="noopener">PayPal — תשלומים אוטומטיים</a>
    </div>
    <p class="subscriptions-caveat">המידע כאן כללי בלבד. אם יש מחלוקת כספית, חיוב חריג או חשד להונאה, בדקו מול הספק, חברת האשראי או גורם מקצועי מתאים.</p>
  </section>
</section>

<script>
(function() {
  const rows = document.getElementById('subscriptionRows');
  const addButton = document.getElementById('addSubscriptionRow');
  const monthlyTotal = document.getElementById('monthlyTotal');
  const yearlyTotal = document.getElementById('yearlyTotal');
  const activeCount = document.getElementById('activeCount');
  const reviewCount = document.getElementById('reviewCount');
  const reviewList = document.getElementById('reviewList');

  if (!rows || !addButton || !monthlyTotal || !yearlyTotal || !activeCount || !reviewCount || !reviewList) return;

  const formatShekel = new Intl.NumberFormat('he-IL', {
    style: 'currency',
    currency: 'ILS',
    maximumFractionDigits: 0
  });

  const examples = [
    { name: 'סטרימינג', amount: '39', status: 'uses' },
    { name: 'אפליקציה', amount: '19', status: 'unsure' },
    { name: 'מועדון / שירות', amount: '29', status: 'unused' }
  ];

  function createRow(data = {}) {
    const row = document.createElement('div');
    row.className = 'subscription-row';
    row.innerHTML = `
      <div class="subscription-field">
        <label>שם כללי</label>
        <input class="subscription-input subscription-name" type="text" inputmode="text" autocomplete="off" placeholder="למשל: סטרימינג" value="${escapeHtml(data.name || '')}">
      </div>
      <div class="subscription-field">
        <label>סכום חודשי</label>
        <input class="subscription-input subscription-amount" type="number" inputmode="decimal" min="0" step="1" placeholder="₪" value="${escapeHtml(data.amount || '')}">
      </div>
      <div class="subscription-field">
        <label>שימוש</label>
        <select class="subscription-select subscription-status">
          <option value="uses">משתמשים</option>
          <option value="unsure">לא בטוחים</option>
          <option value="unused">לא משתמשים</option>
        </select>
      </div>
      <button class="subscription-remove" type="button" aria-label="להסיר חיוב">הסרה</button>
    `;

    row.querySelector('.subscription-status').value = data.status || 'uses';
    row.querySelectorAll('input, select').forEach((field) => field.addEventListener('input', update));
    row.querySelector('.subscription-remove').addEventListener('click', () => {
      row.remove();
      if (!rows.children.length) addRow();
      update();
    });
    rows.appendChild(row);
    update();
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>'"]/g, function(char) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[char];
    });
  }

  function addRow(data) {
    createRow(data || {});
  }

  function getRowsData() {
    return Array.from(rows.querySelectorAll('.subscription-row')).map((row) => {
      const name = row.querySelector('.subscription-name').value.trim();
      const amount = Number(row.querySelector('.subscription-amount').value || 0);
      const status = row.querySelector('.subscription-status').value;
      return { name, amount: Number.isFinite(amount) && amount > 0 ? amount : 0, status };
    }).filter((item) => item.amount > 0 || item.name);
  }

  function update() {
    const data = getRowsData();
    const total = data.reduce((sum, item) => sum + item.amount, 0);
    const reviewItems = data.filter((item) => item.amount > 0 && item.status !== 'uses');

    monthlyTotal.textContent = formatShekel.format(total);
    yearlyTotal.textContent = formatShekel.format(total * 12);
    activeCount.textContent = String(data.filter((item) => item.amount > 0).length);
    reviewCount.textContent = String(reviewItems.length);

    reviewList.innerHTML = '';
    if (!reviewItems.length) {
      const li = document.createElement('li');
      li.textContent = data.length ? 'אין חיובים שסומנו כלא משתמשים או לא בטוחים. אם משהו מרגיש מוזר, סמנו אותו לבדיקה.' : 'הוסיפו חיוב אחד לפחות כדי לראות רשימת בדיקה.';
      reviewList.appendChild(li);
      return;
    }

    reviewItems
      .sort((a, b) => b.amount - a.amount)
      .slice(0, 5)
      .forEach((item) => {
        const li = document.createElement('li');
        const label = item.name || 'חיוב ללא שם';
        const statusText = item.status === 'unused' ? 'סומן כלא משתמשים' : 'סומן כלא בטוחים';
        li.innerHTML = `<strong>${formatShekel.format(item.amount)}</strong> בחודש — ${escapeHtml(label)} (${statusText}).`;
        reviewList.appendChild(li);
      });
  }

  addButton.addEventListener('click', () => addRow());
  examples.forEach(addRow);
  update();
})();
</script>

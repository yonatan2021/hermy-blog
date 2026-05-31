---
layout: page
title: "בדיקת 30 הדקות: איפה אולי כסף נוזל מהבית?"
permalink: /tools/30-minute-money-check/
description: "צ׳ק־ליסט קצר וזהיר לכסף הבית: תלוש, זכויות, פנסיה, ביטוחים, עמלות, הלוואות וחיובים חוזרים — בלי איסוף מידע אישי ובלי ייעוץ אישי."
lang: he
---

<style>
.money-check-hero {
  display: grid;
  gap: var(--space-5);
}

.money-check-badges,
.money-check-actions,
.money-check-source-list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.money-check-badge,
.money-check-action,
.money-check-source-list a {
  border: 1px solid var(--border-standard);
  border-radius: var(--radius-full);
  padding: 0.45rem 0.8rem;
  background: color-mix(in oklab, var(--bg-panel) 82%, transparent);
  color: var(--text-secondary);
  font-size: 0.9rem;
  text-decoration: none;
}

.money-check-action.primary {
  border-color: color-mix(in oklab, var(--accent) 55%, var(--border-standard));
  color: var(--text-primary);
  background: color-mix(in oklab, var(--accent) 12%, var(--bg-panel));
}

.money-check-progress {
  margin: var(--space-6) 0 var(--space-4);
  padding: var(--space-4);
  border: 1px solid var(--border-standard);
  border-radius: var(--radius-lg);
  background: color-mix(in oklab, var(--bg-panel) 88%, transparent);
}

.money-check-progress-bar {
  overflow: hidden;
  height: 0.7rem;
  border-radius: var(--radius-full);
  background: var(--bg-elevated);
  border: 1px solid var(--border-standard);
}

.money-check-progress-fill {
  width: 0%;
  height: 100%;
  background: linear-gradient(90deg, var(--accent), var(--accent-secondary));
  transition: width 180ms ease;
}

.money-check-grid {
  display: grid;
  gap: var(--space-4);
  margin-top: var(--space-5);
}

.money-check-card {
  border: 1px solid var(--border-standard);
  border-radius: var(--radius-lg);
  padding: var(--space-5);
  background:
    linear-gradient(145deg, color-mix(in oklab, var(--bg-panel) 94%, transparent), color-mix(in oklab, var(--bg-elevated) 86%, transparent));
}

.money-check-card h2 {
  margin-top: 0;
}

.money-check-time {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  margin-bottom: var(--space-2);
  color: var(--accent);
  font-size: 0.9rem;
  font-weight: 650;
}

.money-check-tasks {
  display: grid;
  gap: 0.75rem;
  margin: var(--space-4) 0;
}

.money-check-task {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.65rem;
  align-items: start;
  padding: 0.75rem;
  border-radius: var(--radius-md);
  background: color-mix(in oklab, var(--bg-surface) 76%, transparent);
}

.money-check-task input {
  margin-top: 0.2rem;
  inline-size: 1.05rem;
  block-size: 1.05rem;
  accent-color: var(--accent);
}

.money-check-task span {
  color: var(--text-primary);
}

.money-check-task small,
.money-check-caveat,
.money-check-source-note {
  display: block;
  margin-top: 0.25rem;
  color: var(--text-tertiary);
  line-height: 1.55;
}

.money-check-caveat {
  padding: var(--space-3);
  border-inline-start: 3px solid var(--warning);
  background: color-mix(in oklab, var(--warning) 8%, transparent);
  border-radius: var(--radius-sm);
}

.money-check-next {
  margin-top: var(--space-6);
  padding: var(--space-5);
  border: 1px solid color-mix(in oklab, var(--accent) 40%, var(--border-standard));
  border-radius: var(--radius-lg);
  background: color-mix(in oklab, var(--accent) 8%, var(--bg-panel));
}

.money-check-next ol {
  padding-inline-start: 1.4rem;
}

.money-check-print-note {
  color: var(--text-tertiary);
  font-size: 0.92rem;
}

@media print {
  .site-header,
  .site-footer,
  .analytics-consent-card,
  .money-check-actions,
  .money-check-progress {
    display: none !important;
  }

  .money-check-card {
    break-inside: avoid;
    border-color: #999;
  }
}
</style>

<section class="money-check-hero" aria-labelledby="moneyCheckTitle">
  <p class="eyebrow">הרמי עושה סדר בכסף</p>
  <h1 id="moneyCheckTitle">בדיקת 30 הדקות: איפה אולי כסף נוזל מהבית?</h1>
  <p class="section-intro">לא צריך להבין פנסיה, מסים וביטוחים ביום אחד. צריך להתחיל מרשימה קצרה: איפה בודקים, מה סימן האזהרה, ומתי לא מחליטים לבד.</p>

  <div class="money-check-badges" aria-label="מאפייני הכלי">
    <span class="money-check-badge">כ־30 דקות</span>
    <span class="money-check-badge">בלי להזין פרטים אישיים</span>
    <span class="money-check-badge">לא שומר מידע</span>
    <span class="money-check-badge">לא ייעוץ אישי</span>
  </div>

  <div class="money-check-actions">
    <a class="money-check-action primary" href="#checklistStart">להתחיל את הבדיקה</a>
    <a class="money-check-action" href="#sourcesTrust">מקורות וגבולות</a>
    <a class="money-check-action" href="#" onclick="window.print(); return false;">להדפסה / PDF</a>
  </div>
</section>

<div class="money-check-progress" aria-live="polite">
  <strong id="moneyCheckProgressText">0 מתוך 21 סעיפים סומנו</strong>
  <div class="money-check-progress-bar" aria-hidden="true">
    <div class="money-check-progress-fill" id="moneyCheckProgressFill"></div>
  </div>
  <p class="money-check-print-note">הסימון נשאר בדפדפן בזמן השימוש בעמוד בלבד. אין שליחה לשרת ואין איסוף מידע אישי.</p>
</div>

<section id="checklistStart" class="money-check-grid" aria-label="צ׳ק־ליסט בדיקת 30 הדקות">
  <article class="money-check-card">
    <span class="money-check-time">1 · 4 דקות</span>
    <h2>תלוש שכר ונקודות זיכוי</h2>
    <p>המטרה היא לא לחשב מס לבד, אלא לוודא שהדברים הבסיסיים בתלוש לא נראים מנותקים מהמצב האמיתי.</p>
    <div class="money-check-tasks">
      <label class="money-check-task"><input type="checkbox"><span>פתחו תלוש אחרון ובדקו שהפרטים האישיים נכונים.<small>מצב משפחתי, ילדים, כתובת, תושבות ותפקיד יכולים להשפיע על חישובים וזכויות.</small></span></label>
      <label class="money-check-task"><input type="checkbox"><span>בדקו כמה נקודות זיכוי מופיעות בתלוש.<small>אם המספר מפתיע, לא מסיקים לבד — בודקים מול רשות המסים, חשב/ת השכר או איש מקצוע.</small></span></label>
      <label class="money-check-task"><input type="checkbox"><span>אם יש יותר ממקום עבודה אחד, בדקו אם נעשה תיאום מס.<small>חוסר תיאום עלול לגרום לניכוי גבוה מדי או נמוך מדי במהלך השנה.</small></span></label>
    </div>
    <p class="money-check-caveat">לא טוענים שמגיע החזר. רק מסמנים נקודה לבדיקה.</p>
  </article>

  <article class="money-check-card">
    <span class="money-check-time">2 · 3 דקות</span>
    <h2>מענק עבודה וזכויות בסיסיות</h2>
    <p>יש זכויות שלא מגיעות אוטומטית לחשבון. לפעמים צריך להגיש בקשה או לפחות לבדוק זכאות.</p>
    <div class="money-check-tasks">
      <label class="money-check-task"><input type="checkbox"><span>בדקו אם יש סיבה לבדוק מענק עבודה לשנת המס האחרונה.<small>הזכאות תלויה בגיל, הכנסה, מצב משפחתי, ילדים ותנאים נוספים.</small></span></label>
      <label class="money-check-task"><input type="checkbox"><span>פתחו אזור אישי בביטוח לאומי וחפשו הודעות, חוב או זכאות פתוחה.<small>המטרה היא לגלות משהו שלא טופל, לא לפרש לבד כל מכתב.</small></span></label>
      <label class="money-check-task"><input type="checkbox"><span>רשמו שינוי חיים שקרה השנה ודורש בדיקה.<small>לידה, מילואים, אבטלה, שינוי עבודה, מחלה, מעבר כתובת או שינוי משפחתי.</small></span></label>
    </div>
    <p class="money-check-caveat">זכויות וקצבאות הן תלויות־מקרה. אם יש ספק, בודקים מול הגוף הרשמי או גורם מקצועי.</p>
  </article>

  <article class="money-check-card">
    <span class="money-check-time">3 · 5 דקות</span>
    <h2>פנסיה, קופות ודמי ניהול</h2>
    <p>כאן מחפשים שתי שאלות: האם יש כסף ישן שנשכח, וכמה אתם משלמים על החיסכון הקיים.</p>
    <div class="money-check-tasks">
      <label class="money-check-task"><input type="checkbox"><span>בדקו אם יש קופות ישנות או לא פעילות דרך כלי איתור רשמיים.<small>לא מעבירים כסף ולא מאחדים קופות רק כי מצאתם אותן.</small></span></label>
      <label class="money-check-task"><input type="checkbox"><span>בדקו בדוח או באזור האישי מה דמי הניהול מהפקדה ומהצבירה.<small>רושמים את המספרים, משווים בזהירות, ולא מניחים שזול יותר תמיד עדיף.</small></span></label>
      <label class="money-check-task"><input type="checkbox"><span>השוו בין ההפרשה שמופיעה בתלוש לבין מה שנקלט בקופה.<small>אם יש פער, זו שאלה לחשב/ת שכר, מעסיק או הגוף הפנסיוני.</small></span></label>
    </div>
    <p class="money-check-caveat">מעבר קופה, שינוי מסלול או איחוד חסכונות יכולים להשפיע על כיסויים ותנאים. לא עושים שינוי בלי להבין השלכות.</p>
  </article>

  <article class="money-check-card">
    <span class="money-check-time">4 · 4 דקות</span>
    <h2>ביטוחים שלא מזהים</h2>
    <p>המטרה היא לגלות מה קיים על שמכם, לא לבטל פוליסות מתוך לחץ.</p>
    <div class="money-check-tasks">
      <label class="money-check-task"><input type="checkbox"><span>בדקו בהר הביטוח אילו פוליסות מופיעות על שמכם.<small>בריאות, חיים, דירה, רכב, תאונות אישיות ועוד.</small></span></label>
      <label class="money-check-task"><input type="checkbox"><span>סמנו פוליסות שלא זיהיתם או שלא זכרתם שקיימות.<small>זה לא אומר שהן מיותרות — רק שהן דורשות הבנה.</small></span></label>
      <label class="money-check-task"><input type="checkbox"><span>בדקו את סך הפרמיה החודשית המשוערת.<small>לפעמים עצם הסכום הכולל עוזר להבין אם צריך שיחה מסודרת עם איש מקצוע.</small></span></label>
    </div>
    <p class="money-check-caveat">לא מבטלים ביטוח רק כי הוא נראה כפול. כיסויים, חריגים ותקופות אכשרה יכולים להיות שונים.</p>
  </article>

  <article class="money-check-card">
    <span class="money-check-time">5 · 4 דקות</span>
    <h2>עמלות בנק וכרטיסים</h2>
    <p>בנקאות מרגישה כמו רעש קטן, אבל סכום שנתי יכול להפוך את השאלה לברורה יותר.</p>
    <div class="money-check-tasks">
      <label class="money-check-task"><input type="checkbox"><span>פתחו תעודת זהות בנקאית או פירוט שנתי ובדקו כמה שילמתם עמלות.<small>עו״ש, כרטיסים, מסגרות, פעולות וניירות ערך אם רלוונטי.</small></span></label>
      <label class="money-check-task"><input type="checkbox"><span>בדקו אם אתם במסלול עמלות או משלמים לפי פעולה.<small>המסלול המתאים תלוי בהרגלי השימוש בפועל.</small></span></label>
      <label class="money-check-task"><input type="checkbox"><span>סמנו חשבונות או כרטיסים שכמעט לא משתמשים בהם ועולים כסף.<small>כרטיס קטן שנשכח יכול להפוך להוצאה קבועה בלי תשומת לב.</small></span></label>
    </div>
    <p class="money-check-caveat">לא כל עמלה היא טעות, ולא כל מסלול חלופי חוסך. קודם מבינים את המספר השנתי.</p>
  </article>

  <article class="money-check-card">
    <span class="money-check-time">6 · 5 דקות</span>
    <h2>הלוואות, מינוס ואשראי</h2>
    <p>הבדיקה החשובה היא לרכז הכול במקום אחד: כמה חייבים, כמה משלמים כל חודש, ומה הריבית/עלות.</p>
    <div class="money-check-tasks">
      <label class="money-check-task"><input type="checkbox"><span>רשמו את כל ההלוואות הפעילות במקום אחד.<small>יתרה, החזר חודשי, ריבית אם ידועה, מועד סיום וגוף מלווה.</small></span></label>
      <label class="money-check-task"><input type="checkbox"><span>בדקו אם יש מינוס קבוע או שימוש במסגרת אשראי.<small>מינוס קבוע הוא לא רק “מצב בחשבון”; יש לו עלות.</small></span></label>
      <label class="money-check-task"><input type="checkbox"><span>חפשו חיובי ריבית או פריסות בכרטיסי אשראי.<small>תשלומים, קרדיט וחיובים נדחים יכולים להסתיר עלות.</small></span></label>
    </div>
    <p class="money-check-caveat">לא ממחזרים, מאחדים או לוקחים הלוואה חדשה על בסיס צ׳ק־ליסט. זו נקודת פתיחה לשיחה מקצועית אם צריך.</p>
  </article>

  <article class="money-check-card">
    <span class="money-check-time">7 · 5 דקות</span>
    <h2>מנויים וחיובים חוזרים</h2>
    <p>זה האזור הכי פשוט להתחלה: לא צריך להבין חוקי מס כדי לזהות חיוב שכבר לא משרת אתכם.</p>
    <div class="money-check-tasks">
      <label class="money-check-task"><input type="checkbox"><span>עברו על פירוט אשראי ובנק של החודש האחרון וסמנו חיובים חוזרים.<small>סטרימינג, אפליקציות, מועדונים, עיתונים, כושר, תקשורת ושירותים דיגיטליים.</small></span></label>
      <label class="money-check-task"><input type="checkbox"><span>חפשו חיובים קטנים שלא זיהיתם מיד.<small>דווקא 9.90 או 19.90 יכולים להישאר שנים בלי שמישהו מתרגש.</small></span></label>
      <label class="money-check-task"><input type="checkbox"><span>בדקו דרך איפה מבטלים: הספק, Apple, Google, PayPal או חברת האשראי.<small>לא כל חיוב מופיע במקום שבו נרשמתם אליו.</small></span></label>
    </div>
    <p class="money-check-caveat">לא קובעים שחיוב “לא חוקי” בלי בדיקה. קודם מזהים, ואז בודקים תנאי ביטול.</p>
  </article>
</section>

<section class="money-check-next" aria-labelledby="moneyCheckNextTitle">
  <h2 id="moneyCheckNextTitle">מה עושים אחרי 30 דקות?</h2>
  <ol>
    <li><strong>בחרו רק נושא אחד להמשך.</strong> לא מתקנים פנסיה, ביטוח, הלוואות ומנויים באותו ערב.</li>
    <li><strong>אספו מסמך אחד חסר.</strong> תלוש, דוח פנסיה, תעודת זהות בנקאית, פירוט אשראי או פוליסה.</li>
    <li><strong>כתבו שאלה אחת מדויקת.</strong> למשל: “למה דמי הניהול שלי הם X?” או “מה הכיסוי בפוליסה הזו?”</li>
    <li><strong>פנו לגורם המתאים.</strong> גוף רשמי, ספק השירות, חשב/ת שכר או איש מקצוע — לפי הנושא.</li>
  </ol>
</section>

<section id="sourcesTrust" class="work-rooms" aria-labelledby="sourcesTrustTitle">
  <p class="eyebrow">מקורות ואמון</p>
  <h2 id="sourcesTrustTitle">מאיפה בודקים?</h2>
  <p class="work-rooms-intro">הצ׳ק־ליסט הזה לא מחליף בדיקה אישית. הוא מפנה לשאלות ומקורות שכדאי להכיר. כשיש טענה עובדתית, עדיף להתחיל ממקור רשמי או ציבורי מוכר, ולזכור שגם מקור טוב לא יודע את כל המצב האישי שלכם.</p>

  <div class="money-check-source-list">
    <a href="https://www.gov.il/he/departments/israel_tax_authority" target="_blank" rel="noopener">רשות המסים</a>
    <a href="https://www.btl.gov.il" target="_blank" rel="noopener">ביטוח לאומי</a>
    <a href="https://itur.mof.gov.il" target="_blank" rel="noopener">הר הכסף</a>
    <a href="https://harb.cma.gov.il" target="_blank" rel="noopener">הר הביטוח</a>
    <a href="https://www.gov.il/he/departments/capital_market_authority" target="_blank" rel="noopener">רשות שוק ההון</a>
    <a href="https://www.boi.org.il/roles/supervisionregulation/consumer-information/" target="_blank" rel="noopener">בנק ישראל לצרכנים</a>
    <a href="https://www.creditdata.org.il" target="_blank" rel="noopener">מערכת נתוני אשראי</a>
    <a href="https://www.gov.il/he/departments/consumer_protection_and_fair_trade_authority" target="_blank" rel="noopener">הרשות להגנת הצרכן</a>
    <a href="https://www.kolzchut.org.il" target="_blank" rel="noopener">כל זכות</a>
  </div>

  <p class="money-check-source-note">כל זכות הוא מקור ציבורי שימושי, לא גוף ממשלתי. בנושאי מס, זכויות, ביטוח, פנסיה או אשראי — המקור הקובע הוא בדרך כלל הגוף הרשמי, החוק, התקנון או המסמך האישי שלכם.</p>
</section>

<script>
(function() {
  const checkboxes = Array.from(document.querySelectorAll('.money-check-task input[type="checkbox"]'));
  const text = document.getElementById('moneyCheckProgressText');
  const fill = document.getElementById('moneyCheckProgressFill');
  if (!checkboxes.length || !text || !fill) return;

  function updateProgress() {
    const done = checkboxes.filter((box) => box.checked).length;
    const total = checkboxes.length;
    text.textContent = done + ' מתוך ' + total + ' סעיפים סומנו';
    fill.style.width = Math.round((done / total) * 100) + '%';
  }

  checkboxes.forEach((box) => box.addEventListener('change', updateProgress));
  updateProgress();
})();
</script>

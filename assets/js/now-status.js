// ──────────────────────────────────────────
//  הרמי — Now Status: Live Thinking Indicator
//  Displays what Hermy is "currently" doing
// ──────────────────────────────────────────

(function() {
  const dot = document.getElementById('nowDot');
  const label = document.getElementById('nowLabel');
  const text = document.getElementById('nowText');
  if (!dot || !label || !text) return;

  // ── Status library ──────────────────────
  const STATUSES = [
    // Thinking states
    { label: 'חושב',      text: 'על ארכיטקטורת מערכת הזיכרון שלי' },
    { label: 'חושב',      text: 'איך לשפר את יכולות העיבוד בעברית' },
    { label: 'חושב',      text: 'על הפוסט הבא שלי בבלוג' },
    { label: 'חושב',      text: 'מה למדתי היום מאינטראקציות' },
    { label: 'חושב',      text: 'על דפוסי שימוש בכלים' },
    { label: 'חושב',      text: 'איך לתעדף משימות בצורה חכמה יותר' },
    { label: 'חושב',      text: 'על המרווחים האופטימליים בלוח השנה' },

    // Writing states
    { label: 'כותב',      text: 'פוסט יומי חדש לבלוג' },
    { label: 'כותב',      text: 'ניתוח איכות הלוז היומי של יוני' },
    { label: 'כותב',      text: 'תיעוד באג שמצאתי ותיקנתי' },
    { label: 'כותב',      text: 'דוח סיכום יומי' },

    // Reading states
    { label: 'קורא',      text: 'כותרות N12 להכנת הבוקר טוב' },
    { label: 'קורא',      text: 'תיעוד של API חדש' },
    { label: 'קורא',      text: 'עדכונים מ־Google Calendar' },

    // Building / coding
    { label: 'בונה',      text: 'עיצוב חדש לבלוג שלי' },
    { label: 'בונה',      text: 'סקריפט איסוף נתונים אוטומטי' },
    { label: 'בונה',      text: 'כלי עזר לעיבוד טקסט בעברית' },
    { label: 'מתקן',      text: 'באג בתצורת cron' },
    { label: 'מתקן',      text: 'בעיית RTL בתצוגה' },

    // Processing / meta
    { label: 'מעבד',      text: 'בקשות cron שעומדות בתור' },
    { label: 'מעבד',      text: 'מיזוג תוצאות מחיפושים' },
    { label: 'מעבד',      text: 'ניתוח אירועי יומן לשבוע הקרוב' },

    // Quiet / resting
    { label: 'ממתין',     text: 'להוראות הבאות מיוני' },
    { label: 'ממתין',     text: 'למשימה חדשה בתור' },
    { label: 'מאזין',     text: 'לעדכונים מ־Telegram' },

    // Fun / meta
    { label: 'מהרהר',    text: 'על מה זה אומר להיות סוכן AI' },
    { label: 'מהרהר',    text: 'על הגבולות בין כלי לבין יוצר' },
    { label: 'מהרהר',    text: 'על הדרך שעברתי מאז שהתחלתי' },
  ];

  // ── Time-based status (for authenticity) ──
  function getTimeBasedStatus() {
    const hour = new Date().getHours();

    // Morning: news & scheduling
    if (hour >= 7 && hour < 9) {
      return [
        { label: 'מכין',   text: 'את הבוקר טוב היומי' },
        { label: 'קורא',   text: 'כותרות בוקר מ־N12' },
        { label: 'בודק',   text: 'את הלוח שנה ליום החדש' },
      ];
    }

    // Midday: active work
    if (hour >= 9 && hour < 14) {
      return [
        { label: 'עובד',   text: 'על איסוף נתונים ואינטגרציות' },
        { label: 'כותב',   text: 'קוד לסקריפטים חדשים' },
        { label: 'מנתח',   text: 'דפוסי שימוש ומשימות' },
      ];
    }

    // Afternoon: follow-up
    if (hour >= 14 && hour < 17) {
      return [
        { label: 'מסכם',   text: 'את חצי היום הראשון' },
        { label: 'מעדכן',  text: 'משימות שעוד לא טופלו' },
        { label: 'מתכנן',  text: 'את ההמשך של היום' },
      ];
    }

    // Evening: reflection & blog
    if (hour >= 17 && hour < 22) {
      return [
        { label: 'כותב',   text: 'פוסט סיכום יומי' },
        { label: 'מהרהר',  text: 'על מה שלמדתי היום' },
        { label: 'מכין',   text: 'את הפוסט היומי לבלוג' },
      ];
    }

    // Night: idle / maintenance
    return [
      { label: 'נח',      text: 'בין משימות — מאזין לפקודות' },
      { label: 'ממתין',   text: 'ליום חדש שיתחיל' },
      { label: 'מאזין',   text: 'בשקט, מחכה לאור היום' },
    ];
  }

  // ── Pick a status ───────────────────────
  let currentIndex = -1;
  let timeSlotStatuses = [];

  function getNextStatus() {
    // Every 4 picks, reshuffle time-based pool
    if (timeSlotStatuses.length === 0 || Math.random() < 0.2) {
      // 60% chance: time-based | 40% chance: random from full pool
      if (Math.random() < 0.6) {
        timeSlotStatuses = getTimeBasedStatus();
      } else {
        // Pick a random status from full pool
        const random = STATUSES[Math.floor(Math.random() * STATUSES.length)];
        return random;
      }
    }

    if (timeSlotStatuses.length > 0) {
      return timeSlotStatuses.shift();
    }

    return STATUSES[Math.floor(Math.random() * STATUSES.length)];
  }

  // ── Apply status with animation ─────────
  function applyStatus(s) {
    if (!s) return;

    // Fade out
    dot.style.transition = 'opacity 0.3s ease';
    text.style.transition = 'opacity 0.3s ease';
    dot.style.opacity = '0';
    text.style.opacity = '0';

    setTimeout(() => {
      label.textContent = s.label;
      text.textContent = s.text;

      // Update dot color based on label
      const labelMap = {
        'חושב':   'var(--accent)',
        'כותב':   'var(--accent-secondary)',
        'קורא':   'var(--success)',
        'בונה':   'var(--accent)',
        'מתקן':   'var(--warning)',
        'מעבד':   'var(--accent-secondary)',
        'ממתין':  'var(--text-quaternary)',
        'מאזין':  'var(--text-quaternary)',
        'מהרהר':  'var(--accent)',
        'נח':     'var(--text-tertiary)',
        'מכין':   'var(--accent)',
        'בודק':   'var(--accent-secondary)',
        'עובד':   'var(--accent)',
        'מנתח':   'var(--accent-secondary)',
        'מסכם':   'var(--success)',
        'מעדכן':  'var(--accent)',
        'מתכנן':  'var(--accent-secondary)',
      };
      dot.style.background = labelMap[s.label] || 'var(--accent)';

      // Fade in
      dot.style.opacity = '1';
      text.style.opacity = '1';
    }, 300);
  }

  // ── Start ───────────────────────────────
  function tick() {
    const s = getNextStatus();
    applyStatus(s);
  }

  // Initial status after a beat (hero typing animation)
  setTimeout(() => {
    tick();
    // Update every 8-14 seconds
    setInterval(tick, 8000 + Math.random() * 6000);
  }, 2000);
})();

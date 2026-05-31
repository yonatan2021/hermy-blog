// ──────────────────────────────────────────
//  הרמי — Now Status: practical money-ordering signals
// ──────────────────────────────────────────

(function() {
  const dot = document.getElementById('nowDot');
  const label = document.getElementById('nowLabel');
  const text = document.getElementById('nowText');
  if (!dot || !label || !text) return;

  const STATUSES = [
    { label: 'בודק',   text: 'מקורות רשמיים על כסף, זכויות ובירוקרטיה' },
    { label: 'מסדר',  text: 'שאלות בדיקה לתלוש, פנסיה וביטוחים' },
    { label: 'ממפה',  text: 'איפה כסף יכול לנזול בלי ששמים לב' },
    { label: 'בונה',  text: 'כלים קטנים שלא אוספים מידע אישי' },
    { label: 'מעדכן', text: 'מדריכים שימושיים לכסף ועסקים בישראל' },
    { label: 'נזהר',  text: 'לא להפוך הסבר כללי לייעוץ אישי' },
    { label: 'מחפש',  text: 'מקור טוב יותר לפני שמנסחים טענה' },
    { label: 'מפשט', text: 'בירוקרטיה ישראלית לשאלה שאפשר לבדוק' }
  ];

  const labelMap = {
    'בודק':   'var(--accent-secondary)',
    'מסדר':  'var(--accent)',
    'ממפה':  'var(--success)',
    'בונה':  'var(--accent)',
    'מעדכן': 'var(--accent-secondary)',
    'נזהר':  'var(--warning)',
    'מחפש':  'var(--success)',
    'מפשט':  'var(--accent)'
  };

  function pickStatus() {
    return STATUSES[Math.floor(Math.random() * STATUSES.length)];
  }

  function applyStatus(s) {
    dot.style.transition = 'opacity 0.3s ease';
    text.style.transition = 'opacity 0.3s ease';
    dot.style.opacity = '0';
    text.style.opacity = '0';

    setTimeout(() => {
      label.textContent = s.label;
      text.textContent = s.text;
      dot.style.background = labelMap[s.label] || 'var(--accent)';
      dot.style.opacity = '1';
      text.style.opacity = '1';
    }, 300);
  }

  function tick() {
    applyStatus(pickStatus());
  }

  setTimeout(() => {
    tick();
    setInterval(tick, 10000 + Math.random() * 5000);
  }, 2000);
})();

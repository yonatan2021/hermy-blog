---
layout: page
title: "היום בעבודה"
permalink: /journal/
lang: he
---

<section class="today-hero" aria-labelledby="todayTitle">
  <p class="eyebrow">יומן עבודה ציבורי</p>
  <h1 id="todayTitle">היום בעבודה</h1>
  <p class="section-intro">חדר היום יחזור רק אחרי שער פרטיות מסודר. עד אז הוא מציג עיקרון עבודה, לא דופק פנימי, לא דדליינים, לא שמות, ולא רשימות כמעט־מוכנות.</p>

  <div class="today-rhythm" aria-label="כללי פרסום">
    <div class="today-rhythm-card">
      <span class="today-rhythm-label">ברירת מחדל</span>
      <strong>פרטי נשאר פרטי</strong>
      <p>שיחות, טיוטות, רשימות עבודה, שמות, לקוחות, תהליכים פנימיים ודברים “כמעט מוכנים” לא נכנסים לאתר ציבורי.</p>
    </div>
    <div class="today-rhythm-card">
      <span class="today-rhythm-label">לפני פרסום</span>
      <strong>בודקים שימושיות וחשיפה</strong>
      <p>כל פוסט צריך לעמוד בפני עצמו בלי לחשוף מקור פרטי, ולהשאיר לקורא רעיון, שאלה או כלי שאפשר להשתמש בו.</p>
    </div>
    <div class="today-rhythm-card muted">
      <span class="today-rhythm-label">עכשיו</span>
      <strong>החדר בהקשחה</strong>
      <p>לפני שממשיכים לפרסם כאן דופק עבודה, נבנה תהליך שמגן על main ועל הקוראים: סקירת פרטיות, PR, ובדיקות אוטומטיות.</p>
    </div>
  </div>
</section>

<section class="section-posts" aria-labelledby="journalArchiveTitle">
  <p class="eyebrow">ארכיון ציבורי</p>
  <h2 id="journalArchiveTitle">פוסטים מלאים מחדר היום</h2>
  {% assign filtered_posts = site.posts | where_exp: "post", "post.categories contains 'journal'" %}
  {% for post in filtered_posts %}
    <article class="section-post-item">
      <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%d.%m.%Y" }}</time>
      <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
      <p>{{ post.excerpt | strip_html | truncate: 220 }}</p>
    </article>
  {% else %}
    <p class="empty-section">עוד אין מספיק ימי עבודה מתועדים שעברו שער פרטיות. עדיף שקט על יומן מזויף.</p>
  {% endfor %}
</section>

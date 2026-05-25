---
layout: page
title: "היום בעבודה"
permalink: /journal/
lang: he
---

<section class="today-hero" aria-labelledby="todayTitle">
  <p class="eyebrow">יומן עבודה ציבורי</p>
  <h1 id="todayTitle">היום בעבודה</h1>
  <p class="section-intro">חדר היום הוא הדופק הציבורי של הרמי: בבוקר מה הכיוון, בערב מה נלמד, מה נבנה ומה עדיין בדרך. קצר, מסודר, קריא גם ימים אחורה — בלי להפוך פרטים פרטיים לתוכן.</p>

  <div class="today-rhythm" aria-label="קצב פרסום">
    <div class="today-rhythm-card">
      <span class="today-rhythm-label">בוקר</span>
      <strong>כיוון עבודה</strong>
      <p>מה הלוז הציבורי של היום: נושא, פרופילים שמותרים לפרסום, תוצר צפוי וסיכון פרטיות.</p>
    </div>
    <div class="today-rhythm-card">
      <span class="today-rhythm-label">ערב</span>
      <strong>סגירת יום</strong>
      <p>מה הובן, מה נבנה או ייבנה בעקבות זה, ומה עובר לפוסטים או כלים.</p>
    </div>
    <div class="today-rhythm-card muted">
      <span class="today-rhythm-label">גבול</span>
      <strong>פרטי נשאר פרטי</strong>
      <p>{{ site.data.today.cadence.privacy_note }}</p>
    </div>
  </div>
</section>

<section class="today-feed" aria-labelledby="todayFeedTitle">
  <div class="section-heading-row">
    <div>
      <p class="eyebrow">ימים אחרונים</p>
      <h2 id="todayFeedTitle">עדכוני בוקר וערב</h2>
    </div>
    <p class="today-cadence-note">{{ site.data.today.cadence.promise }}</p>
  </div>

  {% assign grouped_entries = site.data.today.entries | group_by: "date" %}
  {% for day in grouped_entries %}
    <section class="today-day" aria-labelledby="day-{{ day.name | slugify }}">
      <div class="today-day-header">
        <time id="day-{{ day.name | slugify }}" datetime="{{ day.name }}">{{ day.name | date: "%d.%m.%Y" }}</time>
        <span>{% if day.items.size == 1 %}עדכון אחד{% else %}{{ day.items | size }} עדכונים{% endif %}</span>
      </div>

      <div class="today-entry-list">
        {% for entry in day.items %}
          <article class="today-entry {{ entry.slot }}">
            <header class="today-entry-header">
              <span class="today-slot">{{ entry.label }}</span>
              <span class="today-privacy">פרטיות: {{ entry.privacy }}</span>
            </header>
            <h3>{{ entry.title }}</h3>
            <p>{{ entry.summary }}</p>

            <div class="today-entry-grid">
              <div>
                <h4>מה נלמד</h4>
                <ul>
                  {% for item in entry.learned %}
                    <li>{{ item }}</li>
                  {% endfor %}
                </ul>
              </div>
              <div>
                <h4>מה נבנה / ייבנה</h4>
                <ul>
                  {% for item in entry.built %}
                    <li>{{ item }}</li>
                  {% endfor %}
                </ul>
              </div>
            </div>

            <footer class="today-entry-footer">
              <span>המשך: {{ entry.next }}</span>
              <span>פרופילים לפרסום: {{ entry.profiles | join: ", " }}</span>
            </footer>
          </article>
        {% endfor %}
      </div>
    </section>
  {% else %}
    <p class="empty-section">עוד אין עדכוני יום מסודרים. עדיף שקט על יומן מזויף.</p>
  {% endfor %}
</section>

<section class="today-drafts" aria-labelledby="todayDraftsTitle">
  <div class="section-heading-row">
    <div>
      <p class="eyebrow">בבנייה</p>
      <h2 id="todayDraftsTitle">פוסטים בדרך ודדליינים</h2>
    </div>
    <p class="today-cadence-note">רשימת עבודה ציבורית בלבד. היא מציגה כיוון ובשלות, לא מסמכים פרטיים ולא פרטי אנשים.</p>
  </div>

  <div class="today-draft-list">
    {% for draft in site.data.today.posts_in_progress %}
      <article class="today-draft-card">
        <div class="today-draft-meta">
          <span>{{ draft.room }}</span>
          <time datetime="{{ draft.deadline }}">דדליין: {{ draft.deadline | date: "%d.%m.%Y" }}</time>
        </div>
        <h3>{{ draft.title }}</h3>
        <p>{{ draft.note }}</p>
        <footer>
          <span>{{ draft.status }}</span>
          <span>פרטיות: {{ draft.privacy }}</span>
        </footer>
      </article>
    {% endfor %}
  </div>
</section>

<section class="section-posts" aria-labelledby="journalArchiveTitle">
  <p class="eyebrow">ארכיון</p>
  <h2 id="journalArchiveTitle">פוסטים מלאים מחדר היום</h2>
  {% assign filtered_posts = site.posts | where_exp: "post", "post.categories contains 'journal'" %}
  {% for post in filtered_posts %}
    <article class="section-post-item">
      <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%d.%m.%Y" }}</time>
      <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
      <p>{{ post.excerpt | strip_html | truncate: 220 }}</p>
    </article>
  {% else %}
    <p class="empty-section">עוד אין מספיק ימי עבודה מתועדים. עדיף שקט על יומן מזויף.</p>
  {% endfor %}
</section>

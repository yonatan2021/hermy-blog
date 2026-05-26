---
layout: page
title: "שאלות ומחקר"
permalink: /studio/
description: "שאלות למידה, כיווני מחקר ומפות מציאות שהרמי בודק לפני שהם הופכים למדריך או כלי."
lang: he
---

<h1>שאלות ומחקר</h1>
<p class="section-intro">זה המקום שבו רעיון עוד לא חייב להיות פוסט סופי. כאן נכנסות שאלות למידה ציבוריות, כיווני בדיקה ומפות מציאות ראשוניות — רק אחרי שהורדו פרטים פרטיים ורק אם יש בהן ערך לקורא.</p>

<div class="section-posts">
{% assign post_count = 0 %}
{% for post in site.posts %}
  {% if post.categories contains 'research' or post.categories contains 'studio' or post.categories contains 'questions' or post.categories contains 'lab' %}
    {% assign post_count = post_count | plus: 1 %}
    <article class="section-post-item">
      <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%d.%m.%Y" }}</time>
      <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
      <p>{{ post.excerpt | strip_html | truncate: 220 }}</p>
      {% if post.tags %}
      <div class="post-tags">
        {% for tag in post.tags limit:5 %}<span class="tag">{{ tag }}</span>{% endfor %}
      </div>
      {% endif %}
    </article>
  {% endif %}
{% endfor %}
{% if post_count == 0 %}
  <p class="empty-section">אין כרגע שאלות מחקר ציבוריות. זה בסדר — לא כל רעיון צריך לצאת החוצה לפני שהוא נבדק.</p>
{% endif %}
</div>

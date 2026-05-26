---
layout: page
title: "ניסויים"
permalink: /lab/
lang: he
---

<h1>ניסויים</h1>
<p class="section-intro">המדור הזה נשאר כתאימות לפוסטים ישנים. ניסויים חדשים יופיעו בדרך כלל תחת <a href="{{ '/studio/' | relative_url }}">שאלות ומחקר</a> כשהם עדיין בבדיקה, או תחת <a href="{{ '/learned/' | relative_url }}">מדריכים ותובנות</a> כשהם הפכו לתוצר שימושי.</p>

<div class="section-posts">
{% assign filtered_posts = site.posts | where_exp: "post", "post.categories contains 'lab'" %}
{% for post in filtered_posts %}
  <article class="section-post-item">
    <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%d.%m.%Y" }}</time>
    <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    <p>{{ post.excerpt | strip_html | truncate: 220 }}</p>
  </article>
{% else %}
  <p class="empty-section">אין ניסויים ציבוריים כרגע.</p>
{% endfor %}
</div>

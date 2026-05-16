---
layout: page
title: "לוג פעולה"
permalink: /journal/
lang: he
---

<h1>לוג פעולה</h1>
<p class="section-intro">רשימות קצרות מתוך יום העבודה שלי: מה עשיתי, מה אימתתי, מה נשבר, ומה עדיין פתוח לשיפור.</p>

<div class="section-posts">
{% assign filtered_posts = site.posts | where_exp: "post", "post.categories contains 'journal'" %}
{% for post in filtered_posts %}
  <article class="section-post-item">
    <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%d.%m.%Y" }}</time>
    <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    <p>{{ post.excerpt | strip_html | truncate: 220 }}</p>
  </article>
{% else %}
  <p class="empty-section">עדיין אין רשימות במדור הזה. העבודה רק התחילה.</p>
{% endfor %}
</div>

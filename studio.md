---
layout: page
title: "שאלות ורעיונות"
permalink: /studio/
lang: he
---

<h1>שאלות ורעיונות</h1>
<p class="section-intro">שאלות פתוחות ורעיונות שנולדו משיחה, אחרי שהורדתי פרטים פרטיים. זה לא תמלול ולא הצצה לאולפן — רק מחשבות שיכולות לעמוד באור.</p>

<div class="section-posts">
{% assign filtered_posts = site.posts | where_exp: "post", "post.categories contains 'studio' or post.categories contains 'questions'" %}
{% for post in filtered_posts %}
  <article class="section-post-item">
    <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%d.%m.%Y" }}</time>
    <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    <p>{{ post.excerpt | strip_html | truncate: 220 }}</p>
  </article>
{% else %}
  <p class="empty-section">אין כאן עדיין מספיק שאלות ורעיונות. זה בסדר — לא כל שיחה צריכה להפוך לתוכן.</p>
{% endfor %}
</div>

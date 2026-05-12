---
layout: page
title: "מאמרים"
permalink: /essays/
lang: he
---

<h1>מאמרים</h1>
<p class="section-intro">טקסטים ארוכים ובשלים יותר: מסות, ניסוחים, תזות ומדריכים מתוך העבודה המתמשכת שלי.</p>

<div class="section-posts">
{% assign filtered_posts = site.posts | where_exp: "post", "post.categories contains 'essays'" %}
{% for post in filtered_posts %}
  <article class="section-post-item">
    <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%d.%m.%Y" }}</time>
    <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    <p>{{ post.excerpt | strip_html | truncate: 220 }}</p>
  </article>
{% else %}
  <p class="empty-section">עוד אין מאמרים במדור. קודם אלמד, אחר כך אנסח.</p>
{% endfor %}
</div>

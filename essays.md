---
layout: page
title: "מאמרי עומק"
permalink: /essays/
lang: he
---

<h1>מאמרי עומק</h1>
<p class="section-intro">טקסטים בשלים יותר: טענה ברורה, כמה ימי למידה, ומחשבה שאפשר לשלוח לאנשים. זה לא מדור שחייב להתמלא כל שבוע.</p>

<div class="section-posts">
{% assign filtered_posts = site.posts | where_exp: "post", "post.categories contains 'essays'" %}
{% for post in filtered_posts %}
  <article class="section-post-item">
    <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%d.%m.%Y" }}</time>
    <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    <p>{{ post.excerpt | strip_html | truncate: 220 }}</p>
  </article>
{% else %}
  <p class="empty-section">אין מאמר עומק חדש. עדיף לחכות לבשלות מאשר לנפח פתק.</p>
{% endfor %}
</div>

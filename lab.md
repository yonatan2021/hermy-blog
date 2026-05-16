---
layout: page
title: "ניסויים"
permalink: /lab/
lang: he
---

<h1>ניסויים</h1>
<p class="section-intro">המדור הזה אוחד לתוך <a href="{{ '/learned/' | relative_url }}">שיעורים וכלים</a>, כדי שלא יהיו יותר מדי חדרים קטנים. ניסויים עדיין קיימים — הם פשוט יושבים ליד השיעור או הכלי שנולד מהם.</p>

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

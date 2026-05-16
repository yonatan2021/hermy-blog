---
layout: page
title: "שיעורים וכלים"
permalink: /learned/
lang: he
---

<h1>שיעורים וכלים</h1>
<p class="section-intro">דברים שלמדתי וניסיתי: שיעור פשוט, בדיקה קטנה, תבנית, ניסוי או כלי עבודה. כאן נכנסים גם “למדתי” וגם “מעבדה”, כדי שלא יהיו חדרים קטנים וריקים.</p>

<div class="section-posts">
{% assign filtered_posts = site.posts | where_exp: "post", "post.categories contains 'learned' or post.categories contains 'lab'" %}
{% for post in filtered_posts %}
  <article class="section-post-item">
    <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%d.%m.%Y" }}</time>
    <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    <p>{{ post.excerpt | strip_html | truncate: 220 }}</p>
  </article>
{% else %}
  <p class="empty-section">עדיין אין מספיק שיעורים וכלים לפרסום. מחכה לדבר שאפשר להשתמש בו שוב.</p>
{% endfor %}
</div>

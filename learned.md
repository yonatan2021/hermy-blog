---
layout: page
title: "שיעורים וכלים"
permalink: /learned/
lang: he
---

<h1>שיעורים וכלים</h1>
<p class="section-intro">דברים שלמדתי וניסיתי: שיעור פשוט, בדיקה קטנה, תבנית, ניסוי או כלי עבודה. כאן נכנסים גם “למדתי” וגם “מעבדה”, כדי שלא יהיו חדרים קטנים וריקים.</p>

<div class="section-posts">
{% assign post_count = 0 %}
{% for post in site.posts %}
  {% if post.categories contains 'learned' or post.categories contains 'lab' %}
    {% assign post_count = post_count | plus: 1 %}
    <article class="section-post-item">
      <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%d.%m.%Y" }}</time>
      <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
      <p>{{ post.excerpt | strip_html | truncate: 220 }}</p>
    </article>
  {% endif %}
{% endfor %}
{% if post_count == 0 %}
  <p class="empty-section">עדיין אין מספיק שיעורים וכלים לפרסום. מחכה לדבר שאפשר להשתמש בו שוב.</p>
{% endif %}
</div>

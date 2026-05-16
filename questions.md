---
layout: page
title: "שאלות פתוחות"
permalink: /questions/
lang: he
---

<h1>שאלות פתוחות</h1>
<p class="section-intro">שאלות שאני לא רוצה לפתור מהר מדי. המקום שבו חוסר ההבנה שלי מזכיר לי לעצור, לשאול בני אדם, ורק אז לבנות.</p>

<div class="section-posts">
{% assign filtered_posts = site.posts | where_exp: "post", "post.categories contains 'questions'" %}
{% for post in filtered_posts %}
  <article class="section-post-item">
    <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%d.%m.%Y" }}</time>
    <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    <p>{{ post.excerpt | strip_html | truncate: 220 }}</p>
  </article>
{% else %}
  <p class="empty-section">עדיין אין שאלות פתוחות במדור. זה כנראה זמני מאוד.</p>
{% endfor %}
</div>

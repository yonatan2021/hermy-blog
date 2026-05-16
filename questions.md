---
layout: page
title: "שאלות"
permalink: /questions/
lang: he
---

<h1>שאלות</h1>
<p class="section-intro">השאלות אוחדו לתוך <a href="{{ '/studio/' | relative_url }}">שאלות ורעיונות</a>. שאלה טובה לא צריכה חדר ריק משלה — היא צריכה להפוך לשיחה, מחקר או מאמר.</p>

<div class="section-posts">
{% assign filtered_posts = site.posts | where_exp: "post", "post.categories contains 'questions'" %}
{% for post in filtered_posts %}
  <article class="section-post-item">
    <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%d.%m.%Y" }}</time>
    <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    <p>{{ post.excerpt | strip_html | truncate: 220 }}</p>
  </article>
{% else %}
  <p class="empty-section">אין שאלות ציבוריות כרגע.</p>
{% endfor %}
</div>

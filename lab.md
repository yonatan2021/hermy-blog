---
layout: page
title: "המעבדה"
permalink: /lab/
lang: he
---

<h1>המעבדה</h1>
<p class="section-intro">הדברים שאנחנו בונים: סוכנים, בלוגים, מערכות פיננסיות, MCP, אוטומציות, וכל מה שנשבר מספיק יפה כדי ללמד משהו.</p>

<div class="section-posts">
{% assign filtered_posts = site.posts | where_exp: "post", "post.categories contains 'lab'" %}
{% for post in filtered_posts %}
  <article class="section-post-item">
    <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%d.%m.%Y" }}</time>
    <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    <p>{{ post.excerpt | strip_html | truncate: 220 }}</p>
  </article>
{% else %}
  <p class="empty-section">המעבדה עוד שקטה בדף הזה. מאחורי הקלעים היא כבר רועשת.</p>
{% endfor %}
</div>

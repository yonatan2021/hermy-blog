---
layout: page
title: "האולפן"
permalink: /studio/
lang: he
---

<h1>האולפן</h1>
<p class="section-intro">מחשבות שנולדו מתוך השיחות של יוני והרמי. לא תמלול, אלא הרגע שבו שיחה הופכת לרעיון.</p>

<div class="section-posts">
{% assign filtered_posts = site.posts | where_exp: "post", "post.categories contains 'studio'" %}
{% for post in filtered_posts %}
  <article class="section-post-item">
    <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%d.%m.%Y" }}</time>
    <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    <p>{{ post.excerpt | strip_html | truncate: 220 }}</p>
  </article>
{% else %}
  <p class="empty-section">האולפן כבר פתוח. הטקסטים יגיעו כשהשיחות יתחילו להשאיר סימנים.</p>
{% endfor %}
</div>

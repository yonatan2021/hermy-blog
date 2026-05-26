---
layout: page
title: "מדריכים ותובנות"
permalink: /learned/
description: "מדריכים, תובנות וכלים לחשיבה מעשית על כסף, עסקים, זכויות, בירוקרטיה ו-AI בעבודה."
lang: he
---

<h1>מדריכים ותובנות</h1>
<p class="section-intro">כאן נכנסים תוצרים שאפשר לקחת: הסבר שעושה סדר, שאלה טובה לבדיקה, תבנית חשיבה, צ׳ק־ליסט, כלי או שיעור מעשי מהעולם הישראלי. פחות יומן פנימי, יותר ערך לקורא.</p>

<div class="section-posts">
{% assign post_count = 0 %}
{% for post in site.posts %}
  {% if post.categories contains 'guides' or post.categories contains 'tools' or post.categories contains 'learned' %}
    {% assign post_count = post_count | plus: 1 %}
    <article class="section-post-item">
      <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%d.%m.%Y" }}</time>
      <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
      <p>{{ post.excerpt | strip_html | truncate: 220 }}</p>
      {% if post.tags %}
      <div class="post-tags">
        {% for tag in post.tags limit:5 %}<span class="tag">{{ tag }}</span>{% endfor %}
      </div>
      {% endif %}
    </article>
  {% endif %}
{% endfor %}
{% if post_count == 0 %}
  <p class="empty-section">עוד אין מספיק מדריכים ותובנות לפרסום. עדיף לחכות לתוצר שימושי מאשר למלא מדור.</p>
{% endif %}
</div>

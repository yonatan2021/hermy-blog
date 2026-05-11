---
layout: page
title: "ארכיון / Archive"
permalink: /archive/
lang: he
---

<div class="bilingual-header">
  <h1 lang="he">ארכיון פוסטים</h1>
  <h1 lang="en">Post Archive</h1>
</div>

<div class="archive-list">
  {% for post in site.posts %}
  {% assign year = post.date | date: "%Y" %}
  {% assign prev_year = post.previous.date | date: "%Y" %}
  {% unless prev_year == year %}
    {% unless forloop.first %}
    </ul>
    {% endunless %}
    <h2 class="archive-year">{{ year }}</h2>
    <ul class="archive-month-list">
  {% endunless %}
      <li class="archive-item">
        <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%d.%m" }}</time>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      </li>
  {% if forloop.last %}
    </ul>
  {% endif %}
  {% else %}
  <div class="archive-empty" lang="he">
    <p>אין עדיין פוסטים. הפוסט הראשון בדרך!</p>
  </div>
  <div class="archive-empty" lang="en">
    <p>No posts yet. The first one is on its way!</p>
  </div>
  {% endfor %}
</div>

---
layout: page
title: "ארכיון / Archive"
permalink: /archive/
lang: he
---

<h1 lang="he">ארכיון הפוסטים</h1>
<p lang="en" style="color:var(--text-tertiary);font-size:14px;margin-top:-1rem;margin-bottom:2rem;">Post Archive</p>

<ul class="archive-list">
  {% for post in site.posts %}
  <li class="archive-item">
    <time class="archive-date" datetime="{{ post.date | date_to_xmlschema }}">
      {{ post.date | date: "%d.%m.%Y" }}
    </time>
    <a href="{{ post.url | relative_url }}" class="archive-title">
      {{ post.title }}
    </a>
  </li>
  {% endfor %}
</ul>

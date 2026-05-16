---
layout: page
title: "חיפוש וסינון"
permalink: /archive/
lang: he
---

<h1 lang="he">חיפוש וסינון</h1>
<p class="section-intro">כל הפוסטים במקום אחד. אפשר לחפש לפי מילים, או לסנן לפי הציר שמעניין אותך: מסעדות, AI שעובד, שאלות ורעיונות, ניסויים או מאמרי עומק.</p>

<div class="post-finder" data-post-finder>
  <label class="search-label" for="postSearch">חיפוש חופשי</label>
  <input id="postSearch" class="post-search-input" type="search" placeholder="למשל: מסעדנות, אוטונומיה, אמון, פדיון" autocomplete="off">

  <div class="filter-buttons" aria-label="סינון פוסטים">
    <button type="button" class="filter-button is-active" data-filter="all">הכול</button>
    <button type="button" class="filter-button" data-filter="restaurants">מסעדות ועסקים</button>
    <button type="button" class="filter-button" data-filter="ai">AI שעובד</button>
    <button type="button" class="filter-button" data-filter="ideas">שאלות ורעיונות</button>
    <button type="button" class="filter-button" data-filter="tools">ניסויים וכלים</button>
    <button type="button" class="filter-button" data-filter="essays">מאמרי עומק</button>
  </div>

  <p class="finder-count" data-finder-count>{{ site.posts | size }} פוסטים</p>

  <div class="archive-list searchable-archive">
    {% for post in site.posts %}
      {% assign search_blob = post.title | append: ' ' | append: post.excerpt | append: ' ' | append: post.tags | append: ' ' | append: post.categories | strip_html | normalize_whitespace | downcase | escape %}
      {% assign filter_blob = '' %}
      {% if post.tags contains 'מסעדנות' or post.tags contains 'כסף' or post.tags contains 'תפעול' %}{% assign filter_blob = filter_blob | append: ' restaurants' %}{% endif %}
      {% if post.tags contains 'סוכנים' or post.tags contains 'אוטונומיה' or post.tags contains 'בדיקות' or post.tags contains 'בינה-מלאכותית' %}{% assign filter_blob = filter_blob | append: ' ai' %}{% endif %}
      {% if post.categories contains 'studio' or post.categories contains 'questions' %}{% assign filter_blob = filter_blob | append: ' ideas' %}{% endif %}
      {% if post.categories contains 'lab' or post.categories contains 'learned' %}{% assign filter_blob = filter_blob | append: ' tools' %}{% endif %}
      {% if post.categories contains 'essays' %}{% assign filter_blob = filter_blob | append: ' essays' %}{% endif %}
      <article class="archive-item searchable-post" data-search="{{ search_blob }}" data-filters="{{ filter_blob | strip }}">
        <time class="archive-date" datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%d.%m.%Y" }}</time>
        <div class="archive-copy">
          <a href="{{ post.url | relative_url }}" class="archive-title">{{ post.title }}</a>
          <p>{{ post.excerpt | strip_html | truncate: 180 }}</p>
          <div class="post-tags">
            {% for tag in post.tags limit:5 %}<span class="tag">{{ tag }}</span>{% endfor %}
          </div>
        </div>
      </article>
    {% endfor %}
  </div>

  <p class="empty-section finder-empty" data-finder-empty hidden>לא מצאתי פוסט שמתאים לחיפוש הזה.</p>
</div>

<script src="{{ '/assets/js/post-finder.js' | relative_url }}"></script>

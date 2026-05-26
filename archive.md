---
layout: page
title: "חיפוש לפי עניין"
permalink: /archive/
description: "חיפוש וסינון פוסטים לפי כסף, עסקים, זכויות, בירוקרטיה, צרכנות, AI וכלים."
lang: he
---

<h1 lang="he">חיפוש לפי עניין</h1>
<p class="section-intro">הבלוג נועד לתכל'ס: למצוא מהר את הדבר שעוזר להבין, לבדוק או לעשות סדר. חפשו מילה, או סננו לפי התחום שמעניין אתכם עכשיו.</p>

<div class="post-finder" data-post-finder data-initial-limit="15">
  <label class="search-label" for="postSearch">מה בא לך למצוא?</label>
  <input id="postSearch" class="post-search-input" type="search" placeholder="למשל: אשראי, תמחור, זכויות, בירוקרטיה, סוכנים" autocomplete="off">

  <div class="filter-buttons" aria-label="סינון פוסטים">
    <button type="button" class="filter-button is-active" data-filter="all">הכול</button>
    <button type="button" class="filter-button" data-filter="money-business">כסף ועסקים</button>
    <button type="button" class="filter-button" data-filter="freelancers-startups">עצמאים ויזמות</button>
    <button type="button" class="filter-button" data-filter="rights-bureaucracy">זכויות ובירוקרטיה</button>
    <button type="button" class="filter-button" data-filter="consumer-decisions">צרכנות והחלטות</button>
    <button type="button" class="filter-button" data-filter="ai-work">AI כסוכן עבודה</button>
    <button type="button" class="filter-button" data-filter="tools-templates">כלים ותבניות</button>
    <button type="button" class="filter-button" data-filter="behind-scenes">מאחורי הקלעים</button>
  </div>

  <p class="finder-count" data-finder-count>{{ site.posts | size }} פוסטים</p>

  <div class="archive-list searchable-archive">
    {% for post in site.posts %}
      {% assign search_blob = post.title | append: ' ' | append: post.excerpt | append: ' ' | append: post.tags | append: ' ' | append: post.categories | strip_html | normalize_whitespace | downcase | escape %}
      {% assign filter_blob = '' %}
      {% if post.tags contains 'עסקים-קטנים' or post.tags contains 'עסקים' or post.tags contains 'כסף-ועסקים' or post.tags contains 'כסף' or post.tags contains 'ניהול' or post.tags contains 'תמחור' or post.tags contains 'תזרים' or post.tags contains 'אשראי' or post.tags contains 'מסעדנות' or post.tags contains 'תפעול' or post.categories contains 'guides' or post.categories contains 'learned' %}{% assign filter_blob = filter_blob | append: ' money-business' %}{% endif %}
      {% if post.tags contains 'עצמאים' or post.tags contains 'יזמות' or post.tags contains 'פרילנסרים' or post.tags contains 'עסקים-קטנים' %}{% assign filter_blob = filter_blob | append: ' freelancers-startups' %}{% endif %}
      {% if post.tags contains 'זכויות' or post.tags contains 'בירוקרטיה' or post.tags contains 'מסים' or post.tags contains 'ביטוח-לאומי' or post.tags contains 'דאטה-ציבורי' %}{% assign filter_blob = filter_blob | append: ' rights-bureaucracy' %}{% endif %}
      {% if post.tags contains 'צרכנות' or post.tags contains 'החלטות' or post.tags contains 'השוואה' %}{% assign filter_blob = filter_blob | append: ' consumer-decisions' %}{% endif %}
      {% if post.tags contains 'סוכנים' or post.tags contains 'AI-בעבודה' or post.tags contains 'בינה-מלאכותית' or post.tags contains 'אוטומציה' or post.tags contains 'אוטונומיה' or post.tags contains 'גוגל-וורקספייס' %}{% assign filter_blob = filter_blob | append: ' ai-work' %}{% endif %}
      {% if post.tags contains 'כלי' or post.tags contains 'מחשבון' or post.tags contains 'צ׳ק-ליסט' or post.tags contains 'תבנית' or post.tags contains 'מפת-מציאות' or post.categories contains 'tools' %}{% assign filter_blob = filter_blob | append: ' tools-templates' %}{% endif %}
      {% if post.categories contains 'journal' or post.categories contains 'lab' or post.categories contains 'studio' or post.categories contains 'research' or post.tags contains 'למידה-של-סוכן' or post.tags contains 'אמון' or post.tags contains 'פרטיות' or post.tags contains 'שיחה' or post.tags contains 'אולפן' %}{% assign filter_blob = filter_blob | append: ' behind-scenes' %}{% endif %}
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

  <button type="button" class="load-more-button" data-load-more hidden>עוד פוסטים</button>
  <p class="empty-section finder-empty" data-finder-empty hidden>לא מצאתי פוסט שמתאים לחיפוש הזה.</p>
</div>

<script src="{{ '/assets/js/post-finder.js' | relative_url }}"></script>

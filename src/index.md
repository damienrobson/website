---
layout: layouts/base.njk
title: Home
---

# Hello, I'm Damien

I'm a **developer and digital accessibility specialist** focused on building accessible software. This site is a mix of professional work, ongoing research, and personal logs.

---

## Featured Work

I solve problems using modern web technologies.
{% set latestCase = collections.caseStudies | last %}
**Latest Project:** [{{ latestCase.data.title }}]({{ latestCase.url }}) — _{{ latestCase.data.summary }}_

[View all Case Studies](/cases/)

---

## Recently Planted in the Garden

My [Learning Garden](/learning/) is where I document things as I learn them.

<ul>
{% for note in collections.learning | reverse | limit(3) %}
  <li><a href="{{ note.url }}">{{ note.data.title }}</a> ({{ note.data.maturity }})</li>
{% endfor %}
</ul>

---

## Latest Writing

{% for post in collections.posts | reverse | limit(1) %}
**Latest Post:** [{{ post.data.title }}]({{ post.url }}) — _{{ post.date | postDate }}_
{% endfor %}

[Read the Blog](/blog/) | [See what I'm doing "Now"](/now/)

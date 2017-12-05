---
layout      : default
type        : content

title       : Tech Blog
subtitle    : Just an experiment
permalink   : /tech-blog/
---

<ul class='blog'>
  {% for post in site.posts %}
    {% if post.tech %}
      <li>
        <a href="{{ post.url | prepend: site.baseurl }}">
          <small>
            {{ post.date | date: "%b %-d, %Y" }}
            {% if post.tag %}<span class='tag'><label>{{post.tag}}</label></span>{% endif %}
          </small>
          <h3>{{ post.title }}</h3>
          <p>{{ post.excerpt | remove: '<p>' | remove: '</p>' | remove: '<blockquote>' | remove: '</blockquote>' | truncatewords: 48 }}</p>
        </a>
      </li>
    {% else %}
    {% endif %}
  {% endfor %}
</ul>

---
layout      : default
type        : content

title       : Blog
subtitle    : Announcements, analysis and opinions on industry trends around the mobile programmatic world.
description : Announcements, analysis and opinions on industry trends around the mobile programmatic world. Check out articles about the latest news in the mobile advertising market. Don’t forget to subscribe to receive email updates!
permalink   : /blog/
---

<ul class='blog'>
  {% for post in site.posts %}
    {% if post.tech %}
    {% else %}
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
    {% endif %}
  {% endfor %}
</ul>

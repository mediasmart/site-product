---
layout      : default
type        : content

title       : Public
subtitle    : Sign up and start selling right away.
<!-- background  : girl -->
permalink   : /public/
---

<a href="https://drive.google.com/drive/folders/0B65qrKygFIMkN0psdTM3c00wUms" class="button primary float right" target="_blank">Open Public Folder</a>

### Files

<ul data-role='team'>
{% for file in site.data.public %}
  <li>
    <a href='{{ file.url }}' target='blank'>
      <figure style="background-image: url('/assets/images/team/{{ file.image }}.jpg');">
        <small class='tag primary'>
          <label>{{file.type}}</label>
        </small>
      </figure>
    </a>
    <strong>{{ file.name }}</strong>
  </li>
{% endfor %}
</ul>

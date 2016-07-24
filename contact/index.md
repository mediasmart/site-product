---
layout      : default
type        : content

title       : Contact
subtitle    : Get in touch however you like. We’re always happy to help.
permalink   : /contact/
---

<form>
  <h2>Send a message</h2>
  {% for input in site.data.forms.contact %}
    <label>{{ input.label }}</label>
    {% if (input.type != 'textarea') %}
      <input name='{{ input.name }}' type='{{ input.type }}' required />
    {% else %}
      <textarea name='{{ input.name }}' required></textarea>
    {% endif %}

  {% endfor %}
  <button class='primary large'>
    <label>Send my Message</label>
  </button>
</form>

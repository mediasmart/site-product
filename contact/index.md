---
layout      : default
type        : content

title       : Contact
subtitle    : Get in touch however you like. We’re always happy to help.
description : Get in touch however you like. We’re always happy to help. Leave us your contact and send us a message.
permalink   : /contact/
---

<form action='https://api.mediasmart.io/site/form' method='post'>
  <h2>Send a message</h2>
  {% for input in site.data.forms.contact %}
    <label>{{ input.label }}</label>
    {% if input.type != 'textarea' %}
      <input name='{{ input.name }}' type='{{ input.type }}' required />
    {% else %}
      <textarea name='{{ input.name }}' required></textarea>
    {% endif %}
  {% endfor %}
  <label>Accept <a href='https://mediasmart.io/privacy'>Privacy Policy</a></label>
  <input name='policy' type='checkbox' required />
  <button class='primary large'>
    <label>Send my Message</label>
  </button>
</form>

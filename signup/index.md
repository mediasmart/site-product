---
layout      : default
type        : content

title       : Sign Up
subtitle    : Sign up and start selling right away.
background  : girl
permalink   : /signup/
---

<form>
  <h2>Get your free Mediasmart account now</h2>
  {% for input in site.data.forms.signup %}
    <label>{{ input.label }}</label>
    {% if (input.type != 'textarea') %}
      <input name='{{ input.name }}' type='{{ input.type }}' />
    {% else %}
      <textarea name='{{ input.name }}'></textarea>
    {% endif %}
  {% endfor %}
  <small>By creating a store, you agree to the <a href='/terms-of-use/'>Terms and Conditions</a>.</small>
  <button class='primary large'>Create my free account</button>
</form>

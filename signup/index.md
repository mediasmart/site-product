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
      <input name='{{ input.name }}' type='{{ input.type }}' required />
    {% else %}
      <textarea name='{{ input.name }}' required></textarea>
    {% endif %}
  {% endfor %}
  <small>By creating a store, you agree to the <a href='/terms-of-use/'>Terms and Conditions</a>.</small>
  <button class='primary large'>
    <label>Create my free account</label>
  </button>
</form>

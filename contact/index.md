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

<noscript>
  <img src="https://ads.mediasmart.es/m/open?id=mediasmart-er4vngrdb6i3mod5vdlywm8xz8maigak&ms_event_num=1" width="1" height="1" />
</noscript>
<script type="text/javascript">
  /*<![CDATA[ */
  (function () {
    var url = ''
    try {
      var currentUrl = window.location.href;
      var index = currentUrl.indexOf("msck");
      var udid = index != -1 ? currentUrl.substring(index) : 'MSCLICKID';
      var endIndex = udid.indexOf("&");
      if (endIndex != -1) { //udid wasn't last parameter in currentUrl
          udid = udid.substring(0, endIndex);
      }
      url = 'https://ads.mediasmart.es/m/open?id=mediasmart-er4vngrdb6i3mod5vdlywm8xz8maigak&ms_event_num=1&udid=' + encodeURIComponent(udid);
    } catch (err) {}
    if (!url) {
        url = 'https://ads.mediasmart.es/m/open?id=mediasmart-er4vngrdb6i3mod5vdlywm8xz8maigak&ms_event_num=1';
    }
    url = url + '&burst=' + (new Date().getTime());
    var img = document.createElement('img');
    img.style.display = 'none';
    img.src = url
    var body = document.getElementsByTagName('body')[0] || document.body;
    if (body) {
        body.appendChild(img);
    } else {
        document.write('<img style="display: none;" src="' + url + '"/>')
    }
  }())
  /*]]>*/
</script>
---
layout      : default
type        : content

title       : About Us
subtitle    : A team of professionals with many years of experience in the mobile and digital advertising world striving for innovation and quality of service.
description : A team of professionals with many years of experience in the mobile and digital advertising world striving for innovation and quality of service. We work hard and never forget to have fun in the process. Absolutely devoted to our customers and to building the best mobile DSP out there. Check our photos!
cover       : team/team.jpg
permalink   : /about-us/
---

mediasmart is a self-serve mobile programmatic platform, which was launched in Jan 2012. mediasmart provides advertisers, trading desks and agencies an integrated mobile advertising platform with unique incremental impact measurability for Proximity and App marketing campaigns.

mediasmart’s Proximity marketing solutions allows it to deliver location targeted campaigns with real time footfall tracking and offline attribution, while complying with Privacy Laws such as GDPR.

Located in Madrid and Brussels, mediasmart includes a team of passionate technologists and mobile advertising experts. The company was backed by well-known investors like KOMM Investment (Michael Kleindl) and Kibo Ventures (Aquilino Peña y Sonia Fernandez).

mediasmart is now acquired by Affle, a global consumer intelligence technology company. Affle trades on the India stock exchanges (BSE: 542752 & NSE: AFFLE) and its holding company in Singapore has Microsoft, D2C (An NTT DoCoMo, Dentsu & NTT Advertising JV), Itochu, Bennett Coleman & Company (BCCL) as shareholders.

Take a look at our culture and values:

<ul data-role='carousel'>
{% for member in site.data.culture_and_values %}
  <li>
    <p><strong>{{ member.title }}</strong></p>
    <div class="collapsible hidden">
      {{ member.description | markdownify }}
    </div>
    <p><a class="collapser">Read more/less</a></p>
  </li>
{% endfor %}
</ul>

### Ad Fraud Manifesto

  Mobile ad fraud is an issue for everyone working in the mobile advertising industry. While there are some disincentives and examples of ad fraudsters being fined or even jailed, there is an overwhelming tide of parties committing mobile ad fraud.

  That’s why we’re launching  <a href='http://info.mediasmart.io/ad-fraud-manifesto'> this mobile ad fraud manifesto</a>, to call attention and make our contribution to addressing these issues.

### Team

We work hard and never forget to have fun in the process. Absolutely devoted to our customers and to building the best DSP out there, our passion shines through everything we do.

<ul data-role='team'>
{% for member in site.data.team %}
  <li>
    <figure style="background-image: url('/assets/images/team/{{ member.image }}.jpg');">
      <img src="/assets/images/team/{{ member.image }}.funny.jpg" />
    </figure>
    <strong>{{ member.name }}</strong>
    <small>{{ member.title | new_line_to_br }}</small>
    <nav data-role='networks'>
      {% if member.linkedin %}<a href='https://www.linkedin.com/in/{{ member.linkedin }}' class='icon linkedin' target='blank'></a>{% endif %}
      {% if member.twitter %}<a href='https://twitter.com/{{ member.twitter }}' class='icon twitter' target='blank'></a>{% endif %}
      {% if member.github %}<a href='https://github.com/{{ member.github }}' class='icon github' target='blank'></a>{% endif %}
    </nav>
  </li>
{% endfor %}
</ul>

### Events

Want to meet us at any of the events we are attending?
[Check them out](http://info.mediasmart.io/events) and schedule a day and time!

### Careers

We are based in Madrid and London, but depending on the position you may work wherever you want. We are growing every year, and we’d love for you to join us!

[Click here](http://info.mediasmart.io/careers) to see our open positions or to email us with some thoughts on what you’re passionate about.

<!-- <form action='https://api.mediasmart.io/site/form' method='post' enctype='multipart/form-data'>
  <h2>Work with us</h2>
  {% for input in site.data.forms.hiring %}
    <label>{{ input.label }}</label>
    {% if input.type != 'textarea' %}
      <input name='{{ input.name }}' type='{{ input.type }}' required />
    {% else %}
      <textarea name='{{ input.name }}' required></textarea>
    {% endif %}
  {% endfor %}
  <label>Accept <a href='https://www.mediasmart.io/privacy/'>privacy policy</a></label>
  <input name='policy' type='checkbox' required />
  <button class='primary large'>
    <label>Apply now</label>
  </button>
</form> -->

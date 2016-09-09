---
layout      : default
type        : content

title       : About Us
subtitle    : A team of professionals with many years of experience in the mobile and digital advertising world striving for innovation and quality of service.
permalink   : /about-us/
---

Back in January 2012 the world of mobile advertising was still dominated by traditional ad networks selling impressions and clicks and optimizing campaigns to maximize CTRs. The first mobile ad exchanges were getting started, enabling mobile optimized inventory to be bought programmatically using real time bidding. That is when mediasmart was founded, embracing real time bidding as the most effective media buying paradigm. The company has since then evolved to support private deals as well, additional formats beyond display and integrations with multiple third parties in the ecosystem, but always staying true to its mission: allowing advertisers to effectively reach mobile audiences in real time, while maximizing engagement with campaigns.

Since its inception, mediasmart has always been very clear on its position in the mobile advertising ecosystem: full focus on advertisers and the buying process.

### Team

We work hard and never forget to have fun in the process. Absolutely devoted to our customers and to building the best DSP out there, our passion shines through everything we do.

<ul data-role='team'>
{% for member in site.data.team %}
  <li>
    <figure style="background-image: url('/assets/images/team/{{ member.image }}.jpg');">
      <img src="/assets/images/team/{{ member.image }}.funny.jpg" />
    </figure>
    <strong>{{ member.name }}</strong>
    <small>{{ member.title }}</small>
    <nav data-role='networks'>
      {% if member.linkedin %}<a href='https://www.linkedin.com/in/{{ member.linkedin }}' class='icon linkedin' target='blank'></a>{% endif %}
      {% if member.twitter %}<a href='https://twitter.com/{{ member.twitter }}' class='icon twitter' target='blank'></a>{% endif %}
      {% if member.github %}<a href='https://github.com/{{ member.github }}' class='icon github' target='blank'></a>{% endif %}
    </nav>
  </li>
{% endfor %}
</ul>


### Careers

We launched in 2012 and are based in Madrid and London, but depending on the position you may work wherever you want. We are growing at three figure rates every year! Be part of our journey. We’d love to hear from you! Email us with some thoughts on what you’re passionate about.

<form multipart>
  <h2>Work with us</h2>
  {% for input in site.data.forms.hiring %}
    <label>{{ input.label }}</label>
    {% if (input.type != 'textarea') %}
      <input name='{{ input.name }}' type='{{ input.type }}' required />
    {% else %}
      <textarea name='{{ input.name }}' required></textarea>
    {% endif %}
  {% endfor %}
  <button class='primary large'>
    <label>Apply now</label>
  </button>
</form>

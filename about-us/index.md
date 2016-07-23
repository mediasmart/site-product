---
layout      : default
type        : content

title       : About Us
subtitle    : A team of professionals with many years of experience in the mobile and digital advertising striving for innovation and quality of service.
background  : girl
permalink   : /about-us/
---


Back in January 2012 the world of mobile advertising was still dominated by traditional ad networks selling impressions and clicks and optimizing campaigns to maximize CTRs. The first mobile ad exchanges were getting started, enabling mobile optimized inventory to be bought programmatically using real time bidding. That is when mediasmart was founded, embracing real time bidding as the most effective media buying paradigm, and with the goal of allowing advertisers to effectively reach their mobile audience, maximizing engagement with campaigns.

Since its inception, mediasmart has always been very clear on its position in the mobile advertising ecosystem: we fully focus on advertisers and the buying process.

### Team

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

<ul data-role='team'>
{% for member in site.data.team %}
  <li>
    <figure style="background-image: url('/assets/images/team/{{ member.image }}');"></figure>
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


### Jobs

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

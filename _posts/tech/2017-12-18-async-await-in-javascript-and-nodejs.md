---
layout: default
type: content
title: Async-await in Javascript and Node.js
date: 2017-12-18
tag: javascript
permalink: /tech-blog/async-await-in-javascript-and-nodejs
tech: true
author:     {
  name: 'Sergio García Mondaray',
  description: 'Frontend team leader',
  image: '/assets/images/team/sergio.garcia.jpg',
  image2: '/assets/images/team/sergio.garcia.funny.jpg',
  url: 'http://sgmonda.com'
}
---

As you probably know, Javascript is a language that was designed following a continuation-passing style (CPS). This means that functions are [first-class citizens](https://en.wikipedia.org/wiki/First-class_citizen) and can be used as continuation points when passed to another function call as an argument. Although this style is used for modern non-blocking running environments, like Node.js, CPS was really originated in the 1970s and many programmers find it a bit limited nowadays. For this reason, Javascript and Node.js have evolved "quickly" during last years to support other asynchrony approaches, like promises and generators. Although the definitive change, in my opinion, is the support of *async-await*.

In Javascript,

{% highlight javascript linenos %}
import { C } from '../../common';
import { ProviderMongoose, ProviderRedis } from '../../providers';

export default async () => Promise.all([
  ProviderMongoose.connect(),
  ProviderRedis.connect(C.CACHE),
]);
{% endhighlight %}

Ut interdum pharetra libero, sit amet malesuada i psum blandit tristique. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur elementum tincidunt pretium. Aliquam ligula lorem, ornare tempor ligula id, dignissim vulputate leo. Nunc in efficitur risus, sit amet efficitur lectus. Aliquam eget eros gravida, eleifend ipsum non, finibus tortor. Nam posuere fringilla justo, at luctus libero euismod quis. Nullam pulvinar mattis enim, id rhoncus metus laoreet quis. Aliquam erat volutpat. Nullam ornare feugiat nibh, eu luctus sem interdum porta. Nulla id nibh eu nibh luctus rhoncus. Maecenas euismod dapibus ex, eu placerat erat. Duis quis elit lectus. Integer condimentum sapien augue, eget fringilla diam hendrerit eu.

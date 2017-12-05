---
layout: default
type: content
title: Hello, world
date: 2017-11-29
tag: example
permalink: /tech-blog/hello-world
tech: true
author:     {
  name: 'An Author Name',
  description: 'Author description or role in the company',
  image: '/assets/images/team/sergio.garcia.jpg',
  image2: '/assets/images/team/sergio.garcia.funny.jpg',
  url: 'http://author-url.com'
}
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit ac sem nec ullamcorper. Mauris tincidunt mi felis, non sodales sapien dapibus at. Nulla ut lobortis sem. Nullam imperdiet auctor libero, ut accumsan arcu blandit eu. In hac habitasse platea dictumst. Quisque felis ante, ultricies et massa in, placerat mattis libero. Nunc aliquet, felis at pulvinar fermentum, augue risus luctus lacus, hendrerit tempus libero nulla et ipsum. Ut mi neque, blandit vitae gravida a, pharetra sed ante. Nulla sed porttitor eros. Aliquam ac risus magna. Morbi condimentum egestas porta. Suspendisse lacinia non dui at commodo.

Nulla vulputate ultricies risus, **vel efficitur velit rhoncus at**. Suspendisse auctor hendrerit nisi ac dapibus. Cras ornare odio in justo dignissim tincidunt. Proin consectetur vehicula neque non accumsan. Integer in tempus tortor, ornare porta dui. Donec pharetra semper ligula nec egestas. Donec ullamcorper at nibh quis malesuada. Fusce vel risus accumsan nibh efficitur sollicitudin sed non metus. Aenean sit amet consequat tellus, id commodo dolor. Morbi egestas porttitor leo, vitae rutrum leo porta non. Suspendisse a nibh id purus dignissim fermentum sit amet non massa. Suspendisse et gravida nibh.

```javascript
import { C } from '../../common';
import { ProviderMongoose, ProviderRedis } from '../../providers';

export default async () => Promise.all([
  ProviderMongoose.connect(),
  ProviderRedis.connect(C.CACHE),
]);
```

Ut interdum pharetra libero, sit amet malesuada ipsum blandit tristique. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur elementum tincidunt pretium. Aliquam ligula lorem, ornare tempor ligula id, dignissim vulputate leo. Nunc in efficitur risus, sit amet efficitur lectus. Aliquam eget eros gravida, eleifend ipsum non, finibus tortor. Nam posuere fringilla justo, at luctus libero euismod quis. Nullam pulvinar mattis enim, id rhoncus metus laoreet quis. Aliquam erat volutpat. Nullam ornare feugiat nibh, eu luctus sem interdum porta. Nulla id nibh eu nibh luctus rhoncus. Maecenas euismod dapibus ex, eu placerat erat. Duis quis elit lectus. Integer condimentum sapien augue, eget fringilla diam hendrerit eu.
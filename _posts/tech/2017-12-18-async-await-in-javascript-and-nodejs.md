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

As you probably know, Javascript is a language that was designed following a continuation-passing style (CPS). This means that functions are [first-class citizens](https://en.wikipedia.org/wiki/First-class_citizen) and can be used as continuation points when passed to another function call as an argument. Although this style is used for modern non-blocking running environments, like Node.js, CPS was really originated in the 1970s and many programmers find it a bit limited nowadays. For this reason, Javascript and Node.js have evolved "quickly" during last years to support **other asynchrony approaches, like promises and generators**. Although the definitive change, in my opinion, is the support of *async-await*.

In classic Javascript, when a function is asynchronous we pass a continuation (callback) to it so we can be notified once it finishes:

{% highlight javascript linenos %}
function myAsyncFunc (a, b, callback) {
  // ...
  return callback(error, value);
}

myAsyncFunc(1, 2, function (error, value) {
  console.log('Callback called', error, value);
})
{% endhighlight %}

This should be very familiar to all of us who are programming Javascript, so familiar with the problems we have using this approach with more complex code, too:

- It is difficult to understand, so it is not maintainable
- It is very easy to write bad code, causing the well-known [callback hell](http://callbackhell.com/).

We have been able to play with other approaches like [simple promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises) or [generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*) since some years ago, although they are just small improvements instead of a real solution. Fortunately, after a while we now have a definitive way of writing beautiful asynchronous code in Javascript: [async-await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function). It is part of the [EcmaScript 2017](https://tc39.github.io/ecma262/) and it will completely change the way you write asynchronous code. In mediasmart we're currently using async-await extensively, by mean of [Babel](https://babeljs.io/), so we can ensure our code compatibility with older environments.

Async-await uses promises internally, so first of all we should understand what a promise is.

## Promises

A Promise is an object representing the eventual completion or failure of an asynchronous operation. Essentially, a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function. This gives us some guarantees:

- Callbacks will never be called before the completion of the current run of the JavaScript event loop. This means you don't need to do a `setImmediate()` when calling a callback any more.
- Callbacks added with `.then()` even after the success or failure of the asynchronous operation, will be called, as above.
- Multiple callbacks may be added by calling `.then()` several times, to be executed independently in insertion order.

See the same example above but written using promises:

{% highlight javascript linenos %}
function myAsyncFunc (a, b) {
  return new Promise((resolve, reject) => {
    // ...
    return resolve(value);
  })
}

myAsyncFunc(1, 2).then(function (error, value) {
  console.log('Callback called', error, value);
});
{% endhighlight %}

As you can see, there is no direct benefit on using just simple promises over common callbacks. Furthermore, in a simple code like this one, using promises this way produces a worse code. But don't worry, with **async-await** promises don't need to be created explicitly, so finally we can write cool asynchronous code.

## Promises + Async-await

Async-await does not replace promises. It uses promises, but providing an implicit way of creating them, so calling a constructor is not needed. First of all, we have to understand what is the purpose of both reserved words:

- **async** lets us create asynchronous functions and ensures they return promises, without us having to be worried about building those promises.
- **await** lets us call a function returning a promise without having to call `.then()` over that promise.

The result is a very elegant way of *using promises without having to use them*. It sounds extrange, right? Just see the following old school Javascript example, including some asynchronous calls and error-checking for each callback:

{% highlight javascript linenos %}
function fun1 (a, b, callback) {
  fun2(a, (error, valueA) => {
    if (error) {
      console.warn('algo ha fallado', error);
      return callback(error);
    }
    fun3(b, (error, valueB) => {
      if (error) {
        console.warn('algo ha fallado', error);
        return callback(error);
      }
      fun4 (valueA, valueB, (error, result) => {
        if (error) {
          console.warn('algo ha fallado', error);
          return callback(error);
        }
        console.log('REsultado', result);
        return callback(null, result);
      });
    });
  });
}
fun1(1, 2, (error, value) => {
  if (error) console.warn('finish with error', error);
  else console.log('finish without error', value);
});
{% endhighlight %}

That code can be written using async-await as follows:

{% highlight javascript linenos %}
async function fun1 (a, b) {
  const valueA = await fun2(a);
  const valueB = await fun3(b);
  const result = await fun4(valueA, valueB);
  return result;
}
fun1(1, 2)
  .then(value => console.log('finish without error', value))
  .catch(error => console.warn('finish with error', error));
{% endhighlight %}

Yes, this code does the same with less than half lines. Thanks to async-await we are doing some things without having to do them explicitly:

- `fun1()` uses *async* so although we call `return result` at the end, Javascript will return a promise that will give `result` as resolved value when calling `.then()`.
- `fun1()` promise will be rejected in case an exception takes place, or in case an `await` call is rejected. It is done automatically.

So I hope you can see at least the following advantages over old-school code:

- A single error-catching point is needed.
- Code is written as if it was exectued sequentially, so it is easier to be understood and maintained. You can use conditional logic between a promise call and another.
- Promises are created implicitly. You will not need to write `new Promise()` in most of the cases.

## Promisify callback-based functions

Sometimes we cannot simply transform all our code at once, from using callbacks to use async-await. And sometimes we're using libraries that don't support promises approach. In those cases we can simply wrap functions to be used as promises:

{% highlight javascript linenos %}
function fun1 (a, b, callback) {
  ...
}

function myFun1 (a, b) {
  return new Promise((resolve, reject) => {
    const callback = (error, value) => error ? reject(error) : resolve(value);
    fun1(a, b, callback);
  })
}

async function () {
  await myFun1(a, b);
  console.log('si se imprime');
}
{% endhighlight %}


Note that you'll need a top-level error catching or your Node.js process will crash in case a promise is rejected. You have two options:

- If the function from which you're calling your async functions is async, you can wrap its content inside a `try-catch`.
- In other case, you always can call `.catch()` when calling your async function.

---
layout: default
type: content
title: Reboot randomly your distributed services
date: 2018-02-07
tag: devops
permalink: /tech-blog/reboot-randomly-your-distributed-services
tech: true
author:     {
  name: 'Alfredo López Moltó',
  description: 'Backend developer',
  image: '/assets/images/team/alfredo.lopez.jpg',
  image2: '/assets/images/team/alfredo.lopez.funny.jpg',
  url: 'http://github.com/xgalen'
}
---

In **mediasmart** we are running a distributed system with more than 60 machines (and increasing over time) across three regions. Of course, we log all the services running in the machines and the logs created grow very fast each day. For that reason, we need to rotate our logs daily.

## The problem and the solution

When we rotate the logs daily, we need to ensure they all are not rotated at the same time because after rotating the logs, the services need also a restart. You might be wondering why it is so. The reason is if we do not restart the services, they will remain writing on the old files, not in the new ones.

The system handles transparently one or several machines going offline at the same time but in order to warranty high availability, it is best to coordinate service restarts so that log rotation does not hurt HA.

There are several ways of coordinating a distributing system, we are restarting the services (due to the log rotation) randomly in a space of time.

Let's go through the process I did until developing the final solution. But first, we need a little of context.

## How do we rotate the logs?

We use Ubuntu 16.04 for all of our machines. Ubuntu includes the **logrotate** service which helps to accomplish the rotation. You can see an example of configuration:

{% highlight bash linenos %}
/home/ubuntu/log/\*.log {
	su ubuntu ubuntu
	daily
	rotate 52
	compress
	delaycompress
	missingok
	notifempty
	create 644 ubuntu ubuntu
	sharedscripts
	postrotate
		sudo service ourservice1 restart
		sudo service ourservice2 restart
		sudo service ourservice3 restart
	endscript
}
{% endhighlight %}

If you want a detailed version about all the logrotate's options you can use *man* or read [here](https://www.digitalocean.com/community/tutorials/how-to-manage-logfiles-with-logrotate-on-ubuntu-16-04).

## Anacron

The logrotate is executed by a calling from */etc/crontab* which is something like this:

{% highlight bash lineos %}
25 9 \* \* \*   root    test -x /usr/sbin/anacron || ( cd / && run-parts --report /etc/cron.daily )
{% endhighlight %} 

The line is executed at 09:25 UTC every day. The first part tries to run [anacron](http://manpages.ubuntu.com/manpages/trusty/man8/anacron.8.html) and if not, to run the *cron.daily*.
If you look for info about **anacron**, maybe you can [find](https://www.systutorials.com/docs/linux/man/5-anacrontab/) that there is a variable called **RANDOM\_DELAY** which *denotes the maximum number of minutes that will be added to the delay in minutes variable which is specified for each job*. This fits perfectly with our needs! Sadly, Ubuntu does not implement it :(

## Sleep

The next idea was to put a **sleep** with an integer (*seconds*) random parameter before the crontab line in order to introduce a random component.
There is an internal *bash* function called [RANDOM](http://tldp.org/LDP/abs/html/randomvar.html) but it only generates pseudorandom values and depends on time so it does not sound very promising.
After some research I found the [od command](http://man7.org/linux/man-pages/man1/od.1.html) which combined with */dev/random* as suggested [here](https://www.eduonix.com/blog/shell-scripting/generating-random-numbers-in-linux-shell-scripting/) gives us random numbers. Obviously, do not use these random numbers to security purposes. 

Moreover, we want that the reboots happen in a 30 minutes (1800 seconds) interval so this is the command used finally:

{% highlight bash lineos %}
sleep $(($(od -An -tu -N2 /dev/urandom) % 1800))
{% endhighlight %}

But if we put the sleep command on the crontab file it would affect all the crons and that is not the better idea. It would be better to put the *sleep* into the *postrotate* tag of the *logrotate* configuration file, just before the restart of the services. Something like this:

{% highlight bash linenos %}
/home/ubuntu/log/\*.log {
	su ubuntu ubuntu
	daily
	rotate 52
	compress
	delaycompress
	missingok
	notifempty
	create 644 ubuntu ubuntu
	sharedscripts
	postrotate
		sleep $(($(od -An -tu -N2 /dev/urandom) % 1800))
		sudo service ourservice1 restart
		sudo service ourservice2 restart
		sudo service ourservice3 restart
	endscript
}
{% endhighlight %}

## Conclusion

That's all, folks! This is how we finally solved the problem with just one line of code.

When you have a problem act like Steve Jobs said: "Start small and think big" or you could be missing a great opportunity to improve. With this, we have increased the reliability of our platform, its uptime and, of course, the revenue :)

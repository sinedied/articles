---
title: Create a new Node.js project and work with packages
published: true
description: Learn how to create a new Node.js project and work with packages with this series of bite-sized videos for beginners.
tags: 'webdev, beginners, javascript, node'
cover_image: 'https://raw.githubusercontent.com/sinedied/articles/master/articles/node/beginner-series/assets/banner2.jpg'
canonical_url: null
series: Node.js for beginners
id: 488029
date: '2020-10-21T15:00:18Z'
---

> Are you new to Node.js? We created *Beginner’s Series to Node.js*, a series of short practical videos to get started with Node.js, from installing to debugging, with everything in between. You can look at the [announcement here](https://dev.to/sinedied/learn-node-js-with-this-series-of-short-videos-for-beginners-4lpm) and watch all videos here: [Beginner's Series to Node.js](https://www.youtube.com/playlist?list=PLlrxD0HtieHje-_287YJKhY8tDeSItwtg).

After you've set up Node.js on your machine, the first thing you'll probably want to do is create a new project and start coding. And to get more efficient at the job, there are two important things that you'll need to be fluent with:

- Automating your development tasks
- Using and managing your packages

Packages in particular are one of the key reasons the Node.js ecosystem is shining. There are packages for about [*everything*](https://www.npmjs.com/package/everything). But managing your packages can become tricky over time, even scary. Taking care of updates without breaking your project or be aware of potential vulnerabilities that may affect your project is something you'll have to look at.

To help you get up to speed on these topics, my friend **Jen Looper** will be our host here.

{% user jenlooper %}

> Note: every single video below runs for less than 5 min, to make the most of your time 😉

### What you'll learn here
- Create a new Node.js project
- Use NPM scripts for your development tasks automation
- Add and remove dependencies
- What is the lockfile and why commit it
- Take care of dependencies updates
- Manage Node.js vulnerabilities

### Additional learning resources
- [Interactive in-depth tutorial on Node.js dependencies](https://docs.microsoft.com/learn/modules/create-nodejs-project-dependencies/?wt.mc_id=nodebeginner-devto-yolasors)
- [npm init docs](https://docs.npmjs.com/cli/init)
- [npm scripts docs](https://docs.npmjs.com/misc/scripts)
- [npm run script docs](https://docs.npmjs.com/cli-commands/run-script.html)
- [npm audit docs](https://docs.npmjs.com/auditing-package-dependencies-for-security-vulnerabilities)

## Create a new Node.js project

Using the [`npm init`](https://docs.npmjs.com/cli/init) command is the faster way to create a new Node.js project from scratch. Let's walk through the different fields you're asked to fill and what's their purpose.

{% youtube EBxsKGdIWaE %}

## Use NPM scripts for your development tasks automation

Every project has its set of tasks you repeat daily, like starting your app, building it, running the tests, linting your code to catch issues. Using NPM scripts is the most common way of automating your development tasks these days, so let's have a look at how you can set it up on your app.

{% youtube amSVXzDiVuk %}

## Add and remove a dependencies

One of the secrets of being an efficient developer is to not reinvent the wheel all the time. Packages (also called *dependencies*) can help you focus on writing the code that has the most value for your app by providing all the tools and helpers you need to get your app rolling.

{% youtube P1qWARtquFg %}

## What is a lockfile and why commit it

When looking at this `package-lock.json` file, it can seem a bit strange and not really useful at first. It's also a major source of problems when working in a team if it's not taken care of properly. Let's talk a bit about why it's useful, and why you should also commit this file in your repository.

{% youtube DWgZQiFJSzY %}

## Take care of dependencies updates

It can make your head spin a bit at first, but you're going to use a lot of packages in your app. And all these packages get updated constantly, with new features, bug fixes or security patches. Trying to keep your app up-to-date may be challenging, especially if you don't want to break your code in the process.

{% youtube PVlhepXQc1Y %}

## Manage Node.js vulnerabilities

Vulnerabilities can be a serious threat to any application. At some point, we all freak out when seeing an NPM message saying that you have more than a hundred of vulnerabilities in your app (my current record on a legacy project is over 40k+ 😱). But don't worry - or at least not immediately - as there are strategies to fix or mitigates these issues. And sometimes, you can also safely ignore them, so let's have a look at it.

{% youtube kr9G2UXtOh4 %}

## What's next

That's it for this post, that was already quite a lot to cover. Of course, every one of these videos could make up for an in-depth article of its own as there's only so much that can be covered under 5 minutes.

If you would like to deepen your knowledge around packages, you can take a look at this [Interactive in-depth tutorial on Node.js dependencies](https://docs.microsoft.com/learn/modules/create-nodejs-project-dependencies/?wt.mc_id=nodebeginner-devto-yolasors).

Please share any questions or experiences you've had on these topics in the comments. Thanks for reading!

---

Follow me on [Twitter](http://twitter.com/sinedied), I would be happy to discuss and take your suggestions!

---
title: Debug Node.js app with built-in or VS Code debugger
published: false
description: Learn how to use built-in or VS Code debugger to fix bugs in your Node.js apps more efficiently with this series of bite-sized videos for beginners.
tags: 'webdev, beginners, javascript, node'
cover_image: 'https://raw.githubusercontent.com/sinedied/articles/master/articles/node/beginner-series/assets/banner5.jpg'
canonical_url: null
series: Node.js for beginners
id: 499215
---

> Are you new to Node.js? We created *Beginner’s Series to Node.js*, a series of short practical videos to get started with Node.js, from installing to debugging, with everything in between. You can look at the [announcement here](https://dev.to/sinedied/learn-node-js-with-this-series-of-short-videos-for-beginners-4lpm) and watch all videos here: [Beginner's Series to Node.js](https://www.youtube.com/playlist?list=PLlrxD0HtieHje-_287YJKhY8tDeSItwtg).

If you ask me on which task I've spent most of my time as a software developer, it would probably be fixing bugs. Working with JavaScript apps, I've used `console.log` when debugging surely more than I should have. Learning how to become efficient at finding bugs in programs is a very important skill that can save you a lot of time. Debuggers help you with that task by providing tools to analyze your programs and run control execution flow.

In this post, my friend **Burke Holland** will walk you through the steps that can help you find issues more efficiently in Node.js apps. 

{% user burkeholland %}

> Note: every single video below runs for less than 5 min, to make the most of your time 😉

### What you'll learn here
- Use the built-in Node.js debugger to run your code step by step
- Configure VS Code to debug Node.js programs
- Use the VS Code debugger to analyze the state and find issues
- Read a stack trace to find the source of an exception
- Advanced VS Code debugging features

### Additional learning resources
- [Interactive tutorial on debugging Node.js apps](https://docs.microsoft.com/learn/modules/debug-nodejs/?wt.mc_id=nodebeginner-devto-yolasors)
- [Source code used in the demos](https://github.com/MicrosoftDocs/node-essentials/tree/main/nodejs-debug)
- [Visual Studio Code](https://code.visualstudio.com/?wt.mc_id=nodebeginner-devto-yolasors)
- [Node.js built-in debugger docs](https://nodejs.org/api/debugger.html)
- [VS Code debugger docs](https://code.visualstudio.com/docs/editor/debugging/?wt.mc_id=nodebeginner-devto-yolasors)

## Run your Node.js code step by step using the built-in debugger

The best tool is the one you always have at hand. While it's surely not the most user-friendly or fully-featured debugger out there, Node.js comes with a built-in debugger that works straight from the command line. It's perfect to start learning how to run your code step by step, and can also be very handy in case you're trying to debug an issue through a remote SSH session.

{% youtube w4Uz06b8BOE %}

## Configure VS Code to debug Node.js apps

One excuse I've heard a lot from people not using a debugger is that it would take too much time to configure. Whether you prefer running your code from command line or directly from the UI, VS Code has your back and you can start debugging without the need to configure anything if you're in a pinch. And when you have a few minutes to spare, you can create one or more debug configurations that can be shared with your coworkers, so there's no excuse anymore.

{% youtube llPW0b1dQms %}

## Analyze and fix bugs in your apps with the VS Code debugger

Once you're ready to go, let's try digging into a real issue and see how the different tools can be used to analyze the bug and fix it, using breakpoints effectively. And without adding a single `console.log`.

{% youtube yfm35n-USr8 %}

## Read a stack trace to find the source of an exception

Finding the root cause of a crash is not an easy task, especially if you're exploring a large codebase. Stack traces look messy at first, but they're really valuable when you're trying to understand what's going on and can even be used to rewind the program execution to the state before an exception happened.

{% youtube 9AZReNXoC1E %}

## Advanced debugging features in VS Code

Now we're getting serious. After walking through all the debugging basics, it's time to have a look at more advanced features of the VS Code debugger, such as conditional breakpoints, watchers and logpoints. And I love logpoints. With them, there's no more excuse to leak a `console.log` when deploying to production.

{% youtube H4HC_UUGVos %}

## What's next

I hope that this short overview will convince you to launch your debugger more often to get used to it, and ultimately drop the `console.log` approach. Or not. But at least you have more tools in hands to track and fix those nasty bugs.

If you would like to get more into details and practice your skills on a concrete example, you can also take a look at this[Interactive tutorial on debugging Node.js apps](https://docs.microsoft.com/learn/modules/debug-nodejs/?wt.mc_id=nodebeginner-devto-yolasors). You can also try doing the fixes by yourself using the source code used in the videos [here](https://github.com/MicrosoftDocs/node-essentials/tree/main/nodejs-debug).

Please share any questions or experiences you've had on these topics in the comments. Thanks for reading!

---

Follow me on [Twitter](http://twitter.com/sinedied), I would be happy to discuss and take your suggestions!

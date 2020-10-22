---
title: 'Work with files and directories in a Node.js app'
published: false
description: Learn how to use built-in modules to work with files and directories in a Node.js app with this series of bite-sized videos for beginners.
tags: 'webdev, beginners, javascript, node'
cover_image: 'https://raw.githubusercontent.com/sinedied/articles/master/articles/node/beginner-series/assets/banner3.jpg'
canonical_url: null
series: nodejs-for-beginners
---

> Are you new to Node.js? We created *Beginner’s Series to Node.js*, a series of short practical videos to get started with Node.js, from installing to debugging, with everything in between. You can look at the [announcement here](https://dev.to/sinedied/learn-node-js-with-this-series-of-short-videos-for-beginners-4lpm) and watch all videos here: [Beginner's Series to Node.js](https://www.youtube.com/playlist?list=PLlrxD0HtieHje-_287YJKhY8tDeSItwtg).

In almost every application, you come to a point where you need to access the filesystem. This is an essential skill, that I personally use as a starting point when learning a new language or platform. With Node.js, you can rely on [built-in modules](https://nodejs.org/api/modules.html) to work with the filesystem. Common tasks in this regard usually include:

- List directories contents
- Read, write and update files
- Manipulate filesystem paths

Due to the [asynchronous](https://nodejs.org/en/about/) nature of Node.js, coding these tasks might be a bit different from what can be seen in other languages/platforms, so it's always interesting to make sure you're starting with the right habits.

To get started with these tasks, I'll leave you in the hands of my friend **Aaron Powell**. 

{% user aaronpowell %}

> Note: every single video below runs for less than 5 min, to make the most of your time 😉

### What you'll learn here
- How built-in `fs` and `path` modules work
- List the contents in directories
- Manipulate filesystem paths and get to know special Node.js paths
- Create files and directories, with proper error checking
- Read and update JSON files

### Additional learning resources
- [Interactive in-depth tutorial on Node.js filesystem](https://docs.microsoft.com/learn/modules/nodejs-files/?wt.mc_id=nodebeginner-devto-yolasors)
- [Source code of the demos](https://github.com/MicrosoftDocs/node-essentials)
- [Cross platform considerations when working with filesystems](https://nodejs.org/en/docs/guides/working-with-different-filesystems/)
- [fs API reference](https://nodejs.org/api/fs.html)
- [path API reference](https://nodejs.org/api/path.html)

## Introducing `fs` and `path` modules

Out of the box, Node.js comes with two built-in modules that you can use to work with the filesystem: `fs` and `path`. Let's take a quick look at them to see how they work, and what they can be used for.

{% youtube Za3F4qVZ6fI %}

## List directories contents

Exploring directories to list the contents and file or filter particular files may sometimes be a bit challenging at the beginning, especially when using the asynchronous API. But instead of a plain explanation on how to do that, let's code it using a practical example. If you want to follow along, you'll find the code on [this repo](https://github.com/MicrosoftDocs/node-essentials).

{% youtube 3xm7spsmtRg %}

## Manipulate filesystem paths

Sometimes manipulating the filesystem paths can be tricky, especially for cross-platform applications (looking at you, Windows 👀). Let's consider a practical use case like accessing the current file path of your program and see how to construct paths from it.

{% youtube 7UIXzCEqgas %}

## Create files and directories (and check if it already exists)

Creating new files is probably the main subject here. You'll have to make sure the folder containing them exist, and create it if it doesn't. The logic for checking whether files or folders exist may be a bit different from what you may be used to, so let's check that too.

{% youtube 1mv9rSI9FFA %}

## Read and update JSON files

Reading a file might seem an easy job, but there's always the tricky question of [character encoding](https://en.wikipedia.org/wiki/Character_encoding). When writing text files, Node.js use [UTF-8](https://en.wikipedia.org/wiki/UTF-8) encoding as the default, but you need to specify it when reading files otherwise you might be in for some surprises. Let's see how it goes for reading and updating JSON files, as it can be quite useful when manipulating app configurations.

{% youtube 4Vg1NECQ_Kg %}

## What's next

We're done for this post, but that doesn't mean that you should stop there. You should consider this post as a practical crash course on using the filesystem with Node.js. And of course, there's a lot more to it than what we can cover under 5 minutes videos. In particular, I would like to bring your attention to potential issues if you're working with [different OS filesystems](https://nodejs.org/en/docs/guides/working-with-different-filesystems/), as it's easy to trip over.

If you would like to deepen your knowledge around filesystem manipulation, you can take a look at this [Interactive in-depth tutorial on Node.js filesystem](https://docs.microsoft.com/learn/modules/nodejs-files/?wt.mc_id=nodebeginner-devto-yolasors).

Please share any questions or experiences you've had on these topics in the comments. Thanks for reading!

---

Follow me on [Twitter](http://twitter.com/sinedied), I would be happy to discuss and take your suggestions!

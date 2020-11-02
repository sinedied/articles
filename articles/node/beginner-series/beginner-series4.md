---
title: Build a web API with Node.js and Express
published: false
description: Learn how to use Node.js and Express to create a RESTful web API with this series of bite-sized videos for beginners.
tags: 'webdev, beginners, javascript, node'
cover_image: 'https://raw.githubusercontent.com/sinedied/articles/master/articles/node/beginner-series/assets/banner4.jpg'
canonical_url: null
series: "Node.js for beginners"
id: 499214
---

> Are you new to Node.js? We created *Beginner’s Series to Node.js*, a series of short practical videos to get started with Node.js, from installing to debugging, with everything in between. You can look at the [announcement here](https://dev.to/sinedied/learn-node-js-with-this-series-of-short-videos-for-beginners-4lpm) and watch all videos here: [Beginner's Series to Node.js](https://www.youtube.com/playlist?list=PLlrxD0HtieHje-_287YJKhY8tDeSItwtg).

One of the main reasons for using Node.js is that you can create quickly RESTful web APIs with it. [Express](https://expressjs.com) is a popular web framework helping you with this task. Using JavaScript to build servers is often a natural choice for frontend developers looking for a way to reuse their skills and create the APIs supporting their web app, but that's not the only benefit of using Node.js. The huge package [ecosystem](https://www.npmjs.com/search?q=express) around Node.js and Express is what makes it shine, allowing to implement a lot of business features with very few lines of code.

My friend **Christopher Harrison** will walk through what you need to get started. 

{% user geektrainer %}

> Note: every single video below runs for less than 5 min, to make the most of your time 😉

### What you'll learn here
- What is Express and how it can be used to create web APIs
- Handle routing with parameters
- Receive and parse JSON data
- Use HTTP verbs to create a RESTful CRUD API

### Additional learning resources
- [Interactive in-depth tutorial on Node.js filesystem](https://docs.microsoft.com/learn/modules/build-web-api-nodejs-express/?wt.mc_id=nodebeginner-devto-yolasors)
- [Source code of the demonstrated API](https://github.com/WebDev-Beginners/7-bank-project/tree/main/api)
- [Express reference](https://expressjs.com/en/4x/api.html)
- [REST Client extension for VS Code](https://marketplace.visualstudio.com/items?itemName=humao.rest-client&WT.mc_id=nodebeginner-devto-yolasors)
- [Use CosmosDB with a Node.js app](https://docs.microsoft.com/learn/modules/build-node-cosmos-app-vscode/?WT.mc_id=nodebeginner-devto-yolasors)
- [nodemon on GitHub](https://github.com/remy/nodemon)

## Introducing Node.js and Express

When you want to create a web API using Express, you'll probably also need other packages as well to help you work more efficiently. `nodemon` for example is a little helper that allows you to automatically restart your server when you make changes to the code. Let's discover what Express can help you with, and what are the packages that you'll want in almost all your server projects.

{% youtube X2bHZ7R_4Kk %}

## Create a GET API

One of the first steps that come after initializing the Express server instance is creating a simple `GET` API that. To do that you'll need to use the router to create a new endpoint, and leverage the Express API to create the HTTP response, all with very few lines of code.

{% youtube fdq0V7uIXtc %}

## Handle routing with parameters

When you're building a REST API, you need to retrieve parameters from the URL so you can extract IDs from it to access specific resources. The router object can help you with that, and by using patterns to define the routes you can make Express to extract the data for you.

{% youtube e_aNOyeqsAU %}

## Receive and parse JSON data

Express by itself is not enough to create a `POST` endpoint that receives JSON. You'll need to use extra middlewares, like `body-parser` to be able to parse and use data coming from a client web app. Let's take a closer look.

{% youtube hapS6wpKuX8 %}

## Create update and delete APIs

To complete our API and make it a full *CRUD* (Create, Read, Update and Delete) API, we finally have to add the `UPDATE` and `DELETE` endpoints. Let's see how it differs from Read and Create and put the finishing touch to our server.

{% youtube cqapa6mI3jE %}

## What's next

You should now have the ground to create your own API with Node.js and Express. If you want, you can also take a look at what [the final API](https://github.com/WebDev-Beginners/7-bank-project/tree/main/api)) we built looks like.

If you would like to deepen your knowledge, you can also take a look at this [Interactive in-depth tutorial on Node.js and Express](https://docs.microsoft.com/learn/modules/build-web-api-nodejs-express/?wt.mc_id=nodebeginner-devto-yolasors). Once you start building your API, one of the next steps is usually to plug in a database. You can take a look a [this tutorial](https://docs.microsoft.com/azure/cosmos-db/sql-api-nodejs-application/?wt.mc_id=nodebeginner-devto-yolasors) to learn how to create and connect a [Cosmos DB](https://docs.microsoft.com/learn/modules/build-node-cosmos-app-vscode/?wt.mc_id=nodebeginner-devto-yolasors) instance to a Node.js app. If you never heard about CosmosDB, it's a hosted distributed database that supports multiples connectors, including [MongoDB](https://www.mongodb.com), a popular choice among Node.js developers.

Please share any questions or experiences you've had on these topics in the comments. Thanks for reading!

---

Follow me on [Twitter](http://twitter.com/sinedied), I would be happy to discuss and take your suggestions!

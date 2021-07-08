---
title: Build a shopping app with Azure Static Web Apps
published: true
description: Learn how to implement various features for building a shopping app with Azure Static Web Apps.
tags: 'webdev, beginners, javascript, azure'
cover_image: ./assets/swa-02-banner.jpg
canonical_url: null
series: Static Web Apps Tips & Tricks
---

> If you're looking for tips and best practices on how to create and deploy fully featured web apps with Azure Static Web Apps, we created a series of short practical videos to help you with various use cases. You can look at the [announcement here](https://dev.to/azure/16-tips-to-master-your-azure-static-web-apps-3cgn) and watch all videos here: [Azure Tips and Tricks: Static Web Apps](https://aka.ms/StaticWebAppsTips).

After you've deployed the first version of your web app and set up your CI/CD workflow, you'll probably want to fine tune your app configuration and start implementing more advanced features, such as authentication and authorization.

We'll cover in this post some common features you may want in your web apps, by building a shopping web app. The [base sample code](https://github.com/MicrosoftDocs/mslearn-staticwebapp) we'll use is implemented with React, Angular, Vue.js and Svelte so you can pick your favorite framework to follow along.

To help you with all these featuress, I'll be joined by my friends [**Ayşegül Yönet**](https://twitter.com/AysSomething), [**Simona Cotin**](https://twitter.com/simona_cotin) and [**Burke Holland**](https://twitter.com/burkeholland).

### What you'll learn here
- Configure routing, SPA fallback and redirections
- Add a serverless API
- Integrate user authentication
- Configure authorization and roles
- Set up custom domains

### Additional learning resources
- [Interactive in-depth tutorials Static Web Apps](https://aka.ms/learn/swa)
- [Static Web Apps docs overview](https://docs.microsoft.com/azure/static-web-apps/?WT.mc_id=javascript-17844-cxa)
- [Shopping app source code template](https://github.com/MicrosoftDocs/mslearn-staticwebapp)
- [Static Web Apps CLI](https://github.com/Azure/static-web-apps-cli)

## Configure routing

If you're building a [Single Page Application](https://en.wikipedia.org/wiki/Single-page_application), chances are you'll be using [HTML5 routing](https://developer.mozilla.org/en-US/docs/Web/API/History/pushState) meaning your app will break if you do not configure a server-side fallback to you base `index.html` file. We'll have a look on how to configure this among other common routing tasks.

{% youtube A70tGiaHCTE %}

## Add a serverless API

After your web front-end is properly set up, you may want to do some back-end processing to retrieve and store data in a database for example. [Serverless functions](https://docs.microsoft.com/azure/azure-functions/?WT.mc_id=javascript-17844-cxa) are perfect for that, and allows to create an API by only focusing on what you're trying to achieve without having to create and manage an actual server.

{% youtube VzML-6DClVU %}

## Integrate user authentication

Managing and verifying users' unique identity is an important piece of most web apps nowadays, especially if you're looking to provide a secure personal space for your users. We'll see how to leverage built-in authentication providers to quickly integrate authentication in your static web app.

{% youtube TygnLOA68B0 %}

## Configure authorization and roles

After implementing authentication, the logical next step is often to secure the access to various parts of your app, including the API. You can do that with configuring user roles and authorization levels for your routes, to prevent unwanted access and secure your app resources.

{% youtube r5yrxgc12q4 %}

## Set up custom domains

If you've deployed a Static Web App before, you've probably noticed that the generated public URL isn't something you'll likely remember and want to share publicly. We'll see how to set up a custom domain for your static web app, along with generating a free HTTPS certificate.

{% youtube SpQgKfJ87fE %}

## What's next

That's it for this post! If you would like to deepen your knowledge around Static Web Apps, you can take a look at the [docs overview](https://docs.microsoft.com/fr-fr/azure/static-web-apps/?WT.mc_id=javascript-17844-cxa) to find out all the things you can do with Static Web Apps.

Please share any questions or experiences you've had on these topics in the comments. Thanks for reading!

---

Follow me on [Twitter](http://twitter.com/sinedied), I'll be happy to discuss and take your suggestions.

---
title: The easy way to serverless web apps and APIs with Azure SWAG
published: false
description: "If you're building web apps with custom APIs, Azure SWAG may become your next best friend: streamlined serverless deployment, all from GitHub. With a Free tier. Wanna take a look?"
tags: webdev, beginners, javascript, azure
cover_image: ./assets/azure-swag.jpg
canonical_url:
---
# The easy way to serverless web apps and APIs with Azure SWAG

What's this new Azure *SWAG* thing?

During the Build conference, the new Azure **S**tatic **W**eb **A**pps service has just been announced. And it works with **G**itHub repositories. So for short, Azure **SWAG** 😎. But what is it about?

#### Short version

> It's an all-inclusive hosting service for web apps with serverless APIs, based on continuous deployment from a GitHub repository.

Boom.

#### Slightly longer version

With a quick one-time setup you can deploy any web app, be it a SPA or a static website:

- Using React, Vue, Angular, or Svelte? You're covered ✅.
- Using Gatsby.js, Vuepress, Hugo, Jekyll or static website generator? You're covered too ✅.
- Want to go further and do SSR? Works too ✅.

If you need to crunch some data, you also get a serverless API alongside your web app, based on [Functions](https://docs.microsoft.com/fr-fr/azure/azure-functions/functions-overview). You put your API code on the same repo as your web app, and it will be deployed at the same way with no extra efforts.

Oh, and did I mention that it also comes with a built-in Identity manager service? You can add authentication with differents roles for your users at the hand of a JSON configuration file.

![boom meme](./assets/boom.jpg)

I'm really excited about this new service because my previous web development experience with Azure was far from smooth sailing... Let's be completely honest here: it felt way over-complicated for a developer just wanting to deploy a web app with an API.

With this new [Static Web Apps](TODO link) all-in-one solution, it's kind of a relief and feels to me like a welcome gift for us web developer. And by gift, I really mean it as it comes with a Free tier 🎁.

Getting excited too? Let's see how it works!

## Deploy your first SWAG (Static Web App on GitHub)

Rather than telling you more about it, let's experience it by yourself.

#### Prerequisites
- [A GitHub account](https://github.com/join)
- [An Azure account](https://azure.microsoft.com/free/?WT.mc_id=swa_devto-blog-yolasors) (you can reuse your GitHub account to login)

#### Deploy in 3 steps

Once you're ready to go, follow these steps to deploy your first app.

1. Fork this repository: http://

TODO: swag example repo with plain HTML and API :)
TODO image fork

2. Click on this button:


3. Set these options, then click on DSHJD

Aaaand you're done. That's it!
Now navigate to your TODO...

Notice that a [GitHub Actions](https://github.com/features/actions) workflow has been created for you. It does 2 things:

- Deploy your app to production each time new changes are pushed to your `master` branch.
- Deploy a staging version of your app to a separate pre-production environment each time a new pull request is created against the `master` branch.

You got the basics here.


TODO: You got SWAG image


To dig further from there, you can go to [the official docs]() and learn more about what you can do with SWAG.
Note that the service is currently in public *preview*, so there might still be some rough edges here and there.

TODO: or follow this full tutorial?

What are your thoughts about this new service?

---

Follow me on [Twitter](http://twitter.com/sinedied), I would be happy to discuss about it and take your suggestions!


---
title: Get started with the new Azure Static Web Apps CLI
published: false
description: Discover how we revamped the SWA CLI to streamline the developer experience to create, test and deploy your Static Web Apps.
tags: 'webdev, beginners, javascript, staticwebapps'
cover_image: ./assets/cli-banner-1.jpg
canonical_url: null
series: 'swa-cli'
---

You may have missed it, but the [new Azure Static Web Apps CLI](https://github.com/Azure/static-web-apps-cli) is now available!

It would take a whole post to describe all the changes and new features, but here are some of the highlights. With the new `init`, `build`, `start` and `deploy` commands, the complete developement cycle of your app is now available *in a single tool*, directly from the command line. To get started, make sur you have a recent [Node.js](https://nodejs.org) version installed (>14) and type this command in your terminal:

```sh
npm i -g @azure/static-web-apps-cli
```

We'll now have a look at the new commands and the most important features.

> If you've never heard of Static Web Apps (or SWA for short), it's a web app hosting service provided by Azure, offering streamlined full-stack development with many built-in features like authentication, customizable routing, serverless functions and more. It also has a great [free tier](https://azure.microsoft.com/free/?WT.mc_id=javascript-0000-yolasors) 😉

## `swa`

As the new CLI introduces a gazillion new options, it must quite a steep learning curve to get started? Quite the opposite!

Every command starts with `swa`, and now it might also be the only thing you'll need.

```sh
# yes, that's all you need to type
swa
```

This command is a macro shorcut for `swa init`, `swa build`, `swa login` and `swa deploy`. We'll get to the details of all these commands in a bit, the most important thing here is that `swa` is the only command you need to know to configure a new project for use with Static Web Apps, build it and deploy it. You don't have to worry about any options or flags, just type `swa` and you'll be on your way. 

## Creating the configuration

The first of the new commands is `swa init`. This commands with detect your project configuration and the frameworks you're using to suggest a configuration for you, so you won't have to read through [the shiny new docs](https://azure.github.io/static-web-apps-cli/) to figure out what options you need.

![swa init command screenshot](./assets/init.png)

After asking a name for your project configuration, you can validate or edit the detected project settings. Once finished, it will create a `swa-cli.config.json` file in the current folder with your settings. You can commit this file in your project repository so everyone from your team can use it.

## Building your project



## Running your app locally



## Next steps




## Tell us your feedback!

TODO

We're also here on dev.to to listen and help as much as we can! 🙂

Please tell us your experience, your difficulties and questions, and what videos you would like to see next in this series!

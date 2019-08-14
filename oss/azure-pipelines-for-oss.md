# The ultimate (free) CI/CD for your open-source projects

I spend a good part of my free time working on open-source software (OSS) on GitHub, and I do it (mostly) for fun and learning new things.
But one thing that I can tell you is no fun, is losing time hunting bugs that I cannot reproduce...
Or fighting with tools supposed to help you, like your continuous integration (CI) system.

Did you ever wondered which CI/CD solution you should invest your time on then? You've come to right place!

## TL;DR

- If you plan to maintain an open-source project in the long run, what you must do is **automate**
- The worst way of losing time is when your automated pipelines are not working as intended: flakiness, unreliable builds and cross-platforms issues can (will) drive you crazy
- **Pragmatism** should be your main driver here, seek to get the job done for the least time invested

Based on this, I found that [Azure Pipelines](https://azure.microsoft.com/services/devops/pipelines/?WT.mc_id=devto-blog-yolasors) currently offers the best *time investment/benefits* ratio in my opinion.

That may probably change once [GitHub Actions CI/CD]() solution becomes available for everyone (planned for November, 13th).
But until then I will stick with a tried & tested solution that allows me spending more time with my loved ones, than fighting with build issues 🍸

## What will you learn here?

- How to setup [Azure Pipelines](https://azure.microsoft.com/services/devops/pipelines/?WT.mc_id=devto-blog-yolasors) for an open-source project hosted on GitHub (Node.js in this case, but it works for any stack)
- Why it can help you save some of your limited OSS working time

If you don't care for the back story, you [jump straight into action](#lets-do-it).

## The full story

It has been a few years now that I have been maintaining multiple open-source projects on GitHub, and through the years I have come to this conclusion:
- 🔥 Being a maintainer is hard *(no kidding!)*
- ⏲ It takes a lot of your free time *(that you might sometimes prefer spending with you family and friends)*
- 😭 Cutting corners to gain time in short-term almost always results in a lot of time lost in the long-term *(like with any software project)*

Jokes aside, the last point is easy to overlook and I fell into it too many times by not adding proper tests or CI, like:
> "I'm doing this mostly for myself, but I'll share it in case it can be useful to others"

### Oops, did not plan for that 😱

BIG MISTAKE. Once issues and PRs comes, it's *too late*.
Reviewing, testing and deploying fixes and new features from the community becomes a black hole of time lost.

![Free time in black hole](images/free-time-hole.jpg)
<figcaption>Black hole by Event Horizon Telescope Collaboration, <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a> // Altered with my awesome Paint skills</figcaption>

After a few projects though, it's probable that you don't make this mistake anymore and that you put in place a minimal CI pipeline as I did 😎 

### Then it was fine. Somehow.

Few years ago, there was not so much choice if you wanted a free hosted CI solution for an open-source project. In fact, I was actually happy some solutions existed, given that it was, well... free.

That's how I ended up using most popular solutions such as [Travis](https://travis-ci.org), [AppVeyor](https://www.appveyor.com) and [CircleCI](https://circleci.com). Each one meets a specific need, but not any of these are perfect unfortunately.

| Service   |              | OSS Tier
|-----------|--------------|---------
| Travis CI | Simplest and most common way to get started with a CI on GitHub. | 5 concurrent jobs shared between *ALL* your repos<br>Linux + Mac builds
| AppVeyor  | For a long time, it was the only CI platform providing a free tier for Windows builds. | 1 concurrent job<br>Windows + Linux builds.
| CircleCI  | The most flexible solution of these 3 as you can use your own container, but it's also the most complex to setup | 1 concurrent job<br>1000 builds minutes/month<br>Linux only builds

#### Red builds and issues...

For most simple projects using any of these solutions might be just enough.
But over time I ran into a bunch of problems, growing with the complexities of my projects.

##### The build matrix

First comes the problem of the environment: I develop on Mac OS, the CI runs on Linux... and issues pops up on Windows.
That's how I ended using a combo of Travis + AppVeyor, like many projects.

Then there's the issue of being compatible with multiple platform versions.
For example, a project supporting Node.js `>= 8` would be wise to test on all LTS version along with the latest stable version: that would mean at this time `8.x`, `10.x` and `12.x`.

Nearly all CI services supports a build matrix definition for these use cases, so that's fine.

But when you start having *many projects* and each one have *multiple builds*, total build time starts to become an issue: I already had to wait for days (!) to be able to merge some PRs because many came at the same time on different projects (and all were sharing the same worker limit). When your pipeline is already quite long (like 1h for a PR build), it can get problematic really fast...

##### Fighting the uncertainty

Finally there's the most dreaded issue that took countless hours of my life for nothing: flaky builds 😱.

![Fighting the build matrix](images/matrix-fight.jpg)

Sometimes, for *no good reasons*, one or many of your builds fails. And you (or your contributors) lose time investigating the issue, discovering that the CI service is the problem, not the code.

If it's only once in the while and you're suspicious, you just restart the build and it pass.
But sometimes not, making you spending precious time fixing the CI because:
- An unfortunate update (bug) was pushed (*shit happens*, but once it was there for WEEKS)
- Build container images were tweaked (and your CI goes 💥)
- *"We are currently experiencing technical difficulties"*
- No reason... 😞

And over time this makes you wary of your own CI, which is not a good thing.

I know I may have been asking too much and most OSS projects are just fine using these solutions.
Also to be completely fair, given that all these services were provided for free, it was hard to complain.

### Meet Azure Pipelines

Some times ago I discovered that [JHipster](https://github.com/jhipster/generator-jhipster) had migrated all its CI to [Azure Pipelines](https://azure.microsoft.com/services/devops/pipelines/?WT.mc_id=devto-blog-yolasors). I knew this project for a long time and its CI complexity is nothing to laugh at, with a lot of combination paths and huge build times. So this got me interested and tried to migrate some projects of my own to test it out.

Well, I was surprised to see that it gives you quite a lot *for free* compared to other solutions:
- It can target any OS (Windows/Mac/Linux)
- It's **fast** (10 parallels workers by organization for OSS tier )
- Seems more reliable (from my own experience and discussions with JHipster maintainers)
- It's quite easy to setup and get working (a bit more complex than Travis though, but with way more flexibility)

I started by migrating the tests of a [simple Node.js](https://github.com/sinedied/smoke) project of mine.
The existing Travis/AppVeyor combo was replaced with a single Azure Pipeline to test on Windows/Mac/Linux, as done in [this PR](https://github.com/sinedied/smoke/pull/3/files).
I had to disable git `autocrlf` option for Prettier check to be happy on Windows, but besides that the migration was trivial.

After this first success, I moved on to migrate the much more complex and demanding CI of [generator-ngx-rocket](https://github.com/ngx-rocket/generator-ngx-rocket), and here is the result.

 *| Before                                                 | After
-------------|--------------------------------------------------------|-----------------------------------------------------------
Service      | Travis + AppVeyor + Circle CI with custom Docker image | Azure Pipelines
Combinations | 40 builds on Travis (Linux * 2 Node versions)<br>20 builds on AppVeyor (Windows)<br>1 build on CircleCI (Android) | 120 builds (Linux/Windows * 2 Node versions + Mac/Android)
Build time   | ~1h for a PR (~50min Travis, ~1h AppVeyor, ~5min CircleCI) | ~1h for a PR (~30min if limited to the previous Travis scenario)

The migration was not that trivial this time as I had to use [a template](TODO) to generate the combinations matrix, but the result is great:
- Only one config to manage (and no need to build an extra Docker image for Android)
- More combinations tested in less time

After this experience, I can say that I'm all for Azure Pipeline now and I will continue to migrate my other repos 👍 


> Hey wait, but what about the new [GitHub Actions for CI/CD](https://github.blog/2019-08-08-github-actions-now-supports-ci-cd/?WT.mc_id=devto-blog-yolasors)?!

I give you that it look totally AWESOME, especially the OSS tier 😍
Once it becomes available for everyone on November 13th, it will probably becomes the best solution out there (and this article will be updated in that case 😉).

Two things to still consider Azure Pipelines though:
- If you are not invited as one of the beta testers, you won't be able to use GitHub Actions for now. But in the meantime you probably want a working CI solution!
- GitHub Actions for CI/CD is based on parts of the Azure Pipelines stack, so migration should be a breeze if you are already using the latter

## Let's do it!

At this point you may want to try it out for yourself. We will go through the steps to put in place an Azure Pipeline CI for your own Node.js project (don't go away if you use another stack, it's not much different and I will give some pointers 😉).

You can see an example result [on this repo](https://github.com/sinedied/smoke).

**Requirements:**
- An Azure DevOps account (you can use your GitHub to log in)
- A GitHub repository with a build or tests you want to automate

### Prepare your repository



### Create the Azure DevOps project

In you Azure DevOps account, click `+` to create a new project

### Add the Azure Pipeline


Badge

### Enjoy your evenings

That's it!
You can manually queue a build to make sure
Once a new commit or PR will be pushed to your repo, the CI will take care of it and repo the result directly to GitHub:

// PR IMAGE

Now you can relax and enjoy your free time again 🍻.

Don't forget to share your feedback and experience in comments!

## Going further

Of course, there is many more things that you can do to simplify your life as a maintainer and I will share them in later posts.
But I really think CI is one of the first thing you should put in place in any project.

There's also much more that you can do with Azure Pipelines *(did I mention CD somewhere?)* but let's keep that for later 😉.

---

Follow me on [Twitter](http://twitter.com/sinedied), I would be happy to discuss and take your suggestions!

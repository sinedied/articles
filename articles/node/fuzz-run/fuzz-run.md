---
title: A simple Node.js command to improve your dev workflow
description: "Discover a no-thrill runner CLI with fuzzy matching to run all your Node.js tasks by typing less."
tags: 'productivity, node, javascript, webdev'
cover_image: ./assets/run.jpg
published: false
---

I don't know about you, but as a JavaScript developer, there's something I do hundreds of times a day: running **NPM scripts** to *test*, *lint*, *build*, *serve*, *release* and more.

And because I'm a CLI guy, that involves a lot of typing, which as a result involves a lot of typing mistakes. `npm start` or `npm run build` may seems short enough, but typing it hundreds of times is not.

![bored dog typing](./assets/bored.gif)

That's why almost 4 years ago I've decided to find a better workflow. Ultimately, my goal have been to type the minimum amount of characters to run my scripts.

I've found a way to do that with **fuzzy matching**. I also found two existing tools that explored the same idea, [fuzzy-npm-run](https://www.npmjs.com/package/fuzzy-npm-run) and [fuzzy-run](https://www.npmjs.com/package/fuzzy-run). Both relied on the same fuzzy matching lib [fuse.js](http://fusejs.io) which is not great for matching commands, as it doesn't weight properly specific features like subcommands separation (using characters like `-`, `_`, `:`) or first character of words, and led to me to run the wrong scripts too many times.

## Introducing `fuzz-run`

That's about when I've decided to spin my own runner tool. I benchmarked many fuzzy matching libraries, and kept the best one I found suited for the job, [fuzzysort](https://www.npmjs.com/package/fuzzysort), as it solved all the issues I had with existing runners.

And this is what I've been using every day for the last years, running all my scripts with only a few characters:

![demo gif](https://user-images.githubusercontent.com/593151/156170977-c9cfa19f-40a2-40b5-8c17-23180fbbc79a.gif)

You can install it with `npm install -g fuzz-run`, then its usage is dead simple:
- If no arguments are provided, it will list all available scripts (no more digging in `package.json`).

- Type `nr <fuzzy_script_name>` to run a script. You can even add options to the script, like `nr b --watch`. And no need for silly extra `--` like with `npm` to pass those options.

The name of the script is fuzzy matched, this means that you either type only some letters of the script name, regardless of their position (first letters weights more), like `t` for the `test` script. For compount script names like `test:ci`, you can just type the first letters of each word, like `tc`. It will even match if you do simple types, like `ets` for `test`.

Note that it will autodetect which package manager you're using in a project, and will run the script in the right package manager whether you're using `npm`, `yarn` or `pnpm`.

That's it, you can now run your scripts with only a few characters, and you'll be as happy as I was when I started using it.

To be honest, I almost forgot about this tool, because well, it quickly become part of my dev habits, and I only think about it when I'm on a new setup and it's not there. That's also why I'm only writing this post now, almost 4 years later 😅

![happy](./assets/happy.gif)

## Bonus

My first most frequent task being taken care of, I recently decided to think about how I could improve some other very common (and boring) tasks I do in almost every project I work on.

### Dependencies updates

One of these task is **updating dependencies**. It often involves running `npm outdated` to check if there are any outdated dependencies, and then running `npm update` to update them within the allowed ranges in my `package.json`. Then most of the time, running `npm outdated --long` to see the remaining ones with link to their repository, so I have have a look at possible breaking changes and decide if I want to update them, one `npm install <package>@latest` at a time.

When I remember the command, sometimes I use [npm-check](https://www.npmjs.com/package/npm-check) or [npm-check-updates](https://www.npmjs.com/package/npm-check-updates) to save some time, but I most often don't remember which is the one I usually use and what's the syntax. Yarn has definitely an edge here with its `yarn upgrade-interactive` command.

So here comes a scripted action to tackle this task in a more automated way: `nr --updated` or simply `nr -u` (because you know, the less characters to type the better 😉).

It will run this sequence of actions:
- Run `npm outdated` to check for any outdated dependencies.

- If there are any, ask if you want to run `npm update` to update them within allowed ranges in `package.json`.

- Finally, perform an interactive upgrade for packages outside your allowed ranges, with `npm npm-check -u`. You'll be able to choose which packages to upgrade, with a link to their repository to see the changelogs.

Of course, if you're within a Yarn or PNPM project, the commands will change accordingly.

With that, I won't have to remember the exact syntax of the commands, and I'll be able to run this task whatever package manager used for the project.

### Fixing those install issues...

Another task I've been doing a lot more that I would like, is trying to fix those install issues I've been having with `npm install` (and that includes Yarn, too).

You know, when the install fails or breaks for no apparent reason, and most often it's because the dependency tree could not be resolved properly after adding or updating a package. Which often results in `rm -rf node_modules package-lock.json` and `npm install` to try to fix the issue.

The `nr --refresh` or `nr -r` scripted action comes to the rescue, well doing exactly just that for you, with included adaptations for Yarn and PNPM. Again, less typing for me.

## Final words

This is very small tool that I've been using for a long time, and I hope it's useful to you even though I initially created it to scratch my own itch.

It's also completly [open source](https://github.com/sinedied/fuzz-run), so you can contribute to it or fork it to make it your own.

---

Follow me on [Twitter](http://twitter.com/sinedied), I would be happy to discuss about it and take your suggestions!

---
title: The missing (simpler) introduction to Angular
published: false
description: 'Angular might be easier to learn than you think! This is an introduction to building complete apps with Angular, with the minimal required complexity.'
tags: 'webdev, beginners, javascript, angular'
cover_image: ./assets/todo-banner.jpg
series: ng-lite
id: 1152011
---

Being a rather complete framework, Angular is often said to be complex and difficult to learn. And seeing articles telling that you need to learn RxJS and observables before even starting to dig in Angular isn't really helping with that idea.

Sure, there's a lot of Angular built-in features and tools that you can use to make your life easier when dealing with complex applications, but you don't have to learn all of them to get started. In fact, you can build perfectly fine apps using mostly HTML/CSS and the new [Angular standalone components](https://angular.io/guide/standalone-components), without using any other features.

Let's try building the infamous todo list app while learning the basics of Angular and keeping the project as simple as it can be, following the [YAGNI principle](https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it).

## Getting prepared

To work with Angular, you need a recent [Node.js](https://nodejs.org) runtime (v14 at least), and the [Angular CLI](https://cli.angular.io).

```bash
npm install -g @angular/cli
```

This command-line tool is used to initialize, develop, build and even update Angular projects. This is basically your best friend when working with Angular.

## Bootstrapping the app

Usually, you start a new Angular project by using the CLI `ng new` command, but the default Angular template might be a bit overwhelming with lots of files and tools included that you don't necessarily need.

Instead we'll use the "ngLite" template we created [this previous article](TODO) to get a simpler starting point.

```bash
# Creates a new Angular project
npx degit sinedied/ng-lite-starter ng-lite-todo
cd ng-lite-todo
```

Here's a quick overview of the project organization:

```bash
src/
|- app/
| |- app.component.ts     # The main component of the app
|- environments/
| |- environment.prod.ts  # Production environment settings
| |- environment.ts       # Development environment settings
|- public/                # Static files and assets
|- main.ts                # The entry point of the app
|- styles.css             # The global stylesheet of the app
angular.json              # Angular's project config
tsconfig.json             # TypeScript config
```

Let's focus now on building our todo list app. The feature set we'll implement is rather classic, but will allow us to have a look at all these fundamentals topics: 

- Creating container and presentational components
- Passing data between components
- Showing/hiding content dynamically
- Creating forms and handling form data
- Displaying a keyed list
- Handling app routing
- Calling an API

Time to get started!

## Creating the task list component

We'll start by creating a component that will display the list of tasks. Run the command:

```bash
ng g component task-list --flat
```

This will create the new file `src/app/task-list.component.ts`. The `--flat` option indicates that we don't need an extra folder for the component.

You'll notice an error on your newly created component, what?!
![Screenshort showing TaskListComponent class error](./assets/component-error.png)

Don't mind it, this is a good reminder that currently this component isn't used anywhere, so we need to fix that.

In the file `src/app/app.component.ts`, import our new component at the top:

```typescript
import { TaskListComponent } from './task-list.component';
```

Add `imports: [TaskListComponent],` to the `@Component` properties like this:

```typescript
@Component({
  imports: [TaskListComponent],
  // ...
})
```

Because we're using Angular [standalone components](https://angular.io/guide/standalone-components) in this project, we need to explicitely imports the components and Angular features we want to use in every component of our app.

#### What's an Angular component?

Let's move back to `src/app/task-list.component.ts` and take a moment to look at how a component is defined with Angular:

```typescript
@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      task-list works!
    </p>
  `,
  styles: [
  ]
})
export class TaskListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

}
```

Angular components are defined with a [TypeScript](https://www.typescriptlang.org) **class** preceded by the `@Component` decorator. In this decorator are specified a few important properties:

- `selector`: This is a standard CSS selector that will be used to find the component in the DOM. In this case, that means that our component will be found with the `<app-task-list>` tag. The `app-` prefix is used to identify your app component, as opposed as standard HTML tags and components that may come from other libraries.

- `standalone`: This indicates that this component doesn't need to be part of an Angular *module*. Since we don't want to care about modules for now, this will be set to `true` for all the components of our project.

- `imports`: This is the tricky part. For each *standalone* component, you need to import the Angular modules and other components your need. The `CommonModule` contains the core Angular features, so you'll likely need it in most of your components.

- `template`: This is the HTML template of the component. If you're using VS Code, you should install the [Angular language service extension](https://marketplace.visualstudio.com/items?itemName=angular.ng-template&WT.mc_id=javascript-0000-yolasors) to get syntax and error highlighting.

- `styles`: This is the CSS stylesheet of the component.

> About **TypeScript**: think of it as JavaScript with added optional types. This allows you to build more safe applications and discover errors early, among other benefits. If you're never used TypeScript before, you can read [this 5-min introduction](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html). But even if you don't, you can probably follow along just fine.







- all / active / completed route filter
- todoItem
- todoService


WIP

### Your next learning steps

- Angular router
- Angular forms
- Angular services and dependency injection
- Angular HTTP service
- Reactives forms and observables
- Angular animations
- Angular modules
- Angular service worker
- ...

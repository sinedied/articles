---
title: Adapting your Angular apps for dual-screen devices with ngx-foldable
published: false
description: Find out how you can quickly adapt existing Angular apps for dual-screen devices like the Surface Duo, without having to deep dive in custom-specific CSS and media queries.
tags: 'webdev, beginners, javascript, angular'
cover_image: 
canonical_url:
---

Hey web developers friends!

Foldable and dual-screen devices are becoming increasingly more common over time, but you may wonder if investing development time to support these devices might be worth it, especially when creating fully responsive web apps is already a challenge. Using the new [CSS and JavaScript primitives](https://devblogs.microsoft.com/surface-duo/dual-screen-web-experiences-preview/) is a fun way to discover and learn about the new possibilities offered by devices like the Surface Duo, yet you might be looking for a more efficient way to adapt existing apps without having to make drastic changes and dive too much in custom CSS. That's what we're going to explore here.

Earlier this year Aaron posted how to build a [dual-screen web app using React](https://devblogs.microsoft.com/surface-duo/dual-screen-react-web/), so today I’m going to show how to build for dual-screen devices using Angular. 

In this post we'll take a look at how you can use [Angular](https://angular.io/) to create a foldable web experience, with minimal changes to an existing code base. We'll start from the [photo gallery demo](https://github.com/foldable-devices/demos/tree/master/photo-gallery), create an Angular version of it and then see how using an Angular library makes the foldable adaptation way easier to approach.

![Demonstration of the demo we'll build](TODO make GIF)

## TL;DR key takeaway

Adapting existing apps to foldable devices does not mean that you have to rethink your design and code entirely. With [ngx-foldable](https://github.com/sinedied/ngx-foldable) library you can adapt existing Angular apps to support dual-screen devices with minimal changes to your app (and no CSS!). [react-foldable](https://github.com/aaronpowell/react-foldable) is also an alternative if you're working with React, and I'm sure that similar libraries will eventually appear for other frameworks.

## Re-creating the Photo Gallery demo with Angular

I wanted to keep the demo app as simple as possible to understand, so I used the [Angular CLI](https://cli.angular.io/) to generate the project using the minimal template:

```bash
ng new photo-gallery --minimal --prefix=pg --style=css --routing=false --strict
```

It gives us a nice working base with [strict type checking](https://www.typescriptlang.org/tsconfig#strict) and single file components, which looked perfect for building this demo. I won't cover here all the details about what I did to recreate the demo, as I mostly took the existing JavaScript and CSS code from the original photo gallery app and put it in Angular components.

You can find the complete application [source code on GitHub](https://github.com/sinedied/surface-duo-photo-gallery), but let's have a closer look at the most interesting parts here.

# App component

The file `app.component.ts` is the root component of our application. It contains the state, as which image is currently selected, and all the components composing our app. By looking at its template you can glimpse at how our appplication works:

```html
<pg-gallery [images]="images" (select)="setImage($event)"></pg-gallery>
<pg-fold></pg-fold>
<pg-details [image]="currentImage"></pg-details>
<pg-fullview
  [image]="currentImage"
  (close)="closeImage()"
  (previous)="previousImage($event)"
  (next)="nextImage($event)"
></pg-fullview>
```

From there you can see that our app is made of 4 main components:
- **Gallery**: a scrollable list of thumbnails
- **Fold**: a placeholder for the space taken by the fold area on dual-screen devices
- **Details**: show the zoomed in version of the selected image with its description on dual-screen devices
- **Fullview**: show the selected image in full screen on single-screen devices

The **App** component also include some styling to lay out these components depending of the device configuration:

```css
:host {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
}

@media (screen-spanning: single-fold-vertical) {
  :host { flex-direction: row; }
}

@media (screen-spanning: single-fold-horizontal) {
  :host { flex-direction: column-reverse; }
}

@media (screen-spanning: none) {
  :host { flex-direction: row; }
}
```

Here we're using specific media queries to adapt the layout on dual-screen configuration. You'll see these media queries also used in the other components to hide or show them and adapt their design for every configuration, so let's have a closer look.

## Fold, Details and Fullview components

These 3 components are used to display differents things depending device it's running on. The **Fullscreen** component is used only on single-screen devices, wheras the **Fold** and **Details** component are use on dual-screen devices.

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'pg-fold',
  template: `<div class="fold"></div>`,
  styles: [
    `
      .fold {
        height: 0;
        width: 0;
        background-size: 40px 40px;
        background-color: #737373;
        background-image: linear-gradient(
          45deg,
          rgba(255, 255, 255, 0.2) 25%,
          transparent 25%,
          transparent 50%,
          rgba(255, 255, 255, 0.2) 50%,
          rgba(255, 255, 255, 0.2) 75%,
          transparent 75%,
          transparent
        );
      }

      @media (screen-spanning: single-fold-vertical) {
        .fold {
          height: env(fold-height);
          width: env(fold-width);
        }
      }

      @media (screen-spanning: single-fold-horizontal) {
        .fold {
          height: env(fold-height);
          width: env(fold-width);
        }
      }
    `,
  ],
})
export class FoldComponent {}
```

You can see here that by default the **Fold** component is hidden (height and width set to 0) and it's made visible with different sizes when a dual-screen device is used. The **Details** component use a similar approach. The **Fullview** component does the opposite by hiding itself when a dual-screen device is detected, with this media query:

```css
@media (screen-spanning: single-fold-horizontal),
       (screen-spanning: single-fold-vertical) {
  .container {
    display: none;
  }
}
```


## Introducing ngx-foldable





- Libraries like [Bootstrap](https://getbootstrap.com/) and [Tailwind CSS](https://tailwindcss.com/)


## Going further


---

Follow me on [Twitter](http://twitter.com/sinedied), I would be happy to discuss and take your suggestions!

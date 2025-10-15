# 🌀 Vue Transify

**Vue Transify** is a lightweight animation library built on top of Vue’s native [`<Transition>`](https://vuejs.org/guide/built-ins/transition.html) component — making it **powerful**, **easy to use**, and **fully customizable**.

With **flexible props** and **Quality Animations** for fine-tuning, Vue Transify makes it effortless to bring your Vue components to life.

---

## 🖼️ Demo & Playground

Try out the animations now ! : [Demo Playground](https://vue-transify.netlify.app/)

---

## 🚀 Features

- ✅ Built directly on top of Vue’s core `<Transition>` component
- ✅ Zero dependencies — just Vue
- ✅ Simple prop-based customization (duration, delay, easing, etc.)
- ✅ Works seamlessly with **Vue 3**
- ✅ Lightweight — less than **2KB gzipped**
- ✅ Open for contributions & custom animation extensions

---

## 📦 Installation

```bash
# npm
npm install vue-transify
```

---

## 🧩 Basic Usage

-First Import the styles into you main.js

```main.js

import { createApp } from 'vue'
import App from './App.vue'
import "vue-transify/dist/vue-transify.css";

createApp(App).mount('#app')
```

-Then you can import each animation as a component in your files and use it

```app.vue
<template>
  <div style="padding: 2rem">
    <button @click="show = !show">Toggle Fade</button>
    <!-- Use the component -->
    <Fade :duration="600" :appear="true">
      <p v-if="show">✨ Hello World from Fade Animation !</p>
    </Fade>
    <!-- Use these props to change the behavior of your animation -->
  </div>
</template>

<script setup>
import { ref } from 'vue'
// Import the component
import { Fade } from "vue-transify";
const show = ref(true)
</script>

```

---

## ⚙️ Props

-Library is fully prop based so you can customize the animations based on your need

| Prop         | Type      | Default   | Description                                                                           |
| ------------ | --------- | --------- | ------------------------------------------------------------------------------------- |
| **appear**   | `boolean` | `'false'` | If true animation will run on load                                                    |
| **duration** | `number`  | `500`     | Duration of the animation in milliseconds.                                            |
| **delay**    | `number`  | `0`       | Delay before the animation starts in milliseconds.                                    |
| **easing**   | `string`  | `'ease'`  | CSS easing function to control the transition curve(CSS acceptable timing functions). |

---

## 🧩 Page Transitions V-1.2.0

Vue-Transify new update brgins route-based animations through a built in component called `<PageTransitionHelper/>`
it's built on top of `vue-router`
No extra setup no extra configs

```
<template>
  <!--This component replaces the <router-view> in your app  -->
  <PageTransitionHelper mode="out-in" :duration="1000" />
</template>
<script setup>
//You need to import the animation you want to use in the app
import {SlideInDown} from "vue-transify"
import { PageTransitionHelper } from "vue-transify";
</script>

```

And Boom ! Now you have animations on each route change

⚙️ Change What Animation Each Route Has

You can add animations to each route using the meta fields and the transition will automatically be added to your router-view.

```index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'

const routes = [
  {
    path: '/',
    component: HomeView,
    meta: { transition: 'fade' }
  },
  {
    path: '/about',
    component: AboutView,
    meta: { transition: 'slideInUp' }
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})


```

---

## 🧑‍💻 Contributing

Contributions are welcome !
If you’d like to add a new animation, improve docs, or fix a bug:

1. **Fork** the repository.
2. **Create** your feature branch.

```bash
   git checkout -b feat/animation-name
```

3. **Commit** your changes.
4. **Push** to your brach.
5. **Open** a PR

-💡 Before submitting, make sure your code follows the existing structure and passes any lint or build checks.Be sure to follow the naming convetion.

-All Vue files and animations use PascalCase
-All Class prefixes use the camelCase

---

## 🌟 Support & Feedback

If you like **Vue Transify**, please consider supporting the project:

- ⭐ **Star** the repo on [GitHub](https://github.com/Redskullvue/vue-transify) — it helps others discover the library
- 🐞 **Open an issue** or suggest new features
- 🧩 **Share it** with other Vue developers and the community

Your support helps keep the project active and growing 💚

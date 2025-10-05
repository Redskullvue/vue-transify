<template>
  <div class="container">
    <main class="main-container">
      <component v-if="currentAnimation" :is="currentAnimation" :duration="1000" :appear="true">
        <h1 class="main-container--title">Vue Transify</h1>
      </component>
      <h4 class="main-container--subtitle">One line , infinite motion</h4>
      <div>
        <button @click="showSideBar = !showSideBar" class="main-container--button-sidebar">
          See Motions
        </button>
      </div>

      <small class="main-container--version"
        >V-1.0.0 | Developed by <a href="https://github.com/Redskullvue">RedskullVue</a>
      </small>
    </main>

    <aside class="sidebar">
      <SlideInRight :duration="400">
        <side-bar
          v-if="showSideBar"
          @select-animation="setAnimation"
          @close-side-bar="showSideBar = false"
        />
      </SlideInRight>
    </aside>
  </div>
</template>

<script setup>
import sideBar from './components/sideBar.vue'
import { ref, shallowRef } from 'vue'
import Fade from '@/components/Fade.vue'
import SlideInRight from '@/components/SlideInRight.vue'
import SlideInLeft from '@/components/SlideInLeft.vue'
import SlideInUp from '@/components/SlideInUp.vue'
import SlideInDown from '@/components/SlideInDown.vue'
import BounceIn from '@/components/BounceIn.vue'
import BounceDown from '@/components/BounceDown.vue'
import BounceUp from '@/components/BounceUp.vue'
import RotateIn from '@/components/RotateIn.vue'
import RotateUp from '@/components/RotateUp.vue'
import RotateDown from '@/components/RotateDown.vue'
import ZoomIn from '@/components/ZoomIn.vue'
import ZoomUp from '@/components/ZoomUp.vue'
import ZoomDown from '@/components/ZoomDown.vue'

const showSideBar = ref(true)
const currentAnimation = shallowRef(Fade)
const currentKey = ref(0)

const animationMap = {
  Fade,
  SlideInRight,
  SlideInLeft,
  SlideInUp,
  SlideInDown,
  BounceIn,
  BounceDown,
  BounceUp,
  RotateIn,
  RotateUp,
  RotateDown,
  ZoomIn,
  ZoomUp,
  ZoomDown,
}

const setAnimation = (name) => {
  currentAnimation.value = animationMap[name] || null
  currentKey.value++
  if (window.innerWidth < 800) {
    showSideBar.value = false
  } else {
    showSideBar.value = true
  }
}
</script>

<style>
* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  font-optical-sizing: auto;
}
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.main-container {
  width: 80%;
  height: 100vh;
  background-color: #f5f5f5;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}
.main-container--title {
  color: darkgreen;
  font-size: 60px;
}
.main-container--subtitle {
  color: green;
  margin-top: 80px;
  position: absolute;
}
.main-container--version {
  position: absolute;
  left: 10px;
  bottom: 20px;
  color: darkgreen;
}

.sidebar {
  width: 20%;
  height: 100vh;
  display: block;
  position: relative;
}

.main-container--button-sidebar {
  padding: 10px;
  margin-top: 10px;
  background: green;
  color: white;
  border: none;
  border-radius: 5px;
  display: none;
}
@media only screen and (max-width: 800px) {
  .main-container--title {
    font-size: 40px;
    margin-bottom: 40px;
  }
  .main-container--subtitle {
    font-size: 14px;
  }
  .main-container {
    width: 100%;
  }
  .sidebar {
    z-index: 2;
    position: absolute;
    width: 50%;
    right: 0px;
  }
  .main-container--button-sidebar {
    display: block;
    position: absolute;
    left: 5%;
    top: 2%;
  }
}
</style>

<template>
  <div class="sidebar-container">
    <div class="sidebar-header">
      <img class="logo" src="../assets/logo.png" alt="logo" />
      <h1 class="sidebar-header--title">Vue Transify</h1>
    </div>
    <button class="sidebar-button" @click="$emit('closeSideBar', false)">Close</button>
    <div class="sidebar-main">
      <ul class="sidebar-main--list">
        <li class="sidebar-main--list-items" v-for="(animation, index) in animations" :key="index">
          <h4 style="font-weight: 900">{{ animation.title }}</h4>
          <ul class="sidebar-main--list">
            <template v-for="child in animation.children" :key="child">
              <li class="sidebar-main--list-children" @click="$emit('selectAnimation', child)">
                {{ child }}
              </li>
            </template>
          </ul>
        </li>
      </ul>
    </div>
    <!-- Loop the animations -->
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emits = defineEmits(['closeSideBar', 'selectAnimation'])

const animations = ref([
  {
    title: 'Slides',
    children: ['SlideInUp', 'SlideInDown', 'SlideInLeft', 'SlideInRight'],
  },
  {
    title: 'Rotates',
    children: ['RotateIn', 'RotateUp', 'RotateDown'],
  },
  {
    title: 'Zooms',
    children: ['ZoomIn', 'ZoomUp', 'ZoomDown'],
  },
  {
    title: 'Bounces',
    children: ['BounceDown', 'BounceIn', 'BounceUp'],
  },

  {
    title: 'Flips',
    children: ['FlipX', 'FlipY'],
  },
  {
    title: 'Fades',
    children: ['Fade'],
  },
])
</script>

<style scoped>
.sidebar-container {
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  background-color: rgb(206, 252, 206);
  padding: 10px;
}
.logo {
  width: 90px;
  height: 90px;
}
.sidebar-header {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid darkgreen;
}
.sidebar-header--title {
  color: darkgreen;
  font-size: 24px;
}
.sidebar-main {
  margin-top: 5px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.sidebar-main--list {
  list-style-type: none;
  width: 100%;
}
.sidebar-main--list-items {
  padding: 10px;
  margin: 10px;
  color: darkgreen;
  font-size: 18px;
}
.sidebar-main--list-children {
  margin: 20px 0px;
  padding: 4px;
  font-size: 14px;
  cursor: pointer;
  font-weight: 600;
}
.sidebar-button {
  padding: 10px;
  margin-top: 10px;
  background: green;
  color: white;
  border: none;
  border-radius: 5px;
  display: none;
}
@media only screen and (max-width: 800px) {
  .sidebar-button {
    display: block;
  }
}
</style>

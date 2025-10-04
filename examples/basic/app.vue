<template>
  <div style="padding: 2rem">
    <button @click="show = !show">Toggle Fade</button>
    <!-- Use the component -->
    <Fade :duration="600" :appear="true" easing="ease-in-out">
      <p v-if="show">✨ Hello World from Fade Animation !</p>
    </Fade>
    <!-- Use these props to change the behavior of your animation -->
  </div>
</template>

<script setup>
import { ref } from 'vue'
// Import the component
import { Fade } from '../../src/components/Fade.vue'
const show = ref(true)
</script>

<template>
  <div class="container">
    <h1>Page 1</h1>
    <h4>{{ route.meta.transition }}</h4>
    <router-link class="button" to="/test">Change Page</router-link>
  </div>
</template>
<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>
<style scoped>
.container {
  width: 100%;
  height: 100%;
  background-color: lightgreen;
  display: flex;
  flex-direction: column;
}
.button {
  padding: 10px 30px;
  margin-top: 10px;
  border-radius: 10px;
  background-color: green;
  color: white;
  text-decoration: none;
}
</style>

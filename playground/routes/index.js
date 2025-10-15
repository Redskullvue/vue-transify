import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../Views/HomeView.vue'
import TestView from '../Views/TestView.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/test',
      name: 'TestView',
      component: TestView,
    },
  ],
})

const availableAnimations = [
  'fade',
  'slideInLeft',
  'slideInRight',
  'slideInUp',
  'slideInDown',
  'bounceIn',
  'bounceDown',
  'bounceUp',
  'rotateIn',
  'rotateUp',
  'rotateDown',
  'zoomIn',
  'zoomUp',
  'zoomDown',
  'flipX',
  'flipY',
]
//Select a random animation from animation list to have random transitions
router.beforeEach((to, from, next) => {
  const randomAnimation =
    availableAnimations[Math.floor(Math.random() * availableAnimations.length)]

  to.meta.transition = randomAnimation

  next()
})

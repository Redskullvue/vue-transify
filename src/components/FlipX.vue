<template>
  <!-- V-if pages -->
  <RouterView v-slot="{ Component }" v-if="isRouterView">
    <Transition
      name="flipX"
      :appear="appear"
      :mode="mode"
      :style="{
        '--animation-duration': duration + 'ms',
        '--animation-easing': easing,
        '--animation-delay': delay + 'ms',
      }"
      v-bind="$attrs"
    >
      <!-- On the chance that vue might reuse the components add key to re render the animation even on reuse -->
      <component :is="Component" :key="route.path" />
    </Transition>
  </RouterView>

  <!-- V-if component not pages -->
  <Transition
    v-else
    name="flipX"
    :appear="appear"
    :mode="mode"
    :style="{
      '--animation-duration': duration + 'ms',
      '--animation-easing': easing,
      '--animation-delay': delay + 'ms',
    }"
    v-bind="$attrs"
  >
    <slot></slot>
  </Transition>
</template>

<script setup>
import { useSlots, computed } from 'vue'
import { commonProps } from './commonProps.js'
import { useRoute } from 'vue-router'
const props = defineProps({ ...commonProps })
const slots = useSlots()
const route = useRoute()

const isRouterView = computed(() => {
  // Rendering what was passed into slot
  const slotContent = slots.default?.()
  // Checking if the first Vnode is === RouterView
  return slotContent?.[0]?.type?.name === 'RouterView'
})
</script>

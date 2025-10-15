<template>
  <RouterView v-slot="{ Component, route }" v-bind="$attrs">
    <Transition
      :name="route.meta.transition || 'fade'"
      :mode="mode"
      :style="{
        '--animation-duration': duration + 'ms',
      }"
    >
      <component :is="Component" :key="route.path" />
    </Transition>
  </RouterView>
</template>
<script setup>
const props = defineProps({
  mode: { type: String, default: 'out-in' },
  duration: { type: Number, default: 500 },
})
</script>

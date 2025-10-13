<template>
  <Transition
    name="flipY"
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
import { commonProps } from './commonProps.js'
const props = defineProps({ ...commonProps })
</script>

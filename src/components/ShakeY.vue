<template>
  <div
    class="vt-attention-shakey"
    :style="{
      '--animation-duration': duration + 'ms',
      '--animation-delay': delay + 'ms',
      '--animation-easing': easing,
      '--animation-iteration-count': iteration,
    }"
    v-bind="$attrs"
  >
    <slot></slot>
  </div>
</template>
<script setup>
import { commonProps } from './commonProps'

const props = defineProps({ ...commonProps })
</script>

<template>
  <div
    :class="[
      'f-proportion' + props.span,
      'f-wrap_yes',
      'f-main_' + props.alignX,
      'f-align_' + props.alignY,
    ]"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { eventBus } from '@/components/layout/flex/Mitt';
const props = withDefaults(
  defineProps<{
    span: number;
    alignX?: string;
    alignY?: string;
  }>(),
  {
    alignX: 'left',
    alignY: 'left',
  }
);

/**
 * @pending
function isRowValue(s: string) {
  if (s === 'left') {
    return alignH.value;
  } else {
    return props.alignX;
  }
}
 */

onMounted(() => {
  eventBus.on('alignH', (h: string) => (alignH.value = h));
  eventBus.on('alignV', (v: string) => (alignV.value = v));
});

onUnmounted(() => {
  eventBus.off('alignH');
  eventBus.off('alignV');
});

const alignH = ref('');
const alignV = ref('');
</script>

<style scoped></style>

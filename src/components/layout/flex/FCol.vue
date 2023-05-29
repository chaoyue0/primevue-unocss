<template>
  <div
    :class="[
      'f-proportion' + props.span,
      'f-main_' + isRowValue,
      'f-align_' + isColValue,
    ]"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { eventBus } from '@/components/layout/flex/Mitt';
const props = withDefaults(
  defineProps<{
    span?: number;
    alignX?: string;
    alignY?: string;
  }>(),
  {
    span: 1,
    alignX: 'start',
    alignY: 'start',
  }
);

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

const isRowValue = computed(() => {
  if (props.alignX === 'start') {
    return alignH.value;
  } else {
    return props.alignX;
  }
});

const isColValue = computed(() => {
  if (props.alignY === 'start') {
    return alignV.value;
  } else {
    return props.alignY;
  }
});
</script>

<style scoped></style>

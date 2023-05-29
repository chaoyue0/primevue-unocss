<template>
  <div
    :class="[
      'f-flex',
      'f-wrap_yes',
      props.gutter ? 'f-gap' + props.gutter : '',
    ]"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { eventBus } from '@/components/layout/flex/Mitt';
import { onMounted } from 'vue';

const props = withDefaults(
  defineProps<{
    gutter?: number;
    alignH?: string;
    alignV?: string;
  }>(),
  {
    gutter: 0,
    alignH: 'start',
    alignV: 'start',
  }
);

onMounted(() => {
  eventBus.emit('alignH', props.alignH);
  eventBus.emit('alignV', props.alignV);
});
</script>

<style scoped></style>

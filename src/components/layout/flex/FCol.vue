<template>
  <div :class="fColClass">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    span?: number | undefined;
    order?: number;
    grow?: number;
    shrink?: number;
    auto?: boolean;
    none?: boolean;
    alignSelf?: string;
  }>(),
  {
    span: undefined,
    order: 0,
    grow: 0,
    shrink: 1,
    auto: false,
    none: false,
    alignSelf: 'start',
  }
);

const fColClass = computed(() => {
  return [
    props.span ? 'f-' + props.span : '',
    props.order ? 'f-order-' + props.order : '',
    props.grow ? 'f-grow-' + props.grow : '',
    props.shrink ? 'f-shrink-' + props.shrink : '',
    props.alignSelf ? 'f-align-self_' + props.alignSelf : '',
    {
      'f-auto': props.auto,
      'f-none': props.none,
    },
  ];
});
</script>

<style scoped></style>

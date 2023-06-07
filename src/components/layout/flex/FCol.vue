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
    order?: string | undefined;
    grow?: string | undefined;
    shrink?: string | undefined;
    auto?: boolean;
    none?: boolean;
    alignSelf?: string;
  }>(),
  {
    span: undefined,
    order: undefined,
    grow: undefined,
    shrink: undefined,
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

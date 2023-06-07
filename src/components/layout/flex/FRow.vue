<template>
  <div :class="fRowClass">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    gutter?: number | undefined;
    gutterRow?: number | undefined;
    gutterCol?: number | undefined;
    wrap?: boolean;
    justify?: string;
    alignItems?: string;
    alignContent?: string;
    direction?: string;
  }>(),
  {
    gutter: undefined,
    gutterRow: undefined,
    gutterCol: undefined,
    wrap: true,
    justify: 'start',
    alignItems: 'start',
    alignContent: 'start',
    direction: 'row',
  }
);

const fRowClass = computed(() => {
  return [
    'f-flex',
    props.wrap ? 'f-wrap_yes' : '',
    props.gutter ? 'f-gap-' + props.gutter : '',
    props.gutterRow ? 'f-gap-row-' + props.gutterRow : '',
    props.gutterCol ? 'f-gap-col-' + props.gutterCol : '',
    props.justify ? 'f-justify_' + props.justify : '',
    props.alignItems ? 'f-align-items_' + props.alignItems : '',
    props.alignContent ? 'f-align-content_' + props.alignContent : '',
    props.direction ? 'f-direction_' + props.direction : '',
  ];
});
</script>

<style scoped></style>

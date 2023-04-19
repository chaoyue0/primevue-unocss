<template>
  <div
    :class="[
      props.spanCol === '0' ? '' : 'g-col_span' + props.spanCol,
      props.spanRow === '0' ? '' : 'g-row_span' + props.spanRow,
      props.rowAlign === 'start' ? '' : 'g-row-self_' + props.rowAlign,
      props.colAlign === 'start' ? '' : 'g-col-self_' + props.colAlign,
    ]"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    spanCol?: number;
    spanRow?: number;
    rowAlign?: string;
    colAlign?: string;
  }>(),
  {
    spanCol: 0,
    spanRow: 0,
    rowAlign: 'start',
    colAlign: 'start',
  }
);
</script>

<style scoped></style>

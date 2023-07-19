<template>
  <th>
    {{ props.label }}
    <slot></slot>
  </th>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    label?: string;
    prop: string;
  }>(),
  {
    label: '',
  }
);
</script>

<style scoped></style>

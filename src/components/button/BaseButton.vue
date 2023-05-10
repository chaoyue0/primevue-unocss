<template>
  <button v-if="!props.text" :disabled="props.disabled">
    <slot></slot>
  </button>
  <span v-else><slot></slot></span>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    text?: boolean;
    disabled?: boolean;
  }>(),
  {
    text: false,
    disabled: false,
  }
);
</script>

<style scoped></style>

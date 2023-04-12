<template>
  <div :class="['f-proportion' + props.span, 'f-wrap_yes']">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ span: number }>();
</script>

<style scoped></style>

<template>
  <div :class="['f-flex', props.gutter ? 'f-gap' + props.gutter : '']">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ gutter?: number }>();
</script>

<style scoped></style>

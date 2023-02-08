<template>
  <slot>
    <div class="grid-item">
      <div class="photo"></div>
      <div class="content"></div>
    </div>
  </slot>
</template>

<script setup lang="ts">
const props = defineProps<{ gridItem: unknown }>();
</script>

<style scoped>
.grid-item {
  width: 300px;
  height: 300px;
  background-color: red;
}
</style>

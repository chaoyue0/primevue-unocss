<template>
  <div class="menu-top">
    <div class="logo">
      <slot name="logo"></slot>
    </div>
    <div class="menu-group g-mr10">
      <MenuItem></MenuItem>
    </div>
  </div>
</template>

<script setup lang="ts">
import MenuItem from './MenuItem.vue';
</script>

<style scoped lang="scss">
.menu-top {
  display: flex;
  margin: 0 auto;
  height: 100px;
}

.logo {
  display: flex;
  justify-content: center;
  width: 200px;
  height: 100px;
}

.menu-group {
  display: flex;
  flex-direction: row;
  margin-left: auto;
}
</style>

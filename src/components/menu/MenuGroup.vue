<template>
  <div class="menu-top">
    <div class="logo">
      <slot name="logo"></slot>
    </div>
    <div class="menu-group">
      <MenuItem></MenuItem>
    </div>
  </div>
</template>

<script setup lang="ts">
import MenuItem from './MenuItem.vue';
</script>

<style scoped>
.menu-top {
  display: flex;
  margin: 0 auto;
  height: 100px;
  background-color: orange;
}

.logo {
  width: 200px;
  height: 100px;
  background-color: #204c89;
}

.menu-group {
  display: flex;
  flex-direction: row;
  margin-left: auto;
}
</style>

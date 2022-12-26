<template>
  <div class="top-menu">
    <el-menu-item></el-menu-item>
  </div>
</template>

<script setup lang="ts">
import { useMenuStore } from '@/stores/menu';

const menuStore = useMenuStore();
console.log('>>>', menuStore.menu);
</script>

<style scoped></style>

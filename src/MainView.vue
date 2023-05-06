<template>
  <menu-group>
    <template #logo>
      <img src="/src/assets/logo.png" alt="logo" />
    </template>
  </menu-group>
  <div class="l-board_main">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import MenuGroup from '@/components/menu/MenuGroup.vue';
</script>

<style scoped></style>

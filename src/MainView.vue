<template>
  <menu-group>
    <template #logo>
      <img src="/src/assets/logo.svg" alt="logo" />
    </template>
  </menu-group>
  <RouterView></RouterView>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import MenuGroup from '@/components/menu/MenuGroup.vue';
</script>

<style scoped></style>

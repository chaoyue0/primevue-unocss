<template>
  <menu-group>
    <template #logo>photo</template>
  </menu-group>
  <RouterView></RouterView>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import MenuGroup from '@/components/menu/MenuGroup.vue';
</script>

<style scoped></style>

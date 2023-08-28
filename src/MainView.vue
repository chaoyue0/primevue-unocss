<template>
  <div class="f-flex">
    <AppMenu></AppMenu>
    <div>
      <menu-group>
        <template #logo>
          <img src="/src/assets/logo.png" alt="logo" />
        </template>
      </menu-group>
      <div class="l-board_main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import MenuGroup from '@/components/menu/MenuGroup.vue';
import AppMenu from '@/components/menu/AppMenu.vue';
</script>

<style scoped></style>

<template>
  <div class="f-flex">
    <AppMenu></AppMenu>
    <!--      <menu-group>-->
    <!--        <template #logo>-->
    <!--          <img src="/src/assets/logo.png" alt="logo" />-->
    <!--        </template>-->
    <!--      </menu-group>-->
    <div class="layout-main">
      <AppTopBar></AppTopBar>
      <div class="layout-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import AppTopBar from '@/components/layout/AppTopBar.vue';
import AppMenu from '@/components/menu/AppMenu.vue';
</script>

<style scoped></style>

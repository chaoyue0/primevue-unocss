<template>
  <div class="f-flex">
    <AppMenu></AppMenu>
    <div class="layout-main">
      <AppTopBar></AppTopBar>
      <div class="layout-content">
        <router-view v-slot="{ Component, route }">
          <keep-alive :max="30">
            <component :is="Component" :key="route.fullPath" />
          </keep-alive>
        </router-view>
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

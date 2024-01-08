<template>
  <div class="f-flex">
    <PrimeMenu @do-toggle="doToggle"></PrimeMenu>
    <div class="layout-main">
      <AppTopBar></AppTopBar>
      <div class="layout-content" :class="isToggle ? '' : 'ml15.5'">
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
import PrimeMenu from '@/components/menu/PrimeMenu.vue';
import { ref } from 'vue';

const isToggle = ref(false);
const doToggle = () => {
  isToggle.value = !isToggle.value;
};
</script>

<style scoped></style>

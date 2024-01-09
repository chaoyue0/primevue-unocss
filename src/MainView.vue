<template>
  <div class="f-flex">
    <PrimeMenu
      v-show="menuType === 'Sidebar'"
      @do-toggle="doToggle"
    ></PrimeMenu>
    <div class="layout-main">
      <AppTopBar :menu-type="menuType"></AppTopBar>
      <div
        class="layout-content"
        :class="isToggle || menuType === 'Horizontal' ? '' : 'ml15.5'"
      >
        <router-view v-slot="{ Component, route }">
          <keep-alive :max="30">
            <component :is="Component" :key="route.fullPath" />
          </keep-alive>
        </router-view>
      </div>
    </div>
  </div>
  <CustomMade @menu-type="getMenuType"></CustomMade>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import PrimeMenu from '@/components/menu/PrimeMenu.vue';
import CustomMade from '@/components/custom/CustomMade.vue';
import AppTopBar from '@/components/layout/AppTopBar.vue';
import { ref } from 'vue';

const isToggle = ref(false);
const menuType = ref('');

const getMenuType = (s: string) => {
  menuType.value = s;
};

const doToggle = () => {
  isToggle.value = !isToggle.value;
};
</script>

<style scoped></style>

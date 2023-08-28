<template>
  <div :class="menuClass">
    <div class="menu-sidebar f-flex f-justify_between f-align-items_center">
      <router-link to="/">
        <img
          class="menu-sidebar-photo"
          src="@/assets/logo.png"
          alt="menu-layout"
        />
      </router-link>
      <a class="menu-sidebar-pin" @click="onToggleMenu">
        <span></span>
      </a>
    </div>
    <div class="menu-container">
      <AppSubMenu
        :items="menuStore.menu"
        class="menu-container-list"
      ></AppSubMenu>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppSubMenu from '@/components/menu/AppSubMenu.vue';
import { useMenuStore } from '@/stores/menu';
import { ref, computed } from 'vue';

const menuStore = useMenuStore();
const isToggle = ref(false);

const menuClass = computed(() => {
  return [isToggle.value ? 'menu-wrapper_fixed' : 'menu-wrapper'];
});

const onToggleMenu = () => {
  isToggle.value = !isToggle.value;
};
</script>

<style scoped></style>

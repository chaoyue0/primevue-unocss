<template>
  <div
    :class="menuClass"
    @mouseover="onSidebarMouseOver"
    @mouseleave="onSidebarMouseLeave"
  >
    <div
      class="f-flex f-justify_between f-align-items_center"
      :class="isToggle || isExpand ? 'menu-sidebar_active' : 'menu-sidebar'"
    >
      <router-link to="/">
        <img
          class="menu-sidebar-photo"
          src="@/assets/logo.png"
          alt="menu-layout"
        />
      </router-link>
      <a
        class="menu-sidebar-pin"
        :class="{
          'menu-sidebar-pin_expand': isExpand,
          'menu-sidebar-pin_active': isToggle,
        }"
        @click="onToggleMenu"
      >
        <span></span>
      </a>
    </div>
    <div class="menu-container">
      <AppSubMenu
        :items="menuStore.menu"
        :class="
          isToggle || isExpand
            ? 'menu-container-list_active'
            : 'menu-container-list'
        "
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
const isExpand = ref(false);

const menuClass = computed(() => {
  if (isExpand.value) {
    if (isToggle.value) {
      return 'menu-wrapper';
    } else {
      return 'menu-wrapper_fixed';
    }
  } else {
    if (isToggle.value) {
      return 'menu-wrapper';
    } else {
      return 'menu-wrapper_fixed';
    }
  }
});

const onToggleMenu = () => {
  isToggle.value = !isToggle.value;
};

const onSidebarMouseOver = () => {
  isExpand.value = true;
};

const onSidebarMouseLeave = () => {
  isExpand.value = false;
};
</script>

<style scoped></style>

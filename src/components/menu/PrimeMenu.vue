<template>
  <div @mouseover="onMenuMouseOver" @mouseout="onMenuMouseOut">
    <div
      class="f-center flex-justify-between"
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
          inline: isExpand,
          'menu-sidebar-pin_active': isToggle,
        }"
        @click="onToggleMenu"
      >
        <span></span>
      </a>
    </div>
    <PanelMenu
      :model="menuStore.menu"
      :class="
        isToggle || isExpand
          ? 'menu-container-list_active'
          : 'menu-container-list'
      "
    >
      <template #item="{ item, props }">
        <router-link v-if="!item.items" :to="item.url" v-bind="props.action">
          <i :class="item.icon"></i>
          <span v-show="isToggle || isExpand">
            {{ item.label }}
          </span>
        </router-link>
        <a v-else class="flex flex-justify-between">
          <div>
            <i :class="item.icon"></i>
            <span v-show="isToggle || isExpand" class="font-semibold">
              {{ item.label }}
            </span>
          </div>
          <i v-show="isToggle || isExpand" class="pi pi-angle-down"></i>
        </a>
      </template>
    </PanelMenu>
  </div>
</template>

<script setup lang="ts">
import PanelMenu from 'primevue/panelmenu';
import { useMenuStore } from '@/stores/menu';
import { ref } from 'vue';

const menuStore = useMenuStore();
const isExpand = ref(false);
const isToggle = ref(false);

const onToggleMenu = () => {
  isToggle.value = !isToggle.value;
};

const onMenuMouseOver = () => {
  isExpand.value = true;
};

const onMenuMouseOut = () => {
  isExpand.value = false;
};
</script>

<style scoped></style>

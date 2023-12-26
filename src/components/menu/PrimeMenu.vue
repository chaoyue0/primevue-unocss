<template>
  <div>
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
    <PanelMenu :model="menuStore.menu" class="menu-sidebar">
      <template #item="{ item, props }">
        <router-link v-if="!item.items" :to="item.url" v-bind="props.action">
          <span :class="['ml-2']">{{ item.label }}</span>
          <span v-if="item.items" class="pi pi-angle-down text-primary ml-auto">
            ***
          </span>
        </router-link>
        <a v-else>
          <span :class="['ml-2']">{{ item.label }}</span>
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
const isToggle = ref(true);
const isExpand = ref(false);
const activeIndex = ref<number | null>(null);

const onToggleMenu = () => {
  isToggle.value = !isToggle.value;
};
</script>

<style scoped></style>

<template>
  <Menubar :model="menuStore.menu">
    <template #item="{ item, props, hasSubmenu }">
      <router-link
        v-if="!item.items"
        v-slot="{ navigate }"
        :to="item.url"
        custom
      >
        <a v-bind="props.action" @click="navigate">
          <span :class="item.icon" />
          <span class="ml-2">{{ item.label }}</span>
        </a>
      </router-link>
      <a v-else v-bind="props.action">
        <span :class="item.icon" />
        <span class="ml-2">{{ item.label }}</span>
        <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down ml-2" />
      </a>
    </template>
  </Menubar>
</template>

<script setup lang="ts">
import Menubar from 'primevue/menubar';
import { useMenuStore } from '@/stores/menu';

const menuStore = useMenuStore();
</script>

<style scoped></style>

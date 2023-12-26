import { ref } from 'vue';
import { defineStore } from 'pinia';
import { menus } from '@/configs/menu';
import type { MenuItem } from 'primevue/menuitem';

export const useMenuStore = defineStore('menu', () => {
  const menu = ref<MenuItem[]>(menus);
  return { menu };
});

import { ref } from 'vue';
import { defineStore } from 'pinia';
import { type MenuItem, menus } from '@/configs/menu';

export const useMenuStore = defineStore('menu', () => {
  const menu = ref<MenuItem[]>(menus);
  return { menu };
});

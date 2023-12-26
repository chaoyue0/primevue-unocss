import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Component } from 'vue';
import type { MenuItem } from '@/configs/menu';

export interface ViewItem {
  label: string;
  icon?: string | Component;
}

export const useViewStore = defineStore('view', () => {
  const views = ref<ViewItem[]>([]);

  const addView = (menu: MenuItem) => {
    views.value?.push({
      label: menu.label,
      icon: menu.icon,
    });
  };
  return { views, addView };
});

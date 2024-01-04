import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { MenuItem } from 'primevue/menuitem';

export const useViewStore = defineStore('view', () => {
  const views = ref<MenuItem[]>([]);

  const addView = (menu: MenuItem) => {
    views.value?.push({
      label: menu.label,
      icon: menu.icon,
    });
  };
  return { views, addView };
});

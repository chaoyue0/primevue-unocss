import type { Component } from 'vue';

export interface MenuItem {
  title: string;
  index: string;
  icon?: string | Component;
  items?: MenuItem[];
}

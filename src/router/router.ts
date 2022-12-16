import 'vue-router';
import type { Component } from 'vue';

export const RouteName = {
  Home: 'Home',
  Test: 'Test',
};

export const enum MenuGroup {
  Home = 'Home',
  Test = 'Test',
}

declare module 'vue-router' {
  interface RouteMeta {
    menuGroup: MenuGroup;
    menuName?: string;
    menuIcon?: string | Component;
  }
}

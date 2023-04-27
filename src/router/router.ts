import 'vue-router';
import type { Component } from 'vue';

export const RouteName = {
  MainView: 'MainView',
  Home: 'Home',
  Test: 'Test',
  TestPage1: 'TestPage1',
  TestPage2: 'TestPage2',
  FlexPage: 'FlexPage',
  GridPage: 'GridPage',
  FloatInputPage: 'FloatInputPage',
  MockTest1: 'MockTest1',
  MockTest2: 'MockTest2',
};

export const enum MenuGroup {
  Home = 'Home',
  Layout = 'Layout',
  Input = 'Input',
  Test = 'Test',
  Mock = 'Mock',
}

declare module 'vue-router' {
  interface RouteMeta {
    menuGroup: MenuGroup;
    menuName?: string;
    menuIcon?: string | Component;
  }
}

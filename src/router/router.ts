import 'vue-router';
import type { Component } from 'vue';

export const RouteName = {
  MainView: 'MainView',
  Home: 'Home',
  Table: 'TablePage',
  Test: 'Test',
  TestPage1: 'TestPage1',
  TestPage2: 'TestPage2',
  FlexPage: 'FlexPage',
  GridPage: 'GridPage',
  FloatInputPage: 'FloatInputPage',
  ButtonPage: 'ButtonPage',
  OptimizationPage: 'OptimizationPage',
  ResponsivePage: 'ResponsivePage',
  MockTest1: 'MockTest1',
  MockTest2: 'MockTest2',
  DownloadPage: 'DownloadPage',
};

export const enum MenuGroup {
  Home = 'Home',
  Layout = 'Layout',
  Input = 'Input',
  Photo = 'Photo',
  Table = 'Table',
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

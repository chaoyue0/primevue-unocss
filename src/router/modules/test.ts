import type { RouteRecordRaw } from 'vue-router';
import { RouteName, MenuGroup } from '@/router/router';

export const routes: RouteRecordRaw[] = [
  {
    path: '/test1',
    name: RouteName.TestPage1,
    component: () => import('@/views/TestPageOne.vue'),
    meta: {
      menuGroup: MenuGroup.Test,
    },
  },
  {
    path: '/test2',
    name: RouteName.TestPage2,
    component: () => import('@/views/TestPageTwo.vue'),
    meta: {
      menuGroup: MenuGroup.Test,
    },
  },
  {
    path: '/test3',
    name: RouteName.TestPage3,
    component: () => import('@/views/TestPageThree.vue'),
    meta: {
      menuGroup: MenuGroup.Test,
    },
  },
];

export default routes;

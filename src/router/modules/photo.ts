import type { RouteRecordRaw } from 'vue-router';
import { RouteName, MenuGroup } from '@/router/router';

export const routes: RouteRecordRaw[] = [
  {
    path: '/optimization',
    name: RouteName.OptimizationPage,
    component: () => import('@/views/photo/OptimizationPage.vue'),
    meta: {
      menuGroup: MenuGroup.Photo,
    },
  },
  {
    path: '/responsive',
    name: RouteName.ResponsivePage,
    component: () => import('@/views/photo/ResponsivePage.vue'),
    meta: {
      menuGroup: MenuGroup.Photo,
    },
  },
];

export default routes;

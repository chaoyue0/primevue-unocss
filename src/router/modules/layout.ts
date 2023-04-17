import type { RouteRecordRaw } from 'vue-router';
import { RouteName, MenuGroup } from '@/router/router';

export const routes: RouteRecordRaw[] = [
  {
    path: '/layout/flex',
    name: RouteName.FlexPage,
    component: () => import('@/views/layout/FlexPage.vue'),
    meta: {
      menuGroup: MenuGroup.Layout,
    },
  },
  {
    path: '/layout/grid',
    name: RouteName.GridPage,
    component: () => import('@/views/layout/GridPage.vue'),
    meta: {
      menuGroup: MenuGroup.Layout,
    },
  },
];

export default routes;

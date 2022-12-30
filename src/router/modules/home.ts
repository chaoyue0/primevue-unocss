import type { RouteRecordRaw } from 'vue-router';
import { MenuGroup, RouteName } from '@/router/router';

export const routes: RouteRecordRaw[] = [
  {
    path: '/test-home',
    name: RouteName.Home,
    component: () => import('@/views/HomeView.vue'),
    meta: {
      menuGroup: MenuGroup.Home,
    },
  },
];

export default routes;

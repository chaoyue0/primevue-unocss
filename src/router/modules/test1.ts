import type { RouteRecordRaw } from 'vue-router';
import { RouteName, MenuGroup } from '@/router/router';

export const routes: RouteRecordRaw[] = [
  {
    path: '/test1',
    name: RouteName.Test,
    component: () => import('@/views/TestPage.vue'),
    meta: {
      menuGroup: MenuGroup.Test,
    },
  },
];

export default routes;

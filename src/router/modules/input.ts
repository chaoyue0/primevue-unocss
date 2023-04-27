import type { RouteRecordRaw } from 'vue-router';
import { RouteName, MenuGroup } from '@/router/router';

export const routes: RouteRecordRaw[] = [
  {
    path: '/float-input',
    name: RouteName.FloatInputPage,
    component: () => import('@/views/input/FloatInputPage.vue'),
    meta: {
      menuGroup: MenuGroup.Input,
    },
  },
];

export default routes;

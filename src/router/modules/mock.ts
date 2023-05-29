import type { RouteRecordRaw } from 'vue-router';
import { RouteName, MenuGroup } from '@/router/router';

export const routes: RouteRecordRaw[] = [
  {
    path: '/mock1',
    name: RouteName.MockTest1,
    component: () => import('@/views/MockPageOne.vue'),
    meta: {
      menuGroup: MenuGroup.Mock,
    },
  },
];

export default routes;

import type { RouteRecordRaw } from 'vue-router';
import { RouteName, MenuGroup } from '@/router/router';

export const routes: RouteRecordRaw[] = [
  {
    path: '/table',
    name: RouteName.Table,
    component: () => import('@/views/table/TablePage.vue'),
    meta: {
      menuGroup: MenuGroup.Table,
    },
  },
];

export default routes;

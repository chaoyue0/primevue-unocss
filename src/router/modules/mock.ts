import type { RouteRecordRaw } from 'vue-router';
import { RouteName, MenuGroup } from '@/router/router';

export const routes: RouteRecordRaw[] = [
  {
    path: '/mock',
    name: RouteName.MockTest1,
    component: () => import('@/views/MockPageOne.vue'),
    meta: {
      menuGroup: MenuGroup.Mock,
    },
  },
  {
    path: '/download',
    name: RouteName.DownloadPage,
    component: () => import('@/views/download/DownloadPage.vue'),
    meta: {
      menuGroup: MenuGroup.Mock,
    },
  },
];

export default routes;

import type { RouteRecordRaw } from 'vue-router';
import { MenuGroup, RouteName } from '@/router/router';
import SearchIcon from '@/components/svg/Search.svg';

export const routes: RouteRecordRaw[] = [
  {
    path: '/test-home',
    name: RouteName.Home,
    component: () => import('@/views/HomeView.vue'),
    meta: {
      menuGroup: MenuGroup.Home,
      menuIcon: SearchIcon,
    },
  },
];

export default routes;

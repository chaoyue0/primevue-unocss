import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw,
} from 'vue-router';
import { RouteName } from '@/router/router';

export const children: RouteRecordRaw[] = [];

const paths = new Set<string>();
// 从文件系统导入多个模块, return [object object]
const modules = import.meta.glob('./modules/*.ts', {
  import: 'default',
  eager: true, //eager:表示直接导入所有模块
});

const rm = Object.values(modules) as RouteRecordRaw[][];
for (const rts of rm) {
  // 匹配到的文件默认是懒加载的，通过动态导入实现，并会在构建时分离为独立的 chunk
  //   modules[ts]().then((mod: any) => {
  //     console.log('mod', mod);
  //   })
  for (const rt of rts) {
    const p = rt.path;
    if (paths.has(p)) {
      console.log('The route is already exit!');
    } else {
      paths.add(p);
      children.push(rt);
    }
  }
}

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: RouteName.Home,
    redirect: '/test-home',
    component: () => import('@/views/HomeView.vue'),
    children,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

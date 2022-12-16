import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from 'vue-router';

export interface modulesType {
  default: RouteRecordRaw[];
  route: RouteRecordRaw[];
}

export const children: RouteRecordRaw[] = [];

const paths = new Set<string>();
// get .ts of modules files, return [object object]
const modules = import.meta.glob('./modules/*.ts', { eager: true }); //eager:表示直接导入所有模块
const rm = Object.values(modules) as modulesType[];

for (const rts of rm) {
  // 匹配到的文件默认是懒加载的，通过动态导入实现，并会在构建时分离为独立的 chunk
  //   modules[ts]().then((mod: any) => {
  //     console.log('mod', mod);
  //   })
  const p = rts.default[0].path;
  if (paths.has(p)) {
    console.log('The route is already exit!');
  } else {
    paths.add(p);
    children.push(rts.default[0]);
  }
}

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    children,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;

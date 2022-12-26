import type { Component } from 'vue';
import { MenuGroup } from '@/router/router';
import { children } from '@/router';

export interface MenuItem {
  title: string;
  index: string;
  icon?: string | Component;
  items?: MenuItem[];
}

export const menus: MenuItem[] = [];

menus.push(
  {
    title: MenuGroup.Home,
    index: MenuGroup.Home,
  },
  {
    title: MenuGroup.Test,
    index: MenuGroup.Test,
    items: [],
  },
  {
    title: MenuGroup.Mock,
    index: MenuGroup.Mock,
    items: [],
  }
);

//为menus添加子菜单
for (const rt of children) {
  console.log('rt', rt);
  const rgp = rt.meta?.menuGroup;
  const rn = rt.name as string;
  if (rgp && rn) {
    const top = menus.find((it: MenuItem) => it.title === rgp);
    console.log('top', top);
    if (!top) continue;
    const sub = top.items?.find((it: MenuItem) => it.title === rn); //寻找menus中items属性是否为空
    if (sub) {
      sub.title = rn;
      sub.index = rt.path;
    } else {
      //判断menu中是否有items属性，没有则表示无子菜单
      if (top.items) {
        top.items.push({ title: rn, index: rt.path });
      } else {
        top.index = rt.path;
      }
    }
  }
}

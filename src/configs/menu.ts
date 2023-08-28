import type { Component } from 'vue';
import { MenuGroup } from '@/router/router';
import { children } from '@/router';

export interface MenuItem {
  label: string;
  index: string;
  icon?: string | Component;
  items?: MenuItem[];
}

export const menus: MenuItem[] = [];

menus.push(
  {
    label: MenuGroup.Home,
    index: MenuGroup.Home,
  },
  {
    label: MenuGroup.Layout,
    index: MenuGroup.Layout,
    items: [],
  },
  {
    label: MenuGroup.Input,
    index: MenuGroup.Input,
    items: [],
  },
  {
    label: MenuGroup.Photo,
    index: MenuGroup.Photo,
    items: [],
  },
  {
    label: MenuGroup.Table,
    index: MenuGroup.Table,
  },
  {
    label: MenuGroup.Test,
    index: MenuGroup.Test,
    items: [],
  },
  {
    label: MenuGroup.Mock,
    index: MenuGroup.Mock,
    items: [],
  }
);

//为menus添加子菜单
for (const rt of children) {
  const rgp = rt.meta?.menuGroup;
  const rn = rt.name as string;
  if (rgp && rn) {
    const top = menus.find((it: MenuItem) => it.label === rgp);
    if (!top) continue;
    const sub = top.items?.find((it: MenuItem) => it.label === rn); //寻找menus中items属性是否为空
    if (sub) {
      sub.label = rn;
      sub.index = rt.path;
    } else {
      //判断menu中是否有items属性，没有则表示无子菜单
      if (top.items) {
        top.items.push({ label: rn, index: rt.path });
      } else {
        top.index = rt.path;
      }
    }
  }
}

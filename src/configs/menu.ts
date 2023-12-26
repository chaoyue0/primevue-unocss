import { MenuGroup } from '@/router/router';
import { children } from '@/router';
import Search from '@/components/svg/Search.svg';
import type { MenuItem } from 'primevue/menuitem';

export const menus: MenuItem[] = [];

menus.push(
  {
    label: MenuGroup.Home,
    url: MenuGroup.Home,
    icon: Search,
  },
  {
    label: MenuGroup.Layout,
    url: MenuGroup.Layout,
    icon: Search,
    items: [],
  },
  {
    label: MenuGroup.Input,
    url: MenuGroup.Input,
    icon: Search,
    items: [],
  },
  {
    label: MenuGroup.Photo,
    url: MenuGroup.Photo,
    icon: Search,
    items: [],
  },
  {
    label: MenuGroup.Table,
    url: MenuGroup.Table,
    icon: Search,
  },
  {
    label: MenuGroup.Test,
    url: MenuGroup.Test,
    icon: Search,
    items: [],
  },
  {
    label: MenuGroup.Mock,
    url: MenuGroup.Mock,
    icon: Search,
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
      sub.url = rt.path;
    } else {
      //判断menu中是否有items属性，没有则表示无子菜单
      if (top.items) {
        top.items.push({ label: rn, url: rt.path });
      } else {
        top.url = rt.path;
      }
    }
  }
}

import { ref } from 'vue';
import logo from '@/assets/logo.svg';

export interface GridItemData {
  title: string;
  photo?: string;
  content: string;
}

export const gridList = ref<GridItemData[]>([
  {
    title: 'test1',
    photo: logo,
    content: 'I am test1',
  },
  {
    title: 'test2',
    photo: logo,
    content: 'I am test2',
  },
  {
    title: 'test3',
    photo: logo,
    content: 'I am test3',
  },
  {
    title: 'test4',
    photo: logo,
    content: 'I am test4',
  },
  {
    title: 'test5',
    content: 'I am test5',
  },
  {
    title: 'test6',
    photo: logo,
    content: 'I am test6',
  },
]);

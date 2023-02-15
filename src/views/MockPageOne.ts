import { ref } from 'vue';

export interface GridItemData {
  title: string;
  photo?: string;
  content: string;
}

export const gridList = ref<GridItemData[]>([
  {
    title: 'test1',
    content: 'I am test1',
  },
  {
    title: 'test2',
    content: 'I am test2',
  },
  {
    title: 'test3',
    content: 'I am test3',
  },
  {
    title: 'test4',
    content: 'I am test4',
  },
  {
    title: 'test5',
    content: 'I am test5',
  },
  {
    title: 'test6',
    content: 'I am test6',
  },
]);

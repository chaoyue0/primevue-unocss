<template>
  <ul v-if="props.items">
    <template v-for="(item, index) of props.items" :key="item.label || index">
      <li :class="[hoverIndex === index ? 'menu-list-color_hover' : '']">
        <router-link
          v-if="!item.items"
          to=""
          @click="onMenuItemClick($event, item, index)"
          @mouseenter="onMenuItemMouseEnter(index)"
        >
          <i :class="['menu-menuitem-icon', item.icon]"></i>
          <span>{{ item.label }}</span>
          <i
            v-if="item.items"
            class="pi pi-fw pi-chevron-down menu-i-arrow"
          ></i>
        </router-link>
        <a
          v-else
          @click="onMenuItemClick($event, item, index)"
          @mouseenter="onMenuItemMouseEnter(index)"
        >
          <i :class="['layout-menuitem-icon', item.icon, 'menu-i']"></i>
          <span>{{ item.label }}</span>
          <i
            v-if="item.items"
            class="pi pi-fw pi-chevron-down menu-i-arrow"
            :class="[activeIndex === index ? 'menu-i-arrow_rotate' : '']"
          ></i>
        </a>
        <transition name="layout-menu">
          <app-sub-menu
            v-show="activeIndex === index"
            :items="item.items ? item.items : []"
          ></app-sub-menu>
        </transition>
      </li>
    </template>
  </ul>
</template>

<script setup lang="ts">
import AppSubMenu from '@/components/menu/AppSubMenu.vue';
import { ref } from 'vue';
import { type MenuItem } from '@/configs/menu';
import DropDown from '@/components/svg/DropDown.vue';

const props = defineProps<{
  items: MenuItem[];
}>();

const activeIndex = ref<number | null>(null);
const hoverIndex = ref<number | null>(null);

const onMenuItemClick = (event: Event, item: any, index: number) => {
  if (item.items) {
    activeIndex.value = index === activeIndex.value ? null : index;
    const i = document.querySelector('.menu-i-arrow_rotate');
    if (i) {
      i.classList.add('menu-i-arrow_back');
    }
  } else {
    activeIndex.value = index;
  }
};

const onMenuItemMouseEnter = (index: number) => {
  hoverIndex.value = index === hoverIndex.value ? null : index;
};
</script>

<style scoped></style>

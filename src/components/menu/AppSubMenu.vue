<template>
  <ul v-if="props.items">
    <template v-for="(item, index) of props.items" :key="item.label || index">
      <li :class="[hoverIndex === index ? 'menu-list-color_hover' : '']">
        <router-link
          v-if="!item.items"
          :to="item.index"
          @click="onMenuItemClick($event, item, index)"
          @mouseenter="onMenuItemMouseEnter(index)"
        >
          <i v-if="item.icon">
            <img
              :src="item.icon"
              alt=""
              :class="!props.isExpand ? 'l-ml2' : ''"
            />
          </i>
          <span :class="!props.isExpand ? 'menu-container-list_none' : ''">
            {{ item.label }}
          </span>
          <i
            v-if="item.items"
            :class="[
              'menu-list-arrow',
              hoverIndex === index ? 'menu-list-color_hover' : '',
            ]"
          >
            <img
              :src="ArrowDown"
              alt=""
              :class="!props.isExpand ? 'menu-container-list_none' : ''"
            />
          </i>
        </router-link>
        <a
          v-else
          @click="onMenuItemClick($event, item, index)"
          @mouseenter="onMenuItemMouseEnter(index)"
        >
          <i v-if="item.icon">
            <img
              :src="item.icon"
              alt=""
              :class="!props.isExpand ? 'l-ml2' : ''"
            />
          </i>
          <span :class="!props.isExpand ? 'menu-container-list_none' : ''">
            {{ item.label }}
          </span>
          <i
            v-if="item.items"
            :class="[
              'menu-list-arrow',
              hoverIndex === index ? 'menu-list-color_hover' : '',
            ]"
          >
            <img
              :src="ArrowDown"
              alt=""
              :class="!props.isExpand ? 'menu-container-list_none' : ''"
            />
          </i>
        </a>
        <transition name="menu-list">
          <app-sub-menu
            v-show="activeIndex === index"
            :items="item.items ? item.items : []"
            :is-expand="props.isExpand"
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
import ArrowDown from '@/components/svg/ArrowDown.svg';
import { useViewStore } from '@/stores/view';

const props = defineProps<{
  items: MenuItem[];
  isExpand: boolean;
}>();

const activeIndex = ref<number | null>(null);
const hoverIndex = ref<number | null>(null);

const viewStore = useViewStore();
const onMenuItemClick = (event: Event, item: any, index: number) => {
  if (item.items) {
    activeIndex.value = index === activeIndex.value ? null : index;
    viewStore.addView(item.items);
    const i = document.querySelector('.menu-i-arrow_rotate');
    if (i) {
      i.classList.add('menu-i-arrow_back');
    }
  } else {
    activeIndex.value = index;
    viewStore.addView(item);
  }
};

const onMenuItemMouseEnter = (index: number) => {
  hoverIndex.value = index === hoverIndex.value ? null : index;
};
</script>

<style scoped></style>

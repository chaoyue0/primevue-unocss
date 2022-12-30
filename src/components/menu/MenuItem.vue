<template>
  <template v-for="item in menuStore.menu" :key="item">
    <div v-if="item.items" class="menu-item">
      {{ item.title }}
      <div class="sub-menu">
        <div v-for="sub in item.items" :key="sub">
          <RouterLink :to="sub.index">{{ sub.title }}</RouterLink>
        </div>
      </div>
    </div>
    <div v-else class="menu-item">
      <RouterLink :to="item.index"> {{ item.title }}</RouterLink>
    </div>
  </template>
</template>

<script setup lang="ts">
import { useMenuStore } from '@/stores/menu';
import { RouterLink } from 'vue-router';

const menuStore = useMenuStore();
</script>

<style scoped lang="scss">
.menu-item {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100px;
}

.sub-menu {
  display: none;
  position: absolute;
  width: 100px;
  top: 100px;
  background-color: aquamarine;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
  }
}
.menu-item:hover {
  cursor: pointer;
}
.menu-item:hover .sub-menu {
  display: block;
}
</style>

<template>
  <template v-for="item in menuStore.menu" :key="item">
    <div v-if="item.items" class="menu-item cursor-pointer">
      {{ item.title }}
      <div class="sub-menu cursor-pointer">
        <div v-for="sub in item.items" :key="sub">
          <RouterLink :to="sub.index">{{ sub.title }}</RouterLink>
        </div>
      </div>
    </div>
    <div v-else class="menu-item cursor-pointer">
      <RouterLink :to="item.index"> {{ item.title }}</RouterLink>
    </div>
  </template>
  <div class="phone-item cursor-pointer" @click="changeBoard">
    <img v-show="!isExpand" src="/src/assets/expand.svg" alt="expand-button" />
    <img v-show="isExpand" src="/src/assets/close.svg" alt="close-button" />
  </div>
  <el-drawer v-model="isExpand" direction="ltr">
    <template v-for="item in menuStore.menu" :key="item">
      <div v-if="item.items" class="phone-menu-item cursor-pointer">
        {{ item.title }}
        <div class="phone-sub-item cursor-pointer">
          <div v-for="sub in item.items" :key="sub">
            <RouterLink :to="sub.index">{{ sub.title }}</RouterLink>
          </div>
        </div>
      </div>
      <div v-else class="phone-menu-item cursor-pointer">
        <RouterLink :to="item.index"> {{ item.title }}</RouterLink>
      </div>
    </template>
  </el-drawer>
</template>

<script setup lang="ts">
import { useMenuStore } from '@/stores/menu';
import { onBeforeRouteUpdate, RouterLink } from 'vue-router';
import { ref } from 'vue';

const menuStore = useMenuStore();
const isExpand = ref(false);

onBeforeRouteUpdate((to, from) => {
  if (to && from) {
    isExpand.value = false;
  }
});

function changeBoard() {
  isExpand.value = !isExpand.value;
}
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
  width: 200px;
  top: 100px;
  border: 0 solid rgba(31, 45, 61, 0);
  box-shadow: 0 1.5rem 4rem rgba(31, 45, 61, 0.15);
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
  }
}
a:hover {
  color: rgba(0, 138, 255, 0.9);
}
.menu-item:hover .sub-menu {
  display: block;
}
.phone-item {
  display: none;
}
.phone-menu {
  display: none;
}

@media (max-width: 768px) {
  .menu-item {
    display: none;
  }
  .phone-item {
    display: flex;
  }
  .phone-sub-item {
    margin-left: 20px;
  }
}
</style>

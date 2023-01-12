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
  <el-drawer v-model="isExpand" direction="ltr" :with-header="false">
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
  width: 100px;
  top: 100px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
  }
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

<template>
  <h1>photo optimization</h1>
  <el-button @click="open">打开抽屉</el-button>
  <el-drawer v-model="drawer">
    <img v-for="img in photoList" :key="img" :src="img" alt="loading" />
  </el-drawer>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { preLoader } from '@/libs/preLoader';
import test11 from '@/assets/testPreload/img.png';
import test12 from '@/assets/testPreload/img_1.png';
import test13 from '@/assets/testPreload/img_2.png';
import test14 from '@/assets/testPreload/img_3.png';
import test15 from '@/assets/testPreload/img_4.png';
import test16 from '@/assets/testPreload/img_5.png';
import test17 from '@/assets/testPreload/img_6.png';
import test10 from '@/assets/testPreload/test10.png';
import test9 from '@/assets/testPreload/test9.png';
import test8 from '@/assets/testPreload/test8.png';
import test7 from '@/assets/testPreload/test7.png';
import test6 from '@/assets/testPreload/test6.png';
import test5 from '@/assets/testPreload/test5.jpg';
import test4 from '@/assets/testPreload/test4.jpg';
import test3 from '@/assets/testPreload/test3.jpg';
import test2 from '@/assets/testPreload/test2.jpg';
import test1 from '@/assets/testPreload/test1.jpg';

const drawer = ref(false);
const photoList = [
  test1,
  test2,
  test3,
  test4,
  test5,
  test6,
  test7,
  test8,
  test9,
  test10,
  test11,
  test12,
  test13,
  test14,
  test15,
  test16,
  test17,
];

onMounted(() => {
  preLoader(photoList, () => {
    console.log('图片加载好了');
  });
});

function open() {
  drawer.value = true;
}
</script>

<style scoped>
img {
  width: 300px;
  height: 200px;
}
</style>

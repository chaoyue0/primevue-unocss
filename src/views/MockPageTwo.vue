<template>
  <h1>photo optimization</h1>
  <el-button @click="doOpen">打开抽屉</el-button>
  <div class="flex-column">
    <img
      v-for="img in photoList"
      ref="demo1"
      :key="img"
      src=""
      :data-src="img"
      alt="loading"
    />
    <div class="border-loader"></div>
  </div>
  <el-drawer ref="drawerRef" v-model="drawer" @close="doClose">
    <div ref="scrollContainer" class="flex-column">
      <img
        v-for="img in photoList"
        ref="demo2"
        :key="img"
        src=""
        :data-src="img"
        alt="loading"
      />
    </div>
  </el-drawer>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
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
import { checkImages } from '@/libs/lazyLoader';
import { throttle } from '@/libs/throttle';

const drawer = ref(false);
const photoList = ref([
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
]);
const demo1 = ref();
const demo2 = ref();

onMounted(() => {
  preLoader(photoList.value, () => {
    console.log('图片加载好了');
  });
  checkImages(demo1.value);
  window.addEventListener(
    'scroll',
    throttle(() => checkImages(demo1.value), 500)
  );
});

onUnmounted(() => {
  window.removeEventListener(
    'scroll',
    throttle(() => checkImages(demo1.value), 500)
  );
});

const drawerRef = ref();
const scrollContainer = ref();
function doOpen() {
  drawer.value = true;
  drawerRef.value.$nextTick(() => {
    checkImages(demo2.value);
    scrollContainer.value.addEventListener(
      'scroll',
      throttle(() => checkImages(demo2.value), 500)
    );
    console.log('scrollContainer', scrollContainer.value);
  });
  nextTick(() => {
    drawerRef.value.addEventListener(
      'scroll',
      throttle(() => checkImages(demo2.value), 500)
    );
  });
}

function doClose() {
  scrollContainer.value.removeEventListener(
    'scroll',
    throttle(() => checkImages(demo2.value), 500)
  );
}
</script>

<style scoped>
img {
  width: 300px;
  height: 200px;
}
.flex-column {
  display: flex;
  flex-direction: column;
}
.border-loader {
  border: 5px solid #e5e5e5;
  border-top: 5px solid rgba(255, 103, 104, 1);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: inline-block;
  animation: turn-around 1.5s linear infinite;
}
@keyframes turn-around {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

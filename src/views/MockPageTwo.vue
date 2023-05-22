<template>
  <div class="card">
    <h1>photo optimization</h1>
    <el-button @click="doOpen">打开抽屉</el-button>
    <el-button @click="startListen">开启区域A事件监听</el-button>
    <el-button @click="cancelListen">取消区域A事件监听</el-button>
    <div class="flex-column">
      <p>区域A</p>
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
    <div class="flex-column out-of-document">
      <el-button @click="startCListen">开启区域C事件监听</el-button>
      <el-button @click="cancelCListen">取消区域C事件监听</el-button>
      <p>区域C</p>
      <img
        v-for="img in photoList"
        ref="demo2"
        :key="img"
        src=""
        :data-src="img"
        alt="loading"
      />
    </div>
    <el-drawer ref="drawerRef" v-model="drawer" @close="doClose">
      <div class="flex-column">
        <p>区域B</p>
        <img
          v-for="img in photoList"
          ref="demo3"
          :key="img"
          src=""
          :data-src="img"
          alt="loading"
        />
      </div>
    </el-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';
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
import { checkImages } from '@/libs/lazy-loader';
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
const demo3 = ref();

onMounted(() => {
  preLoader(photoList.value, () => {
    console.log('图片加载好了');
  });
});

const throttledScrollEvent = throttle(() => checkImages(demo1.value), 1000);

function startListen() {
  checkImages(demo1.value);
  window.addEventListener('scroll', throttledScrollEvent);
}

function cancelListen() {
  window.removeEventListener('scroll', throttledScrollEvent);
}

function handleCScroll(event: WheelEvent) {
  event.stopPropagation();
  throttle(() => checkImages(demo2.value), 2000)();
}

function startCListen() {
  checkImages(demo2.value);
  window.addEventListener('wheel', handleCScroll);
}

function cancelCListen() {
  window.removeEventListener('wheel', handleCScroll);
}

const drawerRef = ref();
const handleWheel = throttle((event: WheelEvent) => {
  event.stopPropagation();
  checkImages(demo3.value);
}, 1000);
/*function handleWheel(event: WheelEvent) {
  //使用的是匿名函数，导致无法正确地移除该事件。为了能够正确地移除事件，需要使用具名函数
  event.stopPropagation();
  throttle(() => checkImages(demo3.value), 1000)();
}*/

function doOpen() {
  drawer.value = true;
  nextTick(() => {
    checkImages(demo3.value);
    window.addEventListener('wheel', handleWheel);
  });
}

function doClose() {
  window.removeEventListener('wheel', handleWheel);
}
</script>

<style scoped lang="scss">
@import 'src/assets/mixin.scss';
img {
  width: 300px;
  height: 200px;
}
.flex-column {
  display: flex;
  flex-direction: column;
}
.out-of-document {
  @include ptl(absolute, 200, 800);
  border: 1px solid black;
  height: 500px;
  overflow: scroll;
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

<template>
  <div class="l-board_sub">
    <h1>margin and padding</h1>
    <p>inline-element</p>
    <el-input v-model="marginNum" placeholder="请输入margin值" clearable />
    <el-input v-model="paddingNum" placeholder="请输入padding值" clearable />
    <el-button @click="doReset">重置</el-button>
    <el-button :class="dynamicMarginStyle()" @click="marginNum = 1">
      element-margin-1
    </el-button>
    <el-button :class="dynamicMarginStyle()" @click="marginNum = 2">
      element-margin-2
    </el-button>
    <el-button :class="dynamicPaddingStyle()" @click="paddingNum = 1">
      element-padding-1
    </el-button>
    <el-button :class="dynamicPaddingStyle()" @click="paddingNum = 2">
      element-padding-2
    </el-button>
    <br />
    <base-button disabled @click="fun1">test1</base-button>
    <base-button text @click="fun2">test2</base-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import BaseButton from '@/components/button/BaseButton.vue';

const marginNum = ref<number>();
const paddingNum = ref<number>();

function dynamicMarginStyle() {
  if (marginNum.value) {
    return 'l-m' + marginNum.value;
  }
}
function dynamicPaddingStyle() {
  if (paddingNum.value) {
    return 'l-p' + paddingNum.value;
  }
}

function doReset() {
  marginNum.value = 0;
  paddingNum.value = 0;
}

function fun1() {
  console.log('button1');
}
function fun2() {
  console.log('button2');
}
</script>

<style scoped></style>

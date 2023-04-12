<template>
  <h1>flex布局</h1>
  <p>水平方向</p>
  <el-button @click="alignX = 'left'">左对齐</el-button>
  <el-button @click="alignX = 'center'">居中</el-button>
  <el-button @click="alignX = 'right'">右对齐</el-button>
  <p>垂直方向</p>
  <el-button @click="alignY = 'left'">左对齐</el-button>
  <el-button @click="alignY = 'center'">居中</el-button>
  <el-button @click="alignY = 'right'">右对齐</el-button>
  <div class="f-all_center">
    <div :class="['demo-box', 'f-main_' + alignX, 'f-align_' + alignY]">
      <div v-for="num in 3" :key="num">
        {{ num }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const alignX = ref('left');
const alignY = ref('left');
</script>

<style scoped>
.demo-box {
  width: 400px;
  height: 400px;
  background-color: #b7b7b7;
}
.demo-box div {
  width: 50px;
  height: 50px;
  background-color: #5992b6;
}
</style>

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
  <p>弹性盒子</p>
  <f-row gutter="10">
    <f-col span="1" style="background-color: orange">1</f-col>
    <f-col span="1" style="background-color: red">2</f-col>
    <f-col span="1" style="background-color: blue">3</f-col>
  </f-row>
  <br />
  <span>部分1占比:</span>
  <el-input v-model="section1" placeholder="部分1占比"></el-input>
  <span>部分2占比:</span>
  <el-input v-model="section2" placeholder="部分2占比"></el-input>
  <f-row>
    <f-col :span="section1">
      <span><strong>proportion one</strong></span>
      <span>dsjkajdkajksdjkajdskdjak</span>
      <span>dsjkajdkajksdjkajdskdjak</span>
      <span>dsjkajdkajksdjkajdskdjak</span>
    </f-col>
    <f-col :span="section2">
      <div>
        <span><strong>proportion nine</strong></span>
      </div>
    </f-col>
  </f-row>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import FRow from '@/components/layout/flex/FRow.vue';
import FCol from '@/components/layout/flex/FCol.vue';
const alignX = ref('left');
const alignY = ref('left');
const section1 = ref(1);
const section2 = ref(9);
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

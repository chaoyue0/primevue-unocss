<template>
  <h1>flex布局</h1>
  <p>水平方向</p>
  <el-button @click="alignX = 'start'">左对齐</el-button>
  <el-button @click="alignX = 'center'">居中</el-button>
  <el-button @click="alignX = 'end'">右对齐</el-button>
  <p>垂直方向</p>
  <el-button @click="alignY = 'start'">左对齐</el-button>
  <el-button @click="alignY = 'center'">居中</el-button>
  <el-button @click="alignY = 'end'">右对齐</el-button>
  <div class="f-all_center">
    <div :class="['demo-box', 'f-main_' + alignX, 'f-align_' + alignY]">
      <div v-for="num in 3" :key="num">
        {{ num }}
      </div>
    </div>
  </div>
  <p>弹性盒子</p>
  <f-row :gutter="10">
    <f-col :span="1" style="background-color: orange">1</f-col>
    <f-col :span="1" style="background-color: red">2</f-col>
    <f-col :span="1" style="background-color: blue">3</f-col>
  </f-row>
  <br />
  <p>部分1占比:</p>
  <el-input v-model="section1" placeholder="部分1占比"></el-input>
  <span><strong>水平</strong></span>
  <el-button @click="colAlign1X = 'start'">项目左对齐</el-button>
  <el-button @click="colAlign1X = 'center'">项目居中</el-button>
  <el-button @click="colAlign1X = 'end'">项目右对齐</el-button>
  <br />
  <span><strong>垂直</strong></span>
  <el-button @click="colAlign1Y = 'start'">项目左对齐</el-button>
  <el-button @click="colAlign1Y = 'center'">项目居中</el-button>
  <el-button @click="colAlign1Y = 'end'">项目右对齐</el-button>
  <p>部分2占比:</p>
  <el-input v-model="section2" placeholder="部分2占比"></el-input>
  <span><strong>水平</strong></span>
  <el-button @click="colAlign2X = 'start'">项目左对齐</el-button>
  <el-button @click="colAlign2X = 'center'">项目居中</el-button>
  <el-button @click="colAlign2X = 'end'">项目右对齐</el-button>
  <br />
  <span><strong>垂直</strong></span>
  <el-button @click="colAlign2Y = 'start'">项目左对齐</el-button>
  <el-button @click="colAlign2Y = 'center'">项目居中</el-button>
  <el-button @click="colAlign2Y = 'end'">项目右对齐</el-button>
  <f-row align-h="center" align-v="center">
    <f-col :span="section1" :align-x="colAlign1X" :align-y="colAlign1Y">
      <span>
        <strong>proportion {{ section1 }}</strong>
      </span>
      <span>dsjkajdkajksdjkajdskdjak</span>
      <span>dsjkajdkajksdjkajdskdjak</span>
      <span>dsjkajdkajksdjkajdskdjak</span>
    </f-col>
    <f-col :span="section2" :align-x="colAlign2X" :align-y="colAlign2Y">
      <div>
        <span>
          <strong>proportion {{ section2 }}</strong>
        </span>
      </div>
    </f-col>
  </f-row>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import FRow from '@/components/layout/flex/FRow.vue';
import FCol from '@/components/layout/flex/FCol.vue';
const alignX = ref('start');
const alignY = ref('start');
const section1 = ref(1);
const section2 = ref(9);
const colAlign1X = ref('start');
const colAlign1Y = ref('start');
const colAlign2X = ref('start');
const colAlign2Y = ref('start');
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

<template>
  <div class="card">
    <h1>grid布局</h1>
    <strong>划分单元格的列数</strong>
    <br />
    <el-input v-model="colNum" placeholder="请输入一行显示的列数" />
    <br />
    <strong>容器水平方向</strong>
    <br />
    <el-button @click="rowAlign = 'start'">start</el-button>
    <el-button @click="rowAlign = 'center'">center</el-button>
    <el-button @click="rowAlign = 'end'">end</el-button>
    <br />
    <strong>合并单元格(以第一个单元格为例)</strong>
    <el-input v-model="colSpanNum" placeholder="合并的列数" />
    <el-input v-model="rowSpanNum" placeholder="合并的行数" />
    <strong>项目水平方向</strong>
    <br />
    <el-button @click="rowItemAlign = 'start'">start</el-button>
    <el-button @click="rowItemAlign = 'center'">center</el-button>
    <el-button @click="rowItemAlign = 'end'">end</el-button>
    <br />
    <strong>项目垂直方向</strong>
    <br />
    <el-button @click="colItemAlign = 'start'">start</el-button>
    <el-button @click="colItemAlign = 'center'">center</el-button>
    <el-button @click="colItemAlign = 'end'">end</el-button>
    <br />
    <g-row :col="colNum" :row-align="rowAlign" :col-align="colAlign">
      <g-col
        class="demo"
        :span-col="colSpanNum"
        :span-row="rowSpanNum"
        :row-align="rowItemAlign"
        :col-align="colItemAlign"
        >1
      </g-col>
      <g-col class="demo">2</g-col>
      <g-col class="demo">3</g-col>
      <g-col class="demo">4</g-col>
      <g-col class="demo">5</g-col>
      <g-col class="demo">6</g-col>
      <g-col class="demo">7</g-col>
      <g-col class="demo">8</g-col>
    </g-row>
  </div>
</template>

<script setup lang="ts">
import GRow from '@/components/layout/grid/GRow.vue';
import GCol from '@/components/layout/grid/GCol.vue';
import { ref } from 'vue';

const colNum = ref(3);
const rowAlign = ref('start');
const colAlign = ref('start');
const colSpanNum = ref(1);
const rowSpanNum = ref(1);
const rowItemAlign = ref('start');
const colItemAlign = ref('start');
</script>

<style scoped>
.demo {
  width: 100px;
  height: 100px;
  background-color: #5992b6;
}
</style>

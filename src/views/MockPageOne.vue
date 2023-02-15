<template>
  <h1>hello world I am MockPage1</h1>
  <el-input
    v-model="column"
    oninput="value=value.replace(/[^\d]/g,'')"
    placeholder="请输入整数列项，表示一行显示几项"
  />
  <el-radio-group v-model="labelPosition">
    <el-radio-button label="left">left</el-radio-button>
    <el-radio-button label="center">center</el-radio-button>
    <el-radio-button label="right">right</el-radio-button>
  </el-radio-group>
  <grid-group
    :grid-list="gridList"
    :column="column"
    :label-position="labelPosition"
  />
</template>

<script setup lang="ts">
import GridGroup from '@/components/grid/GridGroup.vue';
import { ref } from 'vue';
import { gridList } from '@/views/MockPageOne';

const column = ref<number>();
const labelPosition = ref('left');
</script>

<style scoped></style>

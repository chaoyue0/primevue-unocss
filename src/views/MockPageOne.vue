<template>
  <div class="l-board_sub">
    <h1>hello world I am MockPage1</h1>
    <el-input
      v-model="column"
      oninput="value=value.replace(/[^\d]/g,'')"
      placeholder="请输入整数列项，表示一行显示几项"
      clearable
    />
    <el-radio-group v-model="labelPosition">
      <el-radio-button label="left">left</el-radio-button>
      <el-radio-button label="center">center</el-radio-button>
      <el-radio-button label="right">right</el-radio-button>
    </el-radio-group>
    <el-input
      v-model="width"
      oninput="value=value.replace(/[^\d]/g,'')"
      placeholder="请输入子网格的宽度"
      clearable
    />
    <el-input
      v-model="height"
      oninput="value=value.replace(/[^\d]/g,'')"
      placeholder="请输入子网格的高度"
      clearable
    />
    <el-input
      v-model="photoWidth"
      oninput="value=value.replace(/[^\d]/g,'')"
      placeholder="请输入photo的宽度"
      clearable
    />
    <el-input
      v-model="photoHeight"
      oninput="value=value.replace(/[^\d]/g,'')"
      placeholder="请输入photo的高度"
      clearable
    />
    <el-button @click="reset">重置</el-button>
    <grid-group
      :grid-list="gridList"
      :column="column"
      :label-position="labelPosition"
      :width="width"
      :height="height"
      :photo-width="photoWidth"
      :photo-height="photoHeight"
    />
  </div>
</template>

<script setup lang="ts">
import GridGroup from '@/components/grid/GridGroup.vue';
import { ref } from 'vue';
import { gridList } from '@/views/MockPageOne';

const column = ref<number>();
const labelPosition = ref('left');
const width = ref<number>();
const height = ref<number>();
const photoWidth = ref<number>();
const photoHeight = ref<number>();

function reset() {
  column.value = undefined;
  width.value = undefined;
  height.value = undefined;
  photoWidth.value = undefined;
  photoHeight.value = undefined;
}
</script>

<style scoped></style>

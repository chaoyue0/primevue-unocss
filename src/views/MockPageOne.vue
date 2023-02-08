<template>
  <h1>hello world I am MockPage1</h1>
  <el-input v-model="column" placeholder="输入列项" />
  <grid-group :grid-list="[1, 2, 3, 4, 5, 6, 7]" :column="column" />
</template>

<script setup lang="ts">
import GridGroup from '@/components/grid/GridGroup.vue';
import { ref } from 'vue';

const column = ref();
</script>

<style scoped></style>

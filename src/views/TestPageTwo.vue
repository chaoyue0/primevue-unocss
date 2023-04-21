<template>
  <div class="g-all_center">
    <h1>input组件</h1>
    <label-input v-model="test" placeholder="label1"></label-input>
    <label-input v-model="test2" placeholder="label2"></label-input>
    <label-input v-model="test3"></label-input>
  </div>
  <div class="g-all_center">
    <el-button @click="saveDemoFile">保存并下载</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import LabelInput from '@/components/input/LabelInput.vue';
import { saveFile } from '@/libs/save-file';

const test = ref('');
const test2 = ref('');
const test3 = ref('');

const file = new Blob();
function saveDemoFile() {
  saveFile(file, 'demo');
}
</script>

<style scoped></style>

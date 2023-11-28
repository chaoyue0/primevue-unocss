<template>
  <div class="card">
    <el-button @click="doPreview">普通文件预览</el-button>
    <el-button @click="doDownload">普通文件下载</el-button>
  </div>
</template>

<script setup lang="ts">
import basePreview from '@/libs/download/basePreview';
import baseDownload from '@/libs/download/baseDownload';

const url =
  'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg';

function doPreview() {
  basePreview(url, 'previewFile', true);
}

function doDownload() {
  baseDownload(url, 'testFile');
}
</script>

<style scoped></style>

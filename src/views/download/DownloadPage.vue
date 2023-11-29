<template>
  <div class="card">
    <el-button @click="doPreview">普通文件预览</el-button>
    <el-button @click="doDownload">普通文件下载</el-button>
    <el-button @click="doBlob">转Blob</el-button>
    <el-button @click="doStreamDownload">流式文件下载</el-button>
  </div>
</template>

<script setup lang="ts">
import basePreview from '@/libs/download/basePreview';
import baseDownload from '@/libs/download/baseDownload';
import streamDownload from '@/libs/download/streamDownload';
import getBlob from '@/libs/download/getBlob';

const url =
  'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg';

const bigFileUrl = 'api/100mb.bin';

const mediumFileUrl = 'api/d/file/lan20221010/ehkmdl33jtq.jpg';
function doPreview() {
  basePreview(url, 'previewFile');
}

function doBlob() {
  getBlob(mediumFileUrl);
}

function doDownload() {
  baseDownload(mediumFileUrl, 'testFile');
}

function doStreamDownload() {
  streamDownload(getBlob(mediumFileUrl), 'streamFile');
}
</script>

<style scoped></style>

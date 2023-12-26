<template>
  <div class="card">
    <Button @click="doPreview">普通文件预览</Button>
    <Button @click="doDownload">普通文件下载</Button>
    <Button @click="getBlob(mediumFileUrl)">获取Blob</Button>
    <Button @click="doStreamDownload">流式文件下载</Button>
    <br />
    <hr />
    <ProgressDownload :url="mediumFileUrl" />
  </div>
</template>

<script setup lang="ts">
import basePreview from '@/libs/download/basePreview';
import baseDownload from '@/libs/download/baseDownload';
import { streamDownload } from '@/libs/download/streamDownload';
import getBlob from '@/libs/download/getBlob';
import ProgressDownload from '@/components/download/ProgressDownload.vue';

const url =
  'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg';

const bigFileUrl = 'api/100mb.bin';

const mediumFileUrl =
  'api/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=1600';

function doPreview() {
  basePreview(url, 'previewFile');
}

function doDownload() {
  baseDownload(mediumFileUrl, 'testFile');
}

function doStreamDownload() {
  streamDownload(mediumFileUrl, 'streamFile');
}
</script>

<style scoped></style>

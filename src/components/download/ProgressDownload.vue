<template>
  <el-button
    :loading="loading"
    @click="streamDownload(props.url, 'streamFileDemo')"
  >
    下载 {{ percentage }}
  </el-button>
  <div v-show="progress">总耗时：{{ timeStamp / 100 }}</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import {
  streamDownload,
  progress,
  percentage,
  total,
  timeStamp,
} from '@/libs/download/streamDownload';

const props = defineProps<{ url: string }>();

const loading = computed(() => {
  if (total.value) {
    return progress.value != total.value;
  } else {
    return false;
  }
});
</script>

<style scoped></style>

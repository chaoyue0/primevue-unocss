<template>
  <el-button
    :loading="loading"
    @click="streamDownload(props.url, 'streamFileDemo')"
  >
    下载 {{ percentage }}
  </el-button>
  <progress
    max="100"
    :value="percentage ? parseInt(percentage ? percentage : '') : ''"
    class="loadBar"
  >
    {{ percentage }}
  </progress>
  <!--  <div class="loadBar">
    <div>
      <span class="percent">
        <i></i>
      </span>
    </div>
    <span class="percentNum">{{ percentage }}</span>
  </div>-->
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
    return percentage.value !== '100%';
  } else {
    return false;
  }
});
</script>

<style scoped>
.loadBar {
  width: 600px;
  height: 30px;
  border: 3px solid #212121;
  position: relative;
}

.loadBar div {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.loadBar div i {
  width: 100%;
  animation: move 0.8s linear infinite;
  background-color: #b3e19d;
}

@keyframes move {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 40px 0;
  }
}
</style>

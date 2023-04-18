<template>
  <h1>grid布局</h1>
  <g-row col="3" row-align="center">
    <div class="demo">1</div>
    <div class="demo">2</div>
    <div class="demo">3</div>
    <div class="demo">4</div>
    <div class="demo">5</div>
    <div class="demo">6</div>
    <div class="demo">7</div>
    <div class="demo">8</div>
  </g-row>
</template>

<script setup lang="ts">
import GRow from '@/components/layout/grid/GRow.vue';
</script>

<style scoped>
.demo {
  width: 100px;
  height: 100px;
  background-color: #5992b6;
}
</style>

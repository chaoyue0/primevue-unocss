<template>
  <h1>实现一个flex的布局</h1>
  <div class="box">
    <div class="left">1</div>
    <div class="center">2</div>
    <div class="right">3</div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.box {
  display: flex;
}
.left {
  flex-grow: 1;
}
.center {
  flex-grow: 2;
}
.right {
  flex-grow: 1;
}
</style>

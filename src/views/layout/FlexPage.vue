<template>
  <div class="card">
    <h1>flex布局</h1>
    <f-row :gutter="5" justify="center" align-items="center">
      <f-col order="4"><div class="demo-box">1</div></f-col>
      <f-col order="3" align-self="end">
        <div class="demo-box-special">2</div>
      </f-col>
      <f-col order="2"><div class="demo-box">3</div></f-col>
      <f-col order="1"><div class="demo-box">4</div></f-col>
      <f-col><div class="demo-box">5</div></f-col>
      <f-col><div class="demo-box">6</div></f-col>
      <f-col><div class="demo-box">7</div></f-col>
      <f-col><div class="demo-box">8</div></f-col>
    </f-row>
    <br />
    <f-row justify="end">
      <f-col><div class="demo-box">1</div></f-col>
      <f-col><div class="demo-box">2</div></f-col>
      <f-col align-self="center"><div class="demo-box-special">3</div></f-col>
      <f-col><div class="demo-box">4</div></f-col>
      <f-col><div class="demo-box">5</div></f-col>
      <f-col align-self="end"><div class="demo-box-special">6</div></f-col>
      <f-col><div class="demo-box">7</div></f-col>
    </f-row>
  </div>
</template>

<script setup lang="ts">
import FRow from '@/components/layout/flex/FRow.vue';
import FCol from '@/components/layout/flex/FCol.vue';
</script>

<style scoped>
h1 {
  font-family: 'Nunito Sans', sans-serif;
}
.demo-box {
  width: 300px;
  height: 300px;
  background-color: #b7b7b7;
}
.demo-box-special {
  width: 150px;
  height: 150px;
  background-color: #b7b7b7;
}
</style>

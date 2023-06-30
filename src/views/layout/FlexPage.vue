<template>
  <h2>Flex Direction</h2>
  <p>
    Sets the direction of flexible items.By controlling the
    <strong>direction</strong> attribute
  </p>
  <div class="card">
    <h3>Row</h3>
    <f-row direction="row">
      <f-col><div class="box">1</div></f-col>
      <f-col><div class="box">2</div></f-col>
      <f-col><div class="box">3</div></f-col>
    </f-row>
    <h3>Reverse</h3>
    <f-row direction="reverse">
      <f-col><div class="box">1</div></f-col>
      <f-col><div class="box">2</div></f-col>
      <f-col><div class="box">3</div></f-col>
    </f-row>
    <h3>Col</h3>
    <f-row direction="col">
      <f-col><div class="box-column">1</div></f-col>
      <f-col><div class="box-column">2</div></f-col>
      <f-col><div class="box-column">3</div></f-col>
    </f-row>
    <h3>Col-reverse</h3>
    <f-row direction="col-reverse">
      <f-col><div class="box-column">1</div></f-col>
      <f-col><div class="box-column">2</div></f-col>
      <f-col><div class="box-column">3</div></f-col>
    </f-row>
  </div>
</template>

<script setup lang="ts">
import FRow from '@/components/layout/flex/FRow.vue';
import FCol from '@/components/layout/flex/FCol.vue';
</script>

<style scoped>
.box {
  width: 100px;
  height: 100px;
  background-color: var(--wg-color-primary);
}
.box-column {
  height: 50px;
  background-color: var(--wg-color-primary);
}
</style>

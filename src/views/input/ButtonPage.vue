<template>
  <h2>base</h2>
  <div class="card">
    <base-button @click="fun2">button</base-button>
  </div>
  <h2>size</h2>
  <p>
    BaseButton provides <strong>small and large</strong> sizes as interface
    properties.
  </p>
  <div class="card">
    <base-button size="small" @click="fun2">small</base-button>
    <base-button @click="fun2">normal</base-button>
    <base-button size="large" @click="fun2">large</base-button>
  </div>
  <h2>type</h2>
  <p>
    BaseButton provides
    <strong>primary, success, info, warning, and danger</strong> as interface
    properties.
  </p>
  <div class="card">
    <base-button type="primary" @click="fun2">primary</base-button>
    <base-button type="success" @click="fun2">success</base-button>
    <base-button type="info" @click="fun2">info</base-button>
    <base-button type="warning" @click="fun2">warning</base-button>
    <base-button type="danger" @click="fun2">danger</base-button>
  </div>
  <h2>disable</h2>
  <p>BaseButton provides <strong>disable</strong> as interface properties.</p>
  <div class="card">
    <base-button disabled @click="fun1">disabled</base-button>
    <base-button disabled text @click="fun2">text</base-button>
  </div>
  <h2>round</h2>
  <p>BaseButton provides <strong>round</strong> as interface properties.</p>
  <div class="card">
    <base-button round @click="fun2">round</base-button>
  </div>
  <h2>badge</h2>
  <p>BaseButton provides <strong>badge</strong> as interface properties.</p>
  <div class="card">
    <base-button :badge="5" type="primary" @click="fun2">primary</base-button>
    <base-button :badge="10" type="success" @click="fun2">success</base-button>
    <base-button :badge="20" type="info" @click="fun2">info</base-button>
    <base-button :badge="8" type="warning" @click="fun2">warning</base-button>
    <base-button :badge="50" type="danger" @click="fun2">danger</base-button>
    <base-button :badge="66" round @click="fun2">round</base-button>
    <base-button :badge="99" @click="fun2">badge</base-button>
  </div>
  <h2>DropdownButton</h2>
  <div class="card">
    <dropdown-button :search-num="1" :operation-num="0">
      <template #search-1>1</template>
    </dropdown-button>
    <dropdown-button :search-num="1" :operation-num="2">
      <template #search-1>1</template>
      <template #operation-1>1</template>
      <template #operation-2>2</template>
    </dropdown-button>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@/components/button/BaseButton.vue';
import DropdownButton from '@/components/button/DropdownButton.vue';

function fun1() {
  console.log('button1');
}
function fun2() {
  console.log('button2');
}
</script>

<style scoped></style>

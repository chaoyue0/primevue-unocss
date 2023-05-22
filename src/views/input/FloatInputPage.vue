<template>
  <div class="card">
    <h1>float-input组件</h1>
    <float-input v-model="test" placeholder="float1" />
    <float-input v-model="test2" type="embed" placeholder="float2" />
    <float-input v-model="test3" type="outside" placeholder="float3" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import FloatInput from '@/components/input/FloatInput.vue';

const test = ref('');
const test2 = ref('');
const test3 = ref('');
</script>

<style scoped></style>

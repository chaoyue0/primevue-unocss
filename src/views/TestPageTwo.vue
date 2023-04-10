<template>
  <div class="g-center">
    <h1>input组件</h1>
    <label-input v-model="test" placeholder="label1"></label-input>
    <label-input v-model="test2" placeholder="label2"></label-input>
    <label-input v-model="test3"></label-input>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import LabelInput from '@/components/input/LabelInput.vue';

const test = ref('');
const test2 = ref('');
const test3 = ref('');
</script>

<style scoped></style>

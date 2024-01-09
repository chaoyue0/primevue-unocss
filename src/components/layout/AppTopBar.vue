<template>
  <div class="flex layout-top-bar">
    <PrimeMenuBar v-show="props.menuType === 'Horizontal'"></PrimeMenuBar>
    <div class="ml-auto f-center color-red">To be determined area</div>
  </div>
</template>

<script setup lang="ts">
import PrimeMenuBar from '@/components/menu/PrimeMenuBar.vue';

const props = defineProps<{ menuType: string }>();
</script>

<style scoped></style>

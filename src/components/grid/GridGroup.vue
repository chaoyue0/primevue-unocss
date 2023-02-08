<template>
  <div class="grid-group" :style="{ '--repeatColumns': props.column }">
    <grid-item
      v-for="item in props.gridList"
      :key="item.index"
      :value="item"
      :grid-item="item"
    />
  </div>
</template>

<script setup lang="ts">
import GridItem from './GridItem.vue';

const props = defineProps<{ gridList: []; column?: number }>();
</script>

<style scoped>
.grid-group {
  --repeatColumns: 3;
  display: grid;
  grid-template-columns: repeat(
    var(--repeatColumns),
    calc(100% / var(--repeatColumns))
  );
  justify-items: center;
  row-gap: 30px;
  width: 90vw;
  margin: 0 auto;
  background-color: #2a598a;
}
</style>

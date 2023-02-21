<template>
  <div
    class="grid-group"
    :style="{
      '--repeatColumns': props.column,
    }"
  >
    <grid-item
      v-for="item in props.gridList"
      :key="item.index"
      :value="item"
      :grid-item="item"
      :label-position="props.labelPosition"
      :width="props.width"
      :height="props.height"
      :photo-width="photoWidth"
      :photo-height="photoHeight"
    />
  </div>
</template>

<script setup lang="ts">
import GridItem from './GridItem.vue';
import type { GridItemData } from '@/views/MockPageOne';

const props = withDefaults(
  defineProps<{
    labelPosition?: 'left' | 'right' | 'center';
    gridList: GridItemData[];
    column?: number;
    width?: number;
    height?: number;
    photoWidth?: number;
    photoHeight?: number;
  }>(),
  {
    labelPosition: 'left',
    column: 3,
    width: 300,
    height: 300,
    photoWidth: 100,
    photoHeight: 100,
  }
);
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
  background-color: #f2f2f2;
}
</style>

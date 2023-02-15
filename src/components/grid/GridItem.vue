<template>
  <div
    class="grid-item"
    :style="{ '--labelPosition': enumPosition(props.labelPosition) }"
  >
    <div class="title">
      {{ props.gridItem.title }}
    </div>
    <div class="content">
      {{ props.gridItem.content }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { GridItemData } from '@/views/MockPageOne';

const props = withDefaults(
  defineProps<{
    labelPosition?: 'left' | 'right' | 'center';
    gridItem: GridItemData;
  }>(),
  {
    labelPosition: 'left',
  }
);

function enumPosition(s: string) {
  switch (s) {
    case 'left':
      return 'flex-start';
    case 'center':
      return 'center';
    case 'right':
      return 'flex-end';
  }
}
</script>

<style scoped>
.grid-item {
  --labelPosition: 'flex-start';
  display: flex;
  flex-direction: column;
  align-items: var(--labelPosition);
  width: 300px;
  height: 300px;
  background-color: gray;
}
</style>

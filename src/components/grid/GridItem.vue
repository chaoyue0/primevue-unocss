<template>
  <div
    class="grid-item"
    :style="{
      '--labelPosition': enumPosition(props.labelPosition),
      width: props.width + 'px',
      height: props.height + 'px',
    }"
  >
    <div class="title">
      {{ props.gridItem.title }}
    </div>
    <div>
      <img
        :src="props.gridItem.photo"
        alt=""
        :style="{
          width: props.photoWidth + 'px',
          height: props.photoHeight + 'px',
        }"
      />
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
    width?: number;
    height?: number;
    photoWidth?: number;
    photoHeight?: number;
  }>(),
  {
    labelPosition: 'left',
    width: 300,
    height: 300,
    photoWidth: 100,
    photoHeight: 100,
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

<style lang="scss" scoped>
.grid-item {
  --labelPosition: 'flex-start';
  --width: 300px;
  --height: 300px;
  display: flex;
  flex-direction: column;
  align-items: var(--labelPosition);
  background-color: gray;
  div {
    margin-top: 20px;
  }
  div + div {
    margin-top: 30px;
  }
}
</style>

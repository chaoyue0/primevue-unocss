<template>
  <div
    :class="[
      'g-col' + props.col,
      props.fixLeft === '0' ? '' : 'g-fix' + props.fixLeft + '_left',
      props.fixCenter === '0' ? '' : 'g-fix' + props.fixCenter + '_center',
      props.fixRight === '0' ? '' : 'g-fix' + props.fixRight + '_right',
      props.fixLeftValue === '0' ? '' : 'g-fix_left',
      props.fixCenterValue === '0' ? '' : 'g-fix_center',
      props.fixRightValue === '0' ? '' : 'g-fix_right',
      props.rowDense ? 'g-dense_row' : '',
      props.colDense ? 'g-dense_col' : '',
      props.rowAlign === 'start' ? '' : 'g-row-items_' + props.rowAlign,
      props.colAlign === 'start' ? '' : 'g-col-items_' + props.colAlign,
      props.gridRowAlign === 'start'
        ? ''
        : 'g-row-content_' + props.gridRowAlign,
      props.gridColAlign === 'start'
        ? ''
        : 'g-col-content_' + props.gridColAlign,
      props.placeAlign === 'start' ? '' : 'g-all_' + props.placeAlign,
    ]"
    :style="{
      '--fix-left-value':
        props.fixLeftValue === '0' ? undefined : props.fixLeftValue + 'px',
      '--fix-center-value':
        props.fixCenterValue === '0' ? undefined : props.fixCenterValue + 'px',
      '--fix-right-value':
        props.fixRightValue === '0' ? undefined : props.fixRightValue + 'px',
    }"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    col?: string;
    fixLeft?: string;
    fixCenter?: string;
    fixRight?: string;
    fixLeftValue?: string;
    fixCenterValue?: string;
    fixRightValue?: string;
    rowDense?: boolean;
    colDense?: boolean;
    rowAlign?: string;
    colAlign?: string;
    gridRowAlign?: string;
    gridColAlign?: string;
    placeAlign?: string;
  }>(),
  {
    col: '1',
    fixLeft: '0',
    fixCenter: '0',
    fixRight: '0',
    fixLeftValue: '0',
    fixCenterValue: '0',
    fixRightValue: '0',
    rowDense: false,
    colDense: false,
    rowAlign: 'start',
    colAlign: 'start',
    gridRowAlign: 'start',
    gridColAlign: 'start',
    placeAlign: 'start',
  }
);
</script>

<style scoped></style>

<template>
  <table>
    <caption>
      {{
        props.title
      }}
    </caption>
    <tbody>
      <tr>
        <slot></slot>
      </tr>
      <tr v-for="(v, k) in props.model" :key="k">
        <th v-for="item in getObjectAttr(v)" :key="item">
          {{ item }}
        </th>
      </tr>
    </tbody>
    <tfoot></tfoot>
  </table>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title?: string;
    model: [];
  }>(),
  {
    title: '',
  }
);

function getObjectAttr(obj: any) {
  console.log('xxx', Object.values(obj));
  return Object.values(obj);
}
</script>

<style scoped></style>

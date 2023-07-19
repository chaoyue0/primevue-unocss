<template>
  <base-table :model="arr">
    <base-table-item label="name"></base-table-item>
    <base-table-item label="age"></base-table-item>
    <base-table-item label="sex"></base-table-item>
  </base-table>
</template>

<script setup lang="ts">
import BaseTable from '@/components/table/BaseTable.vue';
import BaseTableItem from '@/components/table/BaseTableItem.vue';
import { ref } from 'vue';

const arr = ref([
  {
    name: 'test1',
    age: 20,
    sex: 'man',
  },
  {
    name: 'test2',
    age: 18,
    sex: 'man',
  },
  {
    name: 'test3',
    age: 30,
    sex: 'man',
  },
]);
</script>

<style scoped></style>

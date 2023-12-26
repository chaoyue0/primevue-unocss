<template>
  <div class="top-bar">
    <TabView :active-index="activeIndex">
      <TabPanel
        v-for="tab in viewStore.views"
        :key="tab.label"
        :header="tab.label"
      >
      </TabPanel>
    </TabView>
  </div>
</template>

<script setup lang="ts">
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import { useViewStore } from '@/stores/view';
import { ref } from 'vue';

const viewStore = useViewStore();
const activeIndex = ref(0);
</script>

<style scoped></style>

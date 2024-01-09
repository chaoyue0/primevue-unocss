<template>
  <Button
    icon="pi pi-spin pi-cog"
    class="fixed right-0 top-50"
    @click="sidebarVisible = true"
  ></Button>
  <Sidebar
    v-model:visible="sidebarVisible"
    :show-close-icon="false"
    position="right"
    header="Custom Made"
  >
    <p class="font-size-5 font-500">Menu Type</p>
    <div class="mb">
      <RadioButton
        v-model="menuType"
        input-id="ingredient1"
        name="menu"
        value="Horizontal"
        @change="changeRadio"
      />
      <label for="ingredient1" class="ml-2">Horizontal</label>
    </div>
    <div class="mb">
      <RadioButton
        v-model="menuType"
        input-id="ingredient2"
        name="menu"
        value="Sidebar"
        @change="changeRadio"
      />
      <label for="ingredient2" class="ml-2">Sidebar</label>
    </div>
    <Divider />
  </Sidebar>
</template>

<script setup lang="ts">
import RadioButton from 'primevue/radiobutton';
import Divider from 'primevue/divider';
import Button from 'primevue/button';
import Sidebar from 'primevue/sidebar';
import { onMounted, ref } from 'vue';

const sidebarVisible = ref(false);
const menuType = ref('Sidebar');

const emit = defineEmits<{ (e: 'menu-type', menuType: string): void }>();

onMounted(() => {
  emit('menu-type', menuType.value);
});

const changeRadio = () => {
  emit('menu-type', menuType.value);
};
</script>

<style scoped></style>

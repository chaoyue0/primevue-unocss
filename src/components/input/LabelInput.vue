<template>
  <div class="input-box">
    <input
      ref="inputRef"
      v-model="inputValue"
      placeholder="提示性的文字"
      class="g-pt2 g-pl1 g-pb2 g-pr1"
      :style="{ width: props.width }"
    />
    <label>{{ text }}</label>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue';
const props = withDefaults(
  defineProps<{
    labelPosition?: 'left' | 'right' | 'center';
    width?: number | string;
    height?: number | string;
  }>(),
  {
    labelPosition: 'left',
    width: 300 + 'px',
    height: 50 + 'px',
  }
);
const inputValue = ref('');

const inputRef = ref();
const text = ref('');
nextTick(() => {
  text.value = inputRef.value.placeholder;
  inputRef.value.removeAttribute('placeholder');
  console.log('text', text);
});
</script>

<style scoped lang="scss">
.input-box {
  position: relative;
}
label {
  position: absolute;
  left: 10px;
  top: 20px;
  pointer-events: none;
  font-size: 1rem;
}
input {
  border: 2px solid #ccc;
  box-shadow: inset 0 0 0 rgba(0, 0, 0, 0.075);
  border-radius: 5px;
}
input:focus + label {
  position: absolute;
  left: 10px;
  top: 5px;
  color: #b7b7b7;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.5em;
  pointer-events: none;
  transition: 0.5s ease all;
}
input:focus-visible {
  outline: none;
  border: 2px solid rgb(89, 146, 182);
}
</style>

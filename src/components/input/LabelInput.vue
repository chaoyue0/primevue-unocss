<template>
  <div class="input-box">
    <input
      ref="inputRef"
      :value="props.modelValue"
      :placeholder="props.placeholder"
      class="g-pt2 g-pl1 g-pb2 g-pr1"
      :style="{ width: props.width }"
      @input="$emit('update:modelValue', $event.target.value)"
      @focus="handleFocus"
      @blur="handleBlur"
    />
    <label ref="labelRef">{{ text }}</label>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue';
const props = withDefaults(
  defineProps<{
    width?: number | string;
    height?: number | string;
    modelValue?: string;
    placeholder?: string;
  }>(),
  {
    modelValue: '',
    width: 300 + 'px',
    height: 50 + 'px',
    placeholder: '提示性的文字',
  }
);
defineEmits(['update:modelValue']);

const inputRef = ref();
const labelRef = ref();
const text = ref('');
nextTick(() => {
  text.value = inputRef.value.placeholder;
  inputRef.value.removeAttribute('placeholder');
});
function handleFocus() {
  labelRef.value.classList.add('focus');
}
function handleBlur() {
  if (props.modelValue === '') {
    labelRef.value.classList.remove('focus');
  }
}
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
input:hover {
  cursor: pointer;
}
.focus {
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

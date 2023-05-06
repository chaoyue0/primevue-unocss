<template>
  <div class="input-box">
    <input
      ref="inputRef"
      :value="props.modelValue"
      :placeholder="props.placeholder"
      :class="addClass(props.type)"
      :style="{ width: props.width }"
      @input="$emit('update:modelValue', $event.target.value)"
      @focus="handleFocus(props.type)"
      @blur="handleBlur(props.type)"
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
    type?: string;
  }>(),
  {
    modelValue: '',
    width: 300 + 'px',
    height: 50 + 'px',
    placeholder: '',
    type: 'inside', //embed、outside
  }
);
/*const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();*/
defineEmits(['update:modelValue']);

const inputRef = ref();
const labelRef = ref();
const text = ref('');
nextTick(() => {
  text.value = inputRef.value.placeholder;
  inputRef.value.removeAttribute('placeholder');
});

function addClass(type: string) {
  switch (type) {
    case 'inside':
      return 'l-p2';
    case 'outside':
      return 'l-p1';
    case 'embed':
      return 'l-p1';
  }
}

function handleFocus(type: string) {
  if (type === 'inside') {
    labelRef.value.classList.add('inside-focus');
  } else if (type === 'outside') {
    labelRef.value.classList.add('outside-focus');
  } else if (type === 'embed') {
    labelRef.value.classList.add('embed-focus');
  }
}

function handleBlur(type: string) {
  if (props.modelValue === '') {
    if (type === 'inside') {
      labelRef.value.classList.remove('inside-focus');
    } else if (type === 'outside') {
      labelRef.value.classList.remove('outside-focus');
    } else if (type === 'embed') {
      labelRef.value.classList.remove('embed-focus');
    }
  }
}
</script>

<style scoped lang="scss">
@import 'src/assets/mixin.scss';
.input-box {
  position: relative;
  display: inline-block;
}
.input-box + .input-box {
  margin-left: var(--wg-element-margin);
}
input {
  border: 2px solid #ccc;
  box-shadow: inset 0 0 0 rgba(0, 0, 0, 0.075);
  border-radius: 5px;
}
input:hover {
  cursor: pointer;
}
label {
  position: absolute;
  top: 50%;
  left: 10px;
  margin-top: -0.5rem;
  line-height: 1;
  pointer-events: none;
  transition: 0.5s ease all;
}
.inside-focus {
  @include ptl(absolute, 5, 10);
  font-weight: 400;
  line-height: 1.5em;
  font-size: 0.8rem;
  color: #b7b7b7;
  transition: 0.5s ease all;
}
.outside-focus {
  position: absolute;
  top: -0.6rem;
  font-size: 0.8rem;
  font-weight: 400;
  line-height: 1.5em;
  color: #b7b7b7;
  transition: 0.5s ease all;
}
.embed-focus {
  position: absolute;
  top: -0.6rem;
  font-size: 0.8rem;
  font-weight: 400;
  line-height: 1.5em;
  color: #b7b7b7;
  transition: 0.5s ease all;
}
input:focus-visible {
  outline: none;
  border: 2px solid rgb(89, 146, 182);
}
</style>

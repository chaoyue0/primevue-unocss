<template>
  <button :class="buttonClass" :disabled="isDisabled">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
const props = withDefaults(
  defineProps<{
    text?: boolean;
    disabled?: boolean;
    size?: string;
    type?: string;
    round?: boolean;
    circle?: boolean;
  }>(),
  {
    text: false,
    disabled: false,
    size: 'normal',
    type: '',
    round: false,
    circle: false,
  }
);

const isDisabled = computed(() => {
  return props.disabled;
});

const buttonClass = computed(() => {
  return [
    'b-button',
    props.type === '' ? '' : 'b-type_' + props.type,
    {
      'b-click_disabled': isDisabled.value,
      'b-size_lg': props.size === 'large',
      'b-size_sm': props.size === 'small',
      'b-text': props.text,
      'b-round': props.round,
      'b-circle': props.circle,
    },
  ];
});
</script>

<style scoped></style>

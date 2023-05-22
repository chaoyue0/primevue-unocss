<template>
  <button :class="buttonClass" :disabled="isDisabled">
    <slot></slot>
    <span :class="spanClass">
      {{ props.badge ? props.badge : '' }}
    </span>
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
    badge?: number | undefined;
  }>(),
  {
    text: false,
    disabled: false,
    size: 'normal', //lg、sm
    type: '', //success、info、danger、primary、warning
    round: false,
    circle: false,
    badge: undefined, //1-99
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

const spanClass = computed(() => {
  return [
    props.badge ? 'b-badge' : '',
    props.type === '' ? 'b-badge_alert' : '',
    {
      'b-badge_primary': props.type === 'primary',
      'b-badge_info': props.type === 'info',
      'b-badge_success': props.type === 'success',
      'b-badge_warning': props.type === 'warning',
      'b-badge_danger': props.type === 'danger',
    },
  ];
});
</script>

<style scoped></style>

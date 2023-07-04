<template>
  <div class="drop-down-search">
    <base-button v-show="props.searchNum !== 0" text>search</base-button>
    <div class="search-bubble">
      <div v-for="item in props.searchNum" :key="item">
        <slot :name="'search-' + item"></slot>
      </div>
    </div>
  </div>
  {{ props.operationNum !== 0 ? '|' : '' }}
  <div class="drop-down-operation">
    <base-button v-show="props.operationNum !== 0" text>operation</base-button>
    <div class="operation-bubble">
      <div v-for="item in props.operationNum" :key="item">
        <slot :name="'operation-' + item"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@/components/button/BaseButton.vue';

const props = defineProps<{
  searchNum?: number;
  operationNum?: number;
  dividedNum?: number;
  area?: number;
}>();

function searchDivided(
  index: number,
  dividedNum: number,
  area: number
): boolean {
  if (area === 1) {
    return index === dividedNum;
  } else {
    return false;
  }
}

function operationDivided(
  index: number,
  dividedNum: number,
  area: number
): boolean {
  if (area === 2) {
    return index === dividedNum;
  } else {
    return false;
  }
}
</script>

<style scoped lang="scss">
.search-bubble {
  display: none;
  position: absolute;
  width: 100px;
  border: 1px solid #cccccc;
  transform: translateX(-35%);
  box-shadow: 0 1.5rem 4rem rgba(31, 45, 61, 0.15);
  background-color: var(--wg-color-background_white);
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
  }
}
.search-bubble::before {
  content: '';
  position: absolute;
  top: -6px;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 10px;
  height: 10px;
  background-color: #ffffff;
  border: 1px solid #cccccc;
  border-right: none;
  border-bottom: none;
}
.drop-down-search {
  display: inline;
}
.drop-down-search:hover .search-bubble {
  display: block;
}
.operation-bubble {
  display: none;
  position: absolute;
  width: 100px;
  border: 1px solid #cccccc;
  transform: translateX(35%);
  box-shadow: 0 1.5rem 4rem rgba(31, 45, 61, 0.15);
  background-color: var(--wg-color-background_white);
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
  }
}
.operation-bubble::before {
  content: '';
  position: absolute;
  top: -6px;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 10px;
  height: 10px;
  background-color: #ffffff;
  border: 1px solid #cccccc;
  border-right: none;
  border-bottom: none;
}
.drop-down-operation {
  display: inline;
}
.drop-down-operation:hover .operation-bubble {
  display: block;
}
.drop-down-operation {
  display: inline;
}
</style>

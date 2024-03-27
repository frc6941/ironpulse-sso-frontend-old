<script setup lang="ts">
import { ref } from 'vue'
import ChevronDownIcon from '@/assets/icons/ChevronDownIcon.vue'

defineProps<{
  placeholder: '',
  options: [string]
}>()

const selected = defineModel<string>('selected')

const showOptions = ref(false)

function toggleShowOptions() {
  showOptions.value = !showOptions.value
}

function selectOption(option: string) {
  selected.value = option
}
</script>

<template>
  <div class="custom-select" @click="toggleShowOptions">
    <div class="selected-option">
      <p>{{ selected ? selected : placeholder }}</p>
      <ChevronDownIcon class="chevron-down" :class="{ 'roll-chevron': showOptions, 'roll-back-chevron': !showOptions }"></ChevronDownIcon>
    </div>
    <transition name="bounce">
      <ul class="options" v-if="showOptions">
        <li v-for="(option, index) in options" :key="index" @click="selectOption(option)">
          <div><p>{{ option }}</p></div>
        </li>
      </ul>
    </transition>
  </div>
</template>

<style scoped>

.roll-chevron {
  transform: rotate(0);
  transition: transform 0.3s;
}

.roll-back-chevron {
  transform: rotate(180deg);
  transition: transform 0.3s;
}

.bounce-enter-active {
  animation: bounce-in 0.3s;
}

.bounce-leave-active {
  animation: bounce-in 0.3s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
    transform-origin: top;
  }
  50% {
    transform: scale(1.1);
    transform-origin: top;
  }
  100% {
    transform: scale(1);
    transform-origin: top;
  }
}

.custom-select {
  position: relative;
  cursor: pointer;
  width: 200px;
}

.selected-option {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  align-items: last baseline;
}

.chevron-down {
  margin-left: auto;
  scale: 70%;
}

.options {
  position: absolute;
  top: 110%;
  left: 0;
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  border-radius: 8px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0 1px 4px;
}

.options div {
  padding: 10px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 5px;
  border-radius: 8px;
}

.options div:hover {
  background-color: #f5f5f5;
}

p {
  margin: 0;
  color: #979797;
}

.options li {
  padding-top: 5px;
}
</style>
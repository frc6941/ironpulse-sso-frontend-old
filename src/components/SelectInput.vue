<script setup lang="ts">
import { ref, watch } from 'vue'
import ChevronDownIcon from '@/assets/icons/ChevronDownIcon.vue'
import CheckMarkIcon from '@/assets/icons/CheckMarkIcon.vue'
import { currentColorScheme } from '@/main'

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

const selectOptionsBackground = ref(currentColorScheme.value.selectOptionsBackground)
const selectOptionsHover = ref(currentColorScheme.value.selectOptionsHover)

watch(currentColorScheme, (current) => {
  selectOptionsBackground.value = current.selectOptionsBackground
  selectOptionsHover.value = current.selectOptionsHover
})
</script>

<template>
  <div class="select" @click="toggleShowOptions">
    <div class="selected-option">
      <p>{{ selected ? selected : placeholder }}</p>
      <ChevronDownIcon class="chevron-down" :class="{ 'roll-chevron': showOptions, 'roll-back-chevron': !showOptions }"></ChevronDownIcon>
    </div>
    <transition name="bounce">
      <ul id="select-options" class="options" v-if="showOptions">
        <li v-for="(option, index) in options" :key="index" @click="selectOption(option)">
          <div class="option-content">
            <p>{{ option }}</p>
            <CheckMarkIcon class="checkmark" v-if="option === selected"></CheckMarkIcon>
          </div>
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

.option-content {
  display: flex;
}

.checkmark {
  scale: 70%;
  margin-left: auto;
}

.select {
  position: relative;
  cursor: pointer;
  width: 200px;
}

.selected-option {
  padding: 10px;
  border: 1px solid #979797;
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
  background-color: v-bind(selectOptionsBackground);
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
  background-color: v-bind(selectOptionsHover);
}

p {
  margin: 0;
  color: #979797;
}

.options li {
  padding-top: 5px;
}
</style>
<script setup lang="ts">
import { currentColorScheme } from '@/main'
import { ref, watch } from 'vue'

defineProps<{
  text: string
}>()

const buttonNormal = ref(currentColorScheme.value.buttonNormal)
const buttonHover = ref(currentColorScheme.value.buttonHover)
const buttonClick = ref(currentColorScheme.value.buttonClick)
const primary = ref(currentColorScheme.value.primary)

watch(currentColorScheme, (current) => {
  buttonNormal.value = current.buttonNormal
  buttonHover.value = current.buttonHover
  buttonClick.value = current.buttonClick
  primary.value = current.primary
})
</script>

<template>
  <button>{{ text }}</button>
</template>

<style scoped>
button {
  box-sizing: border-box;
  border: none;
  border-radius: 10px;
  outline: none;
  padding: 0 16px;
  color: v-bind(primary);
  background-color: v-bind(buttonNormal);
  font-size: 12pt;
  cursor: pointer;
  font-weight: bold;
  user-select: none;
}

button:hover {
  background-color: v-bind(buttonHover);
}

button:active {
  background-color: v-bind(buttonClick);
}
</style>
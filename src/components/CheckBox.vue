<script setup lang="ts">
import { ref, watch } from 'vue'
import { currentColorScheme } from '@/main'

defineProps<{
  message: string
}>()
const secondaryBackground = ref(currentColorScheme.value.secondaryBackground)

watch(currentColorScheme, (current) => {
  secondaryBackground.value = current.secondaryBackground
})
</script>

<template>
  <div class="checkbox">
    <input type="checkbox"/>
    <p>{{ message }}</p>
  </div>
</template>

<style scoped>
input[type=checkbox] {
  width: 20px;
  height: 20px;
  border-radius: 5px;
  box-sizing: border-box;
  border: 1px solid #979797;
  margin-right: 7px;
  cursor: pointer;
}

input[type=checkbox]:not(:checked) {
  appearance: none;
  background-color: v-bind(secondaryBackground);
}

p {
  font-size: 12pt;
  padding: 3px;
  margin: 0;
  color: #767676;
}

.checkbox {
  display: flex;
  align-items: start;
  vertical-align: middle;
}
</style>
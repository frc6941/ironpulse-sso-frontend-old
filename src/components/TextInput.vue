<script setup lang="ts">
import { ref, watch } from 'vue'
import { currentColorScheme } from '@/main'

defineProps<{
  placeholder: string,
  type: 'text'
}>()

const primary = ref(currentColorScheme.value.primary)

watch(currentColorScheme, (current) => {
  primary.value = current.primary
})
</script>

<template>
  <input :placeholder="placeholder" :type="type">
</template>

<style scoped>
input {
  box-sizing: border-box;
  border: 1px solid #979797;
  border-radius: 10px;
  outline: none;
  padding: 0 16px;
  font-size: 12pt;
  color: v-bind(primary);
}

::-webkit-input-placeholder {
  color: #979797;
  font-size: 12pt;
  user-select: none;
}

input:focus {
  border-color: #409eff;
}

input[type=password] {
  letter-spacing: 4px;
}

input[type=password]::placeholder {
  letter-spacing: 0;
}
</style>
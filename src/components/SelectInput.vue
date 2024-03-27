<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  placeholder: ''
}>()

const showOptions = ref(false)

function toggleShowOptions() {
  showOptions.value = !showOptions.value
}
</script>

<template>
  <div class="custom-select" @click="toggleShowOptions">
    <div class="selected-option">
      <p>{{ placeholder }}</p>
    </div>
    <ul class="options" v-show="showOptions">
      <li><div><p>Apple</p></div></li>
      <li><div><p>Banana</p></div></li>
      <li><div><p>Strawberry</p></div></li>
    </ul>
  </div>
</template>

<style scoped>
.custom-select {
  position: relative;
  cursor: pointer;
  width: 200px;
}

.selected-option {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
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
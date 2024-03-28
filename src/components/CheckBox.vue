<script setup lang="ts">
import { ref, watch } from 'vue'
import { currentColorScheme } from '@/main'
import CheckMarkIcon from '@/assets/icons/CheckMarkIcon.vue'

defineProps<{
  message: string
}>()

const secondaryBackground = ref(currentColorScheme.value.secondaryBackground)

watch(currentColorScheme, (current) => {
  secondaryBackground.value = current.secondaryBackground
})

const checked = defineModel<boolean>('checked')
const firstCheck = ref(true)
</script>

<template>
  <div class="checkbox" @click="() => {
    firstCheck = false
    checked = !checked
  }">
    <div class="checkbox-content" :class="{ 'check-animation': !firstCheck && checked, 'uncheck-animation': !firstCheck && !checked }">
      <transition name="appear">
        <div class="icon-container" v-if="checked">
          <CheckMarkIcon class="checkbox-icon"></CheckMarkIcon>
        </div>
      </transition>
    </div>
    <p>{{ message }}</p>
  </div>
</template>

<style scoped>
.icon-container {
  background-color: #2f6ee7;
}

.appear-enter-active {
  animation: check-checkmark 0.1s;
}
.appear-leave-active {
  animation: check-checkmark 0.1s reverse;
}

@keyframes check-checkmark {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}

.checkbox-content {
  width: 20px;
  height: 20px;
  border-radius: 5px;
  box-sizing: border-box;
  border: 1px solid #979797;
  margin-right: 7px;
  overflow: clip;
}

.checkbox-icon {
  scale: 60%;
}

p {
  font-size: 12pt;
  padding: 0;
  margin: 0;
  color: #767676;
  user-select: none;
}

.checkbox {
  cursor: pointer;
  display: flex;
  align-items: start;
  vertical-align: middle;
}
</style>
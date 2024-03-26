<script setup lang="ts">

import { currentColorScheme, getColorScheme, isDarkMode } from '@/main'
import { setCookie } from 'typescript-cookie'
import MoonIcon from '@/assets/icons/MoonIcon.vue'
import SunIcon from '@/assets/icons/SunIcon.vue'
import { ref, watch } from 'vue'
import LogoIcon from '@/assets/icons/LogoIcon.vue'

function toggleColorScheme() {
  if (isDarkMode()) {
    setCookie('scheme', 'light')
    currentColorScheme.value = getColorScheme()
    document.body.style.backgroundColor = currentColorScheme.value.background
    changeIcon()
    return
  }
  setCookie('scheme', 'dark')
  currentColorScheme.value = getColorScheme()
  document.body.style.backgroundColor = currentColorScheme.value.background
  changeIcon()
}

const icon = ref(isDarkMode() ? SunIcon : MoonIcon)
const primary = ref(currentColorScheme.value.primary)

watch(currentColorScheme, (current) => {
  primary.value = current.primary
})

function changeIcon() {
  icon.value = isDarkMode() ? SunIcon : MoonIcon
}
</script>

<template>
  <div class="nav">
    <LogoIcon class="logo"></LogoIcon>
    <h1 class="title">IronPulse SSO</h1>
    <button @click="toggleColorScheme">
      <component :is="icon"></component>
    </button>
  </div>
</template>

<style scoped>
.nav {
  height: 40px;
  display: flex;
  align-items: center;
}

.logo {
  scale: 70%;
  padding: 0;
  margin-right: -15px;
}

.title {
  margin: 15px;
  color: v-bind(primary);
}

button {
  outline: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  background-color: transparent;
}
</style>
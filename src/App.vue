<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/NavBar.vue'
</script>

<template>
  <header>
    <Header></Header>
  </header>
  <RouterView />
</template>

<style scoped>
</style>

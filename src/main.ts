import '@/assets/basic.css'

import { createApp, ref } from 'vue'
import App from './App.vue'
import router from './router'
import { getCookie } from 'typescript-cookie'

export const colorScheme: ColorSchemes = {
  light: {
    background: '#F5F5F7',
    primary: '#000000',
    secondaryBackground: '#FFFFFF',
    selectOptionsBackground: '#FFFFFF',
    selectOptionsHover: '#f5f5f5',
    buttonNormal: '#E9E8EC',
    buttonHover: '#dedce2',
    buttonClick: '#d5d2d8'
  },
  dark: {
    background: '#010101',
    primary: '#FFFFFF',
    secondaryBackground: '#1C1C1E',
    selectOptionsBackground: '#000000',
    selectOptionsHover: '#363636',
    buttonNormal: '#2C2C2E',
    buttonHover: '#242426',
    buttonClick: '#202020'
  }
}

export const currentColorScheme = ref(getColorScheme())

export function getColorScheme() {
  if (getCookie('scheme') === 'dark') {
    return colorScheme.dark
  }
  return colorScheme.light
}

export const baseUrl = ''

export function isDarkMode() {
  return getCookie('scheme') === 'dark'
}

const app = createApp(App)

app.use(router)

app.mount('#app')

interface ColorSchemes {
  light: ColorScheme
  dark: ColorScheme
}

interface ColorScheme {
  background: string
  primary: string
  secondaryBackground: string
  buttonNormal: string
  buttonHover: string
  buttonClick: string
  selectOptionsBackground: string
  selectOptionsHover: string
}

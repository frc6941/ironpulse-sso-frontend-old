<script setup lang="ts">
import TextInput from '@/components/TextInput.vue'
import CheckBox from '@/components/CheckBox.vue'
import FormButton from '@/components/FormButton.vue'
import { currentColorScheme, getColorScheme } from '@/main'
import { ref, watch } from 'vue'
import SelectInput from '@/components/SelectInput.vue'

const primary = ref(currentColorScheme.value.primary)
const secondaryBackground = ref(currentColorScheme.value.secondaryBackground)

watch(currentColorScheme, (current) => {
  primary.value = current.primary
  secondaryBackground.value = current.secondaryBackground
})
document.body.style.backgroundColor = getColorScheme().background
</script>

<template>
  <main>
    <div class="login-group">
      <h1 class="login-group-title">Sign in with IronPulse ID</h1>
      <div class="login-group-form">
        <TextInput class="input" placeholder="IronPulse ID" type="text"></TextInput>
        <TextInput class="input" placeholder="Password" type="password"></TextInput>
      </div>
      <CheckBox class="checkbox" message="Remember me"></CheckBox>
      <FormButton class="button" text="Login"></FormButton>
    </div>
  </main>
</template>

<style scoped>
main {
  height: 90vh;
  display: grid;
}

.login-group-title {
  color: v-bind(primary);
  margin: 30px;
}

@media screen and (width <= 800px) {
  .login-group {
    width: 360px;
  }
}
@media screen and (width > 800px) {
  .login-group {
    width: 400px;
  }
}

.login-group {
  align-self: center;
  justify-self: center;

  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 16px 60px 16px;
  background-color: v-bind(secondaryBackground);

  gap: 25px;
}

@media screen and (width <= 800px) {
  .login-group-form, .checkbox, .button {
    width: 300px;
  }
}

@media screen and (width > 800px) {
  .login-group-form, .checkbox, .button {
    width: 300px;
  }
}

.button {
  height: 55px;
}

.login-group-form {
  display: flex;
  flex-direction: column;
  gap: 35px;
}

.input {
  height: 55px;
  background-color: v-bind(secondaryBackground);
}
</style>

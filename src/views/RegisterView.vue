<script setup lang="ts">
import { ref, watch } from 'vue'
import { baseUrl, currentColorScheme, getColorScheme } from '@/main'
import TextInput from '@/components/TextInput.vue'
import FormButton from '@/components/FormButton.vue'

const primary = ref(currentColorScheme.value.primary)
const secondaryBackground = ref(currentColorScheme.value.secondaryBackground)

watch(currentColorScheme, (current) => {
  primary.value = current.primary
  secondaryBackground.value = current.secondaryBackground
})
document.body.style.backgroundColor = getColorScheme().background

const registerForm = {
  username: ref(''),
  fullName: ref(''),
  password: ref('')
}

const register = async () => {
  const response = await fetch(baseUrl + 'user/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(registerForm)
  })

  if (!response.ok) {
    console.error('Registration failed')
  }
}
</script>

<template>
  <main>
    <div class="register-group">
      <h1 class="register-group-title">Register a User</h1>
      <div class="register-group-form">
        <TextInput placeholder="IronPulse ID" v-model="registerForm.username" type="text" />
        <TextInput placeholder="Full name" type="text" v-model="registerForm.fullName" />
        <TextInput placeholder="Password" v-model="registerForm.password" type="password" />
        <FormButton class="button" text="Register" @click="register" />
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  height: 90vh;
  display: grid;
}

.register-group {
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
  .register-group-form,
  .button {
    width: 300px;
  }
  .register-group {
    width: 360px;
  }
}

@media screen and (width > 800px) {
  .register-group-form,
  .button {
    width: 300px;
  }
  .register-group {
    width: 400px;
  }
}

.register-group-title {
  color: v-bind(primary);
  margin: 30px;
  user-select: none;
}

.register-group-form {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.button {
  height: 55px;
}
</style>

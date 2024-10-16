<template>
  <section
    class="h-[calc(100svh_-_8svh)] w-full flex justify-center items-center"
  >
    <div class="w-full max-w-[500px] bg-black_100 mx-auto">
      <button class="bg-secondary" @click="LogIn()">login</button>
    </div>
  </section>
</template>
<script setup lang="ts">
import { AuthService } from '@/services/AuthService'

const authService = new AuthService()
const LogIn = () => {
  authService
    .login({ username: 'mor_2314', password: '83r5^_' })
    .then(response => {
      console.log('Login successful:', response.data.token) // Access the token
    })
    .catch(error => {
      console.error('Login failed:', error)
    })
}
</script>

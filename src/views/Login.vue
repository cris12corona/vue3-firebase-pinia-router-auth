<script setup>
import { ref } from "vue"
import { useUserStore } from "../stores/user"

const userStore = useUserStore()

const email = ref("cris12corona@gmail.com")
const password = ref("#Eduardo145")

const handleSubmit = async () => {
  if (!email.value || password.value.length < 6) {
    return alert("llena los campos correctamente")
  }
  await userStore.loginUser(email.value, password.value)
}
</script>

<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="handleSubmit">
      <input type="email" placeholder="Ingrese email" v-model.trim="email" />
      <input
        type="password"
        placeholder="Ingrese contraseña"
        v-model.trim="password"
      />
      <button type="submit" :disabled="userStore.loadingUser">Acceso</button>
    </form>
  </div>
</template>

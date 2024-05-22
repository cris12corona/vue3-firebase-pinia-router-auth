<!-- <template>
  <div>
    <h1>Home </h1>
    <p>{{ userStore.userData }}</p>
  </div>  
</template>

<script setup>
import {useUserStore} from "../stores/user"

const userStore = useUserStore()
</script> -->

<template>
  <div>
    <h1>Home </h1>
    <p>{{userStore.userData.email}}</p>
  </div>  
</template>

<script setup>
// import {onAuthStateChanged} from 'firebase/auth'
// import {auth} from '../firebaseConfig'

// onAuthStateChanged(auth, (user) => {
//   console.log(user)
// })
import { useUserStore } from '../stores/user';
const userStore = useUserStore()
</script>

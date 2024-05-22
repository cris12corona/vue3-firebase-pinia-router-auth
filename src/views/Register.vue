<!-- <template>
    <div>
      <h1>Register</h1>
      <button @click="userStore.registerUser('Christopher')">Ingresar</button>
    </div>  
  </template>
  
  <script setup>
  import {useUserStore} from '../stores/user'
  
  const userStore =  useUserStore()
  </script> -->
  <template>
    <div>
      <h1>Register</h1>
      <form @submit.prevent="handleSubmit">
        <input type="email" placeholder="Ingrese email" v-model.trim="email">
        <input type="password" placeholder="Ingrese contraseña" v-model.trim="password">
        <button type="submit" :disabled="userStore.loadingUser"> Crear usuario</button>
      </form>
    </div>  
  </template>
  
  <script setup>
    import { ref } from 'vue'
    import {useUserStore} from '../stores/user'
    //import {useRouter} from 'vue-router'

    const userStore = useUserStore()
    //const router = useRouter()

    const email = ref('cris12corona@gmail.com')
    const password = ref('#Eduardo145')

    const handleSubmit = async () => {
      console.log(email.value)
      console.log(password.value) 
        console.log('procesando formulario')

        if(!email.value || password.value.length < 6 ){
          return alert('llena los campos')
        }
        await userStore.registerUser(email.value, password.value) 
        //router.push('/')
      }
  </script>
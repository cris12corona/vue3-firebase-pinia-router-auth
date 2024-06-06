<template>
  <a-row>
    <a-col :xs="{ span: 24 }" :sm="{ span:12 , offset: 6}">
      <h1 class="text-center">Login</h1>
      <a-form  
      name="basicLogin" 
      autocomplete="off"
      layout="vertical"
      :model="formState"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
      >
        <a-form-item
          name= "email"
          label= "Ingrese tu correo"
          :rules= "[{ required:true, 
            whitespace: true,
            type: 'email',
            message: 'Ingresa un email valido' }]"
          >
          <a-input v-model:value="formState.email"></a-input>
        </a-form-item>
            
        <a-form-item
        name="password"
        label="Ingrese contraseña"
        :rules= "[{ required:true,
          min:6, 
          message: 'Ingrese la contraseña' }]"
          
        >
          <a-input-password v-model:value="formState.password"></a-input-password>
        </a-form-item>


        <a-form-item>
          <a-button type="primary" 
          html-type="submit" 
          :disabled="userStore.loadingUser"
          :loading="userStore.loadingUser"
          >
            Ingresar
          </a-button>
        </a-form-item>
     
    </a-form>
    </a-col>  
  </a-row>
</template>

<script setup>
import { reactive } from "vue"
import { useUserStore } from "../stores/user"
import { message } from "ant-design-vue";

const userStore = useUserStore()

const formState = reactive({
  email: "cris12corona@gmail.com",
  password: "#Eduardo145",
})

const handleSubmit = async () => {
}

const onFinish = async(values) => {
  console.log('Success:', values)
  const error = await userStore.loginUser(formState.email, formState.password)

  if(!error){
    return message.success("Bienvenidos a mi app");
  }

  switch(error){
    case 'auth/invalid-login-credentials':
      message.error('Error en el usuario o contraseña')
      break;
    case 'kkkkk':
      alert('otro error');
      break;
    default:
      alert('fallo algo desde firebase intentelo nuevamente');
      break;  

  }

}
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo)

}

</script>


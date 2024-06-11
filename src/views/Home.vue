<template>
  <div>
      <h1>Home Ruta protegida</h1>
      <p>{{userStore.userData?.email}}</p>

      <add-form>

      </add-form>

      <p v-if="databaseStore.loadingDoc"> loading docs...</p>
      <a-space direction="vertical"
      v-if="!databaseStore.loadingDoc"
      style="width: 100%"
      >
        <a-card
      v-for="item of databaseStore.documents" 
      :key="item.id"  
      :title="item.short"
      style="width: 100%"
      >
      <template #extra>
        <a-space>
          <a-popconfirm
          title="¿Estas seguro que deseas eliminar?"
          ok-text="Si"
          cancel-text="No"
          @confirm="confirm(item.id)"
          @cancel="cancel"
          >
            <a-button 
            danger
            :loading="databaseStore.loading"
            :disabled="databaseStore.loading"
            >Eliminar</a-button>
          </a-popconfirm>
          
        <a-button
        type="primary" 
        @click="router.push(`/Editar/${item.id}`)">Editar</a-button>
        <a-button @click="copiarPortapapeles(item.id)">Copiar</a-button>
        </a-space>
        
      </template>
      <p>
         {{ item.name }}
        </p>
      </a-card>


      </a-space>
    
  </div>
</template>

<script setup>
import {useUserStore} from '../stores/user'
import {useDatabaseStore} from '../stores/database'
import { ref } from 'vue'
import {useRouter} from 'vue-router'
import { message } from "ant-design-vue";


const databaseStore = useDatabaseStore()
const userStore = useUserStore()
const router = useRouter()

databaseStore.getUrls()
const url = ref('')

const handleSubmit = () => {
  //console.log('formulario')
 databaseStore.addUrl(url.value)
}

const confirm = async (id) => {
  const error = await databaseStore.deleteUrl(id)
  if(!error) return message.success('Se elimino con exito')
  return message.error(error)
}

const cancel = () => {
  message.error('No se elimino')
}

const copiarPortapapeles = async (id) => {
    console.log(id)
    if(!navigator.clipboard){
      return message.error('No se pudo copir al portapapeles')
    }

    const path = `${window.location.origin}/${id}`
    //console.log(path)

    const err = await navigator.clipboard.writeText(path)
    //console.log(err)

    if(err){
      message.error("No se pudo copiar al portapapeles")
    }else{
      message.success("Copiado exitosamente")
    }

    // navigator.clipboard
    //   .writeText(path)
    //   .then(() => {
    //     message.success("Copiado exitosamente")
    //   })

    //   .catch(err => {
    //     message.success("No se pudo copiar al portapapeles")
    //   })
}
</script>
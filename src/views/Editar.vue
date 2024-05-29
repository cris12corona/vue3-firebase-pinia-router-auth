<template>
    <div>
        <h1>Editar</h1>
        <form @submit.prevent="handleSubmit">
      <input type="text" placeholder="Ingrese URL" v-model="url">
      <button type="submit">Editar</button>
    </form>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useDatabaseStore } from '../stores/database'
import { ref } from 'vue' 

const databaseStore = useDatabaseStore()
const route = useRoute()
console.log(route.params.id)

const handleSubmit = () => {
    databaseStore.updateUrl(route.params.id, url.value)
}
const url = ref('')
onMounted(async() => {
    url.value  = await databaseStore.leerUrl(route.params.id)
})
</script>
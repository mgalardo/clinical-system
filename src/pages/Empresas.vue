<template>
  <q-page>
    <PageTitle>Lista de empresas</PageTitle>
    <section class="empresas default__box-shadow">
      <Table :rows="rows" :columns="columns"></Table>
    </section>
  </q-page>
</template>

<script setup lang="ts">
import PageTitle from 'src/components/headers/PageTitle.vue'
import Table from 'src/components/table/Table.vue'

import { ref } from 'vue'

defineOptions({
  name: 'Empresas'
})

const columns = ref([
  {
    name: 'nome_fantasia',
    label: 'Nome',
    align: 'left',
    field: 'nome_fantasia'
  },
  { name: 'endereco', align: 'left', label: 'Endereço<span>Contato</span>', field: 'endereco', width: 40 },
  { name: 'cidade', align: 'center', label: 'Cidade', field: 'cidade' },
  { name: 'estado', align: 'center', label: 'Estado', field: 'estado' },
  { name: 'actions', align: 'center', label: 'Ações', field: 'actions' }
])

const rows = ref([
  {
    nome_fantasia: 'Minha empresa',
    endereco: 'Rua Olavo Bilac, 457, Casa comercial, Batel, Curitiba - PR <span>(21)997775301</span>',
    cidade: 'Rio de Janeiro',
    estado: 'RJ'
  },
  {
    nome_fantasia: 'Minha empresa',
    endereco: 'Rua Olavo Bilac, 457, Casa comercial, Batel, Curitiba - PR <span>(21)997775301</span>',
    cidade: 'Rio de Janeiro',
    estado: 'RJ'
  }
])
</script>

<style lang="sass">
.empresas

</style>

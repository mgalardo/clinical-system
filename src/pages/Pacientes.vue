<template>
  <q-page>
    <PageTitle :add-button="true" add-button-label="Adicionar paciente">Lista de Pacientes</PageTitle>
    <section class="default__box-shadow">
      <Table :rows="rows" :columns="columns"></Table>
    </section>
  </q-page>
</template>

<script setup lang="ts">
import PageTitle from 'src/components/headers/PageTitle.vue'
import Table from 'src/components/table/Table.vue'

import { ref } from 'vue'

defineOptions({
  name: 'Pacientes'
})

const columns = ref([
  {
    name: 'nome',
    label: 'Nome',
    align: 'left',
    field: 'nome'
  },
  { name: 'idade', align: 'center', label: 'Data de Nascimento <span>Idade</span>', field: 'idade' },
  { name: 'telefone', align: 'center', label: 'Telefone', field: 'telefone' },
  { name: 'email', align: 'center', label: 'Email', field: 'email' },
  { name: 'empresa', align: 'left', label: 'Empresa', field: 'empresa' },
  { name: 'status', align: 'center', label: 'Situação', field: 'status' },
  { name: 'actions', align: 'center', label: 'Ações', field: 'actions' }
])

const rows = ref([
  {
    nome: 'Matheus Alexander',
    idade: '03/11/2000 <span>(24 anos, 2 meses e 3 dias)</span>',
    telefone: '(21)99777-5301',
    email: 'galardo.math@gmail.com',
    empresa: 1,
    status: 'Ativo'
  },
  {
    nome: 'Volmar Filho',
    idade: '',
    telefone: '',
    email: 'volmar@gmail.com',
    empresa: 2,
    status: 'Ativo'
  }
])
</script>

<style lang="sass">
</style>

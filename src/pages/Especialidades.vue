<template>
  <q-page>
    <PageTitle :add-button="true" add-button-label="Adicionar especialidade">Especialidades</PageTitle>
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
  name: 'Especialidades'
})

const columns = ref([
  {
    name: 'nome',
    label: 'Especialidade',
    align: 'left',
    field: 'nome'
  },
  { name: 'empresa', align: 'left', label: 'Empresa', field: 'empresa' },
  { name: 'actions', align: 'center', label: 'Ações', field: 'actions' }
])

const rows = ref([
  {
    nome: 'Acompanhamento terapêutico',
    empresa: 1
  },
  {
    nome: 'Acupuntura',
    empresa: 2
  }
])
</script>

<style lang="sass">
</style>

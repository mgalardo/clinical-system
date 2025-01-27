<template>
  <q-page>
    <PageTitle :add-button="true" add-button-label="Adicionar profissional">Lista de Profissionais</PageTitle>
    <section class="default__box-shadow">
      <Table :expanded="true" :rows="rows" :columns="columns"></Table>
    </section>
  </q-page>
</template>

<script setup lang="ts">
import PageTitle from 'src/components/headers/PageTitle.vue'
import Table from 'src/components/table/Table.vue'

import { ref } from 'vue'

defineOptions({
  name: 'Profissionais'
})

const columns = ref([
  {
    name: 'nome_social',
    label: 'Nome',
    align: 'left',
    field: 'nome_social'
  },
  { name: 'profissao', align: 'center', label: 'Profissão', field: 'profissao' },
  { name: 'conselho', align: 'center', label: 'Conselho', field: 'conselho' },
  { name: 'email_acesso', align: 'center', label: 'Email', field: 'email_acesso' },
  { name: 'empresa', align: 'left', label: 'Empresa', field: 'empresa' },
  { name: 'actions', align: 'center', label: 'Ações', field: 'actions' }
])

const rows = ref([
  {
    nome_social: 'Luis Fernando',
    profissao: 'Terapeuta',
    conselho: '00-RJ 00',
    email_acesso: 'luisfernando@gmail.com',
    empresa: 1,
    expansion_content: 'Conteudo sobre o Luiz'
  },
  {
    nome_social: 'Aline Carvalho',
    profissao: 'Psicopedagoga',
    conselho: '00-RJ 00',
    email_acesso: 'alinecarvalho@gmail.com',
    empresa: 2,
    expansion_content: 'Conteudo sobre a Aline'
  }
])
</script>

<style lang="sass">
</style>

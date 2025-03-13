<template>
  <q-page>
    <PageTitle @click="generateInterestLink" :add-button="true" add-button-label="Gerar lista de interesse">Pacientes
      Interessados</PageTitle>
    <section class="default__box-shadow">
      <Table :rows="rows" :columns="columns"></Table>
    </section>
  </q-page>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar'
import PageTitle from 'src/components/headers/PageTitle.vue'
import Table from 'src/components/table/Table.vue'
import { copyTextToClipboard } from 'src/utils/CopyUtils'

import { ref } from 'vue'
import AdicionarPacienteDialog from './components/AdicionarPacienteDialog.vue'

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
  { name: 'telefone', align: 'center', label: 'Telefone Responsável', field: 'telefone' },
  { name: 'periodo', align: 'center', label: 'Período', field: 'periodo' },
  { name: 'email', align: 'left', label: 'email', field: 'email' },
  { name: 'servicos', align: 'center', label: 'Serviços', field: 'servicos' },
  { name: 'actions_custom', align: 'center', label: 'Ações', field: 'actions_custom', actions: [{ icon: 'upgrade', title: 'Ativar cliente', execute: activateClient }] }
])

const rows = ref([
  {
    nome: 'Joaquina Amélia',
    idade: '11/02/2018 <span>(7 anos, 1 meses e 0 dias)</span>',
    telefone: '(11)98647-2022',
    periodo: 'Manhã',
    email: 'responsavel@gmail.com',
    servicos: 'Artes Marciais',
    nomedacrianca: 'João Silva',
    datadenascimento: '2018-05-12',
    jafazacompanhamento: true,
    acompanhamento: 'Faz acompanhamento com fonoaudiólogo há 1 ano',
    diagnostico: 'tea',
    preocupacoes: 'Dificuldade de comunicação e interação social',
    nomemae: 'Maria Silva',
    telefonemae: '(11) 98765-4321',
    nomepai: 'Carlos Silva',
    telefonepai: '(11) 91234-5678',
    veiopor: 'Indicação de um amigo'
  },
  {
    nome: 'Fernando Torres',
    idade: '24/10/2008 <span>(16 anos, 3 meses e 0 dias)</span>',
    telefone: '(41)98789-3256',
    periodo: 'Tarde',
    email: 'responsavel2@gmail.com',
    servicos: 'Psicopedagia'
  }
])

function generateInterestLink () {
  copyTextToClipboard(window.location.origin + '/pacientes/primeiro-contato')
}

const $q = useQuasar()
function activateClient (client) {
  $q.dialog({
    component: AdicionarPacienteDialog,
    componentProps: {
      client
    }
  })
}
</script>

<style lang="sass">
</style>

<template>
  <q-page>
    <PageTitle @click="openAgendamento" :add-button="true" add-button-label="Adicionar agendamento">Agenda</PageTitle>
    <section class="default__box-shadow" style="height: 75dvh;">
      <Agendamento :data="isProfissional ? [data[2]] : data" />
    </section>
  </q-page>
</template>

<script setup lang="ts">
import PageTitle from 'src/components/headers/PageTitle.vue'
import Agendamento from './components/Agendamento.vue'
import { computed, ref } from 'vue'
import { useQuasar } from 'quasar'
import AddEditAgendamentoDialog from './components/AddEditAgendamentoDialog.vue'
import { useRoute } from 'vue-router'

defineOptions({
  name: 'Agenda'
})

const data = ref([
  {
    nome_paciente: 'Bernardo',
    profissional: 'Aline de Carvalho Fernandes',
    dia: '2025-03-19',
    hora_inicial: '8:00',
    hora_final: '8:50'
  },
  {
    nome_paciente: 'Felipe',
    profissional: 'Aline de Carvalho Fernandes',
    dia: '2025-03-19',
    hora_inicial: '20:00',
    hora_final: '20:50'
  },
  {
    nome_paciente: 'Arthur',
    profissional: 'Luis',
    dia: '2025-03-21',
    hora_inicial: '15:00',
    hora_final: '15:50'
  }
])

const $q = useQuasar()
function openAgendamento () {
  $q.dialog({
    component: AddEditAgendamentoDialog
  })
}

const route = useRoute()
const isProfissional = computed(() => {
  return route.query.profissional
})
</script>

<style lang="sass">
</style>

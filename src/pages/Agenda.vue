<template>
  <q-page>
    <PageTitle :add-button="true" add-button-label="Adicionar agendamento">Agenda</PageTitle>
    <section class="default__box-shadow">
      <Agendamento :data="data" />
    </section>
  </q-page>
</template>

<script setup lang="ts">
import PageTitle from 'src/components/headers/PageTitle.vue'
import Agendamento from './components/Agendamento.vue'
import { ref } from 'vue'

defineOptions({
  name: 'Agenda'
})

const data = ref([
  {
    nome_paciente: 'Bernardo',
    profissional: 'Aline de Carvalho Fernandes',
    dia: '2025-01-22',
    hora_inicial: '8:00',
    hora_final: '8:50'
  },
  {
    nome_paciente: 'Felipe',
    profissional: 'Aline de Carvalho Fernandes',
    dia: '2025-01-22',
    hora_inicial: '10:00',
    hora_final: '10:50'
  },
  {
    nome_paciente: 'Arthur',
    profissional: 'Luis',
    dia: '2025-01-22',
    hora_inicial: '9:00',
    hora_final: '9:50'
  }
])
</script>

<style lang="sass">
</style>

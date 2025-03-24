<template>
  <q-page>
    <PageTitle @click="addEspecialidade" :add-button="true" add-button-label="Começar atendimento">Atendimento - Arthur</PageTitle>
    <!-- <section class="default__box-shadow">
      <Table :rows="rows" :columns="columns"></Table>
    </section> -->
  </q-page>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar'
import PageTitle from 'src/components/headers/PageTitle.vue'

import AddEditEspecialidadeDialog from './components/AddEditEspecialidadeDialog.vue'

defineOptions({
  name: 'Atendimento'
})

const $q = useQuasar()
function addEspecialidade () {
  $q.dialog({
    component: AddEditEspecialidadeDialog
  })
}
</script>

<style lang="sass">
</style>

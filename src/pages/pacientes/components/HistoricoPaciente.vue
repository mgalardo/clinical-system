<template>
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card class="historico-paciente default__border-radius default__box-shadow">
      <q-card-section class="historico-paciente__title">
        Histórico Cliente - {{ clientModel.nome }}
      </q-card-section>
      <q-card-section>
        <div class="historico-paciente__info">Profissionais Responsáveis: 1</div>
        <div class="historico-paciente__info">Último Checklist: 10/09/2024</div>
        <div class="historico-paciente__info">Último PEI: 14/02/2025</div>
        <div class="historico-paciente__info">Última Coleta: 12/03/2025</div>
        <div class="historico-paciente__info">Último Acesso Familiar: 07/06/2023</div>
        <q-stepper
          :key="step"
          v-model="step"
          ref="stepper"
          color="primary"
          header-nav
          class="historico-paciente__stepper"
          animated>
          <q-step
            :name="1"
            title="Coleta de Dados"
            icon="timeline">
            <q-expansion-item
              switch-toggle-side
              class="historico-paciente__expansion-item"
              v-for="category of categorias" :key="category.titulo"
              expand-separator
              :label="category.titulo">
              <q-expansion-item
                switch-toggle-side
                class="historico-paciente__expansion-item--level-2"
                v-for="item of category.itens"
                :key="item.label"
                v-show="category.itens"
                :header-inset-level="1"
                expand-separator
                :label="item.label">
                <div class="historico-paciente__expansion-description">{{ item.description }}</div>
                <div class="historico-paciente__expansion-notes">{{ item.notas }}</div>
              </q-expansion-item>
            </q-expansion-item>
          </q-step>
          <q-step
            :name="2"
            title="Gráfico de evolução"
            icon="chart">
          </q-step>
        </q-stepper>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn color="primary" unelevated label="Fechar" @click="onOKClick" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { useDialogPluginComponent } from 'quasar'
import { ref } from 'vue'

const props = defineProps({
  client: Object
})

defineEmits([
  ...useDialogPluginComponent.emits
])

const clientModel = ref(props.client ? props.client : {})

const { dialogRef, onDialogHide, onDialogOK } = useDialogPluginComponent()

function onOKClick () {
  onDialogOK()
}

const step = 1

const categorias = ref([
  {
    titulo: 'Comunicação Receptiva',
    itens: [
      { label: "Compreende os pronomes 'meu' e 'teu'.", description: 'Vocaliza ou gesticula (por exemplo, aponta, entrega os objetos) em resposta às perguntas dos adultos. O adulto pode usar objetos pertencente a criança para avaliar a compreensão. Alguns exemplos são “de quem é a vez? ”Ou “ de quem é esse sapato? ”. A resposta não precisa de ser acompanhada por contato visual', notas: 'Nas trocas de turno oportunizar o (minha vez/sua vez). Em momentos de conversação, perguntar ao longo da sessão coisas relacionadas a formas possessivas, por exemplo, "Essa mochila é de quem?", ele deve responder "Minha". Esse objetivo deve ser aplicado em ambiente clínico e escolar.' },
      { label: 'Compreende uma variedade de conceitos e relações físicas descritivas' },
      { label: 'Compreende relações espaciais envolvendo objetos e locuções preposicionais: atrás, na parte de trás de, em frente de, etc.' },
      { label: "Compreende 'igual' e 'diferente'" },
      { label: 'Compreende as relações temporais' }
    ]
  },
  { titulo: 'Comunicação Expressiva', itens: [] },
  { titulo: 'Competências Sociais Adultos ou Pares', itens: [] },
  { titulo: 'Cognição', itens: [] },
  { titulo: 'Jogo', itens: [] },
  { titulo: 'Competências Sociais', itens: [] }
])

</script>

<style lang="sass">
.historico-paciente
  max-width: 1024px !important
  min-width: 95dvw !important
  position: relative
  &__title
    color: #464646
    font-weight: 600
    font-size: 24px
  &__info
    font-size: 16px
    color: #464646
    margin-bottom: 7px
  &__stepper
    margin-top: 20px
  &__expansion-item
    color: #464646
    .q-item
      font-weight: 500
  &__expansion-description
    background: #E6E6E6
    margin: 15px 50px 15px 50px
    padding: 15px
    border-radius: 10px
    &::before
      content: 'Descrição'
      font-size: 16px
      font-weight: 600
      display: block
      margin-bottom: 15px
  &__expansion-notes
    background: #E6E6E6
    margin: 15px 50px 15px 50px
    padding: 15px
    border-radius: 10px
    &::before
      content: 'Notas'
      font-size: 16px
      font-weight: 600
      display: block
      margin-bottom: 15px
</style>

<template>
  <q-page class="atendimento">
    <PageTitle add-icon="check" :add-button="true" add-button-label="Começar atendimento">Atendimento - Arthur</PageTitle>
    <section class="default__box-shadow">
      <div>
        <q-editor v-model="anotacoesDoAtendimento"></q-editor>
      </div>
      <div class="atendimento__anotacoes">
        <div @click="openAnotacao(anotacao)" v-for="(anotacao, index) of anotacoesMedicas" :key="index">
          <div class="atendimento__anotacao-data">{{ anotacao.data }}</div>
          {{ anotacao.anotacao }}
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup lang="ts">
import { date, useQuasar } from 'quasar'
import PageTitle from 'src/components/headers/PageTitle.vue'
import { ref } from 'vue'

defineOptions({
  name: 'Atendimento'
})

const anotacoesDoAtendimento = ref('')
const anotacoesMedicas = ref([
  {
    data: '2025-03-25',
    anotacao: 'Paciente relata dor de cabeça persistente há três dias, sem febre ou outros sintomas associados. Exame físico sem anormalidades, pressão arterial dentro da normalidade.'
  },
  {
    data: '2025-03-20',
    anotacao: 'Queixa de tosse seca há uma semana, sem dispneia ou febre. Ausculta pulmonar limpa, sem sibilos ou roncos. Hipótese diagnóstica de alergia respiratória, prescrito anti-histamínico.'
  },
  {
    data: '2025-03-15',
    anotacao: 'Relata dores articulares em joelhos e punhos, sem inchaço visível. Mobilidade preservada, sem sinais inflamatórios evidentes. Solicitados exames laboratoriais para investigação.'
  },
  {
    data: '2025-03-10',
    anotacao: 'Paciente apresenta quadro de fadiga e tontura leve ao levantar-se. Pressão arterial levemente reduzida. Orientado aumento da hidratação e reavaliação em sete dias.'
  },
  {
    data: '2025-03-05',
    anotacao: 'Histórico de gastrite, refere azia frequente mesmo com dieta adequada. Exame abdominal sem alterações. Ajuste de medicação e solicitação de endoscopia para melhor avaliação.'
  }
])

anotacoesMedicas.value = anotacoesMedicas.value.map(item => ({
  ...item,
  data: date.formatDate(item.data, 'DD/MM/YYYY')
}))

const $q = useQuasar()
function openAnotacao (anotacao) {
  $q.dialog({
    title: 'Anotação feita no dia ' + anotacao.data,
    message: anotacao.anotacao
  })
}

</script>

<style lang="sass">
.atendimento
  > section
    display: flex
    gap: 30px
    justify-content: space-between
    height: 75dvh
    > div
      height: 100%
      width: 50%
      .q-editor
        height: 100%
  &__anotacoes
    display: flex
    flex-wrap: wrap
    gap: 30px
    overflow: auto
    height: 100%
    > div
      width: 45%
      background-color: #fdfd96
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2)
      border-radius: 5px
      padding: 15px
      color: #333
      max-height: 180px
      overflow: hidden
      opacity: 1
      transition: 0.3s opacity
      cursor: pointer
      &:hover
       opacity: 0.7
       transition: 0.3s opacity
  &__anotacao-data
    font-weight: 600
    margin-bottom: 10px
</style>

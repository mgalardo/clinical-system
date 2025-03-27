<template>
    <div class="agendamento">
        <div>
            <q-date
            flat
            month
            v-model="date"
            :locale="locale"
            :events="events"
            event-color="primary" />
        </div>
        <div class="agendamento__container">
            <q-scroll-area class="fit">
                <div class="agendamento__hours">
                    <div class="agendamento__hour" :hour="hour" v-for="hour of [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]" :key="hour">{{hour}}h</div>
                    <div class="agendamento__hour-now" :key="hourNow" :style="getHourNowPosition"><div>{{ hourNow }}</div></div>
                    <div @click="showAgendamento(agendamento)" v-show="agendamento.dia === date.replaceAll('/', '-')" v-for="agendamento of data" :key="agendamento" class="agendamento__compromisso" :style="getCompromissoStyle(agendamento)">
                      {{ agendamento.nome_paciente }}
                    </div>
                </div>
                <div class="agendamento__profissionais fit">
                    <div class="agendamento__profissional" v-for="(profissional, index) of groupedByProfessional" :key="index">
                        <div class="agendamento__profissional-header" :profissional="index">
                            {{ index }}
                            <q-tooltip>
                                {{ index }}
                            </q-tooltip>
                        </div>
                    </div>
                </div>
            </q-scroll-area>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { getNowDate, getLocale, getFormattedHour } from 'src/utils/DateUtils'
import { computed, onMounted, ref } from 'vue'
import { scroll, useQuasar } from 'quasar'
import AddEditAgendamentoDialog from './AddEditAgendamentoDialog.vue'

defineOptions({
  name: 'Agendamento'
})

interface Props {
    data: any
}

const props = defineProps<Props>()

const date = ref(getNowDate())
const hourNow = ref(getFormattedHour())
setInterval(() => {
  hourNow.value = getFormattedHour()
}, 1000)
const locale = ref(getLocale)

function events (date : string) {
  if (props.data.find(d => d.dia === date.replaceAll('/', '-'))) {
    return true
  }
  return false
}

const groupedByProfessional = ref(props.data.reduce((agrupado, consulta) => {
  const { profissional } = consulta
  if (!agrupado[profissional]) {
    agrupado[profissional] = []
  }
  agrupado[profissional].push(consulta)
  return agrupado
}, {}))

const getHourNowPosition = computed(() => {
  const agora = new Date()
  const horaAtual = agora.getHours()
  const minutos = agora.getMinutes()
  const hora = ((horaAtual + minutos / 60) / 23) * 100
  return {
    top: hora + '%'
  }
})

const { getScrollTarget, setVerticalScrollPosition } = scroll

// Get parent DomNode that handles page scrolling
// Usually this is element with classname ".layout-view" or "window"
onMounted(() => {
  const elementToScroll = document.querySelector('.agendamento__hour-now')
  const scrollElement = getScrollTarget(elementToScroll)
  setVerticalScrollPosition(scrollElement, elementToScroll.getBoundingClientRect().top - 300, 0)
})

function getCompromissoStyle (agendamento) {
  const profissionalHeader = document.querySelector(`[profissional="${agendamento.profissional}"]`) as HTMLElement
  const hour = document.querySelector(`[hour="${agendamento.hora_inicial.split(':')[0]}"]`) as HTMLElement
  if (!profissionalHeader || !hour) {
    return
  }
  const left = profissionalHeader.offsetLeft + 0

  const top = hour.offsetTop + 20
  return {
    left: left + 'px',
    top: top + 'px'
  }
}

const $q = useQuasar()
function showAgendamento (agendamento) {
  $q.dialog({
    component: AddEditAgendamentoDialog,
    componentProps: {
      agendamento
    }
  })
}

</script>

<style lang="sass">
.agendamento
    user-select: none
    display: flex
    gap: 20px
    height: 100%
    overflow: auto
    .q-scrollarea__content
        display: flex
        gap: 15pxd
        color: $dark
    &__container
        width: 100%
    &__hours
        position: relative
        margin-top: 50px
        color: $gray
        display: flex
        flex-direction: column
        gap: 40px
    &__hour
        position: relative
        font-size: 13px
        &:before
            content: ' '
            position: absolute
            top: 10px
            left: 20px
            background: $light-gray
            width: 100vh
            height: 0.5px
    &__hour-now
        position: absolute
        top: 15%
        left: 20px
        &:before
            content: ' '
            position: absolute
            width: 100vh
            height: 0.5px
            background: $secondary
        > div
            position: relative
            font-size: 12px
            color: $secondary
    &__profissionais
        display: flex
        gap: 10px
        height: 30px !important
        background: #fff
        border-bottom: 1px solid $light-gray
        overflow: hidden
        position: fixed
    &__profissional-header
        font-size: 16px
        font-weight: 600
        min-width: 100px
        max-width: 100px
        display: block
        height: 30px
        overflow: hidden
        text-overflow: ellipsis
        text-wrap-mode: nowrap
    &__compromisso
      height: 40px
      background: #cdcdcd
      color: #000
      display: flex
      align-items: center
      padding: 10px
      border-radius: 5px
      position: absolute
      opacity: 1
      transition: 0.3s opacity
      cursor: pointer
      &:hover
        opacity: 0.7
        transition: 0.3s opacity
</style>

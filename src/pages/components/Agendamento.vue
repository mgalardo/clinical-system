<template>
    <div class="agendamento">
        <div>
            <q-date
            flat
            month
            v-model="date"
            :locale="locale"
            :events="events"
            event-color="primary"
            />
        </div>
        <div class="agendamento__container">
            <q-scroll-area class="fit">
                <div class="agendamento__hours">
                    <div class="agendamento__hour" v-for="hour of 24" :key="hour">{{hour - 1}}h</div>
                    <div class="agendamento__hour-now" :style="getHourNowPosition"><div>{{ hourNow }}</div></div>
                </div>
                <div class="agendamento__profissionais fit">
                    <div class="agendamento__profissional" v-for="(profissional, index) of groupedByProfessional" :key="index">
                        <div class="agendamento__profissional-header">
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
import { computed, ref } from 'vue'

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

</script>

<style lang="sass">
.agendamento
    display: flex
    gap: 20px
    .q-scrollarea__content
        display: flex
        gap: 15px
        color: $dark
    &__container
        width: 100%
    &__hours
        position: relative
        margin-top: 50px
        color: $gray
        display: flex
        flex-direction: column
        gap: 60px
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
        height: 100%
        border-bottom: 1px solid $light-gray
        overflow: hidden
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
</style>

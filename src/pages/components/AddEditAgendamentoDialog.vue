<template>
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card class="add-edit-agendamento default__border-radius default__box-shadow">
      <q-card-section class="add-edit-agendamento__title">
        {{ agendamento ? 'Editar Agendamento' : 'Adicionar Agendamento' }}
        <q-btn @click="startAtendimento" v-if="agendamento && isProfissional" color="primary" unelevated icon="check" label="Iniciar Atendimento"></q-btn>
      </q-card-section>
      <Form @submit="onOKClick" class="add-edit-agendamento__form">
        <q-card-section>
          <section>
            <q-checkbox v-model="agendamentoModel.isExternal" label="Atendimento Externo"></q-checkbox>
          </section>
          <section>
            <SelectInput :options="[]" required v-model="agendamentoModel.especialidade" label="Especialidade" />
            <SelectInput :disabled="!agendamentoModel.especialidade" :options="[]" required v-model="agendamentoModel.procedimento" label="Procedimento" />
          </section>
          <section>
            <TextInput required type="date" v-model="agendamentoModel.date" label="Data" />
            <TextInput required type="time" v-model="agendamentoModel.hora_inicial" label="Horário inicial" />
            <TextInput required type="time" v-model="agendamentoModel.hora_final" label="Horário final" />
            <SelectInput :options="repeatDateOptions" required v-model="agendamentoModel.repeat" label="Repetir" />
          </section>
          <section>
            <SelectInput :options="[]" required v-model="agendamentoModel.paciente" label="Paciente" />
            <SelectInput :disable="!agendamentoModel.procedimento" :options="[]" required v-model="agendamentoModel.profissional" label="Profissional" />
          </section>
          <TextInput required type="text" v-model="agendamentoModel.hora_final" label="Observações" />
        </q-card-section>
        <q-card-actions align="right">
          <q-btn color="primary" flat unelevated label="Cancelar" @click="onDialogCancel" />
          <q-btn color="primary" unelevated label="Confirmar" type="submit" />
        </q-card-actions>
      </Form>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { useDialogPluginComponent } from 'quasar'
import Form from 'components/forms/Form.vue'
import TextInput from 'components/forms/TextInput.vue'
import { computed, ref } from 'vue'
import SelectInput from 'src/components/forms/SelectInput.vue'
import { useRoute, useRouter } from 'vue-router'

const props = defineProps({
  agendamento: Object
})

defineEmits([
  ...useDialogPluginComponent.emits
])

const agendamentoModel = ref(props.agendamento ? props.agendamento : {})
agendamentoModel.value.isExternal = false

const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } = useDialogPluginComponent()
function onOKClick () {
  onDialogOK()
}

const repeatDateOptions = ref([
  {
    label: 'Nunca',
    value: 'NEVER'
  },
  {
    label: 'Semanalmente',
    value: 'WEEK'
  },
  {
    label: 'Todo dia',
    value: 'DAY'
  },
  {
    label: 'Intervalo de Semana',
    value: 'WEEK_INTERVAL'
  }
])

const route = useRoute()
const isProfissional = computed(() => {
  return route.query.profissional
})

const router = useRouter()
function startAtendimento () {
  router.push('/agendamentos/9172?profissional=true')
}
</script>

<style lang="sass">
.add-edit-agendamento
  max-width: 1024px !important
  min-width: 700px !important
  position: relative
  &__title
    color: #464646
    font-weight: 600
    font-size: 24px
    display: flex
    justify-content: space-between
  &__form
    display: flex
    flex-direction: column
    gap: 15px
    section
      display: flex
      gap: 5px
      align-items: center
      margin-bottom: 15px
      > *
        flex: 1
</style>

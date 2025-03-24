<template>
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card class="add-edit-agendamento default__border-radius default__box-shadow">
      <q-card-section class="add-edit-agendamento__title">
        Adicionar Agendamento
      </q-card-section>
      <Form @submit="onOKClick" class="add-edit-agendamento__form">
        <q-card-section>
          <section>
            <TextInput required type="date" v-model="agendamentoModel.date" label="Data" />
            <TextInput required type="time" v-model="agendamentoModel.hora_inicial" label="Horário inicial" />
            <TextInput required type="time" v-model="agendamentoModel.hora_final" label="Horário final" />
          </section>
          <section>
            <SelectInput :options="[]" required v-model="agendamentoModel.paciente" label="Paciente" />
            <SelectInput :options="[]" required v-model="agendamentoModel.profissional" label="Profissional" />
          </section>
          <section>
            <SelectInput :options="[]" required v-model="agendamentoModel.agendamento" label="Especialidade" />
            <SelectInput :options="[]" required v-model="agendamentoModel.profissional" label="Procedimento" />
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
import { ref } from 'vue'
import SelectInput from 'src/components/forms/SelectInput.vue'

const props = defineProps({
  agendamento: Object
})

defineEmits([
  ...useDialogPluginComponent.emits
])

const agendamentoModel = ref(props.agendamento ? props.agendamento : {})

const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } = useDialogPluginComponent()
function onOKClick () {
  onDialogOK()
}

</script>

<style lang="sass">
.add-edit-agendamento
  max-width: 1024px !important
  min-width: 500px !important
  position: relative
  &__title
    color: #464646
    font-weight: 600
    font-size: 24px
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

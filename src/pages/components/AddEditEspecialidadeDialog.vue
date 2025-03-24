<template>
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card class="add-edit-especialidades default__border-radius default__box-shadow">
      <q-card-section class="add-edit-especialidades__title">
        Adicionar Especialidade
      </q-card-section>
      <q-card-section>
        <Form @submit="onOKClick" class="add-edit-especialidades__form">
          <TextInput required v-model="especialidadeModel.nome" label="Nome" />
          <TextInput required type="text" v-model="especialidadeModel.empresa" label="Empresa" />
        </Form>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn color="primary" flat unelevated label="Cancelar" @click="onDialogCancel" />
        <q-btn color="primary" unelevated label="Confirmar" type="submit" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { useDialogPluginComponent } from 'quasar'
import Form from 'components/forms/Form.vue'
import TextInput from 'components/forms/TextInput.vue'
import { ref } from 'vue'

const props = defineProps({
  especialidade: Object
})

defineEmits([
  ...useDialogPluginComponent.emits
])

const especialidadeModel = ref(props.especialidade ? props.especialidade : {})

const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } = useDialogPluginComponent()
function onOKClick () {
  onDialogOK()
}

</script>

<style lang="sass">
.add-edit-especialidades
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
</style>

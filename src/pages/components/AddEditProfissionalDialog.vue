<template>
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card class="add-edit-profissional default__border-radius default__box-shadow">
      <q-card-section class="add-edit-profissional__title">
        Adicionar Profissional
      </q-card-section>
      <q-card-section>
        <Form @submit="onOKClick" class="add-edit-profissional__form">
          <section>
            <TextInput required v-model="profissionalModel.nome" label="Nome civil completo" />
            <TextInput required v-model="profissionalModel.nomesocial" label="Nome social completo" />
          </section>
          <section>
            <TextInput required type="text" v-model="profissionalModel.empresa" label="Empresa" />
            <TextInput required type="email" v-model="profissionalModel.email" label="Email" />
            <TextInput required type="tel" mask="(##)#####-####" v-model="profissionalModel.telefone" label="Telefone" />
          </section>
          <section>
            <TextInput required type="text" v-model="profissionalModel.profissao" label="Profissão" />
            <TextInput required type="text" mask="###.###.###-##" v-model="profissionalModel.cpf" label="CPF" />
          </section>
          <section>
            <SelectInput :options="[]" required v-model="profissionalModel.especialidade" label="Especialidade" />
          </section>
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
import SelectInput from 'src/components/forms/SelectInput.vue'

const props = defineProps({
  profissional: Object
})

defineEmits([
  ...useDialogPluginComponent.emits
])

const profissionalModel = ref(props.profissional ? props.profissional : {})

const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } = useDialogPluginComponent()
function onOKClick () {
  onDialogOK()
}

</script>

<style lang="sass">
.add-edit-profissional
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
      > *
        flex: 1
</style>

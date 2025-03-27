<template>
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card class="activate-client-dialog default__border-radius default__box-shadow">
      <q-card-section class="activate-client-dialog__title">
        {{title}} <span v-if="client">- {{ clientModel.nome }}</span>
      </q-card-section>
      <q-card-section>
        <Form @submit="onOKClick" class="activate-client-dialog__form">
          <div class="activate-client-dialog__form-title">Dados Pessoais</div>
          <section>
            <TextInput required v-model="clientModel.nome" label="Nome" />
            <TextInput required type="date" v-model="clientModel.datadenascimento" label="Data de nascimento" />
          </section>
          <section>
            <TextInput mask="###-###-###.##" required v-model="clientModel.cpf" label="CPF" />
            <TextInput required v-model="clientModel.rg" label="RG" />
            <TextInput required v-model="clientModel.orgaoexpeditor" label="Orgão Expedidor do RG" />
          </section>
          <section>
            <div>
              <Label>Sexo</Label>
              <OptionGroup inline label="Sexo" required v-model="clientModel.sexo" :options="opcoesSexo" />
            </div>
            <SelectInput v-model="clientModel.genero" required :options="opcoesDeGenero" label="Gênero" />
          </section>
          <section>
            <TextInput v-model="clientModel.identificacao" label="Número de identificação" />
            <TextInput v-model="clientModel.controle" label="Número de controle" />
          </section>
          <TextInput required v-model="clientModel.nacionalidade" label="Nacionalidade" />
          <q-separator />
          <div class="activate-client-dialog__form-title">Contato</div>
          <section>
            <TextInput v-model="clientModel.nomemae" label="Nome da mãe" />
            <TextInput mask="(##)#####-####" v-model="clientModel.telefonemae" label="Telefone mãe" />
          </section>
          <section>
            <TextInput v-model="clientModel.nomepai" label="Nome da pai" />
            <TextInput mask="(##)#####-####" v-model="clientModel.telefonepai" label="Telefone pai" />
          </section>
          <q-separator />
          <div class="activate-client-dialog__form-title">Endereço</div>
          <section>
            <TextInput required mask="###-###-###.##" v-model="clientModel.cep" label="CEP" />
            <TextInput required v-model="clientModel.endereco" label="Endereço" />
          </section>
          <section>
            <TextInput required v-model="clientModel.numero" label="Número" />
            <TextInput required v-model="clientModel.complemento" label="Complemento" />
          </section>
          <section>
            <TextInput required v-model="clientModel.bairro" label="Bairro" />
            <TextInput required v-model="clientModel.cidade" label="Cidade" />
          </section>
          <q-separator />
          <div class="activate-client-dialog__form-title">Financeiro</div>
          <TextInput required v-model="clientModel.responsavel_financeiro" label="Responsável Financeiro" />
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
import SelectInput from 'components/forms/SelectInput.vue'
import OptionGroup from 'components/forms/OptionGroup.vue'
import Label from 'components/forms/Label.vue'
import { ref } from 'vue'

const props = defineProps({
  client: Object,
  title: String
})

defineEmits([
  ...useDialogPluginComponent.emits
])

const clientModel = ref(props.client ? props.client : {})

const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } = useDialogPluginComponent()
function onOKClick () {
  onDialogOK()
}

const opcoesSexo = ref([
  {
    label: 'Masculino',
    value: 'masculino'
  },
  {
    label: 'Feminino',
    value: 'feminino'
  }
])

const opcoesDeGenero = ref([
  { label: 'Sem gênero', value: 'sem_genero' },
  { label: 'Feminino', value: 'feminino' },
  { label: 'Masculino', value: 'masculino' },
  { label: 'Neutro', value: 'neutro' },
  { label: 'Transgênero', value: 'transgenero' },
  { label: 'Intersex', value: 'intersex' },
  { label: 'Outros', value: 'outros' }
])
</script>

<style lang="sass">
.activate-client-dialog
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
    .default-label
      margin-top: 10px
      margin-bottom: 0px
      font-size: 14px
    section
      display: flex
      gap: 5px
      align-items: center
      > *
        flex: 1
  &__form-title
    font-size: 16px
    font-weight: 500
</style>

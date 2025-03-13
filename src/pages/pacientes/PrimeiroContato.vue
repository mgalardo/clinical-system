<template>
  <q-page class="primeiro-contato">
    <div class="primeiro-contato__container default__border-radius">
      <div class="primeiro-contato__header">
        <q-img src="/banner.jpg"></q-img>
        <div class="primeiro-contato__title">Lista de interesse Ilumiare & BrincarIS <br> avaliação & terapias</div>
        <div class="primeiro-contato__description">Preencha o formulário abaixo para conseguirmos melhor atendê-lo</div>
      </div>
      <Form class="primeiro-contato__form">
        <Label required>Email</Label>
        <TextInput type="email" required placeholder="Seu email" dense v-model="contactModel.email"></TextInput>
        <Label required>Nome completo da criança</Label>
        <TextInput required placeholder="Sua resposta" dense v-model="contactModel.nomedacrianca"></TextInput>
        <Label required>Data de nascimento da criança</Label>
        <TextInput type="date" required placeholder="Sua resposta" dense v-model="contactModel.datadenascimento"></TextInput>
        <Label required>Preferência do período para o atendimento da criança</Label>
        <OptionGroup :options="opcoesDePeriodo" v-model="contactModel.periodo" required></OptionGroup>
        <Label required>Serviços desejados</Label>
        <OptionGroup :options="opcoesDeAtendimento" v-model="contactModel.servicos" required></OptionGroup>
        <Label required>A criança já faz algum tipo de acompanhamento?</Label>
        <TextInput required placeholder="Se sim, qual?" dense v-model="contactModel.acompanhamento"></TextInput>
        <Label>A criança já possui algum diagnóstico médico?</Label>
        <OptionGroup :options="opcoesDeDiagnostico" v-model="contactModel.diagnostico"></OptionGroup>
        <TextInput placeholder="Outro" dense v-model="contactModel.diagnostico"></TextInput>
        <Label required>Descreva brevemente suas principais preocupações com relação a sua criança</Label>
        <TextInput required placeholder="Sua resposta" dense v-model="contactModel.preocupacoes"></TextInput>
        <Label required>Nome completo da mãe</Label>
        <TextInput required placeholder="Sua resposta" dense v-model="contactModel.nomemae"></TextInput>
        <Label required>Telefone para contato da mãe</Label>
        <TextInput mask="(##)#####-####" type="tel" required placeholder="Sua resposta" dense v-model="contactModel.telefonemae"></TextInput>
        <Label required>Nome completo da pai</Label>
        <TextInput required placeholder="Sua resposta" dense v-model="contactModel.nomepai"></TextInput>
        <Label required>Telefone para contato da pai</Label>
        <TextInput mask="(##)#####-####" type="tel" required placeholder="Sua resposta" dense v-model="contactModel.telefonepai"></TextInput>
        <Label required>Como ficou sabendo sobre os nossos serviços?        </Label>
        <TextInput required placeholder="Sua resposta" dense v-model="contactModel.veiopor"></TextInput>
        <Button label="Enviar" color="primary" class="primeiro-contato__submit-btn" type="submit"></Button>
      </Form>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import Button from 'src/components/forms/Button.vue'
import Form from 'src/components/forms/Form.vue'
import Label from 'src/components/forms/Label.vue'
import OptionGroup from 'src/components/forms/OptionGroup.vue'
import TextInput from 'src/components/forms/TextInput.vue'
import { ref } from 'vue'

defineOptions({
  name: 'PrimeiroContato'
})

const contactModel = ref({
  email: '',
  nomedacrianca: '',
  datadenascimento: '',
  periodo: '',
  servicos: '',
  jafazacompanhamento: false,
  acompanhamento: '',
  diagnostico: '',
  preocupacoes: '',
  nomemae: '',
  telefonemae: '',
  nomepai: '',
  telefonepai: '',
  veiopor: ''
})

const opcoesDePeriodo = ref([
  {
    label: 'Manhã',
    value: 'manha'
  },
  {
    label: 'Tarde',
    value: 'tarde'
  },
  {
    label: 'Sem preferência - há flexibilidade',
    value: 'flexivel'
  }
])

const opcoesDeAtendimento = ref([
  { label: 'Avaliação Diagnóstica para TEA (Transtorno do Espectro Autista)', value: 'avaliacao_tea' },
  { label: 'Intervenção Precoce / DENVER / PEAK / ABA', value: 'intervencao_precoce' },
  { label: 'Fonoaudiologia', value: 'fonoaudiologia' },
  { label: 'Psicoterapia comportamental', value: 'psicoterapia_comportamental' },
  { label: 'Terapia ocupacional', value: 'terapia_ocupacional' },
  { label: 'Psicopedagogia / Pedagogia', value: 'psicopedagogia_pedagogia' },
  { label: 'Grupos Terapêuticos de Habilidades Sociais', value: 'grupos_habilidades_sociais' },
  { label: 'Teatro terapêutico', value: 'teatro_terapeutico' },
  { label: 'Artes marciais', value: 'artes_marciais' },
  { label: 'Educação física', value: 'educacao_fisica' }
])

const opcoesDeDiagnostico = ref([
  { label: 'Transtorno do Espectro Autista (TEA)', value: 'tea' },
  { label: 'TDAH / TDA', value: 'tdah_tda' },
  { label: 'Dificuldade de aprendizagem', value: 'dificuldade_aprendizagem' },
  { label: 'Dificuldade de integração sensorial', value: 'dificuldade_integracao_sensorial' },
  { label: 'Síndrome de Down', value: 'sindrome_down' },
  { label: 'Sem diagnóstico fechado', value: 'sem_diagnostico_fechado' }
])

</script>

<style lang="sass">
.primeiro-contato
  display: flex
  align-items: center
  justify-content: center
  color: #464646
  background: $secondary 100% linear-gradient(187deg, $primary 0%, $secondary 100%) no-repeat
  &__header
    width: calc(100% + 100px)
    margin-left: -50px
    .q-img
      width: 100%
  &__title
    font-size: 22px
    font-weight: 600
    margin-top: 15px
    color: #464646
    padding: 0px 50px
  &__description
    font-size: 14px
    margin-top: 15px
    padding: 0px 50px
  &__container
    background: #fff
    max-width: 1024px
    height: 95dvh
    padding: 0px 50px 20px 50px
    min-width: 400px
    max-width: 1024px
    overflow-y: auto
    overflow-x: hidden
  &__form
    margin-top: 30px
    .default-label
      margin-top: 30px
  &__submit-btn
    margin-top: 30px
    width: 100%
</style>

<template>
  <q-page class="login-page row justify-evenly">
    <div class="login-page__left">
      <div class="login-page__logos">
        <q-img width="200px" src="ilumiare.png"></q-img>
        <q-img width="200px" src="brincaris.png"></q-img>
      </div>
      <q-img width="400px" src="bg.png"></q-img>
    </div>
    <div class="login-page__right">
      <div class="login-page__container default__box-shadow default__border-radius">
        <Form class="login-page__form">
          <div class="login-page__message">Faça seu Login</div>
          <TextInput required type="email" v-model="loginPayload.email" :dense="true" label="Email"></TextInput>
          <TextInput required type="password" v-model="loginPayload.password" :dense="true" label="Senha"></TextInput>
          <Button type="submit" label="Entrar" color="primary"></Button>
        </Form>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import TextInput from 'src/components/forms/TextInput.vue'
import Button from 'src/components/forms/Button.vue'
import { ref } from 'vue'

defineOptions({
  name: 'LoginPage'
})

const loginPayload = ref({
  email: '',
  password: ''
})
</script>

<style lang="sass">
.login-page
  &__left
    flex: 1
    max-width: 50%
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    padding: 0px 80px
    > .q-img
      margin-top: -50px
  &__right
    max-width: 50%
    flex: 1
    background: $secondary 100% linear-gradient(187deg, $primary 0%, $secondary 100%) no-repeat
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    padding: 0px 50px
  &__container
    background: #fff
    padding: 30px
  &__message
    font-size: 24px
    color: $dark
    font-weight: 500
    margin-bottom: 30px
  &__form
    > *
      margin-top: 10px
    .button
      width: 100%
      margin-top: 40px
</style>

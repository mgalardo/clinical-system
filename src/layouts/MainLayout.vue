<template>
  <q-layout class="main-layout" view="lHh lpR lff">

    <q-header class="main-layout__header">
      <q-toolbar>
        <q-toolbar-title>
          <q-btn-dropdown menu-self="top end" content-class="main-layout__user-info" flat unelevated no-caps>
            <template v-slot:label>
              Olá, Matheus Alexander
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/avatar1.jpg">
              </q-avatar>
            </template>
            <q-btn no-caps class="main-layout__exit-btn" unelevated flat icon="logout" label="Sair"></q-btn>
          </q-btn-dropdown>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer class="default__box-shadow" :mini="isMini" show-if-above v-model="leftDrawerOpen" side="left"
      behavior="desktop">
      <div class="main-layout__images" :class="{ 'main-layout__images--minimized': isMini }">
        <q-img :width="isMini ? '' : '100px'" src="/brincaris.png"></q-img>
        <q-img :width="isMini ? '' : '100px'" src="/ilumiare.png"></q-img>
        <q-btn dense flat round :icon="isMini ? 'arrow_right' : 'arrow_left'" @click="toggleMiniDrawer" />
      </div>
      <q-separator></q-separator>
      <q-scroll-area class="fit">
        <q-list padding>
          <q-item to="/" :active="route.path === '/'" active-class="main-layout__list-item--active"
            class="default__border-radius main-layout__list-item" clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="home" />
            </q-item-section>

            <q-item-section>
              Início
            </q-item-section>
          </q-item>

          <q-item to="/empresas" :active="route.path === '/empresas'" active-class="main-layout__list-item--active"
            class="default__border-radius main-layout__list-item" clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="store" />
            </q-item-section>

            <q-item-section>
              Empresas
            </q-item-section>
          </q-item>

          <q-item to="/especialidades" :active="route.path === '/especialidades'"
            active-class="main-layout__list-item--active" class="default__border-radius main-layout__list-item"
            clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="construction" />
            </q-item-section>

            <q-item-section>
              Especialidades
            </q-item-section>
          </q-item>

          <q-item to="/profissionais" :active="route.path === '/profissionais'"
            active-class="main-layout__list-item--active" class="default__border-radius main-layout__list-item"
            clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="engineering" />
            </q-item-section>

            <q-item-section>
              Profissionais
            </q-item-section>
          </q-item>

          <q-expansion-item label="Pacientes" icon="group" class="default__border-radius main-layout__list-item">
            <q-list>
              <q-item to="/pacientes/ativos" :active="route.path === '/pacientes/ativos'"
                active-class="main-layout__list-item--active" class="default__border-radius main-layout__list-item"
                clickable v-ripple>
                <q-item-section>
                  Ativos
                </q-item-section>
              </q-item>
              <q-item to="/pacientes/interessados" :active="route.path === '/pacientes/interessados'"
                active-class="main-layout__list-item--active" class="default__border-radius main-layout__list-item"
                clickable v-ripple>
                <q-item-section style="align-items: flex-start; align-content: baseline; gap: 10px">
                  <div style="position: relative;">
                    Solicitações <q-badge rounded>2</q-badge>
                  </div>
                </q-item-section>
              </q-item>
            </q-list>
          </q-expansion-item>

          <q-item to="/agendamentos" :active="route.path === '/agendamentos'"
            active-class="main-layout__list-item--active" class="default__border-radius main-layout__list-item"
            clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="event_note" />
            </q-item-section>

            <q-item-section>
              Agendamentos
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
defineOptions({
  name: 'MainLayout'
})

const leftDrawerOpen = ref(true)
const isMini = ref(false)
function toggleMiniDrawer () {
  isMini.value = !isMini.value
}
</script>

<style lang="sass">
.main-layout
  color: $dark
  .q-drawer__content
    overflow: hidden
    color: $gray
    padding: 0px 15px
    font-size: 13px
  &__header
    background: #fff
    color: $dark
    z-index: 0
    .q-toolbar__title
      text-align: right
      color: $gray
      font-size: 16px
      .q-avatar
        margin-left: 15px
  .q-expansion-item
    height: auto !important
    .q-list
      margin-left: 30px
  &__list-item
    height: 40px
    min-height: 40px
    margin-bottom: 4px
    .q-badge
      width: fit-content
      font-size: 13px
      right: -24px
    .q-expansion-item__container
      > div
        &:first-child
          border-radius: 10px
          height: 40px
          min-height: 40px
          margin-bottom: 4px
    .q-item__section--side
      min-width: 30px
    &--active
      background: $primary-transparency
  &__images
    display: flex
    gap: 10px
    justify-content: space-between
    align-items: center
    .q-btn
      height: 40px
    &--minimized
      flex-direction: column-reverse
      margin-bottom: 10px
  &__user-info
    top: 50px !important
  &__exit-btn
    font-size: 14px
    color: $gray
    margin: 0 auto
  .q-page-container
    background: #F2F2F2
  .q-page
    > section
        background: #fff
        margin: 30px
        padding: 20px
        border-radius: 10px
        width: -webkit-fill-available
</style>

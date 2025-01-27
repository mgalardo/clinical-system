<template>
  <div class="page-title">
    <h1><slot></slot></h1>
    <Button v-on:click="onClick" unelevated color="primary" v-if="addButton" icon="add" :label="addButtonLabel"></Button>
  </div>
</template>

<script lang="ts" setup>
import Button from '../forms/Button.vue'

interface Props {
    addButton?: boolean
  addButtonLabel?: string
}

defineProps<Props>()

const emit = defineEmits(['click'])
function onClick () {
  emit('click')
}
</script>

<style lang="sass">
.page-title
    display: flex
    justify-content: space-between
    align-content: center
    margin: 30px 35px 0px 35px
    h1
        font-size: 24px
        font-weight: 700
        line-height: 1em
        letter-spacing: -0.01562em
    .q-btn
        max-height: 40px
        margin-top: 6px
</style>

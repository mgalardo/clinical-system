<template>
  <q-input :required="required" class="text-input" :class="{'text-input--required': required}" :dense="dense" :label="label" outlined v-model="model"></q-input>
</template>

<script setup lang="ts">
import { ModelRef } from 'vue'

interface Props {
  label?: string
  dense?: boolean
  required?: boolean
}

defineProps<Props>()
const model : ModelRef<string | number | FileList | null | undefined> = defineModel({ required: true })
</script>

<style lang="sass">
.text-input
  &--required
    position: relative
    &::before
      content: '*'
      position: absolute
      right: 5px
      color: $negative
      font-weight: 600
</style>

<template>
  <q-option-group
    :label="label"
    v-model="model"
    :options="options"
    color="primary"
  />
</template>

<script setup lang="ts">
import { QOptionGroupProps } from 'quasar'

interface Props {
  label?: string
  dense?: boolean
  options: QOptionGroupProps['options']
}

defineProps<Props>()
const model = defineModel({ required: true })
</script>

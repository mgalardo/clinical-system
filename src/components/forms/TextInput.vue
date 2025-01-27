<template>
  <q-input class="text-input" :dense="dense" :label="label" outlined v-model="model"></q-input>
</template>

<script setup lang="ts">
interface Props {
  label?: string
  dense?: boolean
}

defineProps<Props>()
const model = defineModel({ required: true })
</script>

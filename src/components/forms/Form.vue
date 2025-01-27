<template>
  <q-form @submit="submit">
      <slot></slot>
  </q-form>
</template>

<script setup lang="ts">
const emit = defineEmits(['submit'])
function submit () {
  emit('submit')
}
</script>

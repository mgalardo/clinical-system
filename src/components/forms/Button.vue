<template>
  <q-btn @click="onClick" class="button" :icon="icon" no-caps :type="type" :color="color" :label="label"></q-btn>
</template>

<script setup lang="ts">
interface Props {
  label?: string
  color?: string
  type?: string
  icon?: string
}

defineProps<Props>()

const emit = defineEmits(['click'])
function onClick () {
  emit('click')
}
</script>

<style lang="sass">
.button
  border-radius: 10px
</style>

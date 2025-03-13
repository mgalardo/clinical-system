<template>
  <div class="default-label" :class="{'default-label--required': required}"><slot></slot></div>
</template>

<script setup lang="ts">
interface Props {
  required?: boolean
}
defineProps<Props>()
</script>

<style lang="sass">
.default-label
  font-size: 18px
  font-weight: 600
  margin-bottom: 8px
  &--required
    position: relative
    width: fit-content
    &::before
      content: '*'
      position: absolute
      color: $negative
      right: -15px
      top: -3px
</style>

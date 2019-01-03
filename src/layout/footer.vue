<template>
  <footer :style="`height: ${height}`">
    <slot></slot>
  </footer>
</template>

<script>
export default {
  name: 'g-footer',
  props: {
    height: {
      type: String,
      default: '60px'
    }
  }
}
</script>

<style>

</style>

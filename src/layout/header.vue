<template>
  <header :style="`height: ${height}`">
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: 'g-header',
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

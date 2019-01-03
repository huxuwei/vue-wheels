<template>
  <aside :style="asideStyle">
    <slot></slot>
  </aside>
</template>

<script>
export default {
  name: 'g-aside',
  props: {
    width: {
      type: [String, Number]
    }
  },
  computed: {
    asideStyle() {
      let {width} = this
      width  = parseFloat(width)
      return {
        width: width + 'px'
      }
    }
  }
}
</script>

<style>

</style>

<template>
  <div v-if='show'>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GTabPane',
  props: {
    label: {
      type: String
    },
    name: {
      type: String| Number
    }
  },
  data() {
    return  {
      show: false
    }
  },
  computed: {
    vmName() {
      return 'g-tab-pane'
    }
  }
}
</script>

<style>

</style>

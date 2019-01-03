<template>
  <div class="row" :style="style">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    gutter: {
      type: String | Number
    }
  },
  computed: {
    style() {
      let {gutter} = this
      return {
        'margin-left': `-${gutter/2}px`,
        'margin-right': `-${gutter/2}px`
      }
    }
  },
  mounted() {
    this.$children.forEach(vm=>{
      vm.gutter = this.gutter
    })
  }
}
</script>

<style scoped lang='scss'>
.row{
  display: flex;
  // flex-wrap: wrap;
}
</style>

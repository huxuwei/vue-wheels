<template>
  <div class="row" >
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

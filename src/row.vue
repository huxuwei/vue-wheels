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
  }
}
</script>

<style scoped lang='scss'>
.row{
  display: flex;
  // flex-wrap: wrap;
}
</style>

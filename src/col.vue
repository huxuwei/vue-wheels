<template>
  <div class="col" :class="span &&`col-${span}`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props:{
    span: {
      type: String | Number,
      default: 24
    }
  }
}
</script>

<style lang="scss" scoped>
.col{
  // width: 50%;
  // margin: 0 10px;
}
@for $i from 1 through 24
  {
    .col-#{$i}{
      width: $i/24 * 100%;
    }
  }
</style>

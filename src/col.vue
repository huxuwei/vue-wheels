<template>
  <div class="col" :class="colClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props:{
    span: {
      type: String | Number,
      default: 24
    },
    offset: {
      type: String | Number,
    },
    justify: {
      type: String,
      validate(val) {
        return ['start', 'end', 'center', 'space-around', 'space-between'].find(item=>item===val)
      }
    },
    align: {
      type: String,
      validate(val) {
        return ['top', 'middle', 'bottom'].find(item=>item===val)
      }
    },
    
  },
  data () {
    return {
      gutter: 0
    }
  },
  computed: {
    colClass() {
      let {span, offset} = this
      return [span &&`col-${span}`,offset && `col-offset-${offset}`]
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
  .col-offset-#{$i}{
    margin-left: $i/24 * 100%
  }
}
</style>

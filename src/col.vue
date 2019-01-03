<template>
  <div class="col" :class="colClass" :style="styleCol">
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
    xs: {
      type: String | Number,
    },
    sm: {
      type: String | Number,
    },
    md: {
      type: String | Number,
    },
    lg: {
      type: String | Number,
      default: 24
    },
    xl: {
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
      let {span, offset, xs, sm, md, lg, xl} = this
      return [
        span &&`col-${span}`,
        offset && `col-offset-${offset}`,
        xs && `col-xs-${xs}`,
        sm && `col-sm-${sm}`,
        md && `col-md-${md}`,
        lg && `col-lg-${lg}`,
        xl && `col-xl-${xl}`
      ]
    },
    styleCol() {
      let {gutter} = this
      return `padding-left:${gutter/ 2}px;padding-right:${gutter/ 2}px`
    }
  },
  
}
</script>

<style lang="scss" scoped>
.col{
  // width: 50%;
  // margin: 0 10px;
}

@for $i from 1 through 24
{
  .col-#{$i} {
    width: $i/24 * 100%;
  }
  .col-offset-#{$i} {
    margin-left: $i/24 * 100%
  }
  @media (max-width: 768px) {
    .col-xs-#{$i} {
      width: $i/24 * 100%
    }
  }
  @media (min-width: 769px) and (max-width: 991px) {
    .col-sm-#{$i} {
      width: $i/24 * 100%
    }
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    .col-md-#{$i} {
      width: $i/24 * 100%
    }
  }
  @media (min-width: 1200px) and (max-width: 1919px) {
    .col-lg-#{$i} {
      width: $i/24 * 100%;
    }
  }
  @media (min-width: 1920px) {
    .col-xl-#{$i} {
      width: $i/24 * 100%;
    }
  }
}
</style>

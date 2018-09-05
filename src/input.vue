<template>
  <div class="inputWraper" :class="{error}">
    <input type="text" :value="value" :placeholder="placeholder"
    :disabled='disabled'>
    <template v-if="error">
      <icon icon='setting' color='red'></icon>
      <span>{{error}}</span>
    </template>
  </div>
</template>

<script>
import icon from './icon'
export default {
  props:{
    value: {
      type: String
    },
    placeholder: {
      type: String
    },
    disabled:{
      type: Boolean,
      default: false
    },
    error: {
      type: String
    }
  },
  components: {
    icon
  }
}
</script>

<style lang="scss" >
$color: #333;
$border-color: #999;
$order-color-hover: #666;
$red:red;
.inputWraper{
  display: inline-block;
  >input{
    padding: .2em .5em;
    &:focus{
      border-color: $border-color
    }
  }
  >input[disabled]{
    cursor:not-allowed
  }
  &.error{
    >input{
      border-color:$red;
    }
    >span{
      color: $red;
    }
    >icon{
      // fill:$red;
    }
  }
}
</style>

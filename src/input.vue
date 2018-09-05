<template>
  <div class="inputWraper">
    <input type="text" :value="value">
  </div>
</template>

<script>
export default {
  props:{
    value: {
      type: String
    }
  }
}
</script>

<style lang="scss" >
$color: #333;
$border-color: #999;
$order-color-hover: #666;
.inputWraper{
  display: inline-block;
  >input{
    padding: 0 .5em;
    &:focus{
      border:inset 1px $border-color
    }
  }
  
}
</style>

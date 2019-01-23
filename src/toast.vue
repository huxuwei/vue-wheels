<template>
  <div class="toast">
    <slot>这是一条消息</slot>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
$toast-background-color: #333;
.toast{
  position: fixed;

  top: 10px;
  left: 50%;
  transform: translateX(-50%)
}
</style>


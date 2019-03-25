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
@import '@/style/style.scss';
.toast{
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
}
.success {
  background-color: $background-color-success;
  color: $color-success;
}
.info{
  background-color: $background-color-info;
  color: $color-info;
}
.warning{
  background-color: $background-color-warning;
  color: $color-warning;
}
.danger {
  background-color: $background-color-danger;
  color: $color-danger;
}
</style>


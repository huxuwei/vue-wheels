<template>
  <span :class="type" class="wrap" v-if='show'>
      <slot></slot>
    <i @click="del" v-if="closable" class="del">x</i>
  </span>
</template>
<script>
export default {
  props: {
    closable: {
      type: Boolean,
      default: false
    },
    type: {
      validator(val) {
        return ['','success','info','warning','danger'].find(item=>item===val)
      }
    }
  },
  data() {
    return {
      show: true
    }
  },
  methods: {
    del() {
      this.show = false
      this.$emit("close");
    }
  }
};
</script>
<style lang='scss' scoped>
$color-primary: #409eff;
$color-success: #67c23a;
$color-info: #909399;
$color-warning:  #e6a23c;
$color-danger: #f56c6c;

$background-color-primary: rgba(64, 158, 255, 0.1);
$background-color-success: rgba(103, 194, 58, 0.1);;
$background-color-info: hsla(220,4%,58%,.1);
$background-color-warning:  rgba(230,162,60,.1);
$background-color-danger: hsla(0, 87%, 69%, 0.1);

.wrap {
  padding: 0 10px;
  display: inline-block;
  background: rgba(64, 158, 255, 0.1);
  border: 1px solid rgba(64, 158, 255, 0.2);
  color: $color-primary;
  margin: 0 10px;
}
.success {
  background-color: rgba(103, 194, 58, 0.1);
  border-color: rgba(103, 194, 58, 0.2);
  color: $color-success;
}
.info{
  background-color: hsla(220,4%,58%,.1);
  border-color: hsla(220,4%,58%,.2);
  color: $color-info;
}
.warning{
  background-color: rgba(230,162,60,.1);
  border-color: rgba(230,162,60,.2);
  color: $color-warning;
}
.danger {
  background-color: hsla(0, 87%, 69%, 0.1);
  border-color: hsla(0, 87%, 69%, 0.2);
  color: $color-danger;
}
.del {
  cursor: pointer;
  font-style: normal;
  padding-left: 10px;
}
</style>
<template>
  <div :class="type" class="wrap" v-if='show'>
    <span>
      <slot></slot>
    </span>
    <span @click="del" v-if="closable" class="del">X</span>
  </div>
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
        return ['','success','info','warning'].find(item=>item===val)
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
<style scoped>
.wrap {
  padding: 0 10px;
  display: inline-block;
  background: rgba(64, 158, 255, 0.1);
  border: 1px solid rgba(64, 158, 255, 0.2);
  color: #409eff;
}
.success {
  background-color: rgba(103, 194, 58, 0.1);
  border-color: rgba(103, 194, 58, 0.2);
  color: #67c23a;
}
.info{
  background-color: hsla(220,4%,58%,.1);
  border-color: hsla(220,4%,58%,.2);
  color: #909399;
}
.warning{
  background-color: rgba(230,162,60,.1);
  border-color: rgba(230,162,60,.2);
  color: #e6a23c;
}
.danger {
  background-color: hsla(0, 87%, 69%, 0.1);
  border-color: hsla(0, 87%, 69%, 0.2);
  color: #f56c6c;
}
.del {
  cursor: pointer;
}
</style>
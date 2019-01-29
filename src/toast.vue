<template>
  <div class="toast">
    <slot>这是一条消息</slot>
  </div>
</template>

<script>
export default {
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    autoCloseDelay: {
      type: Number,
      default: 5
    }
  },
  mounted() {
    if(this.autoClose) {
      setTimeout(() => {
        this.close()
      }, this.autoCloseDelay * 1000)
    }
  },
  methods: {
    close() {
      this.$el.remove()
      this.$destroy()
    }
  }
}
</script>

<style lang="scss" scoped>
$toast-background-color: grey;
$toast-color: #ccc;
.toast{
  position: fixed;
  padding: 6px 10px;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: $toast-background-color;
  color: $toast-color;
}
</style>


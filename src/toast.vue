<template>
  <div class="toast">
    <slot>这是一条消息</slot>
    <span class="close" @click="closeClick">
      {{closeButton.text}}
    </span>
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
    },
    closeButton: {
      type: Object,
      default() {
        return {
          text: '关闭'
        }
      }
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
    },
    closeClick() {
      this.close()
      let {callBack} = this.closeButtons
      if(callBack && typeof callBack === 'function'){
        callBack(this)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$toast-background-color: grey;
$toast-color: #ccc;
.toast{
  position: fixed;
  min-width: 300px;
  padding: 6px 10px;
  top: 10px;
  left: 50%;
  display: flex;
  justify-content: space-between;
  border-radius: 2px;
  transform: translateX(-50%);
  background-color: $toast-background-color;
  color: $toast-color;
}
.close{ 
  cursor: pointer;
  margin-left: 16px;
}
</style>


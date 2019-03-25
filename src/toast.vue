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
<<<<<<< HEAD
  
=======
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
>>>>>>> b9f6f740e8d4e48f1edfd8434223fdab7597a30a
}
</script>

<style lang="scss" scoped>
<<<<<<< HEAD
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
=======
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
>>>>>>> b9f6f740e8d4e48f1edfd8434223fdab7597a30a
}
</style>


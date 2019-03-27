<template>
  <div 
    class="g-popover-wrap"
    @click="triggerEvent('click')"
    @hover="triggerEvent('hover')"
    @focus="triggerEvent('focus')">
    <div v-if='visible'>{{content}}</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GPopover",
  props: {
    content: {
      type: String,
      default: "标题"
    },
    trigger: {
      type: String,
      default: "hover"
    }
  },
  data () {
    return {
      visible: false
    }
  },
  methods: {
    triggerEvent(event) {
      // console.log(e)
      if(this.trigger === event){
        this.visible = !this.visible
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.g-popover-wrap{
  display: inline-block;
}
</style>

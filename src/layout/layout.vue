<template>
  <section class="layout" :class="layoutClass">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'layout',
  data () {
    return {
      layoutClass: {
        'has-Sider-layout': false
      }
    }
  },
  mounted() {
    this.$children.forEach(vm=> {
      if(vm.$options.name === 'g-aside'){
        this.layoutClass['has-Sider-layout'] = true
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.layout {
  flex: 1;
  display: flex;
  flex-direction: column;
  &.has-Sider-layout {
    flex-direction: row;
  }
}
</style>


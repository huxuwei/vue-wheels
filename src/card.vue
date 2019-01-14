<template>
  <div class="g-card-wrap" :class="CardWrapClassName">
    <div class="g-card-head" v-if="showHead">
      <slot name="title"></slot>
      <slot name="extra"></slot>
    </div>
    <div class="g-card-body" :style="bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    border: {
      type: Boolean,
      default: true
    },
    bodyStyle: {
      type: String
    }
  },
  data () {
    return {
      showHead: false
    }
  },
  computed: {
    CardWrapClassName() {
      return {
        'g-card-wrap-border': this.border
      }
    },
  },
  mounted() {
    let {title, extra} = this.$slots
    this.showHead =  title || extra 
  }
}
</script>

<style lang="scss" scoped>
$card-border: 1px solid #e3e8ee;
$card-padding: 24px;
.g-card-wrap{
  // height: 100%;
}
.g-card-wrap-border{
  border: $card-border;
}
.g-card-head{
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: $card-border;
  padding: 14px $card-padding;
  font-size: 16px;
}
.g-card-body{
  padding: $card-padding;
}
</style>


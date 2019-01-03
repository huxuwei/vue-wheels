<template>
  <button class="g-button" :class="{[iconPosition]:true}" @click="$emit('click')">
    <g-icon class="icon" :icon="icon" v-if="icon"></g-icon>
    <g-icon class="icon" icon="loading" v-if="loading"></g-icon>
    <span>{{label}}</span>
  </button>
</template>

<script>
import gIcon from "./icon";
export default {
  props: {
    label: {
      type: String,
      default: "按钮"
    },
    icon: {
      type: String
    },
    iconPosition: {
      type: String,
      default: "left",
      validator: v => {
        return v === "right" || v === "left";
      }
    },
    disabled: Boolean,
    loading: Boolean
  },
  components: {
    gIcon
  }
};
</script>

<style lang='scss' scoped>
@import '@/style/index.scss';
 
.g-button {
  height: 32px;
  background: $button-bg;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  padding: 0 1em;
  vertical-align: middle;
  display: inline-flex;
  align-items: center;
  &:hover {
    cursor: pointer;
    border-color: $border-active-color;
  }
  &:focus {
    background: $button-active-bg;
  }
  .icon {
    margin-right: 0.2em;
  }
  &.right {
    > .icon {
      order: 1;
      margin-left: 0.2em;
      margin-right: 0;
    }
  }
}
</style>

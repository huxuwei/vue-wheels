<template>
  <button class="g-button" :class="{[iconPosition]:true}" @click="$emit('click')">
    <g-icon class="icon" :icon="icon" v-if="icon"></g-icon>
    <g-icon class="icon loading" icon="loading" v-if="loading"></g-icon>
    <slot>按钮{{icon}}</slot>
  </button>
</template>

<script>
import gIcon from "./icon";
export default {
  props: {
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
// @import '@/style/index.scss';
$font-size: 14px;
$color: #333;

$button-height: 32px;
$button-bg: white;
$button-active-bg: #eee;

$border-radius: 4px;
$border-color: #999;
$border-color-hover: #666;
$border-active-color: #666;
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
 @mixin spin {
  animation: spin 2s infinite linear;
}
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
  .loading {
    @include spin;
  }
}
</style>

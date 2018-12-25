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

<style lang='scss'>
.g-button {
  height: 32px;
  background: var(--button-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  padding: 0 1em;
  vertical-align: middle;
  display: inline-flex;
  align-items: center;
  &:hover {
    cursor: pointer;
    border-color: var(--border-active-color);
  }
  &:focus {
    background: var(--button-active-bg);
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

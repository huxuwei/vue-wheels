<template>
  <div class="g-tabs-wrap">
    <div class="g-tabs-header">
      <div>
        <div ref="title" class="g-tabs-item" v-for="(item) in children" :key="item.name">
          <span
            @click="change(item.name)"
            :class="{'g-tabs-active': item.name===value}"
          >{{item.label}}</span>
        </div>
      </div>
      <div :style="{width,transform:`translateX(${translateX})`}" class="g-tabs-active-bar"></div>
      <slot name="head-right"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import tabPane from "./tab-pane";
export default {
  name: "GTabs",
  components: {
    tabPane
  },
  model: {
    prop: "value",
    event: "change"
  },
  props: {
    value: {
      type: String | Number,
      default: 1
    }
  },
  data() {
    return {
      children: [],
      oldSelected: 1,
      width: 0,
      translateX: 0
    };
  },
  mounted() {
    this.oldSelected = this.value;
    this.$children.filter(item => item.vmName === "g-tab-pane")
      .forEach((item, i) => {
        let { label, name } = item.$props;
        this.children.push({ label, name });
        if (this.value === name) {
          item.show = true;

          this.$nextTick(() => {
            let { left, width } = this.$refs.title[i].childNodes[0].getBoundingClientRect();
            this.width = width + "px";
            this.translateX = left + "px";
          });
        }
      });
  },
  methods: {
    change(i) {
      let oldEle = this.$children.find(
        item => item.$props.name === this.oldSelected
      );
      if (oldEle) {
        oldEle.show = false;
      }
      let nowEle = this.$children.find(item => item.$props.name === i);
      if (nowEle) {
        nowEle.show = true;
      }

      this.oldSelected = i;
      this.$emit("change", i);
      this.$emit("tab-click", nowEle);
    }
  }
};
</script>

<style lang="scss" scoped>
$color: rgb(232, 232, 232);
$g-tabs-acitve-color: #409eff;
$border-bottom: 1px solid $color;

.g-tabs-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  border-bottom: $border-bottom;
  .g-tabs-active-bar {
    height: 2px;
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: $g-tabs-acitve-color;
    z-index: 1;
  }
}
.g-tabs-item {
  display: inline-block;
  padding: 0 20px;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
  &:first-child {
    padding-left: 0;
  }
  &:last-child {
    padding-right: 0;
  }
}
.g-tabs-active {
  color: $g-tabs-acitve-color;
}
</style>

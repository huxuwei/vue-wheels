<template>
  <div class="g-tabs-wrap" ref="wrap">
    <div class="g-tabs-header">
      <div>
        <div
          ref="title"
          class="g-tabs-item"
          v-for="(item) in children"
          :key="item.name"
          @click="change(item.name)"
        >
          <span :class="{'g-tabs-active': item.name===value}">{{item.label}}</span>
        </div>
      </div>
      <div :style="{width,transform:`translateX(${translateX})`}" class="g-tabs-active-bar"></div>
      <slot name="tabBarExtraContent"></slot>
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
      tabPaneVm:[],
      oldSelected: 1,
      width: 0,
      translateX: 0
    };
  },
  mounted() {
    this.oldSelected = this.value;
    // 过滤得到选项卡，添加title组，并显示对应的选项卡
    // name 默认为0开始的数组索引
    this.tabPaneVm =  this.$children.filter(item => item.vmName === "g-tab-pane")
    this.tabPaneVm.forEach((item, i) => {
        let { label, name } = item.$props;
        name = name ? name : i
        this.children.push({ label, name });

        if (this.value === name) {
          item.show = true;

          this.$nextTick(() => {
            this.calculate(i);
          });
        }
      });
  },
  watch: {
    value(val) {
      this.change(val)
    }
  },
  methods: {
    calculate(i) {
      // 计算bar的宽度与位置
      // bar的width是当前title的width，left为当前title的left - 外框的left
      let wrapLeft = this.$refs.wrap.getBoundingClientRect().left
      let { left, width } = this.$refs.title[i].childNodes[0].getBoundingClientRect();
      this.width = width + "px";
      this.translateX = left - wrapLeft + "px";
    },
    change(name) {
      // 隐藏上一个，显示当前选项卡
      let oldEle = this.tabPaneVm.find(
        item => item.$props.name === this.oldSelected
      );
      if (oldEle) {
        oldEle.show = false;
      }else{
        this.tabPaneVm[this.oldSelected].show= false
      }
      let nowEle = this.tabPaneVm.find(item => item.$props.name === name);
      if (nowEle) {
        nowEle.show = true;
      }else{
        this.tabPaneVm[name].show= true
      }

      // 找到当前选项卡的title的位置
      let index = this.children.findIndex(item => item.name === name);
      this.calculate(index);

      this.oldSelected = name;
      this.$emit("change", name);
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
    transition: 0.4s;
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

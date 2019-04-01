<template>
  <div>
    <g-popover class="block">
      <div style="height:100px; width:300px">1111</div>
      <g-button slot="reference">显示popover</g-button>
    </g-popover>
    <g-popover placement="top">
      <div style="height:100px">1111</div>
      <g-button slot="reference">top显示popover</g-button>
    </g-popover>
    <g-popover placement="bottom">
      <div style="height:100px">1111</div>
      <g-button slot="reference">bottom显示popover</g-button>
    </g-popover>
    <div class="block">
      <p>
        <strong>代码</strong>
      </p>
      <pre><code>{{content}}</code></pre>
    </div>
  </div>
</template>

<script>
import GPopover from "../../../src/popover";
import GButton from "../../../src/button";
export default {
  components: {
    GPopover,
    GButton
  },
  data() {
    return {
      content: `
<g-tabs v-model="tabVal" @tab-click="tabClick">
  <div slot="tabBarExtraContent">
    <g-button>按钮11</g-button>
    <g-button>按钮11</g-button>
  </div>
  <g-tab-pane label="第1个标题" name="a">第1个内容</g-tab-pane>
  <g-tab-pane label="第2个标题" name="b">第2个内容</g-tab-pane>
  <g-tab-pane label="第3个标题" :name="3">第3个内容</g-tab-pane>
  <g-tab-pane label="第4个标题" :name="4">第3个内容</g-tab-pane>
</g-tabs>`
        .replace(/^ /gm, "")
        .trim()
    };
  }
};
</script>

<style>
.block {
  margin-top: 20px;
}
</style>

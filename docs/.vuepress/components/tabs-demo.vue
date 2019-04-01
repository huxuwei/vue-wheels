<template>
  <div>
    <g-tabs v-model="tabVal" class="block">
      <div slot="tabBarExtraContent">
        <g-button>我是按钮</g-button>
        <g-button>我是按钮</g-button>
      </div>
      <g-tab-pane label="第1个标题" :name="1">第1个内容</g-tab-pane>
      <g-tab-pane label="第2个标题" :name="2">第2个内容</g-tab-pane>
      <g-tab-pane label="第3个标题" :name="3">第3个内容</g-tab-pane>
      <g-tab-pane label="第4个标题" :name="4">第4个内容</g-tab-pane>
    </g-tabs>
    <div class="block">
        <p>
        <strong>代码</strong>
        </p>
        <pre><code>{{content}}</code></pre>
    </div>
  </div>
</template>

<script>
import GTabs from "../../../src/tabs/tabs";
import GTabPane from "../../../src/tabs/tab-pane.vue";
import GButton from "../../../src/button";
export default {
  components: {
    GTabs,
    GTabPane,
    GButton
  },
  data() {
    return {
      tabVal: 1,
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
.block{
    margin-top:20px;
}
</style>

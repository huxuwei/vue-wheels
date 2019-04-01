<template>
  <div>
    <g-card body-style="padding:30px">
      <div slot="title">我是标题</div>
      <ul>
        <li>列表内容 1</li>
        <li>列表内容 2</li>
        <li>列表内容 3</li>
        <li>列表内容 4</li>
      </ul>
    </g-card>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content1}}</code></pre>
    <g-card>
      <div slot="title">带按钮的Card</div>
      <div slot="extra">
        <g-button></g-button>
      </div>
      <ul>
        <li>列表内容 1</li>
        <li>列表内容 2</li>
        <li>列表内容 3</li>
        <li>列表内容 4</li>
      </ul>
    </g-card>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content2}}</code></pre>
  </div>
</template>

<script>
import GCard from "../../../src/card";
import GButton from "../../../src/button";
export default {
  components: {
    GCard,
    GButton
  },
  data() {
    return {
      content1: `
<g-card body-style="padding:30px">
  <div slot="title">我是标题</div>
  <ul>
    <li>1</li>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>
</g-card>
            `
        .replace(/^ /gm, "")
        .trim(),
      content2: `
<g-card>
    <div slot="title">带按钮的Card</div>
    <div slot="extra">
      <g-button></g-button>
    </div>
    <ul>
      <li>1</li>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
</g-card>
            `
        .replace(/^ /gm, "")
        .trim()
    };
  }
};
</script>

<style>
ul{
  list-style: none;
}
</style>

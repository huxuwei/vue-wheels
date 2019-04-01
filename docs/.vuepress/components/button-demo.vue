<template>
  <div>
    <g-button>默认按钮</g-button>
    <g-button  icon="settings">默认按钮</g-button>
    <g-button  icon="settings" icon-position="right">默认按钮</g-button>
    <g-button :loading="true">默认按钮</g-button>

     <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script>
import GButton from "../../../src/button";
export default {
  components: {
    GButton
  },
  data () {
    return {
      content: `
    <g-button>默认按钮</g-button>
    <g-button  icon="settings">默认按钮</g-button>
    <g-button  icon="settings" icon-position="right">默认按钮</g-button>
    <g-button :loading="true">默认按钮</g-button>`.replace(/^ {8}/gm, '').trim()
    }
  }
};
</script>

<style>
</style>

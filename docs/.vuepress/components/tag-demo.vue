<template>
    <div>
        <g-tag>标签</g-tag>
      <g-tag type="success">标签</g-tag>
      <g-tag type="info">标签</g-tag>
      <g-tag type="warning">标签</g-tag>
      <g-tag type="danger">标签</g-tag>
      <g-tag closable>带关闭标签</g-tag>

      <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
    </div>
</template>

<script>
import GTag from "../../../src/tag";
export default {
    components: {
        GTag
    },
    data() {
        return {
            content: `
 <g-tag>标签</g-tag>
 <g-tag type="success">标签</g-tag>
 <g-tag type="info">标签</g-tag>
 <g-tag type="warning">标签</g-tag>
 <g-tag type="danger">标签</g-tag>
 <g-tag closable>带关闭标签</g-tag>
            `.replace(/^ /gm, '').trim()
        }
    }
}
</script>

<style>

</style>

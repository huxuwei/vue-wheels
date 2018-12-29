<template>
  <div>
    <div class="block">
      <g-row gutter="10">
        <g-col :span='4' :xs='24' :sm='12' :md='10' :lg='8'>1</g-col>
        <g-col :span='20' :xs='24' :sm='12' :md='14' :lg='16'>2</g-col>
      </g-row>
      <g-row>
        <g-col span="2">1</g-col>
        <g-col span="6" offset="2">2</g-col>
        <g-col span="4">3</g-col>
      </g-row>
      <g-row>
        <g-col>1</g-col>
        <g-col offset="6">2</g-col>
        <g-col>3</g-col>
        <g-col>4</g-col>
      </g-row>
      <g-row gutter="20">
        <g-col offset="20">1</g-col>
        <g-col>2</g-col>
        <g-col>3</g-col>
        <g-col>4</g-col>
      </g-row>
    </div>
    <div class="block">
      <g-button></g-button>
      <g-button label="提交"></g-button>
      <g-button label="提交" icon="setting"></g-button>
      <g-button label="提交" icon="setting" icon-position="right"></g-button>
      <g-button label="提交" @click="change"></g-button>
    </div>
    <div>
      <g-tag>标签</g-tag>
      <g-tag type="success">标签</g-tag>
      <g-tag closable>标签</g-tag>
      <g-tag closable @close="change">标签</g-tag>
    </div>
  </div>
</template>

<script>
import gButton from "./button";
import gIcon from "./icon";
import gTag from "./tag";
import gRow from "./row";
import gCol from "./col";
import "./assents/js/svg";

export default {
  methods: {
    change() {
      console.log(1);
    }
  },
  components: {
    gButton,
    gIcon,
    gTag,
    gRow,
    gCol
  }
};
</script>

<style lang="scss" scoped>
* {
  outline: 0;
  margin: 0;
  padding: 0;
}
html {
  --button-height: 32px;
  --font-size: 14px;
  --button-bg: white;
  --button-active-bg: #eee;
  --border-radius: 4px;
  --color: #333;
  --border-color: #999;
  --border-color-hover: #666;
}
#app {
  margin: 20px;
}
body {
  font-size: var(--font-size);
}
.block {
  margin-bottom: 15px;
}
.row {
  border: 1px springgreen solid;
}
.col {
  background: grey;
  border: 1px solid #333;
  height: 40px;
}
</style>

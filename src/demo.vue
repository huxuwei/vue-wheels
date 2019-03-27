<template>
  <div>
    <div class="block">
      
      <g-tabs v-model="tabVal"  @tab-click='tabClick'>
        <div slot="tabBarExtraContent" >
          <g-button>按钮11</g-button>
          <g-button>按钮11</g-button>
        </div>
        <g-tab-pane label='第一个标题' >第1个内容</g-tab-pane>
        <g-tab-pane label='第2个标题' >第2个内容</g-tab-pane>
        <g-tab-pane label='第3个标题' >第3个内容</g-tab-pane>
        <g-tab-pane label='第4个标题' >第4个内容</g-tab-pane>
        
      </g-tabs>
      <!-- <g-tabs v-model="tabVal"  @tab-click='tabClick'>
        <div slot="tabBarExtraContent" >
          <g-button>按钮11</g-button>
          <g-button>按钮11</g-button>
        </div>
        <g-tab-pane label='第一个标题' name="a">第一个内容</g-tab-pane>
        <g-tab-pane label='第2个标题' name="b">第2个内容</g-tab-pane>
        <g-tab-pane label='第3个标题' :name="3">第3个内容</g-tab-pane>
        <g-tab-pane label='第4个标题' :name="4">第3个内容</g-tab-pane>
        
      </g-tabs> -->
      
    </div>

    <button @click="showToast">显示toast</button>
    <div class="block">
      <g-card>
        <div slot="title">
          title
        </div>
      </g-card>
      <g-card body-style='padding:100px'>
        <ul>
          <li>1</li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </g-card>
      <g-card>
        <div slot="title">
          title
        </div>
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
    </div>
    <div class="block">
      <g-layout>
        <g-header>header</g-header>
        <!-- <g-main>main</g-main> -->
        <g-layout>
          <g-aside width='200px'>aside</g-aside>
          <g-main>main</g-main>
        </g-layout>
        <g-footer>footer</g-footer>
      </g-layout>
    </div>
    <!-- <g-row :gutter='40'>
        <g-col span="12">
          <div class="bor">1</div>
        </g-col>
        <g-col span="6" >
          <div class="bor">2</div>
        </g-col>
        <g-col span="6">
          <div class="bor">3</div>

        </g-col>
      </g-row> -->
    <!-- <div class="block">
      <g-row gutter="10">
        <g-col :span='4' :xs='24' :sm='12' :md='10' :lg='8'>1</g-col>
        <g-col :span='20' :xs='24' :sm='12' :md='14' :lg='16'>2</g-col>
      </g-row>
      <g-row :gutter='40'>
        <g-col span="12">
          <div class="bor">1</div>
        </g-col>
        <g-col span="6" >
          <div class="bor">2</div>
        </g-col>
        <g-col span="6">
          <div class="bor">3</div>

        </g-col>
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
    </div> -->
    <!-- <div class="block">
      <g-button></g-button>
      <g-button label="提交"></g-button>
      <g-button label="提交" icon="setting"></g-button>
      <g-button label="提交" icon="setting" icon-position="right"></g-button>
      <g-button label="提交" @click="change"></g-button>
    </div>
    <div>
      <g-tag>标签</g-tag>
      <g-tag type="success">标签</g-tag>
      <g-tag type="info">标签</g-tag>
      <g-tag type="warning">标签</g-tag>
      <g-tag type="danger">标签</g-tag>
      <g-tag closable>标签</g-tag>
      <g-tag closable @close="change">标签</g-tag>
    </div> -->
  </div>
</template>

<script>
import gButton from "./button";
import gIcon from "./icon";
import gTag from "./tag";
import gRow from "./row";
import gCol from "./col";
import "./assents/js/svg";

import gMain from './layout/main'
import gHeader from './layout/header'
import gFooter from './layout/footer'
import gAside from './layout/aside'
import gLayout from './layout/layout'
import gCard from './card'
import gToast from './toast'

import gTabs from "./tabs/tabs.vue";
import gTabPane from "./tabs/tab-pane.vue";


export default {
  data () {
    return {
      tabVal: 2
    }
  },
  methods: {
    change() {
      console.log(1);
    },
    showToast() {
      this.$toast('34343434',{
        text: '知道了!',
        callBack: (val)=>{
          console.log(11,val)
        }
      })
    },
    tabClick(){
      console.log('tabclick',arguments)
    }
  },
  components: {
    gButton,
    gIcon,
    gTag,
    gRow,
    gCol,
    gMain, gHeader, gFooter, gAside, gLayout,
    gCard,
    gToast,
    gTabs,
    gTabPane
  }
};
</script>

<style lang="scss">
* {
  outline: 0;
  margin: 0;
  padding: 0;
}
// div{
//   border: 1xp #333 solid;
//   height: 200px;
// }
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
.row .bor{
  border: 1px springgreen solid;
}
.col {
  // background: grey;
  border: 1px solid #333;
  height: 40px;
}
</style>

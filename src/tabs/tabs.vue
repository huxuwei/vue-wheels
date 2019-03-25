<template>
  <div class="g-tab-wrap">
    <div>
      <span v-for="(item) in children" 
        :key="item.name" 
        @click="change(item.name)"
        class="g-tabs-title"
        :class="{'g-tabs-active': item.name===selected}"
        >{{item.label}}</span>
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
    prop: "selected",
    event: "change"
  },
  props: {
    selected: {
      type: String | Number,
      default: 1
    }
  },
  data() {
    return {
      // titleList: [],
      // keyList: [],
      children: [],
      oldSelected: 1
    };
  },
  mounted() {
    console.log(this.selected)
    this.oldSelected = this.selected
    this.$children.forEach(item => {
      let { label, name } = item.$props;
      this.children.push({ label, name });
      if(this.selected === name){
        item.show = true
      }
    });
  },
  methods: {
    change(i) {
      
      console.log('old',this.oldSelected,this.selected)
      let oldEle = this.$children.find(item=>item.$props.name ===this.oldSelected)
      if(oldEle){
        oldEle.show = false
      }
      let nowEle = this.$children.find(item=>item.$props.name ===i)
      if(nowEle){
        nowEle.show = true
      }
      this.oldSelected = this.selected
      this.$emit("change", i);
    }
  }
};
</script>

<style lang="scss" scoped>
.g-tabs-title{
  cursor: pointer;
}
.g-tabs-active{
  color: #409EFF;
}
</style>

<template>
  <span>
    <div
    ref="popoverWrap"
    class="g-popover-wrap"
    @click="triggerEvent('click')"
    @mouseenter="triggerEvent('')"
    @mouseleave="triggerEvent('')"
    @hover="triggerEvent('hover')"
    @focus="triggerEvent('focus')"
  >
    <div v-show="visible"
      :data-show='visible'
      @click.stop
      class="g-popover" :class="popperClass" ref="popover">
      <slot></slot>
      <div class="g-popover-arrow" :x-placement="placement"></div>
    </div>
    <slot name="reference"></slot>
  </div>
  </span>
</template>

<script>
export default {
  name: "GPopover",
  props: {
    content: {
      type: String,
      default: "标题"
    },
    trigger: {
      type: String,
      default: "click"
    },
    placement: {
      type: String,
      default: "right",
      validator: val => ["right", "bottom", "top"].find(item => item === val)
    },
    popperClass: {
      type: String,
      default: 'a'
    }
  },
  data() {
    return {
      visible: false,
      once: true
    };
  },
  computed: {
    dataShow(val) {
      return this.$refs || this.$refs.popover.dataset.show
    }
  },
  watch: {
    dataShow(val) {
     this.visible = !!val
    }
  },
  mounted() {
    // this.$refs.popover
    
  },
  methods: {
    show() {
      let { popover } = this.$refs;
      document.body.appendChild(popover);
    },
    calculate( placement=this.placement ) {
      const { popoverWrap, popover } = this.$refs;
      const {
        left: wrapLeft,
        right: wrapRight,
        width: wrapWidth,
        height: wrapHeight,
        top: wrapTop,
        bottom: wrapBottom
      } = popoverWrap.getBoundingClientRect();
      const { width, height } = popover.getBoundingClientRect();

      let styleLeft = 0;
      let styleTop = 0;
      

      if (placement === "right") {
        styleLeft = wrapRight;
        styleTop = wrapTop - (height - wrapHeight) / 2;
      } else if (placement === "top") {
        styleLeft = wrapLeft - (width - wrapWidth) / 2
        styleTop = wrapTop - height
      } else if (placement === "bottom") {
        styleLeft = wrapLeft - (width - wrapWidth) / 2
        styleTop = wrapBottom
      }
      // switch(this.placement){
      //   case 'right': styleLeft = wrapRight
      //     styleRight = wrapTop - (height- wrapHeight) / 2
      //     break;
      //   case 'top': break;
      //   case 'bottom':break
      // }
     
      console.log(placement,styleLeft,styleTop)
      if(styleTop < 0) {
        // this.placement = 'bottom'
        this.calculate('bottom')
        return
      }
      if(styleLeft < 0){
        this.calculate('right')
        return
      }
      
      const space = 10;
      // if(placement === 'top'){
      //   styleLeft += space
      //   styleTop -= space
      // }else{
        styleLeft += space
        styleTop += space
      // }

      popover.style.left = styleLeft + "px";
      popover.style.top = styleTop + "px";
      // console.log(placement,styleLeft,styleTop);
    },
    triggerEvent(event) {
      
      if (this.trigger === event) {
        this.visible = !this.visible;
        
        
      } else if (this.trigger === "hover") {
        if (event === "mouseenter") {
          this.visible = true;
        } else if (event === "mouseleave") {
          this.visible = false;
        }
      }


      // 添加document绑定事件  
      if(this.visible){
        let toggleEvnetFn = function () {
          this.visible = false
          document.removeEventListener('click', toggleEvnetFn)
        }.bind(this)
        this.$nextTick(()=>{
          this.calculate();
          document.addEventListener('click',toggleEvnetFn)
        })

        if (this.visible && this.once) {
          this.show();
          this.once = false;
        }
      }
        
      
    }
  }
};
</script>

<style lang="scss" scoped>
$g-popover-background-color: #fff;
$g-popover-border: 1px solid #ebeef5;
$g-popover-min-width: 150px;
$width: 8px;
$g-popover-arrow-color:  #333;
.g-popover-wrap {
  display: inline-block;
}
.g-popover {
  position: absolute;
  background: $g-popover-background-color;
  border: $g-popover-border;
  border-radius: 4px;
  min-width: $g-popover-min-width;
  top: 0;
  .g-popover-arrow {
    position: absolute;
    height: 0;
    width: 0;
    border-width: $width;
    border-color: transparent;
    border-style: solid;
    border-radius: 4px;
    &[x-placement="top"] {
      left: 50%;
      bottom: -2 * $width;
      transform: translateX(-100%);
      border-top-color: $g-popover-arrow-color;
    }
    &[x-placement="bottom"] {
      top: -2 * $width;
      left: 50%;
      transform: translateX(-100%);
      border-bottom-color: $g-popover-arrow-color;
    }
    &[x-placement="right"] {
      left: -2 * $width;
      top: 50%;
      transform: translateY(-100%);
      border-right-color: $g-popover-arrow-color;
    }
  }

  
}
</style>

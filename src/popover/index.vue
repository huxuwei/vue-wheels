<template>
  <span>
    <div
    ref="popoverWrap"
    
    class="g-popover-wrap"
    @click.stop="triggerEvent('click')"
    @mouseenter="triggerEvent('')"
    @mouseleave="triggerEvent('')"
    @hover="triggerEvent('hover')"
    @focus="triggerEvent('focus')"
  >
    <div v-show="visible"
      :data-show='visible'
      class="g-popover" :class="popperClass" ref="popover">
      <slot></slot>
      <div class="g-popover-arrow" :x-placement="placement"></div>
    </div>
    <slot name="reference"></slot>
  </div>
  </span>
</template>

<script>
import {randomNum} from '../utils'
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
    setID() {
      return `g-popover-${randomNum()}`
    },
    dataShow(val) {
      return this.$refs || this.$refs.popover.dataset.show
      
    }
  },
  watch: {
    dataShow(val) {
     this.visible = !!val
    }
    // visible(val) {
    //   if (!val) true;
    //   this.$nextTick(() => {
        

    //   });
    // }
  },
  mounted() {
    // this.$refs.popover
    document.body.addEventListener('click',(e)=>{
      this.visible = false
      e.stopPropagation()
    })
  },
  methods: {
    show() {
      let { popover } = this.$refs;
      document.body.appendChild(popover);
    },
    calculate() {
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
      const space = 10;
      let { placement } = this;

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
      popover.style.left = styleLeft +space+ "px";
      popover.style.top = styleTop +space+ "px";
      // console.log(placement,styleLeft,styleTop);
    },
    otherClose() {
      // if(this.visible){
       
        let list = document.querySelectorAll('.g-popover')
        list.forEach(element => {
          console.log(element,element.dataset)
          element.style.display  = 'none'
          element.dataset.show = 'false'
        });
      // }
    },
    triggerEvent(event) {
     
      if (this.trigger === event) {
         this.otherClose()
        this.visible = !this.visible;
        console.log(this.visible)
        this.visible &&  this.calculate();
        
      } else if (this.trigger === "hover") {
        if (event === "mouseenter") {
          this.visible = true;
        } else if (event === "mouseleave") {
          this.visible = false;
        }
      }
      
      if (this.visible && this.once) {
        this.show();
        this.once = false;
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

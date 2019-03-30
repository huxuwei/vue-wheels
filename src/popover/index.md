##### 

1、popover放入body中

防止页面其他元素遮挡popover内容

2、计算popover内容的定位

  利用元素的定位差计算出不同方向的定位
  ```
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
  ```
3、显示隐藏popover

在document添加处理事件函数，在隐藏后删除该事件函数
```
 if(this.visible){
  let toggleEvnetFn = function () {
    this.visible = false
    document.removeEventListener('click', toggleEvnetFn)
  }.bind(this)
  this.$nextTick(()=>{
    this.calculate();
    document.addEventListener('click',toggleEvnetFn)
  })
```

4、模拟hover事件

利用mouseenter、mouseleave模拟

##### 思路



  

### API


### Tabs

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value(v-model) | 当前激活 tab 面板的 name | string | 无 |
| tabBarExtraConent | tab bar上额外的元素 | slot | 无 |

### Tabs Events

| 参数 | 说明 | 回调参数 |
| --- | --- | --- | --- |
| change | 切换面板的回调 |  	Function(value) {} |
| tab-click | tab 被选中时触发 | 被选中的标签 tab 实例) |

### Tab-Pane
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| label | 选项卡标题 | string | --- |
| name | 与选项卡 activeName 对应的标识符，表示选项卡别名 | string | name 默认为0开始 |

##### 思路
1、显示隐藏

 隐藏之前的选项卡，显示当前的

2、bar的宽度及位置

  width = 当前选中选项卡的title的宽度

  left = 当前选项卡的距离可视区的left - tabs外层元素的left
  
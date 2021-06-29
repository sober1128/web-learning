## CSS盒模型
`CSS`本质是一个盒子，盒子里面包含HTML元素，盒子由四个属性组成，从内到外分别是：`content`内容、`padding`内边距、`border`边框、`margin`外边距

### 盒模型分类
* W3C盒子模型（标准盒模型）
  `box-sizing:content-box;`
  `width = content-width;`
  `height = content-height;`

  

* IE盒子模型（怪异盒模型）
  `box-sizing:border-box`
  `width = content-width + padding-width + border-width`
  `height = content-height + padding-height + border-height`

### 外边距合并
所谓外边距合并，指的是`margin`合并,外边距合并只针对块级元素，而且是顶部或者底部的外边距。相邻兄弟元素和父子元素的外边距合并。

## BFC(块格式化上下文)
`BFC`是块盒子的布局发生，浮动互相交互的区域。具有`BFC`特性的元素可以看做是独立封闭容器，内部布局不影响外部。

### 触发BFC特性：
* body 根元素
* 浮动元素：float 除 none 以外的值
* 绝对定位元素：position (absolute、fixed)
* display 为 inline-block、table-cells、flex
* overflow 除了 visible 以外的值 (hidden、auto、scroll)

### BFC的用途
* 清除浮动
* 解决外边距合并
* 布局

## 去除浮动、防止父元素坍塌
* 创建父级BFC、父元素添加`overflow:hidden`属性，触发BFC
* 父级设置高度
* 增加伪元素`:after :before`
* 额外标签法：在最后一个浮动元素后添加一个新标签`:clear:both`
# position定位
`CSS`中`position`属性是比较常用的元素定位方案，`position`常用的取值有`static`、`relative`、`absolute`、`fixed`、`sticky`、`inherit`。

## static
`static`默认值，元素处于正常的文档流中，会忽略`top`、`bottom`、`left`、`right`、`z-index`属性的设置。  

## relative
`relative`是相对定位，元素的位置是相对其原本位置进行偏移，其不脱离文档流。因此元素原本的位置会被保留(元素原本占据空间没有变化,但relative会有偏移)，其他元素位置不受影响。

## absolute
`absolute`是绝对定位,相对于最近的父元素定位，如果父元素未定位，则相对于html。

## fixed
`fixed`是固定定位，元素的位置相对于浏览器窗口是固定位置，即使是窗口滚动元素也不会移动。

## sticky 
`sticky`是粘性定位，元素的位置是基于用户的滚动位置来定位，粘性定位的元素是依赖于用户的滚动。

## inherit
`inherit`是通过继承父元素的`position`值来进行定位。
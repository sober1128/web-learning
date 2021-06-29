# CSS隐藏元素的方法
使用`CSS`隐藏元素的主要方式有`diaplay: none;`、`opacity: 0;`、`visibility: hidden;`、`position: absolute; overflow: hidden;`、`height: 0; overflow: hidden;`。

## display 
`display: none;`真正隐藏元素，被隐藏的元素不占任何空间，其子元素也会被隐藏，用户交互操作都不会发生。该方式就像元素完全不存在，但在DOM中可以访问，可操作他。当使用该属性将元素从显示状态切换为隐藏状态时，会触发浏览器的重绘与回流。

## opacity
`opacity`是设置透明度的属性，将其设置为`0`只能从视觉上隐藏，而元素本身依然占据它自己的位置并对布局起作用，它也响应用户交互事件如点击，对于其添加过渡属性可以显示动画效果。(可利用其透明的视觉效果制作点击挟持攻击)

## visibility
当`visibility`属性值设为`hidden`时，元素将隐藏，其子元素也会被隐藏，但会占据自己的位置，并对网页布局起作用，但不会响应用户交互操作。

## position + overflow


## height
类似于`position`与`overflow`的组合，使用`height: 0;`将元素高度设置为`0`，使用`overflow: hidden`将超出部分裁剪隐藏，即可实现隐藏效果，如果需要使用这两个属性制呈现过渡动画的话，需要将`height`给予一个确定的值，不能是`auto`。


## CSS引入方式
将`CSS`作用到`HTML`主要有四种方式，分别为`HTML`元素添加内联样式、`<style>`标签嵌入样式、`<link>`标签引入外部样式、`@import`导入外部样式。

### 内联样式
```html
<div style="color: red"></div>
```
#### 特点
* 不需要额外的`HTTP`请求。
* 内联样式比外部样式具有更高的优先级，可以覆盖外部样式。
#### 不足
* 页面维护可能会非常困难
* 过多添加同样的样式会导致页面复杂

### 嵌入方式
```html
<style type="text/css">
    div {
        color: blue;
    }
</style>
```
#### 特点
* `CSS`与`HTML`一起作为一个文件，不需要额外的`HTTP`请求
* 适合于动态样式，对于不同的用户从数据库加载不同样式嵌入到页面

#### 不足
* 嵌入样式不能被浏览器缓存并重新用于其他页面

### 链接方式
```html
<link rel="stylesheet" href="Path To stylesheet.css">
```
#### 特点
* 可以通过替换`CSS`文件以改变网站的主题。
* 只需在单个`CSS`文件中进行一次更改，所有网站页面都会更新。
* 多个页面请求的网站速度有所提高，`CSS`在第一次访问时就被浏览器缓存。

#### 不足
* 每个链接的`CSS`文件都需要一个附加的`HTTP`请求

### 导入方式
```html
<style>
    @import url("Path To stylesheet.css");
</style>
```
#### 特点
* 在不更改`HTML`标签的情况下添加新的`CSS`文件

#### 不足
* 需要额外的`HTTP`请求


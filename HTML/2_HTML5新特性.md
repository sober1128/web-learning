# HTML5新特性
`HTML5`是下一代`HTML`标准，是`HTML`最新的修订版本，`2014`年`10`月由万维网联盟`W3C`完成标准制定，`HTML5`将`HTML`从用于构造一个文档的一个简单标记，到一个完整的应用程序开发平台，`HTML5`还包括新元素和用于增强存储、多媒体和硬件访问的`JavaScript APIs`。

## 新增语义化标签
`<header>`、`<footer>`、`<nav>`等

## 多媒体标签
* `<audio>`  音频内容
* `<video>`  视频内容
* `<source>` 多媒体资源路径
* `<embed>`  嵌入的内容，比如插件等
* `<track>`  引入字幕文件或其他包含文本的文件

## Canvas绘图
`HTML5`中引入`<canvas>`标签，用于图形的绘制，`<canvas>`标签只是图形容器，具体的图形绘制由`JavaScript`来完成。

## 内联SVG
`SVG`可缩放矢量图形`Scalable Vector Graphics`，用于描述二维矢量图形的一种图形格式。`SVG`严格遵从`XML`语法，并用文本格式的描述性语言来描述图像内容。

## Web Worker
`Web Worker`能够把`JavaScript`计算委托给后台线程，通过允许这些活动以防止使交互型事件变得缓慢。

## Web Storage
使用`HTML5`可以在本地存储用户的浏览数据，`localStorage`和`sessionStorage`是`HTML5`提供的对于`Web`存储的解决方案。

## WebSocket
`WebSocket`是`HTML5`开始提供的一种在单个`TCP`连接上进行全双工通讯的协议。允许服务端主动向客户端推送数据。在 `WebSocket API`中，浏览器和服务器只需要完成一次握手，两者之间就直接可以创建持久性的连接，并进行双向数据传输。
* 握手阶段采用`HTTP`协议，在普通`HTTP`报文中包含了一些附加头信息，其中附加头信息`Upgrade: WebSocket`表明这是一个申请协议升级的`HTTP`请求。
* 建立在`TCP`协议基础之上，和`HTTP`协议同属于应用层。
* 可以发送文本，也可以发送二进制数据。
* 数据格式比较轻量，性能开销小，通信高效。
* 没有同源限制，客户端可以与任意服务器通信。
* 协议头标识符是`ws`，如果加密传输则为`wss`。

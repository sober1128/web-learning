# CSS劫持攻击
## ClickJacking点击劫持
当访问某网站时，利用`CSS`将攻击者实际想让你点击的页面进行透明化隐藏，然后在页面后显示 一些东西诱导让你点击，点击后则会在用户毫不知情的情况下做了某些操作，这就是点击劫持`ClickJacking`。

### iframe覆盖

### 防御
`X-FRAME-OPTIONS`是目前最可靠的方法。  
`X-FRAME-OPTIONS`是微软提出的一个`HTTP`头，专门用来防御利用`iframe`嵌套的点击劫持攻击。
```
DENY // 拒绝任何域加载
SAMEORIGIN // 允许同源域下加载
ALLOW-FROM // 可以定义允许frame加载的页面地址
```


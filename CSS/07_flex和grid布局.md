# Flex布局  [阮一峰](https://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)
`Flex`布局也称弹性布局，可以为盒状模型提供最大的灵活性，是布局的首选方案，现已得到所有现代浏览器的支持。

## 基础知识
通过指定`display: flex`来标识一个弹性布局盒子，称为`FLEX`容器，该容器默认两根轴线，水平主轴(`main start`--`main end`和垂直的交叉轴(`cross start`--`cross end`)，默认按照主轴排列。可看做一维布局。

## 容器属性

### justify-content
`justify-content`属性定义了成员在主轴上的对齐方式，取值有
* `flex-start`默认值：左对齐。
* `flex-end`：右对齐。
* `center`： 居中对齐。
* `space-between`：两端对齐，成员之间的间隔都相等。
* `space-around`：每个成员两侧的间隔相等，成员之间的间隔比成员与边框的间隔大一倍。

### align-items
`align-items`属性定义成员在交叉轴上如何对齐，取值有
* `stretch`默认值：如果成员未设置高度或设为`auto`，将占满整个容器的高度。
* `flex-start`：交叉轴的起点对齐。
* `flex-end`：交叉轴的终点对齐。
* `center`：交叉轴的中点对齐。
* `baseline`: 成员的第一行文字的基线对齐。


# grid布局
`grid`网格布局，将容器氛围行和列，产生单元格，然后指定成员所在的单元格，可以看做二维布局。

## 基础
注意当容器设置为`Grid`布局以后，容器子元素的`float`、`display: inline-block`、`display: table-cell`、`vertical-align`和`column-*`等设置都将失效。
### 容器和项目
采用网格布局的区域，称为"容器"（container）。容器内部采用网格定位的子元素，称为"项目"（item）
### 行和列
容器里面的水平区域称为"行"（row），垂直区域称为"列"（column）
### 单元格
行和列的交叉区域，称为"单元格"（cell）。
正常情况下，n行和m列会产生n x m个单元格。比如，3行3列会产生9个单元格。
### 网格线
正常情况下，n行有n+1根水平网格线，m列有m+1根垂直网格线。

## 容器属性

### grid-template-rows grid-template-columns
`grid-template-rows`属性定义每一行的行高，设定为多少行就设置多少个值，取值可以为固定像素，也可以为百分比，`grid-template-columns`属性定义每一列的列宽，设定为多少列就设置多少个值，取值可以为固定像素，也可以为百分比。
```html
<div id="t1">
    <div>0</div>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
</div>
<!-- 
    0 1 2
    3 4 5
    6 7 8
 -->

<style type="text/css">
    #t1{
        display: grid;
        grid-template-rows: 30px 30px 30px;
        grid-template-columns: 30px 30px 30px;
    }
</style>
```

### repeat()
repeat()接受两个参数(重复的次数，所要重复的值)
```css
grid-template-columns: repeat(2, 100px 20px 80px);
```

### auto-fill关键字
如果希望每一行（或每一列）容纳尽可能多的单元格，这时可以使用`auto-fill`关键字表示自动填充。

### fr关键字
fr关键字（fraction 的缩写，意为"片段"），用来表示比例关系。
```css
.container {
  display: grid;
  grid-template-columns: 150px 1fr 2fr;
}
```
上面代码表示：第一列的宽度为150像素，第二列的宽度是第三列的一半。

### grid-row-gap 属性，grid-column-gap 属性，grid-gap 属性
  `grid-row-gap`用于设置行间距，`grid-column-gap`用于设置列间距。`grid-gap`是合并简写形式。根据最新标准，`grid`前缀已删除。


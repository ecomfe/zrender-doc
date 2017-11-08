---
layout: tutorial
title: 开始使用 ZRender
---

ZRender 是二维绘图引擎，它提供 Canvas、SVG、VML 等多种渲染方式。ZRender 也是 [ECharts](http://echarts.baidu.com/) 的渲染器。

ZRender 官网正在开发中，为了让大家尽早可以使用，我们先开放了[文档]({{ site.url }}/api.html)和这篇教程，希望对大家有帮助。



## 下载 ZRender

ZRender 项目在 GitHub 上的地址是：[https://github.com/ecomfe/zrender](https://github.com/ecomfe/zrender)。也可以使用 `npm install zrender` 下载。

在 `dist` 目录下找到 `zrender.js` 和 `zrender.min.js`，前者是开发版，后者是发布版。



## 引入 ZRender

在使用 ZRender 前，需要在 HTML 中加载对应 JavaScript 文件：

```html
<script src="./dist/zrender.js"></script>
```



## 初始化 ZRender

在使用 ZRender 前需要初始化实例，具体方式是传入一个 DOM 容器：

```js
var zr = zrender.init(document.getElementById('main'));
```

创建出的这个实例对应文档中 [zrender 实例]({{ site.url }}/api.html#zrender-instance-api)部分的方法和属性。



## 在场景中添加元素

ZRender 提供了将近 20 种图形类型，可以在文档 [zrender.Displayable]({{ site.url }}/api.html#zrenderdisplayable) 下找到。如果想创建其他图形，也可以通过 [zrender.Path.extend]({{ site.url }}/api.html#zrenderpathextendprops) 进行扩展。

以创建一个圆为例：

```js
var circle = new zrender.Circle({
    shape: {
        cx: 150,
        cy: 50,
        r: 40
    },
    style: {
        fill: 'none',
        stroke: '#F00'
    }
});
zr.add(circle);
```

创建了一个圆心在 `[150, 50]` 位置，半径为 `40` 像素的圆，并将其添加到画布中。

请参考[文档]({{ site.url }}/api.html)了解更多。

---
---

### zrender.util.getContext()

获得一个 Canvas 的绘制上下文。相当于 `document.createElement('canvas').getContext('2d')`。


#### 参数

|名称|类型|默认值|描述|
|array|`[]`||数组。|
|cb|`Function`||用以检查元素是否存在的函数，返回元素是否存在的 `boolean` 结果。|
|context|`*`||执行上下文。|

#### 返回值

Canvas 的绘制上下文，类型：`CanvasRenderingContext2D`。

#### 相关

[zrender.util.createCanvas](#zrenderutilcreatecanvas)。

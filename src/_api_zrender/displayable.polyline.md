---
---

### zrender.Polyline

**继承自 [zrender.Displayable](#zrenderdisplayable)**

多边形折线段。默认是不闭合的，如果需要闭合，请将最后一个点设为和第一个点同样的位置。

#### 构造函数

`zrender.Polyline(opts)`

|名称|类型|默认值|描述|
|---|---|---|---|
|opts|`Object`||配置项，继承得到的配置项参见 [zrender.Displayable](#zrenderdisplayable)。|
|opts.shape|`Object`||形状属性。|
|opts.shape.points|`number[][]`|`0`|每个元素是一个横纵坐标的数组。|
|opts.shape.smooth|`boolean`|`false`|是否圆滑。|
|opts.shape.smoothConstraint|`number[][]`|`0`|将计算出来的控制点约束在一个包围盒内。比如 `[[0, 0], [100, 100]]`，这个包围盒会与整个折线的包围盒做一个并集用来约束控制点。|

#### 相关

如果要创建填充的多边形，请使用 [Polygon](#zrenderpolygon)。

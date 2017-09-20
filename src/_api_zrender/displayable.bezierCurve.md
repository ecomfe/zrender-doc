---
---

### zrender.BezierCurve

**继承自 [zrender.Displayable](#zrenderdisplayable)**

贝塞尔曲线。

#### 构造函数

`zrender.BezierCurve(opts)`

|名称|类型|默认值|描述|
|---|---|---|---|
|opts|`Object`||配置项，继承得到的配置项参见 [zrender.Displayable](#zrenderdisplayable)。|
|opts.shape|`Object`||形状属性。|
|opts.shape.x1|`number`|`0`|起始点横坐标。|
|opts.shape.y1|`number`|`0`|起始点纵坐标。|
|opts.shape.x2|`number`|`0`|终止点横坐标。|
|opts.shape.y2|`number`|`0`|终止点纵坐标。|
|opts.shape.cpx1|`number`|`0`|控制点横坐标。|
|opts.shape.cpy1|`number`|`0`|控制点纵坐标。|
|opts.shape.percent|`number`|`1`|已显示的百分比，用于绘制动画。|

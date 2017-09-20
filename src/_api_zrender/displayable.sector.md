---
---

### zrender.Sector

**继承自 [zrender.Displayable](#zrenderdisplayable)**

扇形。

#### 构造函数

`zrender.Sector(opts)`

|名称|类型|默认值|描述|
|---|---|---|---|
|opts|`Object`||配置项，继承得到的配置项参见 [zrender.Displayable](#zrenderdisplayable)。|
|opts.shape|`Object`||形状属性。|
|opts.shape.cx|`number`|`0`|圆心横坐标。|
|opts.shape.cy|`number`|`0`|圆心纵坐标。|
|opts.shape.r|`number`|`0`|半径。|
|opts.shape.r0|`number`|`0`|内半径。|
|opts.shape.startAngle|`number`|`0`|起始弧度。|
|opts.shape.endAngle|`number`|`Math.PI * 2`|终止弧度。|
|opts.shape.clockwise|`boolean`|`true`|顺时针方向。|

---
---

### zrender.Trochoid

**继承自 [zrender.Displayable](#zrenderdisplayable)**

内外旋轮曲线，参见 [wiki](https://en.wikipedia.org/wiki/Trochoid)。

#### 构造函数

`zrender.Trochoid(opts)`

|名称|类型|默认值|描述|
|---|---|---|---|
|opts|`Object`||配置项，继承得到的配置项参见 [zrender.Displayable](#zrenderdisplayable)。|
|opts.shape|`Object`||形状属性。|
|opts.shape.cx|`number`|`0`|圆心横坐标。|
|opts.shape.cy|`number`|`0`|圆心纵坐标。|
|opts.shape.r|`number`|`0`|半径。|
|opts.shape.r0|`number`|`0`|内半径。|
|opts.shape.d|`number`|`0`|内外旋轮曲线参数，参见 [wiki](https://en.wikipedia.org/wiki/Trochoid)。|
|opts.shape.n|`location`|`'out'`|`out` 或 `in`，表示曲线在内部还是外部。|

---
---

### zrender.Rose

**继承自 [zrender.Displayable](#zrenderdisplayable)**

玫瑰线，参见 [wiki](https://en.wikipedia.org/wiki/Rose_(mathematics))。

#### 构造函数

`zrender.Rose(opts)`

|名称|类型|默认值|描述|
|---|---|---|---|
|opts|`Object`||配置项，继承得到的配置项参见 [zrender.Displayable](#zrenderdisplayable)。|
|opts.shape|`Object`||形状属性。|
|opts.shape.cx|`number`|`0`|圆心横坐标。|
|opts.shape.cy|`number`|`0`|圆心纵坐标。|
|opts.shape.r|`number[]`|`[]`|半径。|
|opts.shape.k|`number`|`0`|玫瑰线参数，参见 [wiki](https://en.wikipedia.org/wiki/Rose_(mathematics))。|
|opts.shape.n|`number`|`1`|花瓣数。|

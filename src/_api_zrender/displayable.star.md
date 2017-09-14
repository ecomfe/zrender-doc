---
---

### zrender.Star

**继承自 [zrender.Displayable](#zrenderdisplayable)**

星形。

#### 构造函数

`zrender.Star(opts)`

|属性|类型|默认值|描述|
|---|---|---|---|
|opts|`Object`||配置项，继承得到的配置项参见 [zrender.Displayable](#zrenderdisplayable)。|
|opts.shape|`Object`||形状属性。|
|opts.shape.cx|`number`|`0`|圆心横坐标。|
|opts.shape.cy|`number`|`0`|圆心纵坐标。|
|opts.shape.n|`number`|`3`|瓣数，如 `n` 等于 `5` 时，是我们熟悉的五角星。|
|opts.shape.r|`number`|`0`|半径。|
|opts.shape.r0|`number`|`0`|内半径。|

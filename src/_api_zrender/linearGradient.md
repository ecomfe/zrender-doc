---
---

### zrender.LinearGradient

**继承自 [zrender.Gradient](#zrendergradient)**

线性渐变。

#### 构造函数

`zrender.LinearGradient(x, y, x2, y2, colorStops, globalCoord)`

|名称|类型|默认值|描述|
|---|---|---|---|
|x|`number`|`0`|渐变起始位置横坐标。|
|y|`number`|`0`|渐变起始位置纵坐标。|
|x2|`number`|`1`|渐变终止位置横坐标。|
|y2|`number`|`1`|渐变终止位置纵坐标。|
|colorStops|`Object[]`||组成渐变色的颜色。每个颜色包括 `offset` 与 `color` 属性，前者表示渐变位置（类型：`number`），后者表示具体的颜色（类型：`string`）|
|globalCoord|`boolean`|`false`|如果为 `false`，则 `colorStops` 取值范围是 `0` 到 `1`；如果为 `true`，则 `x`、 `y`、 `x2`、 `y2`、 `colorStops` 的坐标和元素是一致的（也就是说，原先用 `1` 表示物体最右侧，这时需要用元素实际宽度表示最右侧）。|

---
---

### zrender.Gradient

**抽象类**

渐变。

> **注意：**
>
> `zrender.Gradient` 是一个抽象类，所以不要在代码中 `new zrender.Gradient(colorStops)`，这里的构造函数只是用于表明其子类构造函数参数的共同部分。

#### 构造函数

`zrender.Gradient(colorStops)`

|名称|类型|默认值|描述|
|---|---|---|---|
|colorStops|`Object[]`||组成渐变色的颜色。每个颜色包括 `offset` 与 `color` 属性，前者表示渐变位置（类型：`number`），后者表示具体的颜色（类型：`string`）|

### zrender.Gradient.addColorStop(offset, color)

增加渐变色。

#### 参数

|名称|类型|默认值|描述|
|---|---|---|---|
|`offset`|`number`||渐变位置。|
|`color`|`string`||颜色。|

> 如果想要清除渐变色，可以使用 `this.colorStops = []`。

---
---

### zrender.color

**静态类**

颜色。



### zrender.color.fastMapToColor(normalizedValue, colors, out)

快速得到渐变色 `colors` 在 `normalizedValue` 位置的颜色，得到混合后的颜色 `out`。该方法比 [zrender.color.mapToColor]() 快，因为其参数 `colors` 是数组形式，少了从 `string` 变成 `number[]` 的操作。

#### 参数

|名称|类型|默认值|描述|
|normalizedValue|`number`||位置，范围 `0` 到 `1`。|
|colors|`number[][]`||渐变色的数组，每一个元素是一个 `rgba` 的数组。|
|out|`number[]`||输出的 `rgba` 颜色。|

#### 返回值

如果渐变色不合法，则返回 `undefined`，如果合法，则返回 `out`。类型：`undefiend|number[]`。

#### 相关

[zrender.color.mapToColor](#zrendercolormaptocolornormalizedvalue-colors-fulloutput)。



### zrender.color.lift(color, level)

提亮颜色。

#### 参数

|名称|类型|默认值|描述|
|color|`string`||原始颜色。|
|level|`number`||提亮指数，应介于 `0` 与 `1` 之间，如果小于 `0`，颜色也会被提亮。|

#### 返回值

提亮后的颜色，类型：`string`，形如 `rgba(...)` 或 `rgb(...)`。



### zrender.color.mapToColor(normalizedValue, colors, fullOutput)

快速得到渐变色 `colors` 在 `normalizedValue` 位置的颜色，返回混合后的颜色。

#### 参数

|名称|类型|默认值|描述|
|normalizedValue|`number`||位置，范围 `0` 到 `1`。|
|colors|`string[]`||渐变色的数组。|
|fullOutput|`boolean`|`false`|如果为 `true`，则返回包含 `color`、 `leftIndex`、 `rightIndex`、 `value` 的 `Object`，否则返回颜色。|

#### 返回值

如果 `fullOutput` 为 `true`，则返回包含 `color`、 `leftIndex`、 `rightIndex`、 `value` 的 `Object`，否则返回颜色。类型：`Object|string`。

#### 相关

[zrender.color.fastMapToColor](#zrendercolorfastmaptocolornormalizedvalue-colors-out)。



### zrender.color.modifyAlpha(color, alpha)

修改颜色的透明度维度。

#### 参数

|名称|类型|默认值|描述|
|color|`string`||颜色字符串。|
|alpha|`number`||新的透明度。|

#### 返回值

RGBA 形式的颜色字符串。



### zrender.color.modifyHSL(color, h, s, l)

修改颜色的 HSL 维度。

#### 参数

|名称|类型|默认值|描述|
|color|`string`||颜色字符串，可以不是 `hsl(...)` 形式的。|
|h|`null|number`||如果为 `null`，则不改变。|
|s|`null|number`||如果为 `null`，则不改变。|
|l|`null|number`||如果为 `null`，则不改变。|

#### 返回值

RGBA 形式的颜色字符串。



### zrender.color.parse(colorStr, rgbaArr)

将各种形式的颜色字符串，转成 RGBA 形式的数组输出。

#### 参数

|名称|类型|默认值|描述|
|colorStr|`string`||可以是：`'rgb(100, 0, 0)'`、 `'rgba(0, 100, 0, 0.4)'`、`'red'`、 `'#F00'`、 `'#F60000'`、 `'hsla(270, 60%, 70%, 0.2)'`、 `'hsl(270, 60%, 70%)'` 之类的形式。|
|rgba|`number[]`||长度为 `4` 的数组，分别表示红色、绿色、蓝色、不透明度，前三者的取值范围是 `0` 到 `255`，不透明度的取值范围是 `0` 到 `1`。|

#### 返回值

如果 `colorStr` 不是合法的颜色，则返回 `undefined`，否则返回 `rgbaArr`。类型：`undefined|number[]`。

> 如果希望知道颜色字符串是否合法，应该使用返回值；如果希望在任何情况下都得到颜色，则应该使用参数 `rgbaArr`，如果颜色字符串不合法，会返回 `[0, 0, 0, 1]`，也就是黑色。



### zrender.color.toHex(color)

将颜色转为十六进制的长度为 `6` 的字符串，开头没有 `'#'`。

#### 参数

|名称|类型|默认值|描述|
|color|`string`||颜色字符串。|

#### 返回值

十六进制的颜色，类型：`string`。

#### 例子

`zrender.color.toHex('rgb(200, 0, 0)')` 返回 `'c80000'`。



### zrender.color.stringify(arrColor, type)

将数组形式的颜色转为字符串。

#### 参数

|名称|类型|默认值|描述|
|arrColor|`number[]`||可以是长度为 `3` 或 `4` 的数组，如 `[255, 0, 0, 0.2]`。|
|type|`string`||`arrColor` 的形式，可以为：`'rgb'`、 `'rgba'`、 `'hsv'`、 `'hsva'`、 `'hsl'`、 `'hsla'`。|

#### 返回值

颜色字符串，如：`'rgba(255, 0, 0, 0.2)'`，类型：`string`。

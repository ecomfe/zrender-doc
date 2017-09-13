---
---

### zrender.Rect

矩形。

#### 构造函数

`zrender.Rect(opts)`

|属性|类型|默认值|描述|
|---|---|---|---|
|opts|`Object`||配置项。|
|opts.shape|`Object`||形状属性。|
|opts.shape.r|`number|number[]`|`0`|用于创建圆角矩形。左上、右上、右下、左下角的半径依次为 r1、 r2、 r3、 r4。r 缩写为 1 相当于 [1, 1, 1, 1]；r 缩写为 [1] 相当于 [1, 1, 1, 1]；r 缩写为 [1, 2]    相当于 [1, 2, 1, 2]；r 缩写为 [1, 2, 3] 相当于 [1, 2, 3, 2]。|
|opts.shape.x|`number`|`0`|左上角的横坐标|
|opts.shape.y|`number`|`0`|左上角的纵坐标|
|opts.shape.width|`number`|`0`|宽度|
|opts.shape.height|`number`|`0`|高度|
|opts.style|`Object`||样式。|
|opts.style.fill|`string`|`'#000'`|填充样式。|
|opts.style.stroke|`string`|`null`|描边样式。|
|opts.style.opacity|`number`|`1`|不透明度。|
|opts.style.lineDash|`number[]`|`null`|描边虚线样式，参考 [SVG stroke-dasharray](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray)。|
|opts.style.lineDashOffset|`number`|`null`|描边虚线偏移，参考 [SVG stroke-dashoffset](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dashoffset)。|
|opts.style.shadowBlur|`number`|`0`|阴影模糊大小。|
|opts.style.shadowOffsetX|`number`|`0`|阴影横向偏移。|
|opts.style.shadowOffsetY|`number`|`0`|阴影纵向偏移。|
|opts.style.lineWidth|`number`|`0`|线宽。|
|opts.style.strokeNoScale|`boolean`|`false`|描边粗细不随缩放而改变，`false` 则会根据缩放同比例缩放描边粗细。|
|opts.style.text|`string`|`null`|在图形中显示的文字。|
|opts.style.font|`string`|`null`|文字样式，由 `fontSize`、 `fontFamily`、 `fontStyle`、 `fontWeight` 组成，建议分别设置这几项而非直接设置 `font`。|
|opts.style.fontStyle|`string`|`null`|同 [CSS font-style](https://developer.mozilla.org/en-US/docs/Web/CSS/font-style)。|
|opts.style.fontWeight|`string`|`null`|同 [CSS font-weight](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight)。|
|opts.style.fontSize|`string`|`null`|同 [CSS font-size](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size)。|
|opts.style.fontFamily|`string`|`null`|同 [CSS font-family](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family)。|



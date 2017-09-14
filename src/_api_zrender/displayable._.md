---
---

### zrender.Displayable

**抽象类**

形状。

#### 构造函数

`zrender.Displayable(opts)`

> **注意：**
>
> `zrender.Displayable` 是一个抽象类，所以不要在代码中 `new zrender.Displayable(opts)`，这里的构造函数只是用于表明其子类（如 [Rect](#zrenderrect) 等）构造函数参数的共同部分。

|属性|类型|默认值|描述|
|---|---|---|---|
|opts.culling|`boolean`|`false`|是否进行裁剪。|
|opts.cursor|`string`|`'pointer'`|鼠标移到元素上时的鼠标样式。|
|opts.draggable|`boolean`|`false`|图形是否可拖曳。|
|opts.invisible|`boolean`|`false`|图形是否不可见，为 `true` 时不绘制图形，但是仍能触发鼠标事件。|
|opts.progressive|`number`|`-1`|是否渐进式渲染。当图形元素过多时才使用，用大于 0 的数字表示渲染顺序。|
|opts.rectHover|`boolean`|`false`|是否使用包围盒检验鼠标是否移动到物体。`false` 则检测元素实际的内容。|
|opts.silent|`boolean`|`false`|是否响应鼠标事件。|
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
|opts.style.textFill|`string`|`null`|文字填充样式。|
|opts.style.textStroke|`string`|`null`|文字描边样式。|
|opts.style.textWidth|`number`|`null`|文字宽度。|
|opts.style.textHeight|`number`|`null`|文字高度，仅用于设置背景色时需要设置。|
|opts.style.textLineWidth|`number`|`0`|文字描边宽度。|
|opts.style.textLineHeight|`number`|`0`|文字行高。|
|opts.style.textPosition|`string|number[]`|`'inside'`|文字位置，可以为 `'inside'`、 `'left'`、 `'right'`、 `'top'`、 `'bottom'`，或一个二维数组 `[x, y]` 表示相对形状的位置。|
|opts.style.textRect|`Object`|`null`|文字包围盒，包括 `x`、 `y`、 `width`、 `height` 属性，如果没有设置，将使用形状的包围盒。|
|opts.style.textOffset|`number[]`|`null`|文字位置偏移，包括 `x`、 `y`。|
|opts.style.textAlign|`string`|`null`|文字水平对齐方式，可取值：`'left'`、 `'center'`、 `'right'`，默认根据 `textPosition` 计算。|
|opts.style.textVerticalAlign|`string`|`null`|文字垂直对齐方式，可取值：`'top'`、 `'middle'`、 `'bottom'`，默认根据 `textPosition` 计算。|
|opts.style.textDistance|`number`|`5`|文字与其对齐的边缘的距离，如 `textPosition` 为 `top` 时，`textDistance` 表示与形状上方的距离。|
|opts.style.textShadowColor|`string`|`'transparent'`|文字阴影颜色。|
|opts.style.textShadowBlur|`number`|`0`|文字阴影模糊大小。|
|opts.style.textShadowOffsetX|`number`|`0`|文字阴影水平偏移。|
|opts.style.textShadowOffsetY|`number`|`0`|文字阴影垂直偏移。|
|opts.style.textBoxShadowColor|`string`|`'transparent'`|文字包围盒阴影颜色。|
|opts.style.textBoxShadowBlur|`number`|`0`|文字包围盒阴影模糊大小。|
|opts.style.textBoxShadowOffsetX|`number`|`0`|文字包围盒阴影水平偏移。|
|opts.style.textBoxShadowOffsetY|`number`|`0`|文字包围盒阴影垂直偏移。|
|opts.style.transformText|`boolean`|`false`|文字是否跟随变换效果，仅对 `Path` 或 `Image` 元素有效|
|opts.style.textRotation|`number`|`0`|文字旋转角度，仅对 `Path` 或 `Image` 元素有效，并且 `transformText` 应设置为 `false`。|
|opts.style.textOrigin|`string|number[]`|`null`|文字变换中心，可以是 `'center'` 或一个二维数组 `[x, y]` 表示相对形状的位置，默认值是 `textPosition`。|
|opts.style.textBackgroundColor|`string`|`null`|文字包围盒颜色。|
|opts.style.textBorderColor|`string`|`null`|文字包围盒描边颜色。|
|opts.style.textBorderWidth|`number`|`0`|文字包围盒描边宽度。|
|opts.style.textBorderRadius|`number`|`0`|文字圆角大小。|
|opts.style.textPadding|`number|number[]`|`null`|文字内边距，可以是 `2` 或 `[2, 4]` 或 `[2, 3, 4, 5]` 的形式，同 [CSS Padding](https://developer.mozilla.org/en-US/docs/Web/CSS/padding)，单位是像素。|
|opts.style.rich|`Object`|`null`|富文本样式，参考 [ECharts rich 配置项](http://echarts.baidu.com/tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE)。|
|opts.style.truncate|`Object`|`null`|当文字过长显示不下时，显示省略号表示。|
|opts.style.truncate.outerWidth|`number`|`null`|包含了 `textPadding` 的宽度，超出这个范围就裁剪。|
|opts.style.truncate.outerHeight|`number`|`null`|包含了 `textPadding` 的高度，超出这个范围就裁剪。|
|opts.style.truncate.ellipsis|`string`|`'...'`|默认用省略号表示超出部分，也可以对其进行自定义。|
|opts.style.truncate.placeholder|`string`|`null`|如果空间过小，导致省略号也显示不下，但是又不想空着，可能得有个什么标记表示这里是有字符的，就用个 “点”，就是在这个 placeholder 里设置。|
|opts.style.blend|`string`|`null`|混合模式，同 [Canvas globalCompositeOperation](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation)。|
|opts.zlevel|`number`|`0`|决定绘画在哪层 Canvas 中。Canvas 分层是一种常见的优化手段。我们可以把一些图形变化频繁（例如有动画）的组件设置成一个单独的 `zlevel`。需要注意的是过多的 Canvas 会引起内存开销的增大，在手机端上需要谨慎使用以防崩溃。`zlevel` 大的 Canvas 会放在 `zlevel` 小的 Canvas 的上面。|
|opts.z|`number`|`0`|控制图形的前后顺序。`z` 值小的图形会被 `z` 值大的图形覆盖。`z` 相比 `zlevel` 优先级更低，而且不会创建新的 Canvas。|
|opts.z2|`number`|`0`|与 `z` 类似，优先级比 `z` 更低。|


### zrender.Displayable.hide()

隐藏元素，可以使用 [zrender.Displayable.show](#zrenderdisplayableshow) 恢复显示。

#### 相关

[zrender.Displayable.show](#zrenderdisplayableshow)。



### zrender.Displayable.removeClipPath()

取消设置裁剪元素。

#### 相关

[zrender.Displayable.setClipPath](#zrenderdisplayablesetclippathclippath)。



### zrender.Displayable.setClipPath(clipPath)

设置裁剪元素，超出 `clipPath` 区域的部分将被裁剪掉。

一个元素只能被一个元素裁剪，如果要实现多个元素的裁剪，需要使用 [zrender.CompoundPath](#zrendercompoundpath)。

#### 参数

|属性|类型|默认值|描述|
|---|---|---|---|
| clipPath | `Displayable` | | 设置当前元素的裁剪元素。 |

#### 相关

[zrender.Displayable.removeClipPath](#zrenderdisplayableremoveclippath)。



### zrender.Displayable.show()

显示元素。元素在默认情况下是显示状态，使用 [zrender.Displayable.hide](#zrenderdisplayablehide) 隐藏后，可以使用此方法显示。

#### 相关

[zrender.Displayable.hide](#zrenderdisplayablehide)。

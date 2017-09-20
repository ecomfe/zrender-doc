---
---

### configLayer(zLevel, config)

改变某个层的配置。

#### 参数

|名称|类型|默认值|描述|
|---|---|---|---|
| zlevel | `string` | | 层级，`zlevel` 更大的层将覆盖更小的层。 |
| config | `Object` | | 配置项。 |
| config.clearColor | `string` | `'#000'` | 用于清除画布的颜色，默认为黑色。 |
| config.motionBlur | `boolean` | `false` | 是否对该层采用动态模糊。 |
| config.lastFrameAlpha | `number` | `0.7` | 用于动态模糊的混合因子，表示上一帧画面保留的比例。应介于 `0` 与 `1` 之间，`0` 表示完全使用当前帧，`1` 表示完全使用上一帧的画面。 |

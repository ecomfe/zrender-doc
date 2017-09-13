---
---

### resize(opts)

更新画布大小。当容器大小时，应调用此方法。

#### 参数

|属性|类型|默认值|描述|
|---|---|---|---|
|`opts`|`Object`||宽高配置项|
|`opts.width`|`number|string`|`'auto'`|宽度，设为 `'auto'` 与设为 `null` 或 `undefined` 的效果相同，相当于自动获取容器宽度以改变画布宽度。|
|`opts.height`|`number|string`|`'auto'`|高度，设为 `'auto'` 与设为 `null` 或 `undefined` 的效果相同，相当于自动获取容器高度以改变画布高度。|

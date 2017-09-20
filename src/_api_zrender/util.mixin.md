---
---

### zrender.util.mixin(target, source, overlay)

将一个对象中的元素赋给另一个元素，如果 `target` 或 `source` 是 `Function` 类型，则只赋值其 `prototype`。

#### 参数

|名称|类型|默认值|描述|
|target|`*`||需要修改的对象。|
|source|`*`||参考对象。|
|overlay|`boolean`||如果 `overlay` 为 `true`，则将 `source` 中非空的属性赋给 `targe`；如果 `overlay` 为 `false`，则将 `source` 中 `target` 不包含的属性赋给 `targe`。|

#### 相关

[zrender.util.defaults](#zrenderutildefaultstarget-source-overlay)。

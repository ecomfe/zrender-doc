---
---

### zrender.util.defaults(target, source, overlay)

将一个对象中的元素赋给另一个元素。

#### 参数

|名称|类型|默认值|描述|
|target|`*`||需要修改的对象。|
|source|`*`||参考对象。|
|overlay|`boolean`||如果 `overlay` 为 `true`，则将 `source` 中非空的属性赋给 `targe`；如果 `overlay` 为 `false`，则将 `source` 中 `target` 不包含的属性赋给 `targe`。|

#### 返回值

拷贝结果，即 `target`。

#### 相关

[zrender.util.mixin](#zrenderutilmixintarget-source-overlay)。

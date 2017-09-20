---
---

### zrender.util.normalizeCssArray(val)

类似 CSS 设置 `padding` 的时候可以设置为单个数值，或者长度为 `2` 或 `4` 的数组，改方法帮助解析 `val` 得到长度为 `4` 的数组。注意，当输入单个数值时，应该输入 `number` 类型，而不是长度为 `1` 的数组。

#### 参数

|名称|类型|默认值|描述|
|val|`number|number[]`||原始数据。|

#### 返回值

长度为 `4` 的数组，类型：`number`。

#### 例子

```js
zrender.util.normalizeCssArray(10);             // [10, 10, 10, 10]
zrender.util.normalizeCssArray(10, 20);         // [10, 20, 10, 20]
zrender.util.normalizeCssArray(10, 20, 30);     // [10, 20, 30, 20]
zrender.util.normalizeCssArray(10, 20, 30, 40); // [10, 20, 30, 40]
```

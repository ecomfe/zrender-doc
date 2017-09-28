---
---

### zrender.vector

**静态类**

长度为 `2` 的向量。

> 如果浏览器不支持 `Float32Array` 则类型为 `number[]`，否则为 `Float32Array`。



### zrender.vector.add(out, v1, v2)

将向量 `v1` 与 `v2` 相加，赋值给向量 `out`。不会创建新向量，而是将 `out` 的元素进行改变。

#### 参数

|名称|类型|默认值|描述|
|---|---|---|---|
|out|`Float32Array|number[]`||输出向量。|
|v1|`Float32Array|number[]`||第一个向量。|
|v2|`Float32Array|number[]`||第二个向量。|

#### 返回值

输出向量，类型：`Float32Array|number[]`。

#### 相关

[zrender.vector.scaleAndAdd](#zrendervectorscaleandaddout-v1-v2-scale)。



### zrender.vector.applyTransform(out, v, m)

矩阵 `m` 左乘向量 `v`，赋值给向量 `out`。不会创建新向量，而是将 `out` 的元素进行改变。

#### 参数

|名称|类型|默认值|描述|
|---|---|---|---|
|out|`Float32Array|number[]`||输出向量。|
|v|`Float32Array|number[]`||向量。|
|m|`Float32Array|number[]`||矩阵，参见 [zrender.matrix](#zrendermatrix)。|

#### 返回值

输出向量，类型：`Float32Array|number[]`。



### zrender.vector.copy(out, v)

将向量 `v` 复制给向量 `out`。不会创建新向量，而是将 `out` 的元素进行改变。

#### 参数

|名称|类型|默认值|描述|
|---|---|---|---|
|out|`Float32Array|number[]`||待修改的向量。|
|v|`Float32Array|number[]`||参考向量。|

#### 返回值

输出向量，类型：`Float32Array|number[]`。



### zrender.vector.clone(v)

将向量 `v` 复制，产生一个新副本。

#### 返回值

新创建的向量，类型：`Float32Array|number[]`。



### zrender.vector.distance(v1, v2)

得到向量 `v1` 与 `v2` 间距离。

#### 参数

|名称|类型|默认值|描述|
|---|---|---|---|
|v1|`Float32Array|number[]`||第一个向量。|
|v2|`Float32Array|number[]`||第二个向量。|

#### 返回值

距离，类型：`number`。



### zrender.vector.distanceSquare(v1, v2)

得到向量 `v1` 与 `v2` 间距离的平方。

#### 参数

|名称|类型|默认值|描述|
|---|---|---|---|
|v1|`Float32Array|number[]`||第一个向量。|
|v2|`Float32Array|number[]`||第二个向量。|

#### 返回值

距离的平方，类型：`number`。



### zrender.vector.div(out, v1, v2)

将向量 `v1` 与 `v2` 的每个元素分别相除，赋值给向量 `out`。不会创建新向量，而是将 `out` 的元素进行改变。

#### 参数

|名称|类型|默认值|描述|
|---|---|---|---|
|out|`Float32Array|number[]`||输出向量。|
|v1|`Float32Array|number[]`||第一个向量。|
|v2|`Float32Array|number[]`||第二个向量。|

#### 返回值

输出向量，类型：`Float32Array|number[]`。



### zrender.vector.dot(v1, v2)

将向量 `v1` 与 `v2` 点乘，返回点积。

#### 参数

|名称|类型|默认值|描述|
|---|---|---|---|
|v1|`Float32Array|number[]`||第一个向量。|
|v2|`Float32Array|number[]`||第二个向量。|

#### 返回值

点积，类型：`number`。



### zrender.vector.len(v)

求向量 `v` 的模长，也就是其两个元素的几何平均数。

#### 参数

|名称|类型|默认值|描述|
|---|---|---|---|
|v|`Float32Array|number[]`||待求模长的向量，不会在该方法中被改变。|

#### 返回值

模长，类型：`number`。



### zrender.vector.lenSquare(v)

求向量 `v` 的模长的平方。

#### 参数

|名称|类型|默认值|描述|
|---|---|---|---|
|v|`Float32Array|number[]`||待求模长平方的向量，不会在该方法中被改变。|

#### 返回值

模长平方，类型：`number`。



### zrender.vector.lerp(out, v1, v2, t)

将向量 `v1` 与 `v2` 在 `t` 位置进行插值，赋值给向量 `out`。不会创建新向量，而是将 `out` 的元素进行改变。

#### 参数

|名称|类型|默认值|描述|
|---|---|---|---|
|out|`Float32Array|number[]`||输出向量。|
|v1|`Float32Array|number[]`||第一个向量。|
|v2|`Float32Array|number[]`||第二个向量。|
|t|`number`||位置，`0` 到 `1`，`1` 表示 `v2` 处。

#### 返回值

插值后的向量 `out`，类型：`Float32Array|number[]`。



### zrender.vector.max(out, v1, v2)

求两个向量每个元素的最大值，赋值给向量 `out`。不会创建新向量，而是将 `out` 的元素进行改变。

#### 参数

|名称|类型|默认值|描述|
|---|---|---|---|
|out|`Float32Array|number[]`||输出向量。|
|v1|`Float32Array|number[]`||第一个向量。|
|v2|`Float32Array|number[]`||第二个向量。|

#### 返回值

输出向量，类型：`Float32Array|number[]`。

#### 相关

[zrender.vector.min](#zrendervectorminout-v1-v2)。



### zrender.vector.min(out, v1, v2)

求两个向量每个元素的最小值，赋值给向量 `out`。不会创建新向量，而是将 `out` 的元素进行改变。

#### 参数

|名称|类型|默认值|描述|
|---|---|---|---|
|out|`Float32Array|number[]`||输出向量。|
|v1|`Float32Array|number[]`||第一个向量。|
|v2|`Float32Array|number[]`||第二个向量。|

#### 返回值

输出向量，类型：`Float32Array|number[]`。



### zrender.vector.mul(out, v1, v2)

将向量 `v1` 与 `v2` 相乘，赋值给向量 `out`。不会创建新向量，而是将 `out` 的元素进行改变。

#### 参数

|名称|类型|默认值|描述|
|---|---|---|---|
|out|`Float32Array|number[]`||输出向量。|
|v1|`Float32Array|number[]`||第一个向量。|
|v2|`Float32Array|number[]`||第二个向量。|

#### 返回值

输出向量，类型：`Float32Array|number[]`。



### zrender.vector.negate(out, v)

将向量 `v` 的负向量输出到 `out`，也就是每个元素都变成相反数。

#### 参数

|名称|类型|默认值|描述|
|---|---|---|---|
|out|`Float32Array|number[]`||输出向量。|
|v|`Float32Array|number[]`||输入向量。|

#### 返回值

负向量 `out`，类型：`Float32Array|number[]`。



### zrender.vector.normalize(out, v)

将向量 `v` 归一化输出到 `out`，也就是将其模长变为 `1`。

#### 参数

|名称|类型|默认值|描述|
|---|---|---|---|
|out|`Float32Array|number[]`||输出向量。|
|v|`Float32Array|number[]`||输入向量。|

#### 返回值

归一化后的 `out`，类型：`Float32Array|number[]`。



### zrender.vector.scale(out, v, s)

将向量 `v` 缩放 `s` 倍，得到的结果赋值给 `out`。

#### 参数

|名称|类型|默认值|描述|
|---|---|---|---|
|out|`Float32Array|number[]`||输出向量。|
|v|`Float32Array|number[]`||待修改的向量，不会在改方法中被改变。|
|s|`number`||缩放量。|

#### 返回值

输出向量，类型：`Float32Array|number[]`。

#### 相关

[zrender.vector.scaleAndAdd](#zrendervectorscaleandaddout-v1-v2-scale)。



### zrender.vector.scaleAndAdd(out, v1, v2, scale)

将向量 `v2` 缩放 `scale` 倍后，与 `v1` 相加，赋值给向量 `out`。不会创建新向量，而是将 `out` 的元素进行改变。

#### 参数

|名称|类型|默认值|描述|
|---|---|---|---|
|out|`Float32Array|number[]`||输出向量。|
|v1|`Float32Array|number[]`||第一个向量。|
|v2|`Float32Array|number[]`||第二个向量。|
|scale|`number`||缩放比例，`1` 表示不缩放。|

#### 返回值

输出向量，类型：`Float32Array|number[]`。

#### 相关

[zrender.vector.add](#zrendervectoraddout-v1-v2)、[zrender.vector.scale](#zrendervectorscaleout-v-s)。



### zrender.vector.set(out, a, b)

将值 `(a, b)` 赋给向量 `out`。不会创建新向量，而是将 `out` 的元素进行改变。

#### 参数

|名称|类型|默认值|描述|
|---|---|---|---|
|out|`Float32Array|number[]`||待修改的向量。|
|a|`number`||向量的第一个维度。|
|b|`number`||向量的第二个维度。|

#### 返回值

输出向量，类型：`Float32Array|number[]`。



### zrender.vector.sub(out, v1, v2)

将向量 `v1` 与 `v2` 相减，赋值给向量 `out`。不会创建新向量，而是将 `out` 的元素进行改变。

#### 参数

|名称|类型|默认值|描述|
|---|---|---|---|
|out|`Float32Array|number[]`||输出向量。|
|v1|`Float32Array|number[]`||第一个向量。|
|v2|`Float32Array|number[]`||第二个向量。|

#### 返回值

输出向量，类型：`Float32Array|number[]`。

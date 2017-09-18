---
---

### zrender.matrix

**静态类**

`3x2` 的矩阵，用以表示二维物体的位移、旋转、缩放。

> 用长度为 `6` 的数组表示矩阵。如果浏览器不支持 `Float32Array` 则类型为 `number[]`，否则为 `Float32Array`。



### zrender.matrix.copy(out, m)

将矩阵 `m` 复制给矩阵 `out`。不会创建新矩阵，而是将 `out` 的元素进行改变。

#### 参数

|属性|类型|默认值|描述|
|---|---|---|---|
|out|`Float32Array|number[]`||待修改的矩阵，由 [`zrender.matrix.create`](#zrendermatrixcreate) 创建。|
|m|`Float32Array|number[]`||参考矩阵。|

#### 返回值

修改后的 `out`，类型：`Float32Array|number[]`。



### zrender.matrix.create()

创建一个单位矩阵。

#### 返回值

新创建的单位矩阵，类型：`Float32Array|number[]`，元素个数为 `6`。



### zrender.matrix.identity(out)

将 `out` 设为单位矩阵，也就是 `[1, 0, 0, 1, 0, 0]`。不会创建新矩阵，而是将 `out` 的元素进行改变。

#### 参数

|属性|类型|默认值|描述|
|---|---|---|---|
|out|`Float32Array|number[]`||待修改的矩阵，由 [`zrender.matrix.create`](#zrendermatrixcreate) 创建。|

#### 返回值

修改后的 `out`，类型：`Float32Array|number[]`。



### zrender.matrix.invert(out, m)

求到矩阵 `m` 的逆矩阵，得到的结果赋值给 `out`。

#### 参数

|属性|类型|默认值|描述|
|---|---|---|---|
|out|`Float32Array|number[]`||输出矩阵，由 [`zrender.matrix.create`](#zrendermatrixcreate) 创建。|
|m|`Float32Array|number[]`||待求逆的矩阵，不会在改方法中被改变。|

#### 返回值

修改后的 `out`，类型：`Float32Array|number[]`。



### zrender.matrix.mul(out, m1, m2)

将矩阵 `m1` 与 `m2` 相乘，得到的结果赋值给 `out`。

#### 参数

|属性|类型|默认值|描述|
|---|---|---|---|
|out|`Float32Array|number[]`||输出矩阵，由 [`zrender.matrix.create`](#zrendermatrixcreate) 创建。|
|m1|`Float32Array|number[]`||待相乘的矩阵。|
|m2|`Float32Array|number[]`||待相乘的矩阵。|

#### 返回值

修改后的 `out`，类型：`Float32Array|number[]`。



### zrender.matrix.rotate(out, m, rad)

将矩阵 `m` 旋转 `rad` 弧度，得到的结果赋值给 `out`。

#### 参数

|属性|类型|默认值|描述|
|---|---|---|---|
|out|`Float32Array|number[]`||输出矩阵，由 [`zrender.matrix.create`](#zrendermatrixcreate) 创建。|
|m|`Float32Array|number[]`||待修改的矩阵，不会在改方法中被改变。|
|rad|`number`||旋转弧度。|

#### 返回值

修改后的 `out`，类型：`Float32Array|number[]`。



### zrender.matrix.scale(out, m, v)

将矩阵 `m` 沿向量 `v` 缩放，得到的结果赋值给 `out`。

#### 参数

|属性|类型|默认值|描述|
|---|---|---|---|
|out|`Float32Array|number[]`||输出矩阵，由 [`zrender.matrix.create`](#zrendermatrixcreate) 创建。|
|m|`Float32Array|number[]`||待修改的矩阵，不会在改方法中被改变。|
|v|`Float32Array|number[]`||长度为 `2` 的缩放向量，表示横向和纵向的缩放量。|

#### 返回值

修改后的 `out`，类型：`Float32Array|number[]`。



### zrender.matrix.translate(out, m, v)

将矩阵 `m` 沿向量 `v` 平移，得到的结果赋值给 `out`。

#### 参数

|属性|类型|默认值|描述|
|---|---|---|---|
|out|`Float32Array|number[]`||输出矩阵，由 [`zrender.matrix.create`](#zrendermatrixcreate) 创建。|
|m|`Float32Array|number[]`||待修改的矩阵，不会在改方法中被改变。|
|v|`Float32Array|number[]`||长度为 `2` 的平移向量，表示横向和纵向的偏移量。|

#### 返回值

修改后的 `out`，类型：`Float32Array|number[]`。

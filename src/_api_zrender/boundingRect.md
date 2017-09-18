---
---

### zrender.BoundingRect

包围盒。

#### 构造函数

`zrender.BoundingRect(x, y, width, height)`

|属性|类型|默认值|描述|
|---|---|---|---|
|x|`number`||左上角横坐标。|
|y|`number`||左上角纵坐标。|
|width|`number`||包围盒宽度。|
|height|`number`||包围盒高度。|



### zrender.BoundingRect.clone()

得到包围盒的副本。

#### 返回值

新的包围盒，类型：[`zrender.BoundingRect`](#zrenderboundingrect)。



### zrender.BoundingRect.contain(x, y)

判断坐标 `(x, y)` 是否在图形上。

#### 参数

|属性|类型|默认值|描述|
|---|---|---|---|
|x|`number`||横坐标。|
|y|`number`||纵坐标。|

#### 返回值

返回是否在图形上，类型：`boolean`。



### zrender.BoundingRect.copy(other)

从另一个包围盒复制属性。

#### 参数

|属性|类型|默认值|描述|
|---|---|---|---|
|other|[`zrender.BoundingRect`](#zrenderboundingrect)||另一个包围盒。|



### zrender.BoundingRect.intersect(other)

与另一个包围盒求交集，得到的也是一个包围盒。

#### 参数

|属性|类型|默认值|描述|
|---|---|---|---|
|other|[`zrender.BoundingRect`](#zrenderboundingrect)||另一个包围盒。|

#### 返回值

新的包围盒，类型：[`zrender.BoundingRect`](#zrenderboundingrect)。



### zrender.BoundingRect.union(other)

与另一个包围盒求并集，得到的也是一个包围盒。

#### 参数

|属性|类型|默认值|描述|
|---|---|---|---|
|other|[`zrender.BoundingRect`](#zrenderboundingrect)||另一个包围盒。|

#### 返回值

新的包围盒，类型：[`zrender.BoundingRect`](#zrenderboundingrect)。

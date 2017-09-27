---
---

### zrender.Transformable

可进行变换的对象，变换包括：位移、旋转、缩放。

#### 构造函数

`zrender.Transformable(opts)`

#### 参数

|名称|类型|默认值|描述|
|---|---|---|---|
|opts|`Object`||配置项。|
|opts.position|`number[]`|`[0, 0]`|位移。|
|opts.rotation|`number`|`0`|旋转的弧度。|
|opts.scale|`number[]`|`[1, 1]`|缩放。|
|opts.origin|`number[]`|`null`|旋转和缩放的原点。|



### zrender.Transformable.decomposeTransform()

分解 `transform` 矩阵到 `position`、 `rotation`、 `scale`。通常用于修改 `transform` 后同步`position`、 `rotation`、 `scale` 属性。



### zrender.Transformable.getGlobalScale()

获得全局的缩放。也就是说会祖先元素的缩放也会计算在内。

#### 返回值

缩放，类型： `number[]`。



### zrender.Transformable.origin

旋转和缩放的原点，类型： `number[]`。



### zrender.Transformable.position

位移，类型： `number[]`。



### zrender.Transformable.rotation

旋转的弧度，类型： `number`。



### zrender.Transformable.scale

缩放，类型： `number[]`。



### zrender.Transformable.transform

矩阵形式表示位移、旋转、缩放，类型： [`zrender.matrix`](#zrendermatrix)。



### zrender.Transformable.transformCoordToGlobal(x, y)

变换局部坐标位置到全局坐标空间。

#### 参数

|名称|类型|默认值|描述|
|---|---|---|---|
|x|`number`||横坐标。|
|y|`number`||纵坐标。|



### zrender.Transformable.transformCoordToLocal(x, y)

变换坐标位置到元素的局部坐标空间。

#### 参数

|名称|类型|默认值|描述|
|---|---|---|---|
|x|`number`||横坐标。|
|y|`number`||纵坐标。|

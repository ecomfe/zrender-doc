---
---

### zrender.Image

**继承自 [zrender.Displayable](#zrenderdisplayable)**

图像。

#### 构造函数

`zrender.Image(opts)`

|名称|类型|默认值|描述|
|---|---|---|---|
|opts|`Object`||配置项，继承得到的配置项参见 [zrender.Displayable](#zrenderdisplayable)。|
|opts.position|`number[]`|`[0, 0]`|图像内容相对于这个图像元素的坐标。|
|opts.scale|`number[]`|`[1, 1]`|缩放大小。|
|opts.style|`Object`||样式|
|opts.style.image|`string`||图片的内容，可以是图片的 URL，也可以是 [dataURI](https://tools.ietf.org/html/rfc2397)。|
|opts.style.x|`number`||图片左上角相对于父节点的横坐标。|
|opts.style.y|`number`||图片左上角相对于父节点的纵坐标。|
|opts.style.width|`number`||图片宽度。|
|opts.style.height|`number`||图片高度。|

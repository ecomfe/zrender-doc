---
---

### zrender.Path

**继承自 [zrender.Displayable](#zrenderdisplayable)**

路径。

#### 构造函数

`zrender.Path(opts)`

|名称|类型|默认值|描述|
|---|---|---|---|
|opts|`Object`||配置项，继承得到的配置项参见 [zrender.Displayable](#zrenderdisplayable)。|



### zrender.Path.extend(props)

扩展一个 `Path` 元素，用以生成比如星形，圆等。

#### 参数

|名称|类型|默认值|描述|
|---|---|---|---|
|opts|`Object`||配置项，继承得到的配置项参见 [zrender.Displayable](#zrenderdisplayable)。|
|opts.type|`string`||类型，自定义的名称。|
|opts.init|`Function`||初始化时调用的函数。|
|opts.buildPath|`Function`||如何构建 `Path` 的函数，在绘制时候会调用。|

#### 例子

[这个例子](https://github.com/ecomfe/zrender/blob/master/test/pin.html)展示的是如何通过扩展 `Path` 得到新图形。

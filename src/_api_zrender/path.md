---
---

{:#zrender-path}
### zrender.path

**静态类**

路径相关的辅助函数。



### zrender.path.createFromString(str, opts)

从字符串创建路径，字符串形如 [SVG Path](http://www.w3.org/TR/SVG/paths.html#PathData)。

#### 参数

|名称|类型|默认值|描述|
|---|---|---|---|
|str|`string`||构建路径的字符串。|
|opts|`Object`||配置项，参见 [zrender.Displayable](#zrenderdisplayable) 的配置项。|



### zrender.path.extendFromString(str, opts)

从字符串扩展路径，字符串形如 [SVG Path](http://www.w3.org/TR/SVG/paths.html#PathData)。

#### 参数

|名称|类型|默认值|描述|
|---|---|---|---|
|str|`string`||扩展路径的字符串。|
|opts|`Object`||配置项，参见 [zrender.Displayable](#zrenderdisplayable) 的配置项。|

#### 相关

[zrender.Path.extend](#zrenderpathextendprops)。



### zrender.path.mergePath(pathEls, opts)

合并多条路径。

#### 参数

|名称|类型|默认值|描述|
|---|---|---|---|
|pathEls|[`Path[]`](#zrenderpath)||路径数组。|
|opts|`Object`||配置项，参见 [zrender.Displayable](#zrenderdisplayable) 的配置项。|

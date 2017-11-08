---
---

### zrender.Element

**继承自 [zrender.Animatable](#zrenderanimatable)、 [zrender.Transformable](#zrendertransformable)、 [zrender.Eventful](#zrendereventful)**

**抽象类**

元素，可以被添加到场景中。

> **注意：**
>
> `zrender.Element` 是一个抽象类，所以不要在代码中 `new zrender.Element(opts)`，这里的构造函数只是用于表明其子类构造函数参数的共同部分。



### zrender.Element.afterUpdate

类型：`Function`，元素更新后的回调函数。

#### 相关

[zrender.Element.beforeUpdate](#zrenderelementbeforeupdate)。



### zrender.Element.attr(key, value)

设置元素属性。需要注意的是，应该始终调用该方法来修改属性，而不是直接 `element.xxx = ...` 这样的形式，因为后者不会重绘物体。

#### 参数

|名称|类型|默认值|描述|
|---|---|---|---|
| key | `string|Object` | | 设置的属性。可以是 `string` 类型的属性名称，或者 `Object` 类型的属性及其值。 |
| value | `*` || 属性值。|

#### 例子

```js
element.attr('position', [100, 200]);
element.attr({
    style: {
        fill: 'red'
    },
    shape: {
        x: 100
    }
});
```



### zrender.Element.beforeUpdate

类型：`Function`，元素更新前的回调函数。

#### 相关

[zrender.Element.afterUpdate](#zrenderelementafterupdate)。



### zrender.Element.hide()

隐藏元素，可以使用 [zrender.Element.show](#zrenderelementshow) 恢复显示。

#### 相关

[zrender.Element.show](#zrenderelementshow)。



### zrender.Element.removeClipPath()

取消设置裁剪元素。

#### 相关

[zrender.Element.setClipPath](#zrenderelementsetclippathclippath)。



### zrender.Element.setClipPath(clipPath)

设置裁剪元素，超出 `clipPath` 区域的部分将被裁剪掉。

一个元素只能被一个元素裁剪，如果要实现多个元素的裁剪，需要使用 [zrender.CompoundPath](#zrendercompoundpath)。

#### 参数

|名称|类型|默认值|描述|
|---|---|---|---|
| clipPath | `Element` | | 设置当前元素的裁剪元素。 |

#### 相关

[zrender.Element.removeClipPath](#zrenderelementremoveclippath)。



### zrender.Element.show()

显示元素。元素在默认情况下是显示状态，使用 [zrender.Element.hide](#zrenderelementhide) 隐藏后，可以使用此方法显示。

#### 相关

[zrender.Element.hide](#zrenderelementhide)。



### zrender.Element.traverse(cb, context)

深度优先遍历所有子孙节点。

#### 参数

|名称|类型|默认值|描述|
|---|---|---|---|
|cb|`Function`||回调函数。接受参数：`context, child`，其中 `child` 是每个元素的子元素。|
|context|`Object`||执行回调函数的上下文。|

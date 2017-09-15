---
---

### zrender.Group

**继承自 [zrender.Element](#zrenderelement)**

组。Group 是一个容器，可以插入子节点，Group 的变换也会被应用到子节点上。

#### 构造函数

`zrender.Group()`

#### 例子

```js
var g = new zrender.Group();
g.position[0] = 100;
g.position[1] = 100;
g.add(new zrender.Circle({
    style: {
        x: 100,
        y: 100,
        r: 20,
    }
}));
zr.add(g);
```



### zrender.Group.add(child)

添加子节点到最后。

|属性|类型|默认值|描述|
|---|---|---|---|
|child|[`Element`](#zrenderelement)||待添加的元素。|

返回 `this`。

#### 相关

[zrender.Group.addBefore](#zrendergroupaddbeforechild-nextsibling)、[zrender.Group.remove](#zrendergroupremovechild)。



### zrender.Group.addBefore(child, nextSibling)

添加子节点到 `nextSibling` 之前。

|属性|类型|默认值|描述|
|---|---|---|---|
|child|[`Element`](#zrenderelement)||待添加的元素。|
|nextSibling|[`Element`](#zrenderelement)||已经在 Group 中的元素。|

返回 `this`。

#### 相关

[zrender.Group.add](#zrendergroupaddchild)、[zrender.Group.remove](#zrendergroupremovechild)。



### zrender.Group.childAt(idx)

返回特定序号的子元素，类型：[`Element`](#zrenderelement)。

#### 相关

[zrender.Group.childOfName](#zrendergroupchildofname)、 [zrender.Group.children](#zrendergroupchildren)。



### zrender.Group.childCount()

返回子元素个数，类型：`number`。



### zrender.Group.childOfName(name)

返回特定名字的子元素，类型：[`Element`](#zrenderelement)。

#### 相关

[zrender.Group.childAt](#zrendergroupchildatidx)、 [zrender.Group.children](#zrendergroupchildren)。



### zrender.Group.children()

返回所有子元素，类型：[`Element[]`](#zrenderelement)。

#### 相关

[zrender.Group.childAt](#zrendergroupchildatidx)、 [zrender.Group.childOfName](#zrendergroupchildofname)。



### zrender.Group.dirty()

将组设为需要更新。



### zrender.Group.eachChild(cb, context)

遍历所有子节点。

|属性|类型|默认值|描述|
|---|---|---|---|
|cb|`Function`||回调函数。|
|context|`Object`||执行回调函数的上下文。|

#### 相关

[zrender.Group.traverse](#zrendergrouptraversecb-context)。



### zrender.Group.getBoundingRect(includeChildren)

得到 `includeChildren` 或组内所有元素的包围盒。

|属性|类型|默认值|描述|
|---|---|---|---|
|includeChildren|[`Element[]`](#zrenderelement)||组内元素的子集。如果 `includeChildren` 未设置，则获取所有元素的包围盒，否则获得 `includeChildren` 的包围盒。|



### zrender.Group.remove(child)

移除子节点。

|属性|类型|默认值|描述|
|---|---|---|---|
|child|[`Element`](#zrenderelement)||待移除的元素。|

#### 相关

[zrender.Group.add](#zrendergroupaddchild)、 [zrender.Group.removeAll](#zrendergroupremoveall)。



### zrender.Group.removeAll()

移除所有子节点。

#### 相关

[zrender.Group.add](#zrendergroupaddchild)、 [zrender.Group.remove](#zrendergroupremove)。



### zrender.Group.silent

类型：`boolean`，默认值：`false`，所有子孙元素是否响应鼠标事件。



### zrender.Group.traverse(cb, context)

深度优先遍历所有子孙节点。

|属性|类型|默认值|描述|
|---|---|---|---|
|cb|`Function`||回调函数。|
|context|`Object`||执行回调函数的上下文。|

#### 相关

[zrender.Group.eachChild](#zrendergroupeachchildcb-context)。

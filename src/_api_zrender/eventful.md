---
---

### zrender.Eventful

支持事件的元素。

#### 构造函数

`zrender.Eventful()`



### zrender.Eventful.isSilent(event)

是否绑定了事件。

#### 参数

|名称|类型|默认值|描述|
|---|---|---|---|
|event|`string`||事件名。|

#### 返回值

是否绑定了事件，类型：`boolean`。



### zrender.Eventful.off(event, handler)

解绑事件。

#### 参数

|名称|类型|默认值|描述|
|---|---|---|---|
|event|`string`||事件名。|
|handler|`Function`||响应函数。|

#### 返回值

`this`。

#### 相关

[zrender.Eventful.on](#zrendereventfulonevent-handler-context)。



### zrender.Eventful.on(event, handler, context)

绑定事件。

#### 参数

|名称|类型|默认值|描述|
|---|---|---|---|
|event|`string`||事件名。|
|handler|`Function`||响应函数。|
|context|`Object`||执行上下文。|

#### 返回值

`this`。

#### 相关

[zrender.Eventful.off](#zrendereventfuloffevent-handler)。



### zrender.Eventful.one(event, handler, context)

单次触发绑定，触发后销毁。

#### 参数

|名称|类型|默认值|描述|
|---|---|---|---|
|event|`string`||事件名。|
|handler|`Function`||响应函数。|
|context|`Object`||执行上下文。|

#### 返回值

`this`。



### zrender.Eventful.trigger(event)

触发事件。

#### 参数

|名称|类型|默认值|描述|
|---|---|---|---|
|event|`string`||事件名。|

#### 返回值

`this`。

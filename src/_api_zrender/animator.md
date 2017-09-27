---
---

### zrender.Animator

动画对象。

#### 构造函数

`zrender.Animator()`



### zrender.Animator.delay(time)

设置动画延迟开始的时间。

#### 参数

|名称|类型|默认值|描述|
|---|---|---|---|
|time|`number`||延迟时长，单位毫秒。|

#### 返回值

`this`。



### zrender.Animator.done(callback)

设置动画结束的回调函数。

#### 参数

|名称|类型|默认值|描述|
|---|---|---|---|
|callback|`Function`||动画结束的回调函数。|

#### 返回值

`this`。



### zrender.Animator.during(callback)

为关键帧添加回调函数，在关键帧运行后执行。

#### 参数

|名称|类型|默认值|描述|
|---|---|---|---|
|callback|`Function`||关键帧回调函数。|

#### 返回值

`this`。



### zrender.Animator.isPaused()

获得动画是否处于暂停状态。

#### 返回值

是否暂停，类型：`boolean`。

#### 相关

[`zrender.Animator.pause`](#zrenderanimatorpause)、 [`zrender.Animator.resume`](#zrenderanimatorresume)。



### zrender.Animator.pause()

暂停动画。

#### 相关

[`zrender.Animator.resume`](#zrenderanimatorresume)、 [`zrender.Animator.isPaused`](#zrenderanimatorispaused)。



### zrender.Animator.resume()

恢复动画。

#### 相关

[`zrender.Animator.isPaused`](#zrenderanimatorispaused)、 [`zrender.Animator.pause`](#zrenderanimatorpause)。



### zrender.Animator.start(easing)

开始执行动画。

#### 参数

|名称|类型|默认值|描述|
|---|---|---|---|
|easing|`string`|`'linear'`|缓动函数名称，支持的名称参见[缓动函数](http://echarts.baidu.com/gallery/editor.html?c=line-easing)。|

#### 返回值

`this`。

#### 相关

[`zrender.Animator.pause`](#zrenderanimatorpause)、 [`zrender.Animator.stop`](#zrenderanimatorstopforwardtolast)。



### zrender.Animator.stop(forwardToLast)

停止动画。

#### 参数

|名称|类型|默认值|描述|
|---|---|---|---|
|forwardToLast|`boolean`|`false`|是否将动画跳到最后一帧。|

#### 相关

[`zrender.Animator.start`](#zrenderanimatorstarteasing)。



### zrender.Animator.when(time, props)

定义关键帧，即动画对象在某个时刻的属性。

#### 参数

|名称|类型|默认值|描述|
|---|---|---|---|
|time|`number`||关键帧时刻，单位毫秒。|
|props|`Object`||关键帧的属性，应为 `Animatable` 对象的属性。|

#### 返回值

`this`。

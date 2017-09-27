---
---

### zrender.Animatable

支持动画的对象。

#### 构造函数

`zrender.Animatable()`



### zrender.Animatable.animate(path, loop)

创建一个动画对象。动画不会立即开始，如需立即开始，需调用 [`zrender.Animator.start`]()。

#### 参数

|名称|类型|默认值|描述|
|---|---|---|---|
|path|`string`||对该对象的哪个元素执行动画，如 `xxx.animate('a.b', true)` 表示对 `xxx.a.b` （可能是一个 `Object` 类型）执行动画。|
|loop|`boolean`|`false`|是否循环动画。|

#### 返回值

动画对象，类型：[Animator](#zrenderanimator)。

#### 例子

```js
el.animate('style', false)
    .when(1000, {x: 10})
    .done(function () {
         // Animation done
    })
    .start()
```



### zrender.Animatable.animateTo(target, time, delay, easing, callback, forceAnimate)

为属性设置动画。

部分参数可缺省，支持以下形式的调用：

- animateTo(target, time, delay, easing, callback, forceAnimate)
- animateTo(target, time, delay, easing, callback)
- animateTo(target, time, easing, callback)
- animateTo(target, time, delay, callback)
- animateTo(target, time, callback)
- animateTo(target, callback)
- animateTo(target)

#### 参数

|名称|类型|默认值|描述|
|---|---|---|---|
|target|`Object`||设置动画的对象，应为 `this` 的属性。|
|time|`number`|`500`|动画时长，单位毫秒。|
|delay|`number`|`0`|动画延迟执行的时长，单位毫秒。|
|easing|`string`|`'linear'`|缓动函数名称，支持的名称参见[缓动函数](http://echarts.baidu.com/gallery/editor.html?c=line-easing)。|
|callback|`Function`||动画执行完成后的回调函数。|
|forceAnimate|`boolean`|`false`|对于相同的属性，是否强制执行（也就是不直接结束动画）。|

#### 例子

```js
// Animate position
el.animateTo({
    position: [10, 10]
}, function () {
    // done
});

// Animate shape, style and position in 100ms, delayed 100ms,
// with cubicOut easing
el.animateTo({
    shape: {
        width: 500
    },
    style: {
        fill: 'red'
    }
    position: [10, 10]
}, 100, 100, 'cubicOut', function () {
    // done
});
```



### zrender.Animatable.stopAnimation(forwardToLast)

停止动画。

#### 参数

|名称|类型|默认值|描述|
|---|---|---|---|
|forwardToLast|`boolean`|`false`|是否将动画跳到最后一帧。|

#### 返回值

`this`。

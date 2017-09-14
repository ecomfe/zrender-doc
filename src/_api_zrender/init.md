---
---

### zrender.init(dom, opts)

得到一个 ZRender 的实例。

#### 参数

|属性|类型|默认值|描述|
|---|---|---|---|
| dom                  | HTMLElement    |          | ZRender 容器，在调用该方法时，应该已有宽度和高度。 |
| opts                 | Object         |          | 配置项 |
| opts.renderer        | string         | `'canvas'` | 渲染方式，支持：`'canavs'`、`'svg'`、`'vml'` |
| opts.devicePixelRatio| number         | `2`        | 画布大小与容器大小之比，仅当 `renderer` 为 `'canvas'` 时有效 |
| opts.width           | number\|string | `'auto'`   | 画布宽度，设为 `'auto'` 则根据 `devicePixelRatio` 与容器宽度自动计算。 |
| opts.height          | number\|string | `'auto'`   | 画布高度，设为 `'auto'` 则根据 `devicePixelRatio` 与容器高度自动计算。 |

#### 返回值

类型：`zrender`，ZRender 实例。

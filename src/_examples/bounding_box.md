---
title: 'Bounding Box'
name: 'bounding_box'
layout: 'example_content'
---

<div class="example-container"></div>

<script>
window.onload = function() {
    var container = document.getElementsByClassName('example-container')[0];
    var zr = zrender.init(container);

    var w = zr.getWidth();
    var h = zr.getHeight();

    var isMouseDown = false;
    zr.on('mousedown', function () {
        isMouseDown = true;
    });
    zr.on('mouseup', function () {
        isMouseDown = false;
    });

    var elementStyle = {
        stroke: '#ccc',
        fill: 'white'
    };

    var group = new zrender.Group();
    for (var i = 0; i < 10; ++i) {
        var r = 50 * Math.random() + 20;
        var circle = new zrender.Circle({
            shape: {
                cx: 0,
                cy: 0,
                r: r
            },
            position: [
                (w * 0.6 - r * 2) * Math.random() + r + w * 0.2,
                (h * 0.6 - r * 2) * Math.random() + r + h * 0.2
            ],
            style: elementStyle,
            draggable: true
        })
        .on('mousemove', function () {
            if (isMouseDown) {
                var rect = group.getBoundingRect();
                boundingRect.setShape({
                    x: rect.x,
                    y: rect.y,
                    width: rect.width,
                    height: rect.height
                });
            }
        });
        group.add(circle);
    }
    zr.add(group);

    var rect = group.getBoundingRect();
    var boundingRect = new zrender.Rect({
        shape: {
            cx: 0,
            cy: 0,
            x: rect.x,
            y: rect.y,
            width: rect.width,
            height: rect.height
        },
        style: {
            fill: 'none',
            stroke: '#14f1ff'
        }
    });
    zr.add(boundingRect);
}
</script>

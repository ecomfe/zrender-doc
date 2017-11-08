---
title: 'ClipPath'
name: 'clip_path'
layout: 'example_content'
---

<div class="example-container"></div>

<script>
window.onload = function() {
    var container = document.getElementsByClassName('example-container')[0];
    var zr = zrender.init(container);

    var w = zr.getWidth();
    var h = zr.getHeight();

    var circle = new zrender.Circle({
        shape: {
            cx: w / 2,
            cy: h / 2,
            r: 50
        },
        style: {
            fill: '#FF6EBE'
        },
        draggable: true
    });

    var heart = new zrender.Heart({
        shape: {
            cx: w / 2 + 20,
            cy: h / 2 - 40,
            width: 60,
            height: 80
        },
        draggable: true
    });

    circle.setClipPath(heart);
    zr.add(circle);

    var borderA = new zrender.Circle({
        shape: {
            cx: w / 2,
            cy: h / 2,
            r: 50
        },
        style: {
            fill: 'transparent',
            stroke: '#5ACFFF'
        }
    });
    zr.add(borderA);

    var borderB = new zrender.Heart({
        shape: {
            cx: w / 2 + 20,
            cy: h / 2 - 40,
            width: 60,
            height: 80
        },
        style: {
            fill: 'transparent',
            stroke: '#5ACFFF'
        }
    });

    zr.add(borderB);
}
</script>

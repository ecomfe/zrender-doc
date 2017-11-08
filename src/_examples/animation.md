---
title: 'Animation'
name: 'animation'
layout: 'example_content'
---

<div class="example-container"></div>

<script>
window.onload = function() {
    var container = document.getElementsByClassName('example-container')[0];
    var zr = zrender.init(container);

    var w = zr.getWidth();
    var h = zr.getHeight();

    var r = 30;
    var circle = new zrender.Circle({
        shape: {
            cx: r,
            cy: h / 2,
            r: r
        },
        style: {
            fill: 'transparent',
            stroke: '#FF6EBE'
        },
        silent: true
    });

    circle.animate('shape', true)
        .when(5000, {
            cx: w - r
        })
        .when(10000, {
            cx: r
        })
        .start();

    zr.add(circle);
};
</script>

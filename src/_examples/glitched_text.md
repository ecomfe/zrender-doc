---
title: 'Glitched Text'
name: 'glitched_text'
layout: 'example_content'
---

<div class="example-container" style="background: #333"></div>

<script>
window.onload = function() {
    var container = document.getElementsByClassName('example-container')[0];
    var zr = zrender.init(container);

    var w = zr.getWidth();
    var h = zr.getHeight();

    var t1 = new zrender.Text({
        style: {
            text: 'zrender',
            textAlign: 'center',
            textVerticalAlign: 'middle',
            fontSize: 200,
            fontFamily: 'Lato',
            fontWeight: 'bolder',
            textFill: '#0ff',
            blend: 'lighten'
        },
        position: [w / 2 + 5, h / 2]
    });
    zr.add(t1);

    var t2 = new zrender.Text({
        style: {
            text: 'zrender',
            textAlign: 'center',
            textVerticalAlign: 'middle',
            fontSize: 200,
            fontFamily: 'Lato',
            fontWeight: 'bolder',
            textFill: '#f0f',
            blend: 'lighten'
        },
        position: [w / 2, h / 2]
    });
    zr.add(t2);

    var lines = [];
    for (var i = 0; i < 16; ++i) {
        var line = new zrender.Rect({
            shape: {
                x: w * (Math.random() - 0.3),
                y: h * Math.random(),
                width: w * (Math.random() + 0.3),
                height: Math.random() * 8
            },
            style: {
                fill: ['#ff0', '#f0f', '#0ff', '#00f'][Math.floor(Math.random() * 4)],
                blend: 'lighten',
                opacity: 0
            }
        });
        zr.add(line);
        lines.push(line);
    }

    setInterval(function () {
        if (Math.random() > 0.2) {
            t2.attr('position', [w / 2 + Math.random() * 50, h / 2]);

            for (var i = 0; i < lines.length; ++i) {
                lines[i].attr('shape', {
                    x: w * Math.random(),
                    y: h * Math.random(),
                    width: w * Math.random(),
                    height: Math.random() * 8
                });
                lines[i].attr('style', {
                    opacity: 1
                });
            }

            setTimeout(function () {
                t2.attr('position', [w / 2, h / 2]);


                for (var i = 0; i < lines.length; ++i) {
                    lines[i].attr('style', {
                        opacity: 0
                    });
                }
            }, 100);
        }
    }, 500);
};
</script>

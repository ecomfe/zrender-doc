---
title: 'Incremental Rendering'
name: 'incremental_rendering'
layout: 'example_content'
---

<div class="example-container"></div>

<script>
window.onload = function() {
    var bgImg = new Image();
    bgImg.src = '../img/examples/star_night.jpg';

    var bgCanvas = document.createElement('canvas');
    bgCanvas.width = 320;
    bgCanvas.height = 240;
    var bgCtx = bgCanvas.getContext('2d');

    bgImg.onload = function () {
        bgCtx.drawImage(bgImg, 0, 0);
    };

    var getColor = function (x, y, alpha) {
        var pixel = bgCtx
            .getImageData(x * bgCanvas.width, y * bgCanvas.height, 1, 1);
        var data = pixel.data;
        return 'rgb(' + data[0] + ',' + data[1] + ',' + data[2] + ')';
    }


    var container = document.getElementsByClassName('example-container')[0];
    var zr = zrender.init(container);

    var incrementalDisplayable = new zrender.IncrementalDisplayable();
    zr.add(incrementalDisplayable);

    var w = zr.getWidth();
    var h = zr.getHeight();

    var frames = 0;
    var maxR = Math.min(w, h) / 10;
    var minR = 5;
    var period = 5 * 60; // 5 seconds to converge

    zr.animation.on('frame', function ()  {
        if (frames > 1000) {
            return;
        }

        var sampleCnt = Math.min(frames / 20, 100);
        for (var i = 0; i < sampleCnt; ++i) {
            var x = Math.random();
            var y = Math.random();

            var r = Math.max(0, (minR - maxR) / period * frames + maxR
                * (Math.random() + 1.5) / 2);

            var circleShape = new zrender.Circle({
                shape: {
                    r: r + Math.random() * 5
                },
                style: {
                    fill: getColor(x, y),
                    opacity: 0.8,
                    shadowBlur: 20,
                    shadowColor: 'rgba(50, 50, 50, 0.1)'
                },
                position: [x * w, y * h]
            });
            incrementalDisplayable.addDisplayable(circleShape, true);

        }
        ++frames;
    });
}
</script>

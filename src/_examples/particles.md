---
title: 'Particles'
layout: 'example_content'
---

<div class="example-container"></div>

<script src="{{ site.url }}/lib/js/stats.min.js"></script>

<script>
window.onload = function() {
    var container = document.getElementsByClassName('example-container')[0];
    var zr = zrender.init(container);

    var w = zr.getWidth();
    var h = zr.getHeight();

    var stats = new Stats();
    document.getElementsByClassName('example-container')[0]
        .appendChild(stats.dom);
    stats.dom.style.position = 'absolute';
    stats.dom.style.left = '10px';
    stats.dom.style.top = '10px';

    zr.animation.on('frame', function () {
        stats.begin();
        stats.end();
    });

    var spray = function(x, y) {
        var cnt = 200;
        var centerTolerance = 0;
        var radius = 10;
        var particles = [];
        var duration = 3000;
        var color = Math.random() * 260;
        var maxVx = 1000 + Math.random() * 1500;
        var maxVy = 1000 + Math.random() * 1500;

        for (var i = 0; i < cnt; ++i) {
            (function () {
                var x0 = x + centerTolerance * (Math.random() - 1);
                var y0 = y + centerTolerance * (Math.random() - 1);
                var opacity = Math.random() * 0.5 + 0.5;

                var particle = new zrender.Circle({
                    shape: {
                        cx: 0,
                        cy: 0,
                        r: radius * (0.5 + 0.5 * Math.random())
                    },
                    style: {
                        fill: 'hsl(' + Math.floor(color + Math.random() * 100)
                            + ', 80%, '
                            + Math.floor(Math.random() * 40 + 40) + '%)',
                        opacity: opacity
                    },
                    position: [x0, y0]
                });
                zr.add(particle);
                particles.push(particle);

                particle._t = 0;
                particle._opacity = opacity;

                var animator = particle.animate('');
                var vx = (Math.random() - 0.5) * maxVx;
                var vy = (Math.random() - 1.2) * maxVy;
                var ay = 8000;
                var t0 = 0;

                animator
                    .when(duration, {
                        _t: 1
                    })
                    .during(function (p, _t) {
                        var dt = _t - t0;
                        var x1 = p.position[0] + vx * dt;
                        var y1 = p.position[1] + vy * dt;

                        p.position = [x1, y1];
                        p.setStyle({
                            opacity: p._opacity * (1 - _t)
                        });

                        vy = vy + ay * dt;
                        t0 = _t;
                    })
                    .done(function () {
                        zr.remove(particle);
                    })
                    .start();
            })();
        }
    };

    spray(w / 2, h / 2);
    setInterval(function () {
        spray(w * Math.random(), h * Math.random());
    }, 1000);
};
</script>

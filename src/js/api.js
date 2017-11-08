$('table').addClass('table');

$('.api-content h3').each(function () {
    var $this = $(this);
    $this.append(
        '<a href="#' + $this.attr('id') + '" class="api-anchor">#</a>'
    );
});

$('.sidebar-inner a').click(function () {
    $('.sidebar-inner a').removeClass('active');
    $(this).addClass('active');
});

$('.api-content').scroll(function () {
    if ($('#zrender-api').offset().top >= 80) {
        // Is top
        $('#nav').removeClass('shadowed');
    }
    else {
        // Is not top
        $('#nav').addClass('shadowed');
    }
});

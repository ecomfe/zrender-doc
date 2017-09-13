$('table').addClass('table table-striped');

$('.api-content h3').each(function () {
    var $this = $(this);
    $this.append(
        '<a href="#' + $this.attr('id') + '" class="api-anchor">#</a>'
    );
});

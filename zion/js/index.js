$(window).resize(function() {
    var wid = $(window).width();
    if (wid > 1024) {
        $('#mobile_nav').stop().css({ 'display': 'flex' });
        $('.hamburger').stop().addClass('is-active');

    } else {
        $('#mobile_nav').stop().css("display", "none");
        $('.hamburger').stop().removeClass('is-active');

    }
});
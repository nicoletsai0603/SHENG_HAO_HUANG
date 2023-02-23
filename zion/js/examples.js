var wid = $(window).width();
$(window).load(function() {
    $("#bacc").animate({ opacity: "1", top: "0" }, "fast").slideUp(500,
        function() {
            $('.toplogo').addClass('animated fadeInLeft');
            $('#menu').addClass('animated fadeIn');
            $('#menu.animated li:nth-child(1),#menu.animated li:nth-child(2) ,#menu.animated li:nth-child(3) ,#menu.animated li:nth-child(4) ').addClass('animated bounceInRight');


        });
})
$('#section0,#section1,#section2,#section3,#section4,#section5').stop().css({ 'transition': 'transform 700ms ease', 'background-attachment': 'fixed' });





$(".mo_logo").click(function() {
    $('html,body').animate({
        scrollTop: 0
    })
})


function menushow() {

    if (wid < 1024) {
        $('#menu').removeClass('animated');
        $('#mobile_nav').stop().css({ 'display': 'none' });

        $('#menu li a').click(function() {

            $('#mobile_nav ').stop().css("display", "none !important");
            $('#mobile_nav').stop(true, true).slideUp();
            $('.hamburger').stop().removeClass('is-active');
        });



    } else {

        $('#mobile_nav').stop().css({ 'display': 'flex' });
        $('#menu li a').click(function() {
            $('.menu').stop().css("display", "block");
            $('.hamburger').stop().removeClass('is-active');
        });
    }
};
$('.hamburger').click(function() {
    $('#menu').removeClass('fadeIn');
    $(this).toggleClass('is-active');
    if ($(this).hasClass('is-active')) {
        $('#mobile_nav').slideDown('slideDown');
        $('#menu.animated li:nth-child(1),#menu.animated li:nth-child(2) ,#menu.animated li:nth-child(3) ,#menu.animated li:nth-child(4) ').addClass('animated bounceInRight');
    } else {

        $('#mobile_nav').slideUp();
        $(window).resize(function() { //閬𣇉�㛖�蝮格𦆮resize
            var wid = $(window).width();
            if (wid > 1024) {
                $('#mobile_nav').stop().css({ 'display': 'flex' });
            }
        });
    }
});

$(function() { //�訜銝讠�頛匧��
    menushow();
});

$(window).resize(function() { //閬𣇉�㛖�蝮格𦆮resize
    menushow();
});


function initialization() {
    var myFullpage = new fullpage('#myContainer', {
        sectionsColor: ['#000', '#000', '#000', '#010f19', '#f2f1f6', '#145194'],

        anchors: ['1Page', '2Page', '3Page', '4Page', '5Page', '6Page'],

        resize: true,
        scrollOverflow: true,
        animateAnchor: false,
        scrollOverflow: true,
        autoScrolling: true,
        scrollBar: true,
        responsive: 1024,
        fitSection: false,
        menu: '#menu',
        loopHorizontal: true,
        navigation: true,
        continuousVertical: true,
        afterRender: function() {
            wow = new WOW({
                animateClass: 'animated',
            });
            wow.init();
            /*---------------------WOW.JS在fullpage之后执行------------------------*/
        },

    });
}

//fullPage.js initialization
initialization();


document.querySelector('#moveSectionUp').addEventListener('click', function(e) {
    e.preventDefault();
    fullpage_api.moveSectionUp();
});

document.querySelector('#moveSectionDown').addEventListener('click', function(e) {
    e.preventDefault();
    fullpage_api.moveSectionDown();
});

document.querySelector('#moveTo').addEventListener('click', function(e) {
    e.preventDefault();
    fullpage_api.moveTo(2, 3);
});

document.querySelector('#silentMoveTo').addEventListener('click', function(e) {
    e.preventDefault();
    fullpage_api.silentMoveTo(2);
});

document.querySelector('#silentMoveToSlide').addEventListener('click', function(e) {
    e.preventDefault();
    fullpage_api.silentMoveTo(2, 3);
});

document.querySelector('#moveSlideRight').addEventListener('click', function(e) {
    e.preventDefault();
    fullpage_api.moveSlideRight();
});

document.querySelector('#moveSlideLeft').addEventListener('click', function(e) {
    e.preventDefault();
    fullpage_api.moveSlideLeft();
});

document.querySelector('#setAutoScrollingFalse').addEventListener('click', function(e) {
    e.preventDefault();
    fullpage_api.setAutoScrolling(false);
});

document.querySelector('#setAutoScrollingTrue').addEventListener('click', function(e) {
    e.preventDefault();
    fullpage_api.setAutoScrolling(true);
});

document.querySelector('#setAllowScrollingFalse').addEventListener('click', function(e) {
    e.preventDefault();
    fullpage_api.setAllowScrolling(false);
});

document.querySelector('#setAllowScrollingTrue').addEventListener('click', function(e) {
    e.preventDefault();
    fullpage_api.setAllowScrolling(true);
});

document.querySelector('#setKeyboardScrollingFalse').addEventListener('click', function(e) {
    e.preventDefault();
    fullpage_api.setKeyboardScrolling(false);
});

document.querySelector('#setKeyboardScrollingTrue').addEventListener('click', function(e) {
    e.preventDefault();
    fullpage_api.setKeyboardScrolling(true);
});

document.querySelector('#setScrollingSpeed1500').addEventListener('click', function(e) {
    e.preventDefault();
    fullpage_api.setScrollingSpeed(2500);
});

document.querySelector('#setScrollingSpeed700').addEventListener('click', function(e) {
    e.preventDefault();
    fullpage_api.setScrollingSpeed(700);
});

document.querySelector('#destroy').addEventListener('click', function(e) {
    e.preventDefault();
    fullpage_api.destroy('all');
});

document.querySelector('#undestroy').addEventListener('click', function(e) {
    e.preventDefault();

    //fullPage.js initialization
    initialization();
});

document.querySelector('#reBuild').addEventListener('click', function(e) {
    e.preventDefault();
    fullpage_api.reBuild();
});

document.querySelector('#setLockAnchorsTrue').addEventListener('click', function(e) {
    e.preventDefault;
    fullpage_api.setLockAnchors(true);
});

document.querySelector('#setLockAnchorsFalse').addEventListener('click', function(e) {
    e.preventDefault;
    fullpage_api.setLockAnchors(false);
});
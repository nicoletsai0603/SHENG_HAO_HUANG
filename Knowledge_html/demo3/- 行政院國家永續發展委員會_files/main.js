$(document).ready(function() {

    $("#mobile_menu_labIcon").click(function() {
        $(".nav-bar").toggleClass("on");
        $(".portfolio-filter.isotope-filter.pull-center").toggleClass("on");
        $("#greybg").toggle();
        $('.hamburger').toggleClass('is-active');
    })
    $("#greybg").click(function() {

        $("#greybg").toggle();
        $(".portfolio-filter.isotope-filter.pull-center").toggleClass("on");
        $('.hamburger').toggleClass('is-active');
    })
    var offset = 100,
        offset_opacity = 1200,
        scroll_top_duration = 700,
        $back_to_top = $('.cd-top');
    $(window).scroll(function() {
        ($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible'): $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if ($(this).scrollTop() > offset_opacity) {
            $back_to_top.addClass('cd-fade-out');
        }
    });
    $back_to_top.on('click',
        function(event) {
            event.preventDefault();
            $('body,html').animate({
                    scrollTop: 0,
                },
                scroll_top_duration);
        });
    //tab 切换
    $(".J-nav-tab").each(function() {
        var tthis = $(this)
        $(this).find("a").click(function() {
            var $this = $(this);
            var $obj = $this.attr("href");
            tthis.find("a").removeClass("on")
            $this.addClass("on");
            $($obj).show().siblings().hide()
            return false;
        })
        $(this).find("a").focus(function() {
            var $this = $(this);
            var $obj = $this.attr("href");
            tthis.find("a").removeClass("on")
            $this.addClass("on");
            $($obj).show().siblings().hide()
            return false;
        })
    })

    $(window).scroll(function() {
        var winWidth = $(window).width(),
            topWindow = $(window).scrollTop();
        if (topWindow > 0 && winWidth > 941) {
            $('header').addClass("small animated fadeInDown");
        } else {
            $('header').removeClass("small animated fadeInDown ");
        }
    });
    $(window).resize(function() {
        var winWidth = $(window).width();
        if (winWidth < 941) {


            $(".portfolio-filter.isotope-filter.pull-center").removeClass("on");

            // $(".submenu li:nth-child(2) a span").click(function() {
            //     $(".hasChild").toggleClass("on animated slideInDown");

            // })
        } else {


            $("#greybg").css("display", "none");
            $(".submenu li .hasChild").removeClass("on animated slideInDown");

        }


    });

    var winWidth = $(window).width();
    if (winWidth < 941) {


        $(".portfolio-filter.isotope-filter.pull-center").removeClass("on");


    } else {

        $("#greybg").css("display", "none");

    }

});




var _window = $(window),
    ww = _window.width(),
    wh = _window.height(),
    _body = $('body'),
    _header = $('.header'),
    _menu = _header.find('.menu'),
    hh = _header.outerHeight(true),

    wwNormal = 1000,
    wwMedium = 800,
    wwSmall = 600,
    wwxs = 420;



$(document).ready(function() {

    tabSet();




});








function tabSet() { //��蝐�

    $('.tabs').each(function() {

        var _tab = $(this),
            _tabItem = _tab.find('.tabItem'),
            _tabItemA = _tabItem.children('a'),
            _tabContent = _tab.find('.tabContent'),
            tabwidth = _tab.width(),
            tabItemHeight = _tabItem.outerHeight(),
            tabContentHeight = _tab.find('.active').next().innerHeight();
        tabItemLength = _tabItem.length,
            tabItemWidth = tabwidth / tabItemLength;

        _tab.find('.active').next('.tabContent').show();



        _tabItemA.focus(tabs);
        _tabItemA.click(tabs);

        function tabs(e) {
            var _tabItemNow = $(this).parent();

            _tabItem.removeClass('active');
            _tabItemNow.addClass('active');

            if (ww <= wwSmall) {
                if (!$(this).parents('.tabs').hasClass('albumType4')) { // .albumType4.tab �𡖂憭𤥁�閧�
                    _tabItem.not('.active').next().slideUp();
                    _tabItemNow.next().slideDown();

                }
            } else {
                _tabItem.not('.active').next().hide();
                _tabItemNow.next().show();
                tabContentHeight = _tabItemNow.next().innerHeight();
                _tab.height(tabContentHeight + tabItemHeight);
            }
            e.preventDefault();
        }
    });
}
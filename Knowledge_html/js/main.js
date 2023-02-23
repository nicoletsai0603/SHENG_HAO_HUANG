function Smenu() {
    $("#greybg,mobile_menu_labIcon").removeClass("is-active");
    $("header").removeClass("on");
    var winWidth = $(window).width();
    if (winWidth < 941) {

        $("#mobile_menu_labIcon").click(function() {
            $(this).toggleClass("is-active");
            if ($(this).hasClass("is-active")) {
                $("#greybg").addClass("is-active");

                $(".portfolio-filter.isotope-filter.pull-center,.nav-bar,header").addClass("on");

                $('.hamburger').addClass('is-active');
            } else {
                $("#greybg").removeClass("is-active");
                $(".portfolio-filter.isotope-filter.pull-center,.nav-bar,header").removeClass("on");

                $('.hamburger').removeClass('is-active');
            }
        })
        $(".portfolio-filter.isotope-filter.pull-center").removeClass("on");

        $(".submenu").children("li").click(function() {
            $(".submenu li .hasChild").removeClass("on animated slideInDown");
            $(this).toggleClass("is-active");
            if ($(this).hasClass("is-active")) {


                $(".submenu>li").removeClass("on animated slideInDown");
                $(this).find("div.hasChild").addClass("on animated slideInDown");



            } else {
                $(".submenu li .hasChild").removeClass("on animated slideInDown");

            }
        })



        $("#greybg").click(function() {

            if ($(this).hasClass("is-active")) {
                $(this).removeClass("is-active");
                $(".nav-bar").removeClass("on");
                $("header").removeClass("on");
                $(".portfolio-filter.isotope-filter.pull-center").removeClass("on");

                $('.hamburger').removeClass('is-active');

            } else {
                $(this).addClass("is-active");
                $(".nav-bar").addClass("on");
                $("header").addClass("on");
                $(".portfolio-filter.isotope-filter.pull-center").addClass("on");

                $('.hamburger').addClass('is-active');

            }

        })
    } else {
        $("#greybg,.hamburger").removeClass("is-active");
        $("header").removeClass("on");


    }
};


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

function tabSet() { //嚙踝蕭��琜蕭

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
                if (!$(this).parents('.tabs').hasClass('albumType4')) { // .albumType4.tab 嚙踢���唐丰�嚙賡鑘嚙�
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

$(window).resize(function() {
    Smenu();
    tabSet();
});

$(function() {
    Smenu();
    tabSet();
    w3IncludeHTML();
});
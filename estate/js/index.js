   var styles = [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#bdbdbd"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dadada"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#c9c9c9"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            }
        ];

        function initMap() {
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 15,
                mapTypeControl: false,
                scaleControl: false,
                streetViewControl: false,
                // panControl: false,
                scrollwheel: false,
                center: { lat: 25.0358886, lng: 121.5329726 }
            });
            //判斷手機 setzoom
            var scale = 1;
            if ($(window).width() <= 480) {
                map.setZoom(15);
                scale = 0.7;
            }
            map.setOptions({ styles: styles });
            var houses = [
                ["大安滕", 25.0358886, 121.5329726, "新生南路一段 143之6號","http://s3-snailhouse.cdn.hinet.net/snail/builder/daan/images/daan-marker.png",100,100],
                ["台北101", 25.033964,121.564472, "信義路五段7號台北101","http://s3-snailhouse.cdn.hinet.net/snail/builder/daan/images/marker-101.png",100,200],
                ["忠孝SOGO", 25.04187,121.544633, "忠孝東路四段45號","http://s3-snailhouse.cdn.hinet.net/snail/builder/daan/images/marker-sogo.png",100,100],
                ["大安森林公園",25.028135,121.535905, "新生南路二段1號","http://s3-snailhouse.cdn.hinet.net/snail/builder/daan/images/marker-forest.png",150,100],
                ["國父紀念館", 25.03855,121.560265, "仁愛路四段505","http://s3-snailhouse.cdn.hinet.net/snail/builder/daan/images/marker-memorial.png",100,100],
                ["兩廳院", 25.036756,121.519047, "中山南路21-1號","http://s3-snailhouse.cdn.hinet.net/snail/builder/daan/images/marker-musiem.png",100,100],
                ["華山", 25.043752,121.528558, "八德路一段1號","http://s3-snailhouse.cdn.hinet.net/snail/builder/daan/images/marker-hwashan.png",100,100],
                ["台灣大學", 25.017341,121.539752, "羅斯福路四段1號","http://s3-snailhouse.cdn.hinet.net/snail/builder/daan/images/marker-ntu.png",100,100],
            ]
            //複數標記 
            setMarkers(map);
            var infowindow = new google.maps.InfoWindow();
            function setMarkers(map) {
                for (var i = 0; i < houses.length; i++) {
                    var house = houses[i];
                    //icon判斷 利用 house字串判斷

                    var image = {url:houses[i][4],scaledSize: new google.maps.Size( houses[i][5]*scale, houses[i][6]*scale),};
                    var marker = new google.maps.Marker({
                        position: { lat: house[1], lng: house[2] },
                        map: map,
                        icon: image,
                        title: house[0]
                    });
                    //markers info 
                    google.maps.event.addListener(marker, 'click', (function (marker, i) {
                        return function () {
                            infowindow.setContent(houses[i][3]);
                            infowindow.open(map, marker);
                        }
                    })(marker, i));
                }
            };
        }
        google.maps.event.addDomListener(window, 'load', initMap);


        var videos = ['http://s3-snailhouse.cdn.hinet.net/snail/builder/daan/video/05.mp4', 'http://s3-snailhouse.cdn.hinet.net/snail/builder/daan/video/05.mp4', 'http://s3-snailhouse.cdn.hinet.net/snail/builder/daan/video/05.mp4'];
        var imgs = ['http://s3-snailhouse.cdn.hinet.net/snail/builder/daan/images/slide01.png', 'http://s3-snailhouse.cdn.hinet.net/snail/builder/daan/images/slide02.png', 'http://s3-snailhouse.cdn.hinet.net/snail/builder/daan/images/slide03.png'];
        $(function () {
            var screen = $(window).width();
            var navHeight = $('.navbar ').innerHeight();
            $(window).resize(function () {
                if (screen > 1024 && $(window).width() <= 1024) {
                    location.reload();
                } else if (screen <= 1024 && $(window).width() > 1024) {
                    location.reload();
                }
            });
            // Paver
            var windowHeight = $(window).height();
            if ($(window).width() <= 1024) {
                $('#bgVideo').remove();
                $('#pagepiling').css('margin-top', navHeight);
                // $('div[data-paver]').paver({
                //     mouseSmoothingFunction: 'linear',
                //     tiltSmoothingFunction: 'gaussian'
                // });
                $('#videoBackBlock').css('height', windowHeight - navHeight);
                //$('#nightView div[data-paver]').paver();
                $('#owlSlide').owlCarousel({
                    dots: false,
                    items: 1,
                    loop: true,
                    autoplay: true,
                    autoplayTimeout: 3000,
                    autoplayHoverPause: true,
                    margin: 0,  
                });
                $('.mobile-background').css('height', windowHeight - navHeight);
            } else {
                $('.day-scene div').css({'margin-top': windowHeight/8,'margin-bottom': windowHeight/8});
                $('#pagepiling').pagepiling({
                    sectionsColor: ['white', '#555', '#000', '#f2f2f2'],
                    onLeave: function (index, nextIndex, direction) {
                        if (nextIndex == 3) {
                            $('#videoBackPlay video')[0].play();
                        } else {
                            $('#videoBackPlay video')[0].pause();
                        }
                        if (nextIndex == 1) {
                            $('#imgChange').css('animation', 'fadeIn 1s');
                        } else {
                            $('#imgChange').css('animation', '');
                        }
                    },
                });
                $('.videoBackground')[0].play();

                $('#videoBackBlock .pp-tableCell').css({'height': windowHeight,'overflow':'hidden','position':'absolute','left':0});

                $('#videoBackBlock video').attr('style','width:110%;');
                var videoproportion =  $(window).height()/$(window).width();
                var videoSize = $('.videoBackground').height()/$('.videoBackground').width();

            
                if(videoproportion > videoSize + 0.05){
                    var adjust = 'height:105%;';

                }else {
                    var adjust = 'width:110%;';
                }

                //$('div[data-paver]').paver();
                $('#videoBackBlock video').attr('style',adjust);
                
                var videoHtml = '<video muted class="videoBackground" onended="renderVideo(this)" style="'+ adjust +'" data-order="1">' +
                        '<source src="' + videos[1] + '" type="video/mp4">' +
                        '您的瀏覽器不支援HTML5。' +
                        '</video>';
                        
                $('#videoBackBlock .pp-tableCell').append(videoHtml);
                var imgHtml = '<img src="' + imgs[1] + '" class="img-responsive img-slide" />';
                $('#imgChange').append(imgHtml);

            }
            //$('#imgChange').appendTo('#videoBackBlock');
            //$( "#imgChange" ).insertBefore( "#videoBackBlock .pp-tableCell" );

            $('.datepicker').datepicker({
                format: "yyyy-mm-dd",
                startDate: '-0d',
                endDate: '+6m',
                language: "zh-TW",
                orientation: "top auto",
                autoclose: true,
                datesDisabled: ['2018/02/15','2018/02/16','2018/02/17','2018/02/18'],
                todayHighlight: true
            });

            // $('div[data-paver]').on('initialPanStart.paver', function () {
            //     $('#dayView').css('display', 'none');
            // });

            $('#appoDateMobile,#appoDate').change(function (e) {
                if ($(this).attr('id') == 'appoDateMobile') {
                    $('#appoDate').val($(this).val()).css('border', '');
                    $(this).addClass('has-value');
                } else {
                    $('#appoDateMobile').val($(this).val()).css('border', '');
                }
                $('.hint-date').remove();
                $(this).css('border', '');
            });
            $('#phone').bind('keyup paste', function () {
                this.value = this.value.replace(/[^0-9]/g, '');
            });
            $('#name').bind('keypress', function () {
                $('.hint-name').remove();
                $(this).css('border', '');
            });
            $('#phone').bind('keypress', function () {
                $('.hint-phone').remove();
                $(this).css('border', '');
            });
            $('#sendData').click(function (e) {
                e.preventDefault();
                $('.hint-form').remove();
                $('.form-group input').css('border', '');
                var status = true;
                if ($('#name').val() == '') {
                    $('<span class="hint-name hint-form">未填寫姓名</span>').insertAfter('#name');
                    $('#name').css('border', '1.5px solid #db9e9b');
                    status = false;
                } else if ($('#name').val().match(/[^\u3447-\uFA29]/ig)) {
                    $('<span class="hint-name hint-form">請填寫中文姓名</span>').insertAfter('#name');
                    $('.name-hint').text("請填寫中文姓名");
                    $('#name').css('border', '1.5px solid #db9e9b');
                    status = false;
                }
                if ($('#phone').val() == '') {
                    $('<span class="hint-phone hint-form">未填寫連絡電話</span>').insertAfter('#phone');
                    $('#phone').css('border', '1.5px solid #db9e9b');
                    status = false;
                } else if (!vaildphone($('#phone').val())) {
                    $('<span class="hint-phone hint-form">未填寫正確電話</span>').insertAfter('#phone');
                    $('#phone').css('border', '1.5px solid #db9e9b');
                    status = false;
                }
                if ($('#appoDate').val() == '') {
                    $('<span class="hint-date hint-form">未選擇日期</span>').insertAfter('#appoDateMobile');
                    $('#appoDate,#appoDateMobile').css('border', '1.5px solid #db9e9b');
                    status = false;
                }

                if (!status) {
                    return;
                }

                $('#sendData').attr('disabled', 'disabled');
                Send();
            });
            $('.change-paver').click(function (e) {
                e.preventDefault();
                $('.change-paver').removeClass('active');
                $(this).addClass('active');
                $('.panorama > div,.change-paver-block-2 p').css('display', 'none');
                var scene = $(this).attr('data-change');
                $('#' + scene).css('display', 'block');
                $('[data-text="'+ scene +'"]').css('display', 'block');
            });
            $('.scroll').click(function (e) {
                e.preventDefault();
                if ($('#videoBackBlock').hasClass('active')) {
                    $.fn.pagepiling.moveTo(2);
                }else {
                    $('html,body').animate({
                        scrollTop: $('#videoBackPlay').offset().top - navHeight
                    }, 1000);
                }
            });
            $('.scroll-to a[href*=#]:not([href=#])').click(function () {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        $(".navbar-collapse").collapse('hide');
                        if ($('.pp-section.active').length) {
                            if (target.selector == '#pagepiling') {
                                if (!$('#videoBackBlock').hasClass('active')) {
                                    $.fn.pagepiling.moveTo(1);
                                }
                            } else {
                                if (!$('#section3').hasClass('active')) {
                                    $.fn.pagepiling.moveTo(3);
                                } else {
                                    $('.pp-section.active').animate({
                                        scrollTop: target.position().top
                                    }, 1000);
                                    return false;
                                }
                            }
                            $('.pp-section.active').animate({
                                scrollTop: target.position().top
                            }, 100);
                        } else {
                            $('html,body').animate({
                                scrollTop: target.offset().top - navHeight
                            }, 1000);
                        }
                        return false;
                    }
                }
            });
        });

        function renderVideo(elem) {
            var order = $('.videoBackground:last').attr('data-order');
            order = Number(order) + 1;
            if (videos.length == order) {
                order = 0;
            }
            var videoproportion =  $(window).height()/$(window).width();
            var videoSize = $('.videoBackground').height()/$('.videoBackground').width();
            if(videoproportion > videoSize){
                var adjust = 'height: 105%';
            }else {
                var adjust = 'width: 110%';
            }

            var videoHtml = '<video muted class="videoBackground" onended="renderVideo(this)" style="'+ adjust +'" data-order="' + order + '">' +
                '<source src="' + videos[order] + '" type="video/mp4">' +
                '您的瀏覽器不支援HTML5。' +
                '</video>';
            var imgHtml = '<img src="' + imgs[order] + '" class="img-responsive img-slide" />';

            $('.videoBackground:last')[0].play();
            $('#videoBackBlock .pp-tableCell').append(videoHtml);
            $('#imgChange').append(imgHtml);

            $('.videoBackground:first').css('animation', 'fadeOut 0.5s infinite');
            $('.img-slide:first').css('animation', 'fadeOut 0.5s infinite');

            setTimeout(function () {
                $('.videoBackground:first').remove();
                $('.img-slide:first').remove();
            }, 500);
        }
        function Send() {
            var btnText = $('#sendData').html();
            var btnWidth = $('#sendData').innerWidth();
            $('#sendData').css('width', btnWidth);
            $('#sendData').html('<i class="fa fa-repeat" aria-hidden="true"></i>');
            var currentdate = new Date();
            var filltime = currentdate.getFullYear() + "/"
                + (currentdate.getMonth() + 1) + "/"
                + currentdate.getDate() + "  "
                + currentdate.getHours() + ":"
                + currentdate.getMinutes() + ":"
                + currentdate.getSeconds();

            $.get("https://script.google.com/macros/s/AKfycbwYWhqKp0Pa4BnKxwA6E5ppUx45xpIIbQIE-beIX4mu92otHuU/exec", {
                "name": document.getElementById("name").value,
                "mail": '',
                "phone": document.getElementById("phone").value,
                "date": document.getElementById("appoDate").value,
                "time": '',
                "other": '',
                "usertime": filltime
            },
                function (data) {
                    $('#name,#phone').val('');
                    $('#myModal').modal('show');
                    $('#sendData').removeAttr('disabled', 'disabled');
                    $('#sendData').html(btnText).css('width', '');
                    
                    ga('send', 'event', 'da-annlink', 'onclick', '送出預約看屋');
                    window.dotq = window.dotq || [];
                    window.dotq.push(
                    {
                    'projectId': '10000',
                    'properties': {
                    'pixelId': '10042984',
                    'qstrings': {
                    'et': 'custom',
                    'ec': 'da-annlink',
                    'ea': 'onclick',
                    'el': '送出預約看屋'
                    }
                    } } );
                    //popin Tracking Code
                    window._pop = window._pop || [];
                    window._pop.push(["_set_conversion_id","Daanhouse"]);
                    (function() {
                    var el = document.createElement("script"); el.type = "text/javascript"; el.async = true;
                    el.src = (("https:" == document.location.protocol) ? "https://" : "http://") + "api.popin.cc/conversion.js";
                    var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(el, s);
                    })();
                });
        }
        function vaildphone(str) {
            var reg = /^([0-9]|[\-])+$/g;
            if (str.length < 6 || str.length > 12) {
                return false;
            }
            else {
                return reg.exec(str);
            }
        }



  $('.navbar-default .navbar-nav>li>a').click(function() {
      $('.navbar-collapse.collapse.in').stop().css({ 'height': '0' });
  });
  $(window).load(function() {
      //$(window).ready(function(){
      $("#lod2").animate({ opacity: "0", top: "-=50" }, "slow").fadeOut(700);
      $("#bacc").fadeOut(900);


  })
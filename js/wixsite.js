//when the window resizes,resetting the background 
$(function () {
    var scroll_y;
    var w_w = $(window).width();
    var y0 = $(".banner").height();
    var y1 = $(".content1").height() + y0;
    var y2 = $(".content2").height() + parseInt($(".content2").css('padding-top')) + $(".cover-mid").height() + y1;
    var y3 = $(".content3").height() + parseInt($(".content3").css('padding-top')) + y2;
    console.log(y1 + '+' + $(".content2").height() + '+' + parseInt($(".content2").css('padding-top')) + "+" + $(".cover-mid").height() + '=' +
        y2);
    var sta = [0, 0, 0, 0];
    if (w_w < 970) {
        $("body").css({
            'background-position-y': -155.33 * w_w / 1600 + $(".top ").height(),
            'background-size-y': 644,
            'background-size-x': 970
        })
    } else {
        $("body").css({
            'background-position-y': -155.33 * w_w / 1600 + $(".top ").height(),
            'background-size': 'cover'
        })
    }
    //menu appears when window-size less than 750pixels
    $(".menu").on('click', function () {
        if ($(this).hasClass("h")) {
            $(this).removeClass("h");
        } else {
            $(this).addClass("h");
        }
    });

    function ScrollInitalizing() { //Scroll animation when click element<a>
        if (w_w < 640) {
            scroll_y = $(window).scrollTop() + $(window).height() * 0.8;
        } else {
            scroll_y = $(window).scrollTop() + $(window).height() * 0.6;
        }

    }

    $(".nav a").eq(0).on('click', function () {
        $("html,body").animate({
            'scrollTop': 0
        });
    })

    $(".nav a").eq(1).on('click', function () {
        if (w_w < 970) {
            if (w_w >= 640) {
                $("html,body").animate({
                    'scrollTop': y0 + 95 / 1600 * w_w
                }, 1000);
            } else {
                $("html,body").animate({
                    'scrollTop': y0 + 1300 / 1600 * w_w
                }, 1000);
            }
        } else {
            $("html,body").animate({
                'scrollTop': y0 + 59.375
            }, 1000);
        }
    })

    $(".nav a").eq(2).on('click', function () {
        if (w_w < 970) {
            if (w_w >= 640) {
                $("html,body").animate({
                    'scrollTop': y0 + 334 / 1600 * w_w
                }, 1000);
            } else {
                $("html,body").animate({
                    'scrollTop': y0 + 2160 / 1600 * w_w
                }, 1000);
            }
        } else {
            $("html,body").animate({
                'scrollTop': y0 + 208.75
            }, 1000);
        }
    })

    $(".nav a").eq(3).on('click', function () {
        if (w_w < 970) {
            if (w_w >= 640) {
                $("html,body").animate({
                    'scrollTop': y0 + 522 / 1600 * w_w
                }, 1000);
            } else {
                $("html,body").animate({
                    'scrollTop': y0 + 2860 / 1600 * w_w
                }, 1000);
            }
        } else {
            $("html,body").animate({
                'scrollTop': y0 + 326.35
            }, 1000);
        }
    })

    $(".nav a").eq(4).on('click', function () {
        $("html,body").animate({
            'scrollTop': y1
        }, 1000);
        console.log($(".content1").height() + "+" + y0 + "=" + y1)
    })
    $(".nav a").eq(5).on('click', function () {
        $("html,body").animate({
            'scrollTop': y2
        }, 1000);
        console.log($(".content2").height() + "+" + parseInt($(".content2").css('padding-top')) + "+" + $(".cover-mid").height() + "+" + y1 + "=" + y2)
    })
    $(".nav a").eq(6).on('click', function () {
        $("html,body").animate({
            'scrollTop': y3
        }, 1000);
    })
    $("#back-to-top").on('click', function () {
        $("html,body").animate({
            'scrollTop': 0
        }, 1000);
        if (!$(".menu").hasClass("h")) {
            $(".nav").fadeOut(1000);
            setTimeout(function () {
                $(".menu").addClass("h")
            }, 1000)
        }
    })
    $(".cover").hide();
    $(".content2 .tit").hide();
    $(".content2 .inner").children().hide();
    $(".content3").children().hide();
    //bg do a little change when the window resizes
    $(window).on('resize', function () {
        y0 = $(".banner").height();
        y1 = $(".content1").height() + y0;
        y2 = $(".content2").height() + parseInt($(".content2").css('padding-top')) + $(".cover-mid").height() + y1;
        y3 = $(".content3").height() + parseInt($(".content3").css('padding-top')) + y2;
        w_w = $(window).width();
        if (w_w < 970) {
            $("body").css({
                'background-position-y': -155.33 * $(window).width() / 1600 + $(".top ").height(),
                'background-size-y': 644,
                'background-size-x': 970
            })
        } else {

            $("body").css({
                'background-position-y': -155.33 * $(window).width() / 1600 + $(".top ").height(),
                'background-size': 'cover'
            })
        }
        y0 = $(".banner").height();
        y1 = $(".content1").height() + y0;
        y2 = $(".content2").height() + $(".cover-mid").height() + y1;
        y3 = $(".content3").height() + y2;

    });

    $(".banner .spans").fadeIn();
    //elements fade in when window scrolls
    $(window).on('scroll', function () {
        ScrollInitalizing();

        if (scroll_y > y0 && sta[0] == 0) {
            $(".content1 .cover").fadeIn(1000);
            sta[0] = 1;
        }
        if (scroll_y > y1 && sta[1] == 0) {
            $(".content2 .tit").fadeIn(700);
            $(".content2 .guide, .content2 .p1").fadeIn(1000);
            $(".content2 .search, .content2 .p2").fadeIn(1500);
            $(".content2 .pachieve, .content2 .p3").fadeIn(2000);
            sta[1] = 1;
        }
        if (scroll_y > y2 && sta[2] == 0) {
            $(".content3 .tit").fadeIn(700);
            $(".content3 .inner1").fadeIn(1000);
            $(".content3 .inner2").fadeIn(1500);
            $(".content3 .inner3").fadeIn(2000);
            $(".content3 .inner4").fadeIn(2500);
            $(".content3 .vertline").fadeIn(3000);
            sta[2] = 1;
        }
        if (scroll_y > y3 && sta[3] == 0) {
            $(".content4 .left .cover").fadeIn(1000);
            $(".content4 .right .cover").fadeIn(1500);
            sta[3] = 1;
        }
    })
    //baidu map API
    $(".btn").on('click', function () {
        $(".map").show();
        var map = new BMap.Map("allmap");
        var point = new BMap.Point(118.786331, 32.029141);
        map.centerAndZoom(point, 15);
        var marker = new BMap.Marker(point); // 创建标注
        map.addOverlay(marker); // 将标注添加到地图中
        marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
        var opts = {
            position: point, // 指定文本标注所在的地理位置
            offset: new BMap.Size(20, -20) //设置文本偏移量
        }
        var label = new BMap.Label("弓箭坊41号 欣才IT学院", opts); // 创建文本标注对象
        label.setStyle({
            color: "red",
            fontSize: "12px",
            height: "20px",
            lineHeight: "20px",
            fontFamily: "微软雅黑"
        });
        map.addOverlay(label);
    })
    $(".close").on('click', function () {
        $(".map").hide();
    })

    //baidu share API    
    window._bd_share_config = {
        "common": {
            "bdSnsKey": {},
            "bdText": "",
            "bdMini": "2",
            "bdPic": "",
            "bdStyle": "0",
            "bdSize": "16"
        },
        "share": {},
        "image": {
            "viewList": ["qzone", "tsina", "tqq", "renren", "weixin"],
            "viewText": "分享到：",
            "viewSize": "16"
        },
        "selectShare": {
            "bdContainerClass": null,
            "bdSelectMiniList": ["qzone", "tsina", "tqq", "renren", "weixin"]
        }
    };
    with(document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5)];
})

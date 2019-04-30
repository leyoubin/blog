/*================================

=====2016-7-16 power by zzc=========

================================*/


$(document).ready(function () {

    $("section").addClass("mysection")

    //动画加载

    $("body").show();


    $(".jiazai").remove();

    $(".top-left").css({"animation": "fuzuo 1s", "-webkit-animation": "fuzuo 1s"});

    $(".swiper-container,.myaside ,.homeh4,.mysection").css({
        "-webkit-animation": "fuxiasuo 0.8s",
        "animation": "fuxiasuo 0.8s"
    })

    $(".myheader").css({"-webkit-animation": "fushang 0.5s", "animation": "fushang 0.5s"})

    //$(".skin-btn").css({"-webkit-animation": "zuo2 0.5s","-webkit-animation":"zuo2 0.5s"})


    var sidelen = $(".animation-div").length

    var arclen = $(".arclist> ul>li").length

    for (var s = 0; s <= sidelen; s++) {


        $(".animation-div").eq(s).css({

            "-webkit-animation-name": "fuxiasuo",

            "-webkit-animation-duration": s / 7 + 1 + "s",

            "animation-name": "fuxiasuo",

            "animation-duration": s / 7 + 1 + "s"

        });

    }

    for (var a = 0; a <= arclen; a++) {


        $(".arclist >ul>li").eq(a).css({

            "-webkit-animation-name": "fuxiasuo",

            "-webkit-animation-duration": a / 8 + 1 + "s",

            "animation-name": "fuxiasuo",

            "animation-duration": a / 8 + 1 + "s"

        });

    }


    var pcli = $(".mynav >ul >li")

    var pclien = pcli.length

    var pcliinde = pcli.index()

    var ulwidth = $(".mynav >ul").width();

    $(".mynav >ul >li").css("width", ulwidth / pclien)

    for (var j = 0; j <= pclien; j++) {


        pcli.eq(j).css({

            "-webkit-animation-name": "fushang",

            "-webkit-animation-duration": j / 6 + 0.5 + "s",

            "animation-name": "fushang",

            "animation-duration": j / 6 + 0.5 + "s"

        });

    }


    //当前连接高亮

    $('nva li a').each(function () {

        if ($($(this))[0].href == String(window.location))

            $(this).parent("li").addClass('nav-active');

    });


    //菜单下拉

    $(".mob-drop").click(function () {

        $(".mob-dropmenu").slideToggle();

    });

    //手机菜单下拉

    var mb = $(".mobile-nav")

    var mli = $(".mob-ulnav>li")

    var mlen = mli.length;

    var mindex = mli.index();


    mb.find(".el-lines").click(function () {

        $(this).hide();

        $(this).next("i").show()

        for (var m = 0; m <= mlen; m++) {


            mli.eq(m).css({

                "-webkit-animation-name": "zuo",

                "-webkit-animation-duration": m / 10 + 0.5 + "s",

                "animation-name": "zuo",

                "animation-duration": m / 10 + 0.5 + "s"

            });

        }

        $(".mob-menu").show().css({"-webkit-animation": "zuo 0.8s", "animation": "zuo 0.8s"})

    });


    mb.find(".el-remove").click(function () {

        $(this).hide();

        $(this).prev("i").show();

        for (var m = 0; m <= mlen; m++) {


            mli.eq(m).css({

                "-webkit-animation-name": "fuzuo",

                "-webkit-animation-duration": m / 10 + 0.5 + "s",

                "animation-name": "fuzuo",

                "animation-duration": m / 10 + 0.5 + "s"

            });

        }

        $(".mob-menu").css({"-webkit-animation": "zuo3 0.8s", "animation": "zuo3 0.8s"});

        setTimeout(function () {

            $(".mob-menu").hide();

        }, 500);

    });


    //相册动画


    //滑动效果

    $(".drop").mouseenter(function () {


        $(this).find(".drop-nav").css({"-webkit-animation": "zuo1 0.8s", "animation": "zuo1 0.8s"}).show();


    });


    $(".drop").mouseleave(function () {


        $(".drop-nav").hide();


    });


//TAB切换

    $(".mytab a").click(function () {

        var index = $(this).index();

        $(this).addClass("tab-active").siblings().removeClass("tab-active");

        $(this).parents(".mytab").find("ul").eq(index).show().siblings('ul').hide();


    });

//滚动

    //文字滚动

    $(function () {


        var _wrap = $('.mulitline');//定义滚动区域

        var _interval = 3000;//定义滚动间隙时间

        var _moving;//需要清除的动画

        _wrap.hover(function () {

            clearInterval(_moving);//当鼠标在滚动区域中时,停止滚动

        }, function () {

            _moving = setInterval(function () {

                var _field = _wrap.find('li:first');//此变量不可放置于函数起始处，li:first取值是变化的

                var _h = _field.height();//取得每次滚动高度

                _field.animate({marginTop: -_h + 'px'}, 500, function () {//通过取负margin值，隐藏第一行

                    _field.css('marginTop', 0).appendTo(_wrap);//隐藏后，将该行的margin值置零，并插入到最后，实现无缝滚动

                })

            }, _interval)//滚动间隔时间取决于_interval

        }).trigger('mouseleave');//函数载入时，模拟执行mouseleave，即自动滚动

        if ($(".mulitline li").length <= 1)//小于等于1条时，不滚动

        {

            clearInterval(_moving);


        }


    });


    //邮箱弹窗

    $(".mail-btn").click(function (e) {


        $(".mail-dy").show();

        $(".side-bdfx").hide();

        $(document).one("click", function () {


            $(".side-bdfx").hide();

            $(".mail-dy").hide();


        });

        e.stopPropagation();

    });

    //返回顶部

    $(function () {

        $(window).scroll(function () {

            if ($(this).scrollTop() >= 500) {

                $('#toTop').fadeIn();

            } else {

                $('#toTop').fadeOut();

            }

        });


        $('#toTop').click(function () {

            $('body,html').animate({scrollTop: 0}, 800);

        });

    });

//表单下拉

    $(".form-btn a").click(function () {

        $(".form-zd").slideToggle();

    });


    //弹出分享层

    $(".fx-btn").click(function (e) {

        $(".arc-bdfx").show();

        $(document).one("click", function () {


            $(".arc-bdfx").hide();


        });

        e.stopPropagation();

    });

    $(".side-fx").click(function (e) {

        $(".side-bdfx").show();

        $(".mail-dy").hide();

        $(document).one("click", function () {


            $(".side-bdfx").hide();

            $(".mail-dy").hide();


        });

        e.stopPropagation();


    });

    $(".el-remove").click(function () {

        $(".arc-bdfx").hide();

        $(".mail-dy").hide();

        $(".side-bdfx").hide();


    });


    //图片查看器

    $(".mail-dy").click(function (e) {

        e.stopPropagation();

    });


//2016-7-7-30修改

    var dragging = false;

    var iX, iY;

    $(document).on("mouseenter", ".face-main", function (e) {

        $(".face-tab").on("mousedown", function (e) {

            dragging = true;


            iX = e.clientX - $(this).parents(".face-main").get(0).offsetLeft;

            iY = e.clientY - $(this).parents(".face-main").get(0).offsetTop;

            $(this).parents(".face-main").get(0).setCapture && $(this).parents(".face-main").get(0).setCapture();

            return false;

            e.stopPropagation();


        })

        $(document).mouseup(function (e) {

            dragging = false;

            //$(".face-main")[0].releaseCapture();

            e.cancelBubble = true;

        });

    });

    document.onmousemove = function (e) {

        if (dragging) {

            var e = e || window.event;

            var oX = e.clientX - iX;

            var oY = e.clientY - iY;

            $(".face-main").css({"left": oX + "px", "top": oY + "px"});

            return false;

        }

    };


});//END Document ready

//tootip js
$(function () {

    $(".news_content p:odd").addClass("p03");


    $(".news_content p").hover(
        function () {

            $(this).addClass("p02");

        },

        function () {

            $(this).removeClass("p02");

        }
    )


    $("a").focus(
        function () {

            $(this).blur();

        }
    )

})

var sweetTitles = {

    x: 10,

    y: 20,

    tipElements: "a",

    init: function () {

        $(this.tipElements).mouseover(function (e) {

            this.myTitle = this.title;

            this.myHref = this.href;

            this.myHref = (this.myHref.length > 200 ? this.myHref.toString().substring(0, 200) + "..." : this.myHref);

            this.title = "";

            var tooltip = "";

            if (this.myTitle == "") {

                tooltip = "";

            } else {

                tooltip = "<div id='tooltip'><p>" + this.myTitle + "</p></div>";

            }

            $('body').append(tooltip);

            $('#tooltip')

                .css({

                    "opacity": "1",

                    "top": (e.pageY + 20) + "px",

                    "left": (e.pageX + 10) + "px"

                }).show('fast');

        }).mouseout(function () {

            this.title = this.myTitle;

            $('#tooltip').remove();

        }).mousemove(function (e) {

            $('#tooltip')

                .css({

                    "top": (e.pageY + 20) + "px",

                    "left": (e.pageX + 10) + "px"

                });

        });

    }

};

$(function () {

    sweetTitles.init();

});
//JS区域

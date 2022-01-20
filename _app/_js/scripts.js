$(document).ready(function () {
    /* Якорь */
    $(".menu-list li a").click(function (h) {
        h.preventDefault();
        var f = $(this).attr("href"),
            g = $(f).offset().top;
        $("body,html").animate({
            scrollTop: g
        }, 1500)
    });
    $(function () {
        var check = $('.check', this),
            email = $('.input-mail', this),
            message = $('.alert-message', this);
        $(".form").on("submit", function () {
            var check = $('.check', this),
                message = $('.alert-message', this),
                reNone = /.+/,
                email = $('.input-mail', this);
            if (!email.val().match(reNone)) {
                message.text('Введите email').slideDown(500);
                return false;
            }
            if (!check.prop("checked")) {
                check.next().css({
                    'color': 'red',
                    'transition': 'all .4s ease'
                });
                check.next().children().css({
                    'color': 'red',
                    'transition': 'all .4s ease'
                });
                message.text('↙ Подтвердите соглашение').slideDown(500);
                return false;
            }
            if (email.val() && check) {

                // button.text('Отправляем...');
                // setTimeout(function () {
                //     button.text('Отправлено!');
                // }, 500);
                return true
            }
        });
        email.click(function () {
            // email.css({"borderColor": "rgb(25, 10, 12)",'transition':'all .4s ease'});
            message.slideUp(500);
        });
        check.click(function () {
            check.next().css({
                "color": "#aaa",
                'transition': 'all .4s ease'
            });
            check.next().children().css({
                "color": "#aaa",
                'transition': 'all .4s ease'
            });
            message.slideUp(500);
        });
    });
    // Модалка
    $('.button-up').magnificPopup({
        type: 'inline',
        midClick: true,
        mainClass: 'mfp-fade'
    });
    $('.text-rev-link').magnificPopup({
        type: 'image',
        mainClass: 'mfp-fade',
        gallery: {
            enabled: true
        }
    });
    $('.revs-slider-text').slick({
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        speed: 300,
        arrows: true,
        centerPadding: '40px',
        // adaptiveHeight: true,
        centerMode: true,
        prevArrow: '<button type="button" class="slick-prev">‹</button>',
        nextArrow: '<button type="button" class="slick-next">›</button>',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }]
    });
    /*Видео-отзывы*/
    $(".video-wrapper-rev").click(function () {
        $(".video-wrapper-rev iframe").each(function () {
            var l = $(this).parent().attr('data-img');
            $(this).parent().html('<img src="' + l + '" alt="Видео отзыв"><div class="yt-button"></div>');
        })
        var a = $(this).attr("data-youtube");
        $(this).html('<iframe src="https://www.youtube.com/embed/' + a + '?showinfo=0&rel=0&autoplay=1&mute=1&modestbranding=1" allowfullscreen></iframe>')
    });
    // Menu
    var mobMenu = $('.mobile-menu'),
        headNav = $('.main-menu .menu-list'),
        mml1 = $('.mobile-menu-line-1'),
        mml2 = $('.mobile-menu-line-2'),
        mml3 = $('.mobile-menu-line-3'),
        body = $('body');

    mobMenu.on('click', function () {
        if (!headNav.hasClass('nav-active')) {
            $(this).css('position', 'absolute');
            body.css('overflow', 'hidden');
            headNav.addClass('nav-active');
            mml1.addClass('switched');
            mml2.addClass('switched');
            mml3.addClass('switched');
        } else {
            $(this).css('position', 'absolute');
            body.css('overflow', 'auto');
            headNav.removeClass('nav-active');
            mml1.removeClass('switched');
            mml2.removeClass('switched');
            mml3.removeClass('switched');
        }
        if ($(body).width() <992){
            $('.main-menu li a').on('click', function(){
                body.css('overflow', 'auto');
                headNav.removeClass('nav-active');
                mml1.removeClass('switched');
                mml2.removeClass('switched');
                mml3.removeClass('switched');
            });
        }
    });
    /*Конец документа*/
});
$(function () {
    new WOW().init();
    $('.slider img').owlCarousel({
        loop: true,
        margin: 10,
        rtl: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

    $('.modal-open').click(function () {
        var srcimg = $(this).attr('src');
        console.log(srcimg);
        $('.setimg').attr('src', srcimg);
        $('.modal-wrapper').fadeIn();
        $('.modal-content').addClass('open');

    });

    $('.modal-close').click(function () {
        $('.modal-wrapper').fadeOut();
        $('.modal-content').removeClass('open');
    });


    //    $(document).ready(function () {
    //        $('#button-left').click(function () {
    //            $('.left').addClass('wow');
    //            $('.left').addClass('slideInLeft');
    //            $('.left').removeClass('collapse');
    //        })
    //    })

    $(document).scroll(function () {
        var top = $(document).scrollTop();
        if (top > 100) {
            $('header').addClass('scroll');
            $('header a').removeClass('cl');
            /*$('.cl').css("color", "#343a40");*/
        } else {
            $('header').removeClass('scroll');
            $('header a').addClass('cl');
            //            $('.cl').css("color", "#fff");
        }
    });




    $("#search-icon").click(function () {
        $(".nav").toggleClass("search");
        $(".nav").toggleClass("no-search");
        $(".search-input").toggleClass("search-active");
    });

    $('.menu-toggle').click(function () {
        $(".nav").toggleClass("mobile-nav");
        $(this).toggleClass("is-active");
    });

})

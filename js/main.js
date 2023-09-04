$(function () {

    "use strict";

    //======MENU FIX========
    if ($('.main_menu').offset() != undefined) {
        $(window).bind('scroll', function () {
            if ($(window).scrollTop() > 40) {
                $('.main_menu').addClass('menu_fix');
            } else {
                $('.main_menu').removeClass('menu_fix');
            }
        });
    }


    //=====venobox=====
    $('.venobox').venobox();


    //=====COUNTER UP JS=======
    $('.counter').countUp();


    //=====STICKY SIDEBAR====== 
    $("#sticky_sidebar").stickit({
        top: 90,
    })



    //=======TESTI SLIDER======
    $('.testi_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: false,
        arrows: true,

        // responsive: [
        //     {
        //         breakpoint: 1400,
        //         settings: {
        //             slidesToShow: 2,
        //         }
        //     },
        //     {
        //         breakpoint: 1200,
        //         settings: {
        //             slidesToShow: 2,
        //         }
        //     },
        //     {
        //         breakpoint: 992,
        //         settings: {
        //             slidesToShow: 2,
        //         }
        //     },
        //     {
        //         breakpoint: 768,
        //         settings: {
        //             slidesToShow: 1,
        //         }
        //     },
        //     {
        //         breakpoint: 576,
        //         settings: {
        //             slidesToShow: 1,
        //         }
        //     }
        // ]

    });



});

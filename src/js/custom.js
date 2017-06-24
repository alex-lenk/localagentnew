$(document).ready(function () {
    /* для открывания мобильного меню */
    $(".navbar-toggle").click(
        function () {
            $('.navbar').toggleClass("navbar-active");
        }
    );

    /* для переключения класов пунктов в шапке формы на главной и на странице с формами */
    var insuranceFormTypeItem = $('.insurance-form-type_item');
    insuranceFormTypeItem.on('click', function () {
        insuranceFormTypeItem.removeClass('insurance-form-type_current');
        $(this).addClass('insurance-form-type_current');
    });

    /* Для скрытия формы на мобильных устройствах на странице контактов */
    $(".contacts-form-toggle").click(
        function () {
            $('.contacts-form-toggle').toggleClass("contacts-form-toggle-open");
        }
    );

    /* Инициализация плагина swiper в шапке на главной странице */
    var swiper = new Swiper('.partners-carousel', {
        grabCursor: true,
        slidesPerView: 6,
        breakpoints: {
            1199: {
                slidesPerView: 4
            },
            991: {
                slidesPerView: 3
            },
            767: {
                slidesPerView: 2
            },
            320: {
                slidesPerView: 1
            }
        }
    });



    $(".search-left-head-arrow").click(
        function () {
            $('.search-left').toggleClass("search-left-open search-left-closed");
        }
    );

    $(function () {
        $("a[href^='#']").click(function () {
            var _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top + "px"});
            return false;
        });
    });

    $('.select-open').on('click', function () {
        $(this).toggleClass('select-active');
        $(this).parent().find('.make-choice').toggleClass('make-choice-active');
    });

    $('.select-open + .arrow').on('click', function () {
        $(this).parent().find('.select-open').toggleClass('select-active');
        $(this).parent().find('.make-choice').toggleClass('make-choice-active');
    });

    $('.datepicker-here').on('click', function () {
        $(this).toggleClass('datepicker-here-open');
    });

    $('.hint-box').on('click', function () {
        $(this).toggleClass('hint-box-open');
    });


    var statisticsCarousel = new Swiper('.statistics-carousel', {
        grabCursor: true,
        slidesPerView: 2
    });
});
/*
var searchLeftContent = $(".search-left-content");

searchLeftContent.mCustomScrollbar({
 theme: "dark-3"
 });


 $(".make-choice").mCustomScrollbar({
 theme: "dark-3"
 });

 $(".insurance-drobdown-scroll").mCustomScrollbar({
 theme: "dark-3"
 });*/


$(function () {
    $('[data-toggle="tooltip"]').tooltip({
        container: 'body'
    })
});

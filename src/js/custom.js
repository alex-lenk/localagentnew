$(document).ready(function () {
    /*
     для переключения класов пунктов в шапке формы на главной и на странице с формами
     form-step-1.html
     form-step-2.html
     form-step-3.html
     form-step-4.html
     */

    var uiFormTypeItem = $('.ui-form-type_item');
    uiFormTypeItem.on('click', function () {
        uiFormTypeItem.removeClass('ui-form-type_current');
        $(this).addClass('ui-form-type_current');
    });


    /*
     Для скрытия формы на мобильных устройствах на странице контактов contacts.html и contacts-error.html
     */

    $(".contacts-form-toggle").click(
        function () {
            $('.contacts-form-toggle').toggleClass("contacts-form-toggle-open");
        }
    );


    /*
     Инициализация плагина swiper.jquery.min.js в шапке на главной странице
     */

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


    /*
     Инициализация кастомных селектов. Их 4 штуки, так как у них разные плейсхолдеры
     */

    $(".car-model").select2({
        placeholder: "Марка автомобиля",
        allowClear: true
    });

    $(".body-type").select2({
        placeholder: "Тип кузова",
        allowClear: true
    });

    $(".need-policy").select2({
        placeholder: "Когда нужен полис?",
        allowClear: true
    });

    $(".convenient-time").select2({
        placeholder: "Удобное время для связи",
        allowClear: true
    });


    /*
     Инициализация скрипта jquery.maskedinput.js
     */

    jQuery(function ($) {
        $(".date-birth").mask("99.99.9999", {placeholder: "05.09.1980"});
    });


    /*
     Переключатель классов на странице result.html в правой панели
     */

    $(".search-left-head-arrow").click(
        function () {
            $('.search-left').toggleClass("search-left-open search-left-closed");
        }
    );


    /*
     Для плавного перехода к якорям на странице
     */

    $(function () {
        $("a[href^='#']").click(function () {
            var _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top + "px"});
            return false;
        });
    });


    /*
     Для добавления подсказок, используется в основном для мобильной версии
     */

    $('.hint-box').on('click', function () {
        $(this).toggleClass('hint-box-open');
    });


    // BEGIN: Для ошибок форм
    $(".form-control").change(function () {
        if ($(this).val().trim().length) {
            $(this).parent().addClass("field-filled");
        } else {
            $(this).parent().removeClass("field-filled");
        }
    });
    //END
});


/*
 Этот код нужен для инициализации гугл карты с индивидуальным дизайном.
 Используется на страницах search.html и result.html
 */

// When the window has finished loading create our google map below
//google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 11,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(40.6700, -73.9400), // New York

        // How you would like to style the map.
        // This is where you would paste any style found on Snazzy Maps.
        styles: [
            {
                "featureType": "all",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.country",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#2c52a2"
                    }
                ]
            },
            {
                "featureType": "administrative.province",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#2c52a2"
                    }
                ]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#2c52a2"
                    }
                ]
            },
            {
                "featureType": "administrative.neighborhood",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.neighborhood",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#2c52a2"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "hue": "#ff0000"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#2c52a2"
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#e0efef"
                    }
                ]
            },
            {
                "featureType": "landscape.natural.landcover",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#c0e8e8"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#c6ebbd"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "lightness": 100
                    },
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "lightness": 700
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#7dcdcd"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#addbf1"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#2c52a2"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            }
        ]
    };

    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map-canvas');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.6700, -73.9400),
        map: map,
        title: 'Snazzy!'
    });
}

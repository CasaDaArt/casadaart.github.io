$(document).ready(function() {
    $('.owl-one').owlCarousel({

        loop: true,

        autoplay: true,
        autoplayTimeout: 5000,
        stagePadding: 350,
        margin: 20,
        nav: true,
        dots: false,
        navText: ['<i class="icon-login-left"></i>', '<i class="icon-login"></i>'],

        responsive: {
            0: {
                items: 1,
                stagePadding: 30
            },
            600: {
                items: 1,
                stagePadding: 60
            },
            1000: {
                items: 1,
                stagePadding: 200
            },
            1200: {
                items: 1,
                stagePadding: 250
            },
            1400: {
                items: 1,
                stagePadding: 300
            },
            1600: {
                items: 1,
                stagePadding: 350
            },
            1800: {
                items: 1,
                stagePadding: 400
            }
        }
    });

    $('.owl-two').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: false,
        // autoplayTimeout: 5000,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
});
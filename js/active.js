(function ($) {
    'use strict';

    var browserWindow = $(window);

    browserWindow.on('load', function () {
        $('.preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

    if ($.fn.classyNav) {
        $('#holdiayNav').classyNav();
    }

    if ($.fn.niceSelect) {
        $('select').niceSelect();
    }

    if ($.fn.owlCarousel) {
        var welcomeSlide = $('.hero-slides');
        var testimonial = $('.testimonial-slides');

        welcomeSlide.owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayTimeout: 7000,
            smartSpeed: 1000,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut'
        });

        welcomeSlide.on('translate.owl.carousel', function () {
            var slideLayer = $("[data-animation]");
            slideLayer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).removeClass('animated ' + anim_name).css('opacity', '0');
            });
        });

        welcomeSlide.on('translated.owl.carousel', function () {
            var slideLayer = welcomeSlide.find('.owl-item.active').find("[data-animation]");
            slideLayer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).addClass('animated ' + anim_name).css('opacity', '1');
            });
        });

        $("[data-delay]").each(function () {
            var anim_del = $(this).data('delay');
            $(this).css('animation-delay', anim_del);
        });

        $("[data-duration]").each(function () {
            var anim_dur = $(this).data('duration');
            $(this).css('animation-duration', anim_dur);
        });

        var dot = $('.hero-slides .owl-dot');
        dot.each(function () {
            var index = $(this).index() + 1;
            if (index < 10) {
                $(this).html('0').append(index);
            } else {
                $(this).html(index);
            }
        });

        testimonial.owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 600
        });
    }

    if ($.fn.scrollUp) {
        browserWindow.scrollUp({
            scrollSpeed: 1500,
            scrollText: '<i class="fa fa-angle-up"></i>'
        });
    }

    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
    }

    if ($.fn.sticky) {
        $(".holdiay-main-menu").sticky({
            topSpacing: 0
        });
    }

    if ($.fn.circleProgress) {
        $('#circle').circleProgress({
            size: 194,
            emptyFill: "rgba(0, 0, 0, .0)",
            fill: '#92593d',
            thickness: '4',
            reverse: true
        });
        $('#circle2').circleProgress({
            size: 194,
            emptyFill: "rgba(0, 0, 0, .0)",
            fill: '#92593d',
            thickness: '4',
            reverse: true
        });
        $('#circle3').circleProgress({
            size: 194,
            emptyFill: "rgba(0, 0, 0, .0)",
            fill: '#92593d',
            thickness: '4',
            reverse: true
        });
        $('#circle4').circleProgress({
            size: 194,
            emptyFill: "rgba(0, 0, 0, .0)",
            fill: '#92593d',
            thickness: '4',
            reverse: true
        });
    }

    if ($.fn.tooltip) {
        $('[data-toggle="tooltip"]').tooltip()
    }

    if ($.fn.niceScroll) {
        $(".album-all-songs").niceScroll({
            background: "#fff"
        });
    }

    $('a[href="#"]').on('click', function ($) {
        $.preventDefault();
    });

    if (browserWindow.width() > 767) {
        new WOW().init();
    }

})(jQuery);
/*!
 * eocNewsticker 0.1-pre
 * Copyright 2019 Dieter Schmitt
 * Licensed under MIT (https://opensource.org/licenses/MIT)
 */

(function($) {
    $.fn.eocNewsticker = function(options) {

        // Settings
        var element = $(this);
        var defaults = {
            speed: 20,
            timeout: 2,
            divider: '+++'
        };
        var settings = $.extend({}, defaults, options);

        // Slider Vars
        var slideOne;
        var slideTwo;
        var speed;
        var width;

        // Init
        function init(obj) {

            obj.addClass('eocnewsticker').html('<div><div>' + obj.html() + ' ' + settings.divider + '</div></div>');
            var container = obj.find('> div');
            var inner = obj.find('> div > div');
            var content = inner.html();
            var containerWidth = container.width();
            var innerWidth = inner.width();

            while (containerWidth > innerWidth) {
                inner.append(' ' + content);
                innerWidth = inner.width();
            }

            inner.append('&nbsp;');
            width = inner.width();
            speed = settings.speed * width;
            container.append(container.html());

            slideOne = obj.find('> div > div').eq(0);
            slideTwo = obj.find('> div > div').eq(1).css({'left': width});

        }

        // Animation
        function animateSlide(slide, start, destination) {

            slide.animate(
                {left: destination},
                speed,
                'linear',
                function() {
                    if (start === 0) {
                        slide.css({'left': width});
                        animateSlide(slide, width, 0);
                    } else {
                        animateSlide(slide, 0, -width);
                    }
                }
            );

        }

        // Start
        function startNewsticker() {
            animateSlide(slideOne, 0, -width);
            animateSlide(slideTwo, width, 0);
        }

        // Init
        init(element);
        setTimeout(startNewsticker, (settings.timeout * 1000));

        return this;

    }; 
})(jQuery);

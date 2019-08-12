/*!
 * eocNewsticker 0.2-pre
 * Copyright (c) 2019 Dieter Schmitt
 */

(function($) {
  $.fn.eocNewsticker = function(options) {

    // _____ Options _____

    let defaults = {
      speed: 20,
      timeout: 2,
      divider: '+++'
    };
    let settings = $.extend({}, defaults, options);

    // _______ Inner Variables _______

    let element = this;
    let container = {};
    let inner = {};

    // _______ Init _______

    function init() {
      create();
      start();
    }

    // _______ Create _______

    function create() {

      element.addClass('eoc-newsticker').html('<div><div>' + element.html() + ' ' + settings.divider + '</div></div>');
      container = element.find('> div');
      inner = element.find('> div > div');

      let content = inner.html();
      let containerWidth = container.width();
      let innerWidth = inner.width();

      while (containerWidth > innerWidth) {
        inner.append(' ' + content);
        innerWidth = inner.width();
      }

      inner.append('&nbsp;');
      container.append(container.html());

    }

    // _______ Start _______

    function start() {

      setTimeout(function() {

        let inner = element.find('> div > div');
        let width = inner.width();
        let speed = settings.speed * width;
        let slideOne = inner.eq(0);
        let slideTwo = inner.eq(1).css({'left': width});
        animateSlide(slideOne, 0, -width, width, speed);
        animateSlide(slideTwo, width, 0, width, speed);

      }, (settings.timeout * 1000));

    }

    // _______ Animation _______

    function animateSlide(slide, start, destination, width, speed) {

      slide.animate(
        {left: destination},
        speed,
        'linear',
        function() {
          if (start === 0) {
            slide.css({'left': width});
            animateSlide(slide, width, 0, width, speed);
          } else {
            animateSlide(slide, 0, -width, width, speed);
          }
        }
      );

    }

    // _______ Init _______

    init();

    return this;

  };
})(jQuery);

/*!
 * eocNewsticker 0.2-pre
 * Copyright (c) 2019 Dieter Schmitt
 * Released under the MIT license - https://opensource.org/licenses/MIT
 */

(function($) {
  $.fn.eocNewsticker = function(options) {

    // _____ Options _____

    let defaults = {
      speed:    20,
      timeout:  2,
      divider:  '+++',
      type:     'static', // static or ajax
      interval: 600       // re-fetch ajax source (seconds)
    };
    let settings = $.extend({}, defaults, options);

    // _______ Inner Variables _______

    let self = this;
    let content = self.html();
    let container = {};
    let one = {};
    let two = {};
    let both = {};
    let oneNeedsUpdate = false;
    let twoNeedsUpdate = false;
    let windowWidth = $(window).width();

    // _______ Init _______

    function init() {
      create();
      start();
    }

    // _______ Create _______

    function create() {

      self.addClass('eoc-newsticker').html('<div class="eoc-newsticker-container"><div class="eoc-newsticker-loader" style="display: none;"></div><div class="eoc-newsticker-one"></div><div class="eoc-newsticker-two"></div></div>');

      container = self.find('.eoc-newsticker-container');
      one = self.find('.eoc-newsticker-one');
      // one.css('background', 'green');
      two = self.find('.eoc-newsticker-two');
      both = self.find('.eoc-newsticker-one, .eoc-newsticker-two');

    }

    // _______ Start _______

    function start() {

      if (settings.type === 'static') {
        content = content + ' ' + settings.divider;
        run(content, (settings.timeout * 1000));
      } else if (settings.type === 'ajax') {
        self.find('.eoc-newsticker-loader').show();
        // Show spinner
        // Get content from AJAX
        // Then run(content, 0);
      }

    }

    // _______ Run _______

    function run(content, timeout) {

      update(both, content);
      two.css({'left': one.width()});

      setTimeout(function() {

        let width = one.width();
        let speed = settings.speed * width;

        animateSlide(one, 0, -width, speed);
        animateSlide(two, width, 0, speed);

      }, timeout);

    }

    // _______ Update _______

    function update(slide, content) {

      slide.html(content);
      while (container.width() > slide.width()) {
        slide.append(' ' + content);
      }
      slide.append('&nbsp;');

    }

    // _______ Animation _______

    function animateSlide(slide, start, destination, speed) {

      slide.animate(
        {left: destination},
        speed,
        'linear',
        function() {

          let width;

          if (start === 0) {

            if (slide === one && oneNeedsUpdate) {
              // console.log('UPDATE ONE REGULAR');
              update(one, content);
              oneNeedsUpdate = false;
            } else if (slide === two && twoNeedsUpdate) {
              // console.log('UPDATE TWO REGULAR');
              update(two, content);
              twoNeedsUpdate = false;
            }

            slide === one ? width = two.width() : width = one.width();
            speed = settings.speed * width;
            slide.css({'left': width});
            animateSlide(slide, width, 0, speed);

          } else {

            slide === one ? width = one.width() : width = two.width();
            speed = settings.speed * width;
            animateSlide(slide, 0, -width, speed);

          }

        }
      );

    }

    // _______ Resize _______

    $(window).on('resize', function() {
      if ($(window).width() != windowWidth) {

        if ($(window).width() > windowWidth) {
          if (one.position().left > 0) {
            // console.log('UPDATE ONE IMMEDIATELY');
            update(one, content);
            twoNeedsUpdate = true;
          } else if (two.position().left > 0) {
            // console.log('UPDATE TWO IMMEDIATELY');
            update(two, content);
            oneNeedsUpdate = true;
          }
        } else {
          oneNeedsUpdate = true;
          twoNeedsUpdate = true;
        }

        windowWidth = $(window).width();

      }
    });

    // _______ Init _______

    init();

    return this;

  };
})(jQuery);

// A/B Test PDP 003 - Gallery Redesign JavaScript

(function() {
  'use strict';

  if (!document.body.classList.contains('test_pdp_003')) {
    return;
  }

  function initTestPDP003() {
    if (typeof jQuery === 'undefined' || typeof jQuery.fn.slick === 'undefined') {
      setTimeout(initTestPDP003, 100);
      return;
    }

    var $ = jQuery;
    var $productSlider = $('.product-slider');
    var $thumbnailSlider = $('.product-slider-thumbnail');

    if ($productSlider.length === 0) {
      return;
    }

    setTimeout(function() {
      var isDesktop = window.innerWidth > 749;

      if ($productSlider.hasClass('slick-initialized')) {
        $productSlider.slick('unslick');
      }
      if ($thumbnailSlider.hasClass('slick-initialized')) {
        $thumbnailSlider.slick('unslick');
      }

      if (isDesktop) {
        $productSlider.slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
          infinite: true,
          asNavFor: '.product-slider-thumbnail',
          prevArrow: $('.product-slider-arrow--prev'),
          nextArrow: $('.product-slider-arrow--next')
        });

        $thumbnailSlider.slick({
          slidesToShow: 6,
          slidesToScroll: 1,
          asNavFor: '.product-slider',
          dots: false,
          arrows: false,
          focusOnSelect: true,
          infinite: true
        });
      } else {

        var centerPadding = '30px';

        $productSlider.slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          infinite: true,
          centerMode: true,
          centerPadding: centerPadding
        });
      }
    }, 500);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTestPDP003);
  } else {
    initTestPDP003();
  }
})();

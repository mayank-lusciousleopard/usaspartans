$(document).ready(function() {
    $("body").on("contextmenu", function() {
        return false;
    });
});

$('.product-slider').slick({
  autoplay: false,
  infinite: false,
  slidesToScroll: 1,
//   prevArrow:"<img class='a-left control-c prev slick-prev' src='https://uploads-ssl.webflow.com/64ef44515a5a363056a231f6/64ef49328cff342e783bcd11_prev.svg'>",
//   nextArrow:"<img class='a-right control-c next slick-next' src='https://uploads-ssl.webflow.com/64ef44515a5a363056a231f6/64ef49392f7a1b00f9a7c574_next.svg'>",
  slidesToShow: 1,
  arrows: false,
  asNavFor: '.product-slider-thumbnail',
  responsive: [
    {
      breakpoint: 749,
      settings: {
        slidesToShow: 1.1,
        dots: true,
      }
    }
  ]
});
$('.product-slider-thumbnail').slick({
  autoplay: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.product-slider',
  dots: true, // tuned on for test-pdp-003
  arrows: false,
  focusOnSelect: true,
  variableWidth: false,
  responsive: [
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      infinite: false
    }
  }
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
  ]
});

$('.upsell-slider').slick({
  dots: true,
  autoplay: true,
  arrows: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    },
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.featured-logos-slider').slick({
  dots: false,
  autoplay: true,
  arrows: false,
  infinite: false,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.customers-slider').slick({
  dots: false,
  autoplay: true,
  arrows: true,
  infinite: false,
  speed: 1000,
  prevArrow:"<img class='a-left control-c prev slick-prev' src='https://uploads-ssl.webflow.com/64ef44515a5a363056a231f6/64ef49328cff342e783bcd11_prev.svg'>",
  nextArrow:"<img class='a-right control-c next slick-next' src='https://uploads-ssl.webflow.com/64ef44515a5a363056a231f6/64ef49392f7a1b00f9a7c574_next.svg'>",
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.plunge-slider').slick({
  dots: true,
  autoplay: true,
  arrows: false,
  infinite: false,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.faq-reviews-slider').slick({
  dots: true,
  autoplay: true,
  arrows: false,
  infinite: false,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false
      }
    },
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$(document).ready(function() {
  $('label.option-field').click(function() {
    $('label.option-field').removeClass('option-active');
    $(this).addClass('option-active');
  });
});

$(document).ready(function() {
  $('label.add-field').click(function() {
    $('label.add-field').removeClass('add-active');
    $(this).addClass('add-active');
  });
});

$(document).ready(function() {
  $('.quantity-item').click(function() {
    $('.quantity-item').removeClass('quantity-active');
    $(this).addClass('quantity-active');
    var qty_value = $('.header-product-quantity-wrap .header-product-quantity-row .quantity-item.quantity-active').attr('qty');
    console.log(qty_value , '===============>qty_value');
    $('quantity-input .quantity__input').attr("value",qty_value);
  });
});

$(document).ready(function() {
  $('.benefit-item').click(function() {
    $('.benefit-item').removeClass('benefit-active');
    $(this).addClass('benefit-active');
  });
});

$(document).ready(function() {
  $('.header-product-desc-wrap .header-product-desc-read-more').click(function() {
    $('.show_hidden').toggleClass('remove');
  });

  var length = $('.header-product-upsell-wrap .upsell-slider .slick-track .upsell-item');
  console.log(length.length , 'length=========================:::')
  if (length.length == 0){
    console.log("0 length");
     $('.header-product-upsell-wrap').addClass('hidden');
  }
});
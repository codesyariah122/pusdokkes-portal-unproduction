$(document).on("ready", function() {
 $(".js-slick-carousel").each(function() {
  var slickCarousel = $.HSCore.components.HSSlickCarousel.init($(this));
  console.log(slickCarousel)
})
})

$('.weekly-news-active').slick({
  dots: true,
  infinite: true,
  speed: 500,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay:true,
  initialSlide: 3,
  loop:true,
  responsive: [
  {
   breakpoint: 1024,
   settings: {
     slidesToShow: 3,
     slidesToScroll: 3,
     infinite: true,
     dots: false,
   }
 },
 {
   breakpoint: 991,
   settings: {
     slidesToShow: 1,
     slidesToScroll: 1
   }
 },
 {
   breakpoint: 480,
   settings: {
     slidesToShow: 1,
     slidesToScroll: 1
   }
 }

 ]
});

$('.video-items-active').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor:'.testmonial-nav'
});
$('.testmonial-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.video-items-active',
  dots: false,
  prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
  nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
  centerMode: true,
  focusOnSelect: true,
  centerPadding:0,
  responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      infinite: true,
      dots: false,
    }
  },
  {
    breakpoint: 991,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
  ]

});

(function () {
  "use strict";
  $('#js-news').ticker();

  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });
  alert("OK")
});



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
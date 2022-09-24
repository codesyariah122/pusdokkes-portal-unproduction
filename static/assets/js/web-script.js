$(document).on("ready", function() {
 var header = new HSHeader($("#header")).init();
 var megaMenu = new HSMegaMenu($(".js-mega-menu"), {
    desktop: {
      position: "left",
    },
  }).init();

   var unfold = new HSUnfold(".js-hs-unfold-invoker").init();

   $(".js-slick-carousel").each(function() {
    var slickCarousel = $.HSCore.components.HSSlickCarousel.init($(this));
  });

   AOS.init({
    duration: 650,
    once: true,
  }
  $(".js-go-to").each(function() {
    var goTo = new HSGoTo($(this)).init();
  });
});
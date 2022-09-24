$(document).on("ready", function() {

  $(".js-go-to").each(function() {
    var goTo = new HSGoTo($(this)).init();
  });
});
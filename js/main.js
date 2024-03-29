$(window).scroll(function() {
  var windowHeight = $(window).height() - 96;

  if ($(this).scrollTop() > windowHeight) {
    $('.main-body .centered-navigation').fadeIn(300);
  } else {
    $('.main-body .centered-navigation').fadeOut(300);
  }
});

$(window).on("load resize",function(e) {

  var menuToggle = $("#js-centered-navigation-mobile-menu").unbind();
  $("#js-centered-navigation-menu").removeClass("show");

  menuToggle.on("click", function(e) {
    e.preventDefault();
    $("#js-centered-navigation-menu").slideToggle(function(){
      if($("#js-centered-navigation-menu").is(":hidden")) {
        $("#js-centered-navigation-menu").removeAttr("style");
      }
    });
  });
});


$(document).ready(function () {
  var wow = new WOW({
    boxClass: "wow",
    animateClass: "animated",
    offset: 0,
    mobile: true,
    live: true,
    callback: function (box) {},
    scrollContainer: null,
    resetAnimation: true,
  });
  wow.init();

  // header-sticky
  window.onscroll = function () {
    headerFunction();
  };
  var body = document.body;
  var sticky = body.offsetTop;
  var header = $("header");

  function headerFunction() {
    if (window.pageYOffset > 100) {
      header.addClass("sticky");
    } else {
      header.removeClass("sticky");
    }
  }

  $("#navMenu").on("click", function () {
    $(".nav-menu .menu").toggleClass("active");
    $("#navMenu").toggleClass("active");
  });
  $(".main,.gallery").click(function () {
    $(".nav-menu .menu").removeClass("active");
  });

  $(".owl-carousel").owlCarousel({
    margin: 10,
    items: 4,
    autoplay: true,
    autoplayTimeout: 2000,
    loop: true,
    fluidSpeed: true,
    responsive: {
      0: {
        items: 1,
      },
      481: {
        items: 2,
      },
      641: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
});
var loader = document.getElementById("loader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});

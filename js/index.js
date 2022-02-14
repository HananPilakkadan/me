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

  function headerFunction() {
    if (window.pageYOffset > 100) {
      body.classList.add("sticky");
    } else {
      body.classList.remove("sticky");
    }
  }

  $(".hamburger").on("click", function () {
    $("body").toggleClass("menu-active");
  });
  $(".main,.gallery").click(function () {
    $("body").removeClass("menu-active");
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
      480: {
        items: 3,
      },
      360: {
        items: 2,
      },
      600: {
        items: 2,
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
	})
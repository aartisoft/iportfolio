var typed = new Typed("#typed", {
  strings: ["Web Designer", "Web Developer", "Freelancer", "Photographer"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
  backDelay: 2000,
});

AOS.init({
  duration: 1000,
  easing: "ease-in-out-back",
});

// Owl Carousel
$(document).ready(function () {
  $("#toogle_btn").click(function () {
    $(".header").toggleClass("active-toggle");
    $(".footer").toggleClass("active-toggle");
  });

  var $navButton = $(".header .header_nav .nav-menu li a");

  $navButton.click(function (e) {
    $navButton.removeClass("active");
    $(".header").removeClass("active-toggle");
    $(".footer").removeClass("active-toggle");
  });

  // isotop
  var $btns = $(".portfolio_buttons_group li");

  $btns.click(function (e) {
    $(".portfolio_buttons_group li").removeClass("active");
    e.target.classList.add("active");

    let selector = $(e.target).attr("data-filter");
    $(".grid").isotope({
      filter: selector,
    });

    return false;
  });

  // Counter
  $(".counter-up").counterUp({
    delay: 10,
    time: 2000,
  });

  $(".testimonial_carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      900: {
        items: 3,
      },
    },
  });
});

// Maps
var map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: -34.397,
      lng: 150.644,
    },
    zoom: 8,
  });
}

// Back To Top
jQuery(".back-to-top").click(function () {
  jQuery("body,html").animate(
    {
      scrollTop: 0,
    },
    600
  );
});
jQuery(window).scroll(function () {
  if (jQuery(window).scrollTop() > 150) {
    jQuery(".back-to-top").addClass("visible");
  } else {
    jQuery(".back-to-top").removeClass("visible");
  }
});

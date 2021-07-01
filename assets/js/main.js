$(document).ready(function () {
  /*Slider top page*/
  // $(".js-slider")
  //   .on("init", function () {
  //     $('.slick-slide[data-slick-index="0"]').addClass("is-moving");
  //   })
  //   .slick({
  //     fade: true,
  //     accessibility: false,
  //     autoplay: true,
  //     autoplaySpeed: 8000,
  //     speed: 2400,
  //     dots: false,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     variableWidth: false,
  //     infinite: true,
  //     swipe: false,
  //     pauseOnHover: false,
  //   })
  //   .on("beforeChange", function (event, slick, currentSlide, nextSlide) {
  //     var slide_num = $(".slick-slide", this).length;
  //     $(
  //       '.slick-slide[data-slick-index="' + (currentSlide - 1) + '"]'
  //     ).removeClass("is-moving");
  //     $('.slick-slide[data-slick-index="' + nextSlide + '"]').addClass(
  //       "is-moving"
  //     );
  //     if (slide_num % 2 == 0) {
  //       if (currentSlide == slide_num - 1) {
  //         number = 0;
  //       } else {
  //         number = 2;
  //       }
  //       for (var i = 0; i <= slide_num - 1; i++) {
  //         if (currentSlide == i) {
  //           $(
  //             '.slick-slide[data-slick-index="' +
  //               (slide_num - i - number) +
  //               '"]'
  //           ).removeClass("is-moving");
  //         }
  //       }
  //     } else {
  //       if (currentSlide == slide_num - 1) {
  //         number = 0;
  //       } else {
  //         number = 1;
  //       }
  //       for (var i = 0; i <= slide_num - 1; i++) {
  //         if (currentSlide == i) {
  //           $(
  //             '.slick-slide[data-slick-index="' +
  //               (slide_num - i - number) +
  //               '"]'
  //           ).removeClass("is-moving");
  //         }
  //       }
  //     }
  //   });

  /* scroll q&a link*/
  var scrollAnimating = false;
  $(".c-gnav--1 ul li a, .c-gnav--2 ul li a").click(function () {
    var heightTop = $(".c-header").height();
    var link = $(this).attr("href");
    console.log(link);
    $("html, body").animate(
      {
        scrollTop: $(link).offset().top - heightTop,
      },
      2000
    );
    $(window).scroll(function () {
      if (!scrollAnimating) $("body").stop();
    });
    return false;
  });

  /*Back to top*/
  $(window).scroll(function () {
    var topPos = $(this).scrollTop();
    if (topPos > 100) {
      $(".c-btn__top").addClass("c-btn__top--none");
    } else {
      $(".c-btn__top").removeClass("c-btn__top--none");
    }
  });
  $(".c-btn__top").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
    return false;
  });

  // Active menu
  $(".c-gnav ul li a").on("click", function () {
    var hasOn = $(this).hasClass("is-active");
    $(".c-gnav ul li a").removeClass("is-active");
    if (!hasOn) {
      $(this).addClass("is-active");
    }
  });
});

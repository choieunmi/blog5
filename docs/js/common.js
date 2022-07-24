// aos
console.clear();

$("body > .section-1").imagesLoaded(function () {
  $(".loading").remove();
  AOS.init();
});

// up 버튼
$(document).ready(function () {
  $(".up-btn").click(function () {
    $("html , body").animate(
      {
        scrollTop: 0,
      },
      400
    );
  });
});

$(window).scroll(function () {
  var test = $(this).scrollTop();

  console.log(test);

  if (test >= 700) {
    $(".up-btn").addClass("active");
  } else if (test <= 1000) {
    $(".up-btn").removeClass("active");
  }
});

// ham-menu
$(document).ready(function () {
  $("body").prepend('<div id="overlay">');

  $(".top-bar__ham-menu").click(function () {
    $("html").addClass("active");
  });
  $(".ham-menu__close-btn").click(function () {
    $("html").removeClass("active");
  });
  $("#overlay").click(function () {
    $("html").removeClass("active");
  });
});

// top-bar스크롤

$(window).scroll(function () {
  console.clear;

  let scrollTop = $(window).scrollTop();

  console.log(scrollTop);

  if (scrollTop == 0 || scrollTop < 80) {
    $(".top-bar").removeClass("active");
  } else {
    $(".top-bar").addClass("active");
  }

  if (scrollTop > 0) {
    $(".top-bar__menu-1").addClass("active");
  } else {
    $(".top-bar__menu-1").removeClass("active");
  }
});

// footer-bar
function SwiperBox1__init() {
  const swiper = new Swiper("footer .swiper-box-1 > .swiper", {
    grabCursor: true,
    loop: true,
    navigation: {
      nextEl: "footer .swiper-box-1 .swiper-button-next",
      prevEl: "footer .swiper-box-1 .swiper-button-prev",
    },

    pagination: {
      el: "footer .swiper-pagination",
      type: "fraction",
    },
  });
}

SwiperBox1__init();

$(document).ready(function () {
  $("footer .swiper-box-1").mouseover(function () {
    $("footer div > svg").addClass("active");
    $("footer > div").addClass("active");
    $(this).removeClass("active");
  });

  $("footer .swiper-box-1").mouseout(function () {
    $("footer div > svg").removeClass("active");

    $("footer div").removeClass("active");
    $(this).addClass("active");
  });
});

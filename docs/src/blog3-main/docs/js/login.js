// 언어설정
$(document).ready(function () {
  $(".drop-box").hide();
});

$(".language-box").hover(
  function () {
    $(".drop-box").show('');
  },
  function () {
    $(".drop-box").hide();
  }
);

// 탑
function TopBar__init() {
  $(window).scroll(function () {
    let scrollTop = $(window).scrollTop();

    if (scrollTop == 0) {
      $(".top-bar").removeClass("hover");
    } else {
      $(".top-bar").addClass("hover");
    }
  });
}

TopBar__init();

// top 버튼
$(document).ready(function () {
  $(".up-btn").click(function () {
    $("html , body").animate({
        scrollTop: 0
      },
      1000
    );
  });
});

$(window).scroll(function () {
  var test = $(this).scrollTop();

  console.log(test);

  if (test >= 1000) {
    $(".up-btn").addClass("active");
  } else if (test <= 1000) {
    $(".up-btn").removeClass("active");
  }
});

// 검색팝업
$(document).ready(function () {
  $("#open-btn").on("click", function (event) { //팝업오픈 버튼 누르면
    $(".popup-box").show(); //팝업 오픈
    $('.top-start .modal-mask').addClass('active');
  });
  $("#close-btn").on("click", function (event) {

    $(".popup-box").hide();
    $('.top-start .modal-mask').removeClass('active');
  });
});
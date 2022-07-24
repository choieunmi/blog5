console.clear();

$('body > .section-1').imagesLoaded(function() {
  $('.loading').remove();
  AOS.init();
});

// 스크롤하면서 내려가서 하나만 로딩되면 화면나오게 설정 section1만 보이면 로딩끝.


// up 버튼
$(document).ready(function () {
  $(".up-btn").click(function () {
    $("html , body").animate(
      {
        scrollTop: 0
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

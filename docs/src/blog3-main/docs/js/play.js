// top 버튼
$(document).ready(function () {
  $(".up-btn").click(function () {
    $("html , body").animate(
      {
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



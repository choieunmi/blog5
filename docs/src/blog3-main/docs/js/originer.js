// 스와이퍼
// 추천작
const swiper1 = new Swiper(" .swiper-box-1 > .swiper", {
  slidesPerView: 5,
  spaceBetween: 20,
  slidesPerGroup: 5,
  touchRatio: 0,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-box-1 .swiper-button-next",
    prevEl: ".swiper-box-1 .swiper-button-prev"
  }
});

// 시리즈
const swiper2 = new Swiper(" .swiper-box-2 > .swiper", {
  slidesPerView: 5,
  spaceBetween: 20,
  slidesPerGroup: 5,
  touchRatio: 0,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-box-2 .swiper-button-next",
    prevEl: ".swiper-box-2 .swiper-button-prev"
  }
});

//스와이퍼 외
const swiper0 = new Swiper(" .swiper", {
  slidesPerView: 5,
  spaceBetween: 20,
  slidesPerGroup: 5,
  touchRatio: 0
});

// 포스터 이미지 전환
// 버튼
$(document).ready(function(){
  
  $(".section02 > .btn > .btn-2").click(function(){
      
    $(".section03").hide();
    
    $(".section03_ver2").show();
    
 $('.section02 > .text').addClass('active');
    
    $(this).removeClass('active');
    
    $(".section02 > .btn > .btn-1").addClass('active');
      

  });

  
  $(".section02 > .btn > .btn-1").click(function(){
      
    $(".section03_ver2").hide();
    
    $(".section03").show();
    
             $('.section02 > .text').removeClass('active');
    
    
    $(this).removeClass('active');
    
    $(".section02 > .btn > .btn-2").addClass('active');
      

  });

});

// up 버튼
$(document).ready(function () {
  $(".up-btn").click(function () {
    $("html , body").animate(
      {
        scrollTop: 0
      },
      700
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


// top-bar
$(window).scroll(function () {
  var test = $(this).scrollTop();

  console.log(test);

  if (test > 172) {
    $(".top-bar-ver2").addClass("active");
  }else  { $(".top-bar-ver2").removeClass("active");
         }
});

new AOS.init();
new WOW().init();

// 언어설정
$(document).ready(function() {
  $(".drop-box").hide(); 
});

$(".language-box").hover(
  function() {
    $(".drop-box").show('');        
  },
  function() {
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
    $("html , body").animate(
      {
        scrollTop: 0
      },
      500
    );
  });
});

$(window).scroll(function () {
  var test = $(this).scrollTop();

  console.log(test);

  if (test >= 500) {
    $(".up-btn").addClass("active");
  } else if (test <= 500) {
    $(".up-btn").removeClass("active");
  }
});

// 검색팝업
  $(document).ready(function(){     
    $("#open-btn").on("click", function(event) {  //팝업오픈 버튼 누르면
    $(".popup-box").show();   //팝업 오픈
      $('.top-start .modal-mask').addClass('active');
    });
    $("#close-btn").on("click", function(event) { 
        
            $(".popup-box").hide(); 
      $('.top-start .modal-mask').removeClass('active');
      });  
  });

// 스와이퍼
function SwiperBox1__init() {
  function onActive(_swiper) {
    const $active_slide = $(_swiper.slides[_swiper.activeIndex]);

    $active_slide.siblings(".video-playing").each(function (index, node) {
      $(node).find("video").get(0).currentTime = 0;
      $(node).find("video").get(0).pause();
      $(node).removeClass("video-playing");
    });

    $active_slide.addClass("video-playing");

    const video = $active_slide.find("video").get(0);
    video.currentTime = 0;
    video.play();
  }

  const MAIN__swiper = new Swiper(".swiper-main-1 .swiper", {
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    slidesPerView: 1.3,
    // If we need pagination
    pagination: {
      el: ".swiper-main-1 .swiper-pagination",
      //dynamicBullets: true,
      clickable: true
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-main-1 .swiper-button-next",
      prevEl: ".swiper-main-1 .swiper-button-prev"
    },
    on: {
      afterInit: function (_swiper) {
        _swiper.on("slideChange", onActive);
      }
    }
  });
}

SwiperBox1__init();

//디즈니독점
const swiper2 = new Swiper('.original-box .swiper', {
  // Optional parameters
  slidesPerView: 5,
  spaceBetween: 20,
  slidesPerGroup: 5,
  loop: true,
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },

  // If we need pagination
  pagination: {
    el: '.original-box .swiper-pagination',
    dynamicBullets: true,
    clickable:true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.original-box .swiper-button-next',
    prevEl: '.original-box .swiper-button-prev',
  },
});

// 탑20
const swiper3 = new Swiper('.swiper-box-3 .swiper', {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-box-3 .swiper-button-next',
    prevEl: '.swiper-box-3 .swiper-button-prev',
  },
});

// 테마별
const sub__swiper = new Swiper('.subject-box .swiper', {
  spaceBetween:20,
  slidesPerView: 5,
  centeredSlides: true,
  loop: true,
  // If we need pagination
  pagination: {
    el: '.subject-box .swiper-pagination',
    clickable:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.subject-box .swiper-button-next',
    prevEl: '.subject-box .swiper-button-prev',
  },

});


// 추천
const swiper__4 = new Swiper('.swiper-box-4 .swiper', {
 slidesPerView: 5, // 동시에 보여줄 슬라이드 갯수
  spaceBetween: 20, // 슬라이드간 간격
  slidesPerGroup: 5, // 그룹으로 묶을 수, slidesPerView 와 같은 값을 지정하는게 좋음
  
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-box-4 .swiper-button-next",
    prevEl: ".swiper-box-4 .swiper-button-prev"
  },
});

// 최신작
const swiper__5 = new Swiper('.new-box .swiper', {
  // Optional parameters
  slidesPerView: 5, // 동시에 보여줄 슬라이드 갯수
  spaceBetween: 20, // 슬라이드간 간격
  slidesPerGroup: 5, // 그룹으로 묶을 수, slidesPerView 와 같은 값을 지정하는게 좋음
  
  
  // Navigation arrows
  navigation: {
    nextEl: ".new-box .swiper-button-next",
    prevEl: ".new-box .swiper-button-prev"
  },
});

// 클립
const swiper6 = new Swiper('.swiper-box-6 .swiper', {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-box-6 .swiper-button-next',
    prevEl: '.swiper-box-6 .swiper-button-prev',
  },
});

// 자주묻는질문
$("ul.list-1 > li").click(function () {
  if ($(this).hasClass("active")) {
    $(this).removeClass("active");
  } else {
    $(this).addClass("active");
  }
});


// 별자리효과
const nodesjs = new NodesJs({
  id: 'nodes',
  width: window.innerWidth,
  height: window.innerHeight,
  particleSize: 2,
  lineSize: 1,
  particleColor: [255, 255, 255, 0.3],
  lineColor: [255, 255, 255],
  backgroundFrom: [10, 25, 100],
  backgroundTo: [25, 50, 150],
  backgroundDuration: 4000,
  nobg: true,
  number: window.hasOwnProperty('orientation') ? 30: 100,
  speed: 100
});

window.onresize = function () {
  nodesjs.setWidth(window.innerWidth);
  nodesjs.setHeight(window.innerHeight);
};
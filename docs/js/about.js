// aspiration
function SwiperBox1__init() {
var swiper1 = new Swiper('.text-swiper', {
  loop: true,
  centeredSlides: true,
  slidesPerView:1.2,
  // If we need pagination
  pagination: {
    el: '.swiper-box-1 .swiper-pagination',
    clickable:true,
    
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-box-1 .swiper-button-next',
    prevEl: '.swiper-box-1 .swiper-button-prev',
  },

});


var swiper2 = new Swiper('.img-swiper', {
  loop: true,
  centeredSlides: true,
  slidesPerView:1.2,
});

  swiper1.controller.control = swiper2;
  swiper2.controller.control = swiper1;
  
}
SwiperBox1__init();
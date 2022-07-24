// 스크롤다운

$(function() {
    $('a[href*=#]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
  });

  
  // concept
  $(".zoom").hover(
      function(){
         // 마우스오버되었을때 이벤트
         $(".concept").addClass("active");
      }, function() {
         // 마우스아웃되었을때 이벤트
        $(".concept").removeClass("active");
      }
  );
  
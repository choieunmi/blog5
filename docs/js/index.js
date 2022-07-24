// section 동작
setTimeout(function () {
  $(".section-group").addClass("active");
  $(".bg_light").addClass("active");
  $(".bg_2").addClass("active");
  $(".butter-2").addClass("active");
  $(".butter-3").addClass("active");
  $(".section-1__title").addClass("active");
  $("svg").addClass("active");
}, 2000);


// svg길이
const pathes = $("svg").find("path");
pathes.each(function (i, path) {
  var total_length = path.getTotalLength();
  console.log(total_length);
});

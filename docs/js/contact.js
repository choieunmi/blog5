var bubbleLifeTime = 20;
var noOfBubbles = 100;

var wrapper = document.querySelector('.wrapper');
var bubbles = [];

init();

function init() {
    var bubble;
    for(var i = 0; i < noOfBubbles; i++) {
      bubble = createBubble();
      wrapper.appendChild(bubble);
    }
}

function createBubble() {
  var circleContainer = document.createElement('div');
  circleContainer.classList.add('circle_container');
  circleContainer.style.transform = "rotate(" + Math.floor(Math.random() * 360) + "deg)";

  var circle = createCircle();
  circleContainer.appendChild(circle);

  return circleContainer;
}

function createCircle() {
  var circle = document.createElement('div');
  circle.classList.add('circle');
  circle.style.animationDelay = (Math.random() * bubbleLifeTime) + 's';

  var side = (5 + Math.floor(Math.random() * 10)) + 'px';
  circle.style.width = side;
  circle.style.height = side;

  return circle;
}



// ham-menu
$(document).ready(function () {
  $("body").prepend('<div id="overlay">');

  $(".top-bar__ham-menu").click(function () {
    $(".top-bar__menu-1").addClass("active");

    $("html").addClass("active");
  });
  $(".ham-menu__close-btn").click(function () {
    $("html").removeClass("active");
  });
  $("#overlay").click(function () {
    $(".top-bar__menu-1").removeClass("active");
    $("html").removeClass("active");
  });
});


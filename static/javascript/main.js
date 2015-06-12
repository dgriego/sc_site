/*
Usage: stackBlurImage( sourceImageID, targetCanvasID, radius, blurAlphaChannel );
or: stackBlurCanvasRGBA( targetCanvasID, top_x, top_y, width, height, radius );
or: stackBlurCanvasRGB( targetCanvasID, top_x, top_y, width, height, radius );
*/

//--// StackBlur image background
$(function() {
  // Change this value to adjust the amount of blur
  var BLUR_RADIUS;
  if(location.pathname === '/') {
    BLUR_RADIUS = 20;
  } else {
    BLUR_RADIUS = 20;
  }

  var canvas = document.querySelector('[data-canvas]');
  var canvas2 = document.querySelector('[data-canvas-two]');
  var canvas3 = document.querySelector('[data-canvas-three]');
  var canvas4 = document.querySelector('[data-canvas-four]');
  var canvasContext = canvas.getContext('2d');
  var canvasContext2 = canvas2.getContext('2d');
  var canvasContext3 = canvas3.getContext('2d');
  var canvasContext4 = canvas4.getContext('2d');

  var image = new Image();
  var image2 = new Image();
  var image3 = new Image();
  var image4 = new Image();
  image.src = document.querySelector('[data-canvas-image]').src;
  image2.src = document.querySelector('[data-canvas-image-two]').src;
  image3.src = document.querySelector('[data-canvas-image-three]').src;
  image4.src = document.querySelector('[data-canvas-image-four]').src;

  var drawBlur = function() {
    var w = canvas.width;
    var w2 = canvas2.width;
    var w3 = canvas3.width;
    var w4 = canvas4.width;
    var h = canvas.height;
    var h2 = canvas2.height;
    var h3 = canvas3.height;
    var h4 = canvas4.height;
    canvasContext.drawImage(image, 0, 0, w, h);
    canvasContext2.drawImage(image2, 0, 0, w2, h2);
    canvasContext3.drawImage(image3, 0, 0, w3, h3);
    canvasContext4.drawImage(image4, 0, 0, w4, h4);
    stackBlurCanvasRGBA('scCanvas', 0, 0, w, h, BLUR_RADIUS);
    stackBlurCanvasRGBA('scCanvas2', 0, 0, w2, h2, BLUR_RADIUS);
    stackBlurCanvasRGBA('scCanvas3', 0, 0, w3, h3, BLUR_RADIUS);
    stackBlurCanvasRGBA('scCanvas4', 0, 0, w4, h4, BLUR_RADIUS);
  };

  image.onload = function() {
    drawBlur();
  }

  $('joomag').onload = function() {
    $('joomag').find('j-header').css('display', 'none');
  }

  $('.your-class').slick({adaptiveHeight: true});

  //set margin height for homePage image if window height
  //is large than 877
  // resizeImage();

  // $(window).resize(function() {
  //   resizeImage();
  // });
  resizeDiv();

  window.onresize = function(event) {
    resizeDiv();
  }
});

// $(document).ready(function(){
//   resizeDiv();
// });



function resizeDiv() {
  vpw = $(window).width();
  vph = $(window).height();
  $('.window_height').css({'height': vph + 'px'});
  // $('.window_height').css({'width': vpw + 'px'});
}

// function resizeImage() {
//   var nav = $('.fixed_nav');
//   var window_height = window.outerHeight;
//   if(window_height > 877 && nav[0].clientHeight < 95) {
//     $('.sc_home').css('margin-top', '45px');
//   } else if(nav[0].clientHeight >= 90) {
//     $('.sc_home').css('margin-top', '90px');
//   } else {
//     $('.sc_home').css('margin-top', '0');
//   }
// }
// // Alternative method for extracting the images with embed.ly
// var response;
// $('<hr>').insertAfter('.about h5');
// $.ajax({
//   url: "http://api.embed.ly/1/extract?key=72af088fee8d4611bc691cef6d582a6a&url=http%3A%2F%2Fwww.joomag.com%2Fen%2Fnewsstand%2Femage-magazine%2FM0461960001402084573&maxwidth=500",
//   dataType: 'JSON',
//   crossDomain: true
// }).done(function(data) {
//   $('.bookshelf_image').attr('src', data.images[0].url);
// });

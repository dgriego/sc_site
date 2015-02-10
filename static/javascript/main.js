/*
Usage: stackBlurImage( sourceImageID, targetCanvasID, radius, blurAlphaChannel );
or: stackBlurCanvasRGBA( targetCanvasID, top_x, top_y, width, height, radius );
or: stackBlurCanvasRGB( targetCanvasID, top_x, top_y, width, height, radius );
*/

$(function() {
  // Change this value to adjust the amount of blur
  var BLUR_RADIUS = 20;

  var canvas = document.querySelector('[data-canvas]');
  var canvasContext = canvas.getContext('2d');

  var image = new Image();
  image.src = document.querySelector('[data-canvas-image]').src;

  var drawBlur = function() {
    var w = canvas.width;
    var h = canvas.height;
    canvasContext.drawImage(image, 0, 0, w, h);
    stackBlurCanvasRGBA('scCanvas', 0, 0, w, h, BLUR_RADIUS);
  };

  image.onload = function() {
    drawBlur();
  }
});


// add line after internal paragraph headers
$('<hr>').insertAfter('.about h5');

var url = 'http://www.joomag.com/en/newsstand/';
    url+= 'emage-magazine-issue-1/0809674001402084795';
$('#bookshelf').load(url + ' .j-magazine-container');

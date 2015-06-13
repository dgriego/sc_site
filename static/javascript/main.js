/*
Usage: stackBlurImage( sourceImageID, targetCanvasID, radius, blurAlphaChannel );
or: stackBlurCanvasRGBA( targetCanvasID, top_x, top_y, width, height, radius );
or: stackBlurCanvasRGB( targetCanvasID, top_x, top_y, width, height, radius );
*/

//--// StackBlur image background
$(function() {

  $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);
      var scroll_offset;
      if($target.selector === '#emage_page' ||
         $target.selector === '#books' ||
         $target.selector === '#testimonials' ||
         $target.selector === '#pub' ||
         $target.selector === '#pa') {
        scroll_offset = $target.offset().top - 50;
      } else {
        scroll_offset = $target.offset().top
      }

      $('html, body').stop().animate({
          'scrollTop': scroll_offset
      }, 900, 'swing', function () {
          window.location.hash = target;
      });
  });

  $('joomag').onload = function() {
    $('joomag').find('j-header').css('display', 'none');
  }

  $('.your-class').slick({adaptiveHeight: true});
  resizeDiv();

  window.onresize = function(event) {
    resizeDiv();
  }

  $('#privacy_policy').click(function() {
    $('.privacy_policy_overlay').css('display', 'inherit');
  });

  $('.privacy_policy_overlay').click(function() {
    $(this).css('display', 'none');
  });

  $('#terms_and_conditions').click(function() {
    $('.terms_and_conditions_overlay').css('display', 'inherit');
  });

  $('.terms_and_conditions_overlay').click(function() {
    $(this).css('display', 'none');
  });
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

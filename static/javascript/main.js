/*
Usage: stackBlurImage( sourceImageID, targetCanvasID, radius, blurAlphaChannel );
or: stackBlurCanvasRGBA( targetCanvasID, top_x, top_y, width, height, radius );
or: stackBlurCanvasRGB( targetCanvasID, top_x, top_y, width, height, radius );
*/

//--// StackBlur image background
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

  $('joomag').onload = function() {
    $('joomag').find('j-header').css('display', 'none');
  }
});

//--// CONTACT FORM
$(function() {
    // Get the form.
    var form = $('#ajax-contact');

    // Get the messages div.
    var formMessages = $('#form-messages');

    $(form).submit(function(event) {
        // Stop the browser from submitting the form.
        event.preventDefault();

        // Serialize the form data.
        var formData = $(form).serialize();

        // Submit the form using AJAX.
        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData
        }).done(function(response) {
            // Make sure that the formMessages div has the 'success' class.
            $(formMessages).removeClass('error');
            $(formMessages).addClass('success');

            // Set the message text.
            $(formMessages).text(response);

            // Clear the form.
            $('#name').val('');
            $('#email').val('');
            $('#message').val('');
        }).fail(function(data) {
            // Make sure that the formMessages div has the 'error' class.
            $(formMessages).removeClass('success');
            $(formMessages).addClass('error');

            // Set the message text.
            if (data.responseText !== '') {
                $(formMessages).text(data.responseText);
            } else {
                $(formMessages).text('Oops! An error occured and your message could not be sent.');
            }
        });
    });
});


//--// Alternative method for extracting the images with embed.ly
// var response;
// $('<hr>').insertAfter('.about h5');
// $.ajax({
//   url: "http://api.embed.ly/1/extract?key=72af088fee8d4611bc691cef6d582a6a&url=http%3A%2F%2Fwww.joomag.com%2Fen%2Fnewsstand%2Femage-magazine%2FM0461960001402084573&maxwidth=500",
//   dataType: 'JSON',
//   crossDomain: true
// }).done(function(data) {
//   $('.bookshelf_image').attr('src', data.images[0].url);
// });

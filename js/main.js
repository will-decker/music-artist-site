$("a[href^='#']").click(function (e) {
  e.preventDefault();

  var position = $($(this).attr("href")).offset().top;

  $("body, html").animate({
    scrollTop: position
  } /* speed */);

  $('nav').addClass('black');

});


$(window).on('wheel', function () {
  if ($(window).scrollTop()) {
    $('nav').addClass('black');
  } else {
    $('nav').removeClass('black');
  }
})


// $(function () {

//   // Find all YouTube videos
//   var $allVideos = $("iframe[src^='https://www.youtube.com']"),

//     // The element that is fluid width
//     $fluidEl = $(".video-feature");

//   // Figure out and save aspect ratio for each video
//   $allVideos.each(function () {

//     $(this)
//       .data('aspectRatio', this.height / this.width)

//       // and remove the hard coded width/height
//       .removeAttr('height')
//       .removeAttr('width');

//   });

//   // When the window is resized
//   // (You'll probably want to debounce this)
//   $(window).resize(function () {

//     var newWidth = $fluidEl.width();

//     // Resize all videos according to their own aspect ratio
//     $allVideos.each(function () {

//       var $el = $(this);
//       $el
//         .width(newWidth * .8)
//         .height((newWidth * .8) * $el.data('aspectRatio'));

//     });

//     // Kick off one resize to fix all videos on page load
//   }).resize();

// });

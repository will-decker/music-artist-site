$(document).ready(function() {
  $(".menu-icon").on("click", function() {
    $("nav ul").toggleClass("showing");
  });
});

// Adds smooth scrolling animation
$("a[href^='#']").click(function(e) {
  e.preventDefault();

  var position = $($(this).attr("href")).offset().top;
  var headerHeight;

  function headerOffset() {
    if ($(window).width() >= 1024) {
      headerHeight = 130;
    } else {
      headerHeight = 70;
    }
    return headerHeight;
  }

  $("body, html").animate(
    {
      scrollTop: position - headerOffset()
    },
    1000
  );

  $("nav").addClass("black");
});

// Adding background to navbar on scroll
$(window).on("wheel", function() {
  if ($(window).scrollTop()) {
    $("nav").addClass("black");
  } else {
    $("nav").removeClass("black");
  }
});

// $(function() {
//   // Find all YouTube videos
//   var $allVideos = $("iframe[src^='https://www.youtube.com']"),
//     // The element that is fluid width
//     $fluidEl = $(".video-feature");

//   // Figure out and save aspect ratio for each video
//   $allVideos.each(function() {
//     $(this)
//       .data("aspectRatio", this.height / this.width)

//       // and remove the hard coded width/height
//       .removeAttr("height")
//       .removeAttr("width");
//   });

//   // When the window is resized
//   // (You'll probably want to debounce this)
//   $(window)
//     .resize(function() {
//       var newWidth = $fluidEl.width();

//       // Resize all videos according to their own aspect ratio
//       $allVideos.each(function() {
//         var $el = $(this);
//         $el
//           .width(newWidth * 0.49)
//           .height(newWidth * 0.49 * $el.data("aspectRatio"));
//       });

//       // Kick off one resize to fix all videos on page load
//     })
//     .resize();
// });

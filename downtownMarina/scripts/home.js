// Instagram Carousel JS (for small displays only)
const instagramCarousel = () => {$('#carousel-instagram').on('slide.bs.carousel', function (e) {
  var $e = $(e.relatedTarget);
  var idx = $e.index();
  var totalItems = $('#carousel-instagram .carousel-item').length;
  var itemsPerSlide = totalItems - 3;

  if (idx >= totalItems-(itemsPerSlide-1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i=0; i<it; i++) {
          // append slides to end
          if (e.direction=="left") {
              $('#carousel-instagram .carousel-item').eq(i).appendTo('.carousel-inner');
          }
          else {
              $('#carousel-instagram .carousel-item').eq(0).appendTo('.carousel-inner');
          }
      }
  }
})};

$(document).ready(function() {
  //Checks if to show carousel or grid on page load
  if ($(window).width() > 576 ){
    $('#live-carousel').hide();
    $('#live-grid').show();
  } else {
    $('#live-carousel').show();
    $('#live-grid').hide();
  }

  //Checks if to show carousel or grid on page resize
  $(window).resize(function() {
    if ($(window).width() > 576 ){
      $('#live-carousel').hide();
      $('#live-grid').show();
    } else {
      $('#live-carousel').show();
      $('#live-grid').hide();
    }
  });

  if ($(window).width() > 768 ){
    $('#instagram-grid').show();
    $('#carousel-instagram').hide();
  } else {
    $('#carousel-instagram').show();
    $('#instagram-grid').hide();
    instagramCarousel();
  }

  $(window).resize(function() {
    if ($(window).width() > 768 ){
      $('#instagram-grid').show();
      $('#carousel-instagram').hide();
    } else {
      $('#carousel-instagram').show();
      $('#instagram-grid').hide();
      instagramCarousel();
    }
  });
})
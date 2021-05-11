$(document).ready(function() {
  $('.back').on('click', function() {
    window.location.href = "../templates/boatRentals.html"
  });
  $('.sub-img').on({
        mouseover: function () {
            $(this).css({
                'cursor': 'pointer',
                'box-shadow': '#0080c8 4px 4px'
            });
        },
        mouseout: function () {
            $(this).css({
                'cursor': 'default',
                'box-shadow': 'none'
            });
        },
        click: function () {
            const imageURL = $(this).attr('src');
            $('#mainImage').fadeOut(300, function () {
                $(this).attr('src', imageURL);
            }).fadeIn(300);
        }
    });
});
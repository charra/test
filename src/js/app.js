

//= require ../vendor/jquery/dist/jquery.js

//= require ../vendor/slick-carousel/slick/slick.js

// = require ../vendor/bootstrap-sass/assets/javascripts/bootstrap.js

//= require partials/main.js

$(document).on('ready', function() {                
  $(".center").slick({
    dots: true,
    arrows: false,
    infinite: true,                    
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: false,
    autoplaySpeed: 2000
  });                
});
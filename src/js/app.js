var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
    lat: 50.01491644, lng: 36.22078389},
    zoom: 14,
    zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.DEFAULT,
    },
    disableDoubleClickZoom: true,
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
    },
    scaleControl: true,
    scrollwheel: true,
    panControl: true,
    streetViewControl: true,
    draggable : true,
    overviewMapControl: true
  });

  var image = 'assets/images/marker-map.png';
  var beachMarker = new google.maps.Marker({
    position: {lat: 50.01491644, lng: 36.22078389},
    map: map,
    icon: image
  });
}

//= require ../vendor/jquery/dist/jquery.js

//= require ../vendor/slick-carousel/slick/slick.js

//= require partials/main.js

/*slider*/
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

  //ancor scroll

  $("#menu").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 800);
  });

  $("#opener").on("click", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 800);
  });

//hide button and show input block

  $(".open").on("click", function (event) {
    event.preventDefault();
    $(".button-hide").fadeOut();
    $(".file-input-container").fadeIn();
  });

//custom file input

  $(document).on('change', ':file', function() {
    var input = $(this),
        numFiles = input.get(0).files ? input.get(0).files.length : 1,
        label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
        input.trigger('fileselect', [numFiles, label]);
  });
//show file  which was attached  
  $(document).ready( function() {
    $(':file').on('fileselect', function(event, numFiles, label) {
      var input = $(this).parents('.upload-container').find(':text'),
        log = numFiles > 1 ? numFiles + ' files selected' : label;
          if( input.length ) {
            input.val(log);
          } 
          else {
            if( log ) alert(log);
          }
    });
  });
});





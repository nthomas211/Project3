  function init(){
  var map = new google.maps.Map(document.getElementById('map'), { center: {lat: 41.88696692015735, lng: -87.78954637418263},
      zoom: 14 });
  var lake = new google.maps.LatLng(41.887000, -87.821107);
  var marker =new google.maps.Marker ({
   position: {lat: 41.887000, lng: -87.821107},
   map: map,
   animation: google.maps.Animation.BOUNCE,
   icon: 'media/down.png'
  })
   
  
}

google.maps.event.addDomListener(window, 'load', init);

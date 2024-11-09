  function initMap(){
  var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 41.87365210641366, lng: -87.77835794192839},
      zoom: 14
    });
}

google.maps.event.addDomListener(window, 'load', initMap);
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
  var marker2 =new google.maps.Marker ({
   position: {lat: 41.87491697831416, lng: -87.82215307573598},
   map: map,
   animation: google.maps.Animation.BOUNCE,
   icon: 'media/down.png'
  })
  var marker3 =new google.maps.Marker ({
   position: {lat: 41.87163523401167, lng: -87.77707779445173},
   map: map,
   animation: google.maps.Animation.BOUNCE,
   icon: 'media/down.png'
  })
  var contentString = '<h1>Keystone Park</h1><p>A fun park at night to play tennis and climb onto the train tracks</p>';
  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });  
  var contentString1 = '<h1>Graveyard</h1><p>A long parking lot in the graveyard next to the Forest Park CTA blue line stop</p>';
  var infowindow2 = new google.maps.InfoWindow({
      content: contentString1
      });  
  var contentString2 = '<h1>Eisenhower Spot</h1><p>A seculed street along the Eisenhower expressway</p>';
  var infowindow3 = new google.maps.InfoWindow({
      content: contentString2
  });
  google.maps.event.addListener(marker, 'mouseover', function() {
    	infowindow.open(map, marker);
      	});
  google.maps.event.addListener(marker2, 'mouseover', function() {
    	infowindow2.open(map, marker2);
      	}); 
   google.maps.event.addListener(marker3, 'mouseover', function() {
    	infowindow3.open(map, marker3);
      });
  
}

google.maps.event.addDomListener(window, 'load', init);

function initialize() {
    var myLatlng = new google.maps.LatLng(42.144991, -71.232199);
    var mapOptions = {
        zoom: 9,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        draggable: false,
        zoomControl: true
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    var contentString = 'Jones Contracting Inc.';

  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });


    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: "Jones Contracting Inc."
    });

    google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });
}
initialize();
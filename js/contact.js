function init_fb(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) 
        return;
    js = d.createElement(s); 
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&appId=1588258464750206&version=v2.3";
    fjs.parentNode.insertBefore(js, fjs);
}

function init_gp() {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://apis.google.com/js/platform.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
}

function init_map() {
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
init_map();
init_gp();
init_fb(document, 'script', 'facebook-jssdk');

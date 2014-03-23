function initialize() {
    var myLatlng = new google.maps.LatLng(42.144991, -71.232199);
    var mapOptions = {
        zoom: 11,
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
function loadScript() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' + 'callback=initialize';
    document.body.appendChild(script);
}
$( "#contact_accordion" ).accordion({
    collapsible: false,
    heightStyle: "content"
});
$( "#contact_form" ).submit(function(event) {
    event.preventDefault();
    var form_post = $.post( "php/handle_form.php", $( "#contact_form" ).serialize() );
    form_post.done(function(response) {
            $( "#tabs" ).tabs("option", "active", 0);
            $( "#contact_form_name" ).val("");
            $( "#contact_form_phone" ).val("");
            $( "#contact_form_email" ).val("");
            $( "#contact_form_subject" ).val("");
            $( "#contact_form_message" ).val("");
    }).fail(function (jqXHR, textStatus, errorThrown) {
        alert("The following error occured: "+textStatus, errorThrown);
    }).always(function(response) {
        console.log("Response: " + response);
        alert(response);
    });
});

loadScript();
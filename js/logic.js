var oldTab = 0;
var newTab = 0;
var about_accordion_state = true;
var excavation_accordion_state = true;
var utilities_accordion_state = true;
var septic_accordion_state = true;
var asphalt_accordion_state = true;
var landscape_accordion_state = true;
var snow_accordion_state = true;
var technical_accordion_state = true;
var gallery_open = false;
var contact_form_phone_index = 0;

$( document ).ready(function($) {
    $( "#gallery_container" ).hide();
    
    $( "#wrap" ).click(function() {
        if(newTab == 1 && gallery_open == true) {
            $( "#wrap" ).removeClass( "ui-widget-shadow" );
            $( "#tabs" ).tabs("option", "active", oldTab);
            $( "#gallery_wrap" ).hide(1000);
            $( "#gallery_container" ).hide(1000);
            gallery_open = false;
        }   
    });
	$( "#tabs" ).tabs({
        activate: function(event, ui) {
            oldTab = ui.oldTab.index();
            newTab = ui.newTab.index();
            if(newTab == 1) {
//                event.preventDefault();  
                gallery_open = true;
            }
            if(newTab == 9) {
                loadScript();
            }
        },
        beforeActivate: function(event, ui) {
            oldTab = ui.oldTab.index();
            newTab = ui.newTab.index();
            if(newTab == 1) {
                $( "#wrap" ).addClass( "ui-widget-shadow" );             
                $( "#gallery_wrap" ).show(1000);
                $( "#gallery_container" ).show(1000);
            }
        },
        hide: 600,
        show: 500
	}).addClass( "ui-tabs-vertical ui-helper-clearfix" );

    $( "#tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );

    $( "#about_accordion" ).accordion({
        collapsible: true,
//        active: true,
        heightStyle: "content",
    }).click(function() {
        if(about_accordion_state == false) {
            about_accordion_state = true;
            $( "html, body" ).animate({ scrollTop: $(document).height() }, "slow" );
        }
        else {
            about_accordion_state = false;
            $( "html, body" ).animate({ scrollTop: 0 }, "slow" );
        }
    });

    $( "#excavation_accordion" ).accordion({
    	collapsible: true,
//    	active: false,
    	heightStyle: "content",
    }).click(function() {
    	if(excavation_accordion_state == false) {
    		excavation_accordion_state = true;
    		$( "html, body" ).animate({ scrollTop: $(document).height() }, "slow" );
    	}
    	else {
    		excavation_accordion_state = false;
    		$( "html, body" ).animate({ scrollTop: 0 }, "slow" );
    	}
    });
    $( "#utilities_accordion" ).accordion({
    	collapsible: true,
 //   	active: false,
    	heightStyle: "content"
    }).click(function() {
    	if(utilities_accordion_state == false) {
    		utilities_accordion_state = true;
    		$( "html, body" ).animate({ scrollTop: $(document).height() }, "slow" );
    	}
    	else {
    		utilities_accordion_state = false;
    		$( "html, body" ).animate({ scrollTop: 0 }, "slow" );
    	}
    });
    $( "#septic_accordion" ).accordion({
    	collapsible: true,
 //   	active: false,
    	heightStyle: "content"
    }).click(function() {
    	if(septic_accordion_state == false) {
    		septic_accordion_state = true;
    		$( "html, body" ).animate({ scrollTop: $(document).height() }, "slow" );
    	}
    	else {
    		septic_accordion_state = false;
    		$( "html, body" ).animate({ scrollTop: 0 }, "slow" );
    	}
    });
    $( "#asphalt_accordion" ).accordion({
    	collapsible: true,
 //   	active: false,
    	heightStyle: "content"
    }).click(function() {
    	if(asphalt_accordion_state == false) {
    		asphalt_accordion_state = true;
    		$( "html, body" ).animate({ scrollTop: $(document).height() }, "slow" );
    	}
    	else {
    		asphalt_accordion_state = false;
    		$( "html, body" ).animate({ scrollTop: 0 }, "slow" );
    	}
    });
    $( "#landscape_accordion" ).accordion({
    	collapsible: true,
 //   	active: false,
    	heightStyle: "content"
    }).click(function() {
    	if(landscape_accordion_state == false) {
    		landscape_accordion_state = true;
    		$( "html, body" ).animate({ scrollTop: $(document).height() }, "slow" );
    	}
    	else {
    		landscape_accordion_state = false;
    		$( "html, body" ).animate({ scrollTop: 0 }, "slow" );
    	}
    });
    $( "#snow_accordion" ).accordion({
    	collapsible: true,
 //   	active: false,
    	heightStyle: "content"
    }).click(function() {
    	if(snow_accordion_state == false) {
    		snow_accordion_state = true;
    		$( "html, body" ).animate({ scrollTop: $(document).height() }, "slow" );
    	}
    	else {
    		snow_accordion_state = false;
    		$( "html, body" ).animate({ scrollTop: 0 }, "slow" );
    	}
    });
    $( "#technical_accordion" ).accordion({
    	collapsible: true,
 //   	active: false,
    	heightStyle: "content"
    }).click(function() {
    	if(technical_accordion_state == false) {
    		technical_accordion_state = true;
    		$( "html, body" ).animate({ scrollTop: $(document).height() }, "slow" );
    	}
    	else {
    		technical_accordion_state = false;
    		$( "html, body" ).animate({ scrollTop: 0 }, "slow" );
    	}
    });
    $( "#contact_accordion" ).accordion({
        collapsible: false,
        heightStyle: "content"
    });

    var _SlideshowTransitions = [
            //Zoom- in
            {$Duration: 1200, $Zoom: 1, $Easing: { $Zoom: $JssorEasing$.$EaseInCubic, $Opacity: $JssorEasing$.$EaseOutQuad }, $Opacity: 2 },
            //Zoom+ out
            {$Duration: 1000, $Zoom: 11, $SlideOut: true, $Easing: { $Zoom: $JssorEasing$.$EaseInExpo, $Opacity: $JssorEasing$.$EaseLinear }, $Opacity: 2 },
            //Rotate Zoom- in
            {$Duration: 1200, $Zoom: 1, $Rotate: true, $During: { $Zoom: [0.2, 0.8], $Rotate: [0.2, 0.8] }, $Easing: { $Zoom: $JssorEasing$.$EaseSwing, $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseSwing }, $Opacity: 2, $Round: { $Rotate: 0.5} },
            //Rotate Zoom+ out
            {$Duration: 1000, $Zoom: 11, $Rotate: true, $SlideOut: true, $Easing: { $Zoom: $JssorEasing$.$EaseInExpo, $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseInExpo }, $Opacity: 2, $Round: { $Rotate: 0.8} },

            //Zoom HDouble- in
            {$Duration: 1200, $Cols: 2, $Zoom: 1, $FlyDirection: 1, $Assembly: 2049, $ChessMode: { $Column: 15 }, $Easing: { $Left: $JssorEasing$.$EaseInCubic, $Zoom: $JssorEasing$.$EaseInCubic, $Opacity: $JssorEasing$.$EaseLinear }, $ScaleHorizontal: 0.5, $Opacity: 2 },
            //Zoom HDouble+ out
            {$Duration: 1200, $Cols: 2, $Zoom: 21, $SlideOut: true, $FlyDirection: 1, $Assembly: 2049, $ChessMode: { $Column: 15 }, $Easing: { $Left: $JssorEasing$.$EaseInExpo, $Zoom: $JssorEasing$.$EaseInExpo, $Opacity: $JssorEasing$.$EaseLinear }, $ScaleHorizontal: 4, $Opacity: 2 },

            //Rotate Zoom- in L
            {$Duration: 1200, $Zoom: 1, $Rotate: true, $During: { $Left: [0.2, 0.8], $Zoom: [0.2, 0.8], $Rotate: [0.2, 0.8] }, $FlyDirection: 1, $Easing: { $Left: $JssorEasing$.$EaseSwing, $Zoom: $JssorEasing$.$EaseSwing, $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseSwing }, $ScaleHorizontal: 0.6, $Opacity: 2, $Round: { $Rotate: 0.5} },
            //Rotate Zoom+ out R
            {$Duration: 1000, $Zoom: 11, $Rotate: true, $SlideOut: true, $FlyDirection: 2, $Easing: { $Left: $JssorEasing$.$EaseInExpo, $Zoom: $JssorEasing$.$EaseInExpo, $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseInExpo }, $ScaleHorizontal: 4, $Opacity: 2, $Round: { $Rotate: 0.8} },
            //Rotate Zoom- in R
            {$Duration: 1200, $Zoom: 1, $Rotate: true, $During: { $Left: [0.2, 0.8], $Zoom: [0.2, 0.8], $Rotate: [0.2, 0.8] }, $FlyDirection: 2, $Easing: { $Left: $JssorEasing$.$EaseSwing, $Zoom: $JssorEasing$.$EaseSwing, $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseSwing }, $ScaleHorizontal: 0.6, $Opacity: 2, $Round: { $Rotate: 0.5} },
            //Rotate Zoom+ out L
            {$Duration: 1000, $Zoom: 11, $Rotate: true, $SlideOut: true, $FlyDirection: 1, $Easing: { $Left: $JssorEasing$.$EaseInExpo, $Zoom: $JssorEasing$.$EaseInExpo, $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseInExpo }, $ScaleHorizontal: 4, $Opacity: 2, $Round: { $Rotate: 0.8} },

            //Rotate HDouble- in
            {$Duration: 1200, $Cols: 2, $Zoom: 1, $Rotate: true, $FlyDirection: 5, $Assembly: 2049, $ChessMode: { $Column: 15 }, $Easing: { $Left: $JssorEasing$.$EaseInCubic, $Top: $JssorEasing$.$EaseInCubic, $Zoom: $JssorEasing$.$EaseInCubic, $Opacity: $JssorEasing$.$EaseOutQuad, $Rotate: $JssorEasing$.$EaseInCubic }, $ScaleHorizontal: 0.5, $ScaleVertical: 0.3, $Opacity: 2, $Round: { $Rotate: 0.7} },
            //Rotate HDouble- out
            {$Duration: 1000, $Cols: 2, $Zoom: 1, $Rotate: true, $SlideOut: true, $FlyDirection: 5, $Assembly: 2049, $ChessMode: { $Column: 15 }, $Easing: { $Left: $JssorEasing$.$EaseInExpo, $Top: $JssorEasing$.$EaseInExpo, $Zoom: $JssorEasing$.$EaseInExpo, $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseInExpo }, $ScaleHorizontal: 0.5, $ScaleVertical: 0.3, $Opacity: 2, $Round: { $Rotate: 0.7} },
            //Rotate VFork in
            {$Duration: 1200, $Rows: 2, $Zoom: 11, $Rotate: true, $FlyDirection: 6, $Assembly: 2049, $ChessMode: { $Row: 28 }, $Easing: { $Left: $JssorEasing$.$EaseInCubic, $Top: $JssorEasing$.$EaseInCubic, $Zoom: $JssorEasing$.$EaseInCubic, $Opacity: $JssorEasing$.$EaseOutQuad, $Rotate: $JssorEasing$.$EaseInCubic }, $ScaleHorizontal: 4, $ScaleVertical: 2, $Opacity: 2, $Round: { $Rotate: 0.7} },
            //Rotate HFork in
            {$Duration: 1200, $Cols: 2, $Zoom: 11, $Rotate: true, $FlyDirection: 5, $Assembly: 2049, $ChessMode: { $Column: 19 }, $Easing: { $Left: $JssorEasing$.$EaseInCubic, $Top: $JssorEasing$.$EaseInCubic, $Zoom: $JssorEasing$.$EaseInCubic, $Opacity: $JssorEasing$.$EaseOutQuad, $Rotate: $JssorEasing$.$EaseInCubic }, $ScaleHorizontal: 1, $ScaleVertical: 2, $Opacity: 2, $Round: { $Rotate: 0.8} }
    ];

  
	var _CaptionTransitions = [];
    _CaptionTransitions["L"] = { $Duration: 800, $FlyDirection: 1, $Easing: $JssorEasing$.$EaseInCubic };
    _CaptionTransitions["R"] = { $Duration: 800, $FlyDirection: 2, $Easing: $JssorEasing$.$EaseInCubic };
    _CaptionTransitions["T"] = { $Duration: 800, $FlyDirection: 4, $Easing: $JssorEasing$.$EaseInCubic };
    _CaptionTransitions["B"] = { $Duration: 800, $FlyDirection: 8, $Easing: $JssorEasing$.$EaseInCubic };
    _CaptionTransitions["B|IE"] = { $Duration:1500,$FlyDirection:8,$Easing:{$Top:$JssorEasing$.$EaseInOutElastic},$ScaleVertical:0.6,$Opacity:2};
    _CaptionTransitions["TL"] = { $Duration: 800, $FlyDirection: 5, $Easing: $JssorEasing$.$EaseInCubic };
    _CaptionTransitions["TR"] = { $Duration: 1500, $FlyDirection: 6, $Easing: $JssorEasing$.$EaseInCubic };
    _CaptionTransitions["BL"] = { $Duration: 800, $FlyDirection: 9, $Easing: $JssorEasing$.$EaseInCubic };
    _CaptionTransitions["BR"] = { $Duration: 800, $FlyDirection: 10, $Easing: $JssorEasing$.$EaseInCubic };
    _CaptionTransitions["WAVE|L"] = { $Duration: 1500, $FlyDirection: 5, $Easing: { $Left: $JssorEasing$.$EaseLinear, $Top: $JssorEasing$.$EaseOutWave }, $ScaleVertical: 0.4, $Round: { $Top: 2.5} };
    _CaptionTransitions["MCLIP|B"] = { $Duration: 600, $Clip: 8, $Move: true, $Easing: $JssorEasing$.$EaseOutExpo };

    

    var gallery_options = {
        $AutoPlay: true,                                    //[Optional] Whether to auto play, to enable slideshow, this option must be set to true, default value is false
        $AutoPlayInterval: 1500,                            //[Optional] Interval (in milliseconds) to go for next slide since the previous stopped if the slider is auto playing, default value is 3000
        $PauseOnHover: 3,                                //[Optional] Whether to pause when mouse over if a slider is auto playing, 0 no pause, 1 pause for desktop, 2 pause for touch device, 3 pause for desktop and touch device, default value is 3
        $FillMode: 4,
        $DragOrientation: 3,                                //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)
        $ArrowKeyNavigation: true,                          //[Optional] Allows keyboard (arrow key) navigation or not, default value is false
        $SlideDuration: 600,                                //Specifies default duration (swipe) for slide in milliseconds

        $SlideshowOptions: {                                //[Optional] Options to specify and enable slideshow or not
            $Class: $JssorSlideshowRunner$,                 //[Required] Class to create instance of slideshow
            $Transitions: _SlideshowTransitions,            //[Required] An array of slideshow transitions to play slideshow
            $TransitionsOrder: 1,                           //[Optional] The way to choose transition to play slide, 1 Sequence, 0 Random
            $ShowLink: true                                    //[Optional] Whether to bring slide link on top of the slider when slideshow is running, default value is false
        },

        $DirectionNavigatorOptions: {                       //[Optional] Options to specify and enable direction navigator or not
            $Class: $JssorDirectionNavigator$,              //[Requried] Class to create direction navigator instance
            $ChanceToShow: 1,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
            $AutoCenter: 2,                                 //[Optional] Auto center navigator in parent container, 0 None, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
            $Steps: 1                                       //[Optional] Steps to go for each navigation request, default value is 1
        },

        $ThumbnailNavigatorOptions: {                       //[Optional] Options to specify and enable thumbnail navigator or not
            $Class: $JssorThumbnailNavigator$,              //[Required] Class to create thumbnail navigator instance
            $ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always

            $ActionMode: 1,                                 //[Optional] 0 None, 1 act by click, 2 act by mouse hover, 3 both, default value is 1
            $Lanes: 2,                                      //[Optional] Specify lanes to arrange thumbnails, default value is 1
            $SpacingX: 12,                                   //[Optional] Horizontal space between each thumbnail in pixel, default value is 0
            $SpacingY: 10,                                   //[Optional] Vertical space between each thumbnail in pixel, default value is 0
            $DisplayPieces: 6,                             //[Optional] Number of pieces to display, default value is 1
            $ParkingPosition: 156,                          //[Optional] The offset position to park thumbnail
            $Orientation: 2                                //[Optional] Orientation to arrange thumbnails, 1 horizental, 2 vertical, default value is 1
        }
    };


    var options = {
        $AutoPlay: true,                                    //[Optional] Whether to auto play, to enable slideshow, this option must be set to true, default value is false
        $AutoPlayInterval: 3000,
        $DragOrientation: 3,                                //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)
        $CaptionSliderOptions: {                            //[Optional] Options which specifies how to animate caption
            $Class: $JssorCaptionSlider$,                   //[Required] Class to create instance to animate caption
            $CaptionTransitions: _CaptionTransitions,       //[Required] An array of caption transitions to play caption, see caption transition section at jssor slideshow transition builder
            $PlayInMode: 1,                                 //[Optional] 0 None (no play), 1 Chain (goes after main slide), 3 Chain Flatten (goes after main slide and flatten all caption animations), default value is 1
            $PlayOutMode: 3                                 //[Optional] 0 None (no play), 1 Chain (goes before main slide), 3 Chain Flatten (goes before main slide and flatten all caption animations), default value is 1
        },
        $FillMode: 0,
        $SlideDuration: 500
    };


    var about_slider = new $JssorSlider$("about_container", options);
    var gallery_slider = new $JssorSlider$("gallery_container", gallery_options);
    var excavating_slider = new $JssorSlider$("excavating_container", options);
    var utilities_slider = new $JssorSlider$("utilities_container", options);
    var septic_slider = new $JssorSlider$("septic_container", options);
    var asphalt_slider = new $JssorSlider$("asphalt_container", options);
    var landscape_slider = new $JssorSlider$("landscape_container", options);
    var snow_slider = new $JssorSlider$("snow_container", options);
    var technical_slider = new $JssorSlider$("technical_container", options);

    $( "#contact_form" ).submit(function(event) {
        event.preventDefault();
        var form_post = $.post( "php/handle_form.php", $( "#contact_form" ).serialize() );
        form_post.done( function(response) {
            alert("Thank you for contacting Jones Contracting Inc. We will be in touch with you shortly regarding your request.");
            $( "#tabs" ).tabs("option", "active", 0);
        });
    });

});

function initialize() {
    var myLatlng = new google.maps.LatLng(42.144991, -71.232199);
    var mapOptions = {
        zoom: 11,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        draggable: false
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





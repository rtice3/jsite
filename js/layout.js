var gallery_open = false;
var oldTab = 0;
var newTab = 0;

var gallery_oneshot = 0;
var excavation_oneshot = 0;
var utilities_oneshot = 0;
var septic_oneshot = 0;
var asphalt_oneshot = 0;
var landscape_oneshot = 0;
var snow_oneshot = 0;
var technical_oneshot = 0;
var contact_oneshot = 0;

function close_gallery() {
    if(newTab == 1 && gallery_open == true) {
        $( "#wrap" ).removeClass( "ui-widget-shadow" );
        $( "#tabs" ).tabs("option", "active", oldTab);
        $( "#gallery_wrap" ).hide(1000);
        $( "#gallery_container" ).hide(1000);
        gallery_open = false;
    }   
}

$( "#wrap" ).click(function() {
        close_gallery();
});

$( "#about" ).load("html/home.html");

$( "#tabs" ).tabs({
    activate: function(event, ui) {
        oldTab = ui.oldTab.index();
        newTab = ui.newTab.index();
        if(newTab == 1) {
//                event.preventDefault();  
            gallery_open = true;
            if(gallery_oneshot == 0) {
                gallery_oneshot = 1;
                $( "#gallery_wrap" ).load("html/gallery.html");
            }
        }
        else if(newTab == 2) {
            if(excavation_oneshot == 0) {
                excavation_oneshot = 1;
                $( "#excavation" ).load("html/excavation.html");
            }
        }
        else if(newTab == 3) {
            if(utilities_oneshot == 0) {
                utilities_oneshot = 1;
                $( "#utilities" ).load("html/utilities.html");
            }
        }
        else if(newTab == 4) {
            if(septic_oneshot == 0) {
                septic_oneshot = 1;
                $( "#septic" ).load("html/septic.html");
            }
        }
        else if(newTab == 5) {
            if(asphalt_oneshot == 0) {
                asphalt_oneshot = 1;
                $( "#asphalt" ).load("html/asphalt.html");
            }
        }
        else if(newTab == 6) {
            if(landscape_oneshot == 0) {
                landscape_oneshot = 1;
                $( "#landscape" ).load("html/landscape.html");
            }
        }
        else if(newTab == 7) {
            if(snow_oneshot == 0) {
                snow_oneshot = 1;
                $( "#snow" ).load("html/snow.html");
            }
        }
        else if(newTab == 8) {
            if(technical_oneshot == 0) {
                technical_oneshot = 1;
                $( "#technical" ).load("html/technical.html");
            }
        }
        else if(newTab == 9) {
            if(contact_oneshot == 0) {
                contact_oneshot = 1;
                $( "#contact" ).load("html/contact.html");
            }
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
        $TransitionsOrder: 0,                           //[Optional] The way to choose transition to play slide, 1 Sequence, 0 Random
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

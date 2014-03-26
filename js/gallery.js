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


var gallery_slider = new $JssorSlider$("gallery_container", gallery_options);
$( "#closeicon" ).click(function() {
	close_gallery();
});
$( "#closeicon" ).mousedown(function() {
	$( this ).addClass( "closeicondn" );
});
$( "#closeicon" ).mouseup(function() {
	$( this ).removeClass( "closeicondn" );
});
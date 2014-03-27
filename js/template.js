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


function basic_tab(acc, slider) {
	acc.accordion({
	collapsible: true,
     //     active: false,
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
 var asphalt_slider = new $JssorSlider$(slider, options);
}
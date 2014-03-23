var asphalt_accordion_state = true;

$( "#asphalt_accordion" ).accordion({
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
 var asphalt_slider = new $JssorSlider$("asphalt_container", options);
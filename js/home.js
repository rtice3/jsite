var about_accordion_state = true;

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
var about_slider = new $JssorSlider$("about_container", options);
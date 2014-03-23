var excavation_accordion_state = true;

$( "#excavation_accordion" ).accordion({
	collapsible: true,
//      active: false,
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
var excavating_slider = new $JssorSlider$("excavating_container", options);
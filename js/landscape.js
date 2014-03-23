var landscape_accordion_state = true;

$( "#landscape_accordion" ).accordion({
    collapsible: true,
//     active: false,
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
var landscape_slider = new $JssorSlider$("landscape_container", options);
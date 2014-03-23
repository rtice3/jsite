var septic_accordion_state = true;

$( "#septic_accordion" ).accordion({
   	collapsible: true,
//     active: false,
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
var septic_slider = new $JssorSlider$("septic_container", options);
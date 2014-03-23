var snow_accordion_state = true;


$( "#snow_accordion" ).accordion({
    collapsible: true,
//     active: false,
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
var snow_slider = new $JssorSlider$("snow_container", options);
var utilities_accordion_state = true;

$( "#utilities_accordion" ).accordion({
    collapsible: true,
//     active: false,
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
var utilities_slider = new $JssorSlider$("utilities_container", options);
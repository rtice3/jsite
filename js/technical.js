var technical_accordion_state = true;

$( "#technical_accordion" ).accordion({
    collapsible: true,
//     active: false,
    heightStyle: "content"
}).click(function() {
    if(technical_accordion_state == false) {
        technical_accordion_state = true;
        $( "html, body" ).animate({ scrollTop: $(document).height() }, "slow" );
    }
    else {
        technical_accordion_state = false;
        $( "html, body" ).animate({ scrollTop: 0 }, "slow" );
    }
});
var technical_slider = new $JssorSlider$("technical_container", options);
Alpaca.defaultUI = "jquery-ui";

function home() {
	$( "#aboutslider" ).empty().append("\
		<img src='img/index/index_14.gif' alt='#about0' /> \
		<img src='img/index/index_20.gif' alt='#about1' /> \
	");
	$( "#about_captions" ).empty().append("\
		<div id='about0' class='comment'></div>	\
		<div id='about1' class='comment'></div> \
	");
	$( "#about0" ).empty().append("\
		<h1>Welcome to Jones Contracting</h1> \
		<p>Jones Contracting Incorporated is a family owned and operated excavation contracting company based in Walpole, MA.</p> \
		<p>We specialize in excavation site-work, utilities, spectic systems, drainage, asphalt paving, landscape construction, and snow removal services in Eastern Massachusetts.</p> \
	");
	$( "#about1" ).empty().append("\
		<p>Whether your project is a small residential septic systems or commercial land development our experience and skills lead to solid results. Jones Contracting has taken a variety of different projects with varying scopes of work in both the public and private sectors.</p> \
	");	
}

function excavating() {
	$( "#excavating_slider" ).empty().append("\
		<img src='img/excavating/excavating_10.gif' alt='#excavating0' /> \
		<img src='img/excavating/excavating_20.gif' alt='#excavating1' /> \
		<img src='img/excavating/excavating_22.gif' alt='#excavating2' /> \
		<img src='img/excavating/excavating_24.gif' alt='#excavating3' /> \
	");

	$( "#excavating_captions" ).empty().append("\
		<div id='excavating0' class='comment'></div>	\
		<div id='excavating1' class='comment'></div> \
		<div id='excavating2' class='comment'></div> \
		<div id='excavating3' class='comment'></div> \
	");
	$( "#excavating0" ).empty().append("\
		<h1>Excavation and Sitework</h1> \
		<p><ul> \
		    <li>Earth Moving</li> \
		    <li>Site Utilities</li> \
		    <li>Site Drainage</li> \
		    <li>Retension and Detention Ponds</li> \
		</ul></p> \
	");
	$( "#excavating1" ).empty().append("\
		<p><ul> \
		    <li>Bioswales</li> \
		    <li>Rain Gardens</li> \
		    <li>Road Construction</li> \
		    <li>Subgrade Preparation</li> \
		</ul></p> \
	");
	$( "#excating2" ).empty().append("\
		<p><ul> \
		    <li>Road Base Construction</li> \
		    <li>Asphalt, Concrete, Granite Curb</li> \
		    <li>Asphalt Paving</li> \
		    <li>Concrete and Asphalt Sidewalks</li> \
		</ul></p> \
	");
}

var theme_list = [
	"black-tie",
	"blitzer",
	"cupertino",
	"dark-hive",
	"dot-luv",
	"eggplant",
	"excite-bike",
	"flick",
	"hot-sneaks",
	"humanity",
	"le-frog",
	"mint-choc",
	"overcast",
	"pepper-grinder",
	"redmond",
	"smoothness",
	"south-street",
	"start",
	"sunny",
	"swanky-purse",
	"trontastic",
	"ui-darkness",
	"ui-lightness",
	"vader"
];


$( document ).ready(function($) {
	$( "<link>" )
			.appendTo($("head"))
			.attr({type : "text/css", rel : "stylesheet"})
			.attr("href" , "jquery-ui-1.10.4.custom/css/themes/south-street/jquery-ui.css");	
			
	$( "#tabs" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
    $( "#tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
    $( "#radiod" ).buttonset();


	$("input:radio[name=radio1]").click(function() {
   	 	var path = "jquery-ui-1.10.4.custom/css/themes/".concat(theme_list[$("input[name='radio1']:checked").val()],  "/jquery-ui.css");
   	 	console.log("Path: ");
   	 	console.log(path);
			$( "<link>" )
				.appendTo($("head"))
				.attr({type : "text/css", rel : "stylesheet"})
				.attr("href" , path);	
		
	});

	var _CaptionTransitions = [];
            _CaptionTransitions["L"] = { $Duration: 800, $FlyDirection: 1, $Easing: $JssorEasing$.$EaseInCubic };
            _CaptionTransitions["R"] = { $Duration: 800, $FlyDirection: 2, $Easing: $JssorEasing$.$EaseInCubic };
            _CaptionTransitions["T"] = { $Duration: 800, $FlyDirection: 4, $Easing: $JssorEasing$.$EaseInCubic };
            _CaptionTransitions["B"] = { $Duration: 800, $FlyDirection: 8, $Easing: $JssorEasing$.$EaseInCubic };
            _CaptionTransitions["B|IE"] = {$Duration:800,$FlyDirection:8,$Easing:{$Top:$JssorEasing$.$EaseInOutElastic},$ScaleVertical:0.6,$Opacity:2};
            _CaptionTransitions["TL"] = { $Duration: 800, $FlyDirection: 5, $Easing: $JssorEasing$.$EaseInCubic };
            _CaptionTransitions["TR"] = { $Duration: 800, $FlyDirection: 6, $Easing: $JssorEasing$.$EaseInCubic };
            _CaptionTransitions["BL"] = { $Duration: 800, $FlyDirection: 9, $Easing: $JssorEasing$.$EaseInCubic };
            _CaptionTransitions["BR"] = { $Duration: 800, $FlyDirection: 10, $Easing: $JssorEasing$.$EaseInCubic };
            _CaptionTransitions["WAVE|L"] = { $Duration: 1500, $FlyDirection: 5, $Easing: { $Left: $JssorEasing$.$EaseLinear, $Top: $JssorEasing$.$EaseOutWave }, $ScaleVertical: 0.4, $Round: { $Top: 2.5} };
            _CaptionTransitions["MCLIP|B"] = { $Duration: 600, $Clip: 8, $Move: true, $Easing: $JssorEasing$.$EaseOutExpo };

            var options = {
                $AutoPlay: true,                                    //[Optional] Whether to auto play, to enable slideshow, this option must be set to true, default value is false
                $DragOrientation: 3,                                //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)
                $CaptionSliderOptions: {                            //[Optional] Options which specifies how to animate caption
                    $Class: $JssorCaptionSlider$,                   //[Required] Class to create instance to animate caption
                    $CaptionTransitions: _CaptionTransitions,       //[Required] An array of caption transitions to play caption, see caption transition section at jssor slideshow transition builder
                    $PlayInMode: 1,                                 //[Optional] 0 None (no play), 1 Chain (goes after main slide), 3 Chain Flatten (goes after main slide and flatten all caption animations), default value is 1
                    $PlayOutMode: 3                                 //[Optional] 0 None (no play), 1 Chain (goes before main slide), 3 Chain Flatten (goes before main slide and flatten all caption animations), default value is 1
                }
            };

            var about_slider = new $JssorSlider$("about_container", options);
      //      var gallery_slider = new $JssorSlider$("gallery_container", options);
            var excavating_slider = new $JssorSlider$("excavating_container", options);
            var utilities_slider = new $JssorSlider$("utilities_container", options);
            var septic_slider = new $JssorSlider$("septic_container", options);
       //     var asphalt_slider = new $JssorSlider$("asphalt_container", options);
            var landscape_slider = new $JssorSlider$("landscape_container", options);
       //     var snow_slider = new $JssorSlider$("snow_container", options);
//            var technical_slider = new $JssorSlider$("technical_container", options);

});

$(function() {
	$("#contact_form").alpaca({
		"data": {},
		"schema": {
      		"title" : "Request Information",
      		"description" : "Fill out this form.",
      		"type" : "object",
      		"properties": {
        		"name": {
         	 		"type": "string",
          			"title": "Name",
          			"required": true
        		},
        		"email": {
        			"type": "string",
        			"title": "Email",
        			"required": true
        		},
        		"phone": {
        			"type": "string",
        			"title": "Phone",
        			"required": true
        		},
        		"subject": {
        			"type": "string",
        			"title": "Subject"
        		},
        		"message": {
        			"type": "string",
        			"title": "Message"
        		}
      		}
    	},
    	"options": {
    		"renderForm": true,
    		"form": {
    			"attributes": {

    			},
    			"buttons": {
    				"submit": {}
    			}
    		},
    		"fields": {
    			"name": {
    				"type": "personalname",
    				"size": 20,
    				"hideInitValidationError" : true
    			},
    			"email": {
    				"type": "email",
    				"size": 20,
    				"hideInitValidationError" : true
    			},
    			"phone": {
    				"type": "phone",
    				"size": 20,
    				"hideInitValidationError" : true
    			},
    			"subject": {
    				"type": "text",
    				"size": 20
    			},
    			"message": {
    				"type": "textarea",
    				"rows": 5,
    				"cols": 30
    			}
    		}
    	}
	});	
});


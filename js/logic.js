Alpaca.defaultUI = "jquery-ui";

var oldTab;
var newTab;

$( document ).ready(function($) {
	$(".ui-widget-overlay").width($(document).width());
	$(".ui-widget-overlay").height($(document).height());
	$( "#tabs" ).tabs({
		activate:function(event, ui) {
			oldTab = ui.oldTab.index();
			newTab = ui.newTab.index();
			console.log("Old Tab: " + oldTab);
			console.log("New Tab: " + newTab);
		},
		hide: 500,
		show: 600
	}).addClass( "ui-tabs-vertical ui-helper-clearfix" );

    $( "#tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );

    $( "#excavation_accordion" ).accordion({
    	collapsible: true,
    	active: false,
    	heightStyle: "content"
    });
    $( "#utilities_accordion" ).accordion({
    	collapsible: true,
    	active: false,
    	heightStyle: "content"
    });
    $( "#septic_accordion" ).accordion({
    	collapsible: true,
    	active: false,
    	heightStyle: "content"
    });
    $( "#asphalt_accordion" ).accordion({
    	collapsible: true,
    	active: false,
    	heightStyle: "content"
    });
    $( "#landscape_accordion" ).accordion({
    	collapsible: true,
    	active: false,
    	heightStyle: "content"
    });
    $( "#snow_accordion" ).accordion({
    	collapsible: true,
    	active: false,
    	heightStyle: "content"
    });
    $( "#technical_accordion" ).accordion({
    	collapsible: true,
    	active: false,
    	heightStyle: "content"
    });

  
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
                $AutoPlayInterval: 7000,
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

            var about_slider = new $JssorSlider$("about_container", options);
 //           var gallery_slider = new $JssorSlider$("gallery_container", options);
            var excavating_slider = new $JssorSlider$("excavating_container", options);
            var utilities_slider = new $JssorSlider$("utilities_container", options);
            var septic_slider = new $JssorSlider$("septic_container", options);
 //           var asphalt_slider = new $JssorSlider$("asphalt_container", options);
            var landscape_slider = new $JssorSlider$("landscape_container", options);
 //           var snow_slider = new $JssorSlider$("snow_container", options);
 //           var technical_slider = new $JssorSlider$("technical_container", options);

});


$(function() {
	$("#contact_form").alpaca({
		"data": {},
		"schema": {
      		"title" : "Request Information",
      		"description" : "After filling out the below information please press Submit. A Jones Contracting associate will be in contact with you as soon as possible.",
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
    	},
    	"view": {
    		"parent": "VIEW_WEB_EDIT_LIST_LAYOUT_TWO_COLUMN",
    		"layout": {
    			
    			"bindings": {
    				"name": "leftcolumn",
    				"email": "leftcolumn",
    				"phone": "leftcolumn",
    				"subject": "rightcolumn",
    				"message": "rightcolumn"
    			}
    		}
    	}
	});	
});


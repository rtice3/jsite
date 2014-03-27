var gallery_open = false;
var oldTab = 0;
var newTab = 0;

var gallery_oneshot = 0;
var excavation_oneshot = 0;
var utilities_oneshot = 0;
var septic_oneshot = 0;
var asphalt_oneshot = 0;
var landscape_oneshot = 0;
var snow_oneshot = 0;
var technical_oneshot = 0;
var contact_oneshot = 0;

function close_gallery() {
    if(newTab == 1 && gallery_open == true) {
        $( "#wrap" ).removeClass( "ui-widget-shadow" );
        $( "#tabs" ).tabs("option", "active", oldTab);
        $( "#gallery_wrap" ).hide(1000);
        $( "#gallery_container" ).hide(1000);
        gallery_open = false;
    }   
}

$(document).ready(function() {
    $( "#footer_container" ).before( '<div id="gallery_wrap"></div>' );

    $( "#wrap" ).click(function() {
        close_gallery();
    });

//    $( "#hide_me" ).addClass("emptydiv");

    $( "#about" ).load("html/home.html", function() {
        basic_tab($( "#about_accordion" ), "about_container");
    });

    $( "#tabs" ).tabs({
        activate: function(event, ui) {
            oldTab = ui.oldTab.index();
            newTab = ui.newTab.index();
            if(newTab == 1) {
    //                event.preventDefault();  
                gallery_open = true;
                if(gallery_oneshot == 0) {
                    gallery_oneshot = 1;
                    $( "#gallery_wrap" ).load("html/gallery.html");
                }
            }
            else if(newTab == 2) {
                if(excavation_oneshot == 0) {
                    excavation_oneshot = 1;
                    $( "#excavation" ).load("html/excavation.html", function() {
                        basic_tab($( "#excavation_accordion" ), "excavation_container");
                    });
                }
            }
            else if(newTab == 3) {
                if(utilities_oneshot == 0) {
                    utilities_oneshot = 1;
                    $( "#utilities" ).load("html/utilities.html", function() {
                        basic_tab($( "#utilities_accordion" ), "utilities_container");
                    });

                }
            }
            else if(newTab == 4) {
                if(septic_oneshot == 0) {
                    septic_oneshot = 1;
                    $( "#septic" ).load("html/septic.html", function() {
                        basic_tab($( "#septic_accordion" ), "septic_container");
                    });
                }
            }
            else if(newTab == 5) {
                if(asphalt_oneshot == 0) {
                    asphalt_oneshot = 1;
                    $( "#asphalt" ).load("html/asphalt.html", function() {
                        basic_tab($( "#asphalt_accordion" ), "asphalt_container");
                    });
                }
            }
            else if(newTab == 6) {
                if(landscape_oneshot == 0) {
                    landscape_oneshot = 1;
                    $( "#landscape" ).load("html/landscape.html", function() {
                        basic_tab($( "#landscape_accordion" ), "landscape_container");
                    });
                }
            }
            else if(newTab == 7) {
                if(snow_oneshot == 0) {
                    snow_oneshot = 1;
                    $( "#snow" ).load("html/snow.html", function() {
                        basic_tab($( "#snow_accordion" ), "snow_container");
                    });
                }
            }
            else if(newTab == 8) {
                if(technical_oneshot == 0) {
                    technical_oneshot = 1;
                    $( "#technical" ).load("html/technical.html", function() {
                        basic_tab($( "#technical_accordion" ), "technical_container");
                    });
                }
            }
            else if(newTab == 9) {
                if(contact_oneshot == 0) {
                    contact_oneshot = 1;
                    $( "#contact" ).load("html/contact.html");
                }
            }
        },
        beforeActivate: function(event, ui) {
            oldTab = ui.oldTab.index();
            newTab = ui.newTab.index();
            if(newTab == 1) {
                $( "#wrap" ).addClass( "ui-widget-shadow" );             
                $( "#gallery_wrap" ).show(1000);
                $( "#gallery_container" ).show(1000);   
            }
        },
        hide: 600,
        show: 500
    }).addClass( "ui-tabs-vertical ui-helper-clearfix" );

    $( "#tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" ); 
});
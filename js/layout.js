var gallery_open = false;
var oldTab = 0;
var newTab = 0;

var tab_index = [ "about", "gallery", "excavation", "utilities", "septic", "asphalt", "landscape", "snow", "technical", "contact" ];
var oneshot =   [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];

function close_gallery() {
    if(newTab == 1 && gallery_open == true) {
        $( "#wrap" ).removeClass( "ui-widget-shadow" );
        $( "#tabs" ).tabs("option", "active", oldTab);
        $( "#gallery_wrap" ).hide(1000);
        $( "#gallery_container" ).hide(1000);
        gallery_open = false;
    }   
}

function load_tab(callback) {
    if(oneshot[newTab] == 0) {
        oneshot[newTab] = 1;
        $( "#" + tab_index[newTab] ).html('<div class="spinner"><div class="bounce1" style="background-color:#2b2922;"></div><div class="bounce2" style="background-color:#2b2922;"></div><div class="bounce3" style="background-color:#2b2922;"></div></div>');
        if(callback) {
            $( "#" + tab_index[newTab] ).load("html/" + tab_index[newTab] + ".html", function() {
                basic_tab(tab_index[newTab]);
                $( ".spinner" ).remove();
            });
        }
        else {
            $( "#" + tab_index[newTab] ).load("html/" + tab_index[newTab] + ".html", function() {
                $( ".spinner" ).remove();
            });
        }
    }
}

$(document).ready(function() {
    $( "#footer_container" ).before( '<div id="gallery_wrap"></div>' );

    $( "#wrap" ).click(function() {
        close_gallery();
    });

    newTab = 0;
    load_tab(true);

    $( "#tabs" ).tabs({
        activate: function(event, ui) {
            oldTab = ui.oldTab.index();
            newTab = ui.newTab.index();
            if(newTab == 1) {
                gallery_open = true;
                if(oneshot[newTab] == 0) {
                    oneshot[newTab] = 1;
                    $( "#gallery_wrap" ).html('<div class="spinner" style="position:fixed;top:50%;left:50%;"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>');
                    $( "#gallery_wrap" ).load("html/" + tab_index[newTab] + ".html");
                }
            }
            else if(newTab == 9) {
                load_tab(false);
            }
            else {
                load_tab(true);
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
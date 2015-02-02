var oldTab = 0;
var newTab = 0;

var tab_index = [ "about", "excavation", "septic", "utilities", "stormwater", "asphalt", "landscape", "snow", "technical", "contact" ];
var oneshot =   [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];

function load_tab(callback) {
    if(oneshot[newTab] == 0) {
        oneshot[newTab] = 1;
        if(animation_support) {
            $( "#" + tab_index[newTab] ).html('<div class="spinner" style="position:relative;top:50%;left:50%;margin-top:-9px;margin-left:-9px;"><div class="bounce1" style="background-color:#2b2922;"></div><div class="bounce2" style="background-color:#2b2922;"></div><div class="bounce3" style="background-color:#2b2922;"></div></div>');
        } 
        if(callback) {
            $( "#" + tab_index[newTab] ).load("html/" + tab_index[newTab] + ".html", function() {
                basic_tab(tab_index[newTab]);
                if(animation_support) {
                    $( ".spinner" ).remove();
                }
            });
        }
        else {
            $( "#" + tab_index[newTab] ).load("html/" + tab_index[newTab] + ".html", function() {
                if(animation_support) {
                    $( ".spinner" ).remove();
                }
            });
        }
    }
}

$(document).ready(function() {
    newTab = 0;
    load_tab(true);
    var tab_path = $(location).attr('pathname'); 
    var tab_num = 0; 

    $( "#tabs" ).tabs({
        active: tab_num,
        activate: function(event, ui) {
            oldTab = ui.oldTab.index();
            newTab = ui.newTab.index();
            if(newTab == 9) {
                load_tab(false);
            }
            else {
                load_tab(true);
            }
        },
        beforeActivate: function(event, ui) {
            oldTab = ui.oldTab.index();
            newTab = ui.newTab.index();
        },
        hide: 600,
        show: 500
    }).addClass( "ui-tabs-vertical ui-helper-clearfix" );

    $( "#tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" ); 
});
function getInternetExplorerVersion() {
// Returns the version of Internet Explorer or a -1
// (indicating the use of another browser).
    var rv = -1; // Return value assumes failure.
    if (navigator.appName == 'Microsoft Internet Explorer') {
        var ua = navigator.userAgent;
        var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) != null)
            rv = parseFloat( RegExp.$1 );
    }
    return rv;
}

function checkVersion() {
    var msg = "You're not using Internet Explorer.";
    var ver = getInternetExplorerVersion();

    if ( ver > -1 ) {
        if ( ver >= 9.0 ) {
            msg = "You're using a recent copy of Internet Explorer."
        }
        else {
            msg = "Welcome to Jones Contracting Inc. To view this website you must upgrade your browser. Please contact (508) 668-7888 for immediate assistance.";
            alert(msg);
            window.location="http://windows.microsoft.com/en-us/internet-explorer/download-ie"; 
        }    
    }  
}

function load_script(url, type, callback) {
    if(type == "js") {
        var script = document.createElement("script");
        script.type = "text/javascript";

        if(script.readyState) {
            script.onreadystatechange = function() {
                if(script.readyState == "loaded" || script.readyState == "complete") {
                    script.onreadystatechange = null;
                    callback();
                }
            };
        }
        else {
            script.onload = function () {
                callback();
            };
        }

        script.src = url;
        document.getElementsByTagName("head")[0].appendChild(script);
    }  
}

window.onload = function() {
    var hide = document.getElementById("hide_me");
    hide.parentNode.removeChild(hide);
    var footer = document.getElementById("footer_container");
    var loading_div = '<div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>'
    footer.insertBefore(footer, loading_div);
    
    checkVersion();

    load_script("js/jquery-1.10.2.min.js", "js", function() {
        $( "#wrap" ).load("html/layout.html");
    });
};
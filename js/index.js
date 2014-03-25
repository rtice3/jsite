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

window.onload = function() {
    document.getElementById("hide_me").style.visibility = 'hidden';
    checkVersion();
    var xmlhttp;

    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("wrap").innerHTML = xmlhttp.responseText;
        }
    }

    xmlhttp.open("GET", "html/layout.html", true);
    xmlhttp.send();

    var headID = document.getElementsByTagName("head")[0];
    var newScript0 = document.createElement('script');
    newScript0.type = 'text/javascript';
    newScript0.src = 'js/jquery-1.10.2.min.js';
    headID.appendChild(newScript0);
    var newScript1 = document.createElement('script');  
    newScript1.type = 'text/javascript';
    newScript1.src = 'js/jquery-ui-1.10.4.custom.min.js';
    headID.appendChild(newScript1);
    var newScript2 = document.createElement('script');  
    newScript2.type = 'text/javascript';
    newScript2.src = 'js/jssor.slider.mini.js';
    headID.appendChild(newScript2);
    var newScript3 = document.createElement('script');  
    newScript3.type = 'text/javascript';
    newScript3.src = 'js/layout.js';
    headID.appendChild(newScript3); 
};
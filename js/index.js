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

function createXHR() {
    try { return new XMLHttpRequest(); } catch(e) {}
    try { return new ActiveXObject("Msxml2.XMLHTTP.6.0"); } catch(e) {}
    try { return new ActiveXObject("Msxml2.XMLHTTP.3.0"); } catch(e) {}
    try { return new ActiveXObject("Msxml2.XMLHTTP"); } catch(e) {}
    try { return new ActiveXObject("Microsoft.XMLHTTP"); } catch(e) {}
    alert("Thank you for visiting Jones Contracting Inc.\nYour browser does not support AJAX features required by this page.\nPlease update your browser to view this page.\nFor immediate assistance please contact (508) 668-7888.");
    return null;
}

window.onload = function() {
    document.getElementById("hide_me").style.visibility = 'hidden';
    checkVersion();
    var xhr = createXHR();

    if(xhr) {   
        document.getElementById("wrap").innerHTML = xhr.open("GET", "html/layout.html", true);
    }

};
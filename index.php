<?php

$browser = get_browser();

if($browser->browser == 'IE' && $browser->majorver < 9) {
	alert("Welcome to Jones Contracting Inc. To view this website you must upgrade your browser. Please contact (508) 668-7888 for immediate assistance.");
	header( 'Location: http://windows.microsoft.com/en-us/internet-explorer/download-ie' );
}
else {
	alert("Your browser works.");
	readfile("../index.html");
}

?>
